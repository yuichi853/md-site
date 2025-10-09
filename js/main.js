window.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    const contentEl = document.getElementById("content");
    const landingPage = document.getElementById("landing-page");
    const articlePage = document.getElementById("article-page");
    const brandLink = document.querySelector(".navbar-brand");
    const defaultTitle = "MD Site | Markdown to Web";

    const showLanding = () => {
        root.classList.add("mode-landing");
        root.classList.remove("mode-article");
        if (landingPage) landingPage.removeAttribute("aria-hidden");
        if (articlePage) articlePage.setAttribute("aria-hidden", "true");
        if (contentEl) contentEl.innerHTML = "";
        document.title = defaultTitle;
    };

    const showArticle = () => {
        root.classList.add("mode-article");
        root.classList.remove("mode-landing");
        if (landingPage) landingPage.setAttribute("aria-hidden", "true");
        if (articlePage) articlePage.removeAttribute("aria-hidden");
    };

    const loadArticle = (articleFile) => {
        if (!contentEl) return;
        contentEl.innerHTML = "<p class=\"loading\">Loading...</p>";

        fetch(`articles/${articleFile}`)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.text();
            })
            .then(mdText => {
                const frontMatterMatch = mdText.match(/^---\n([\s\S]*?)\n---\n?/);
                let frontMatter = {};
                if (frontMatterMatch) {
                    const fmText = frontMatterMatch[1];
                    fmText.split('\n').forEach(line => {
                        const [key, ...rest] = line.split(':');
                        if (key && rest.length > 0) {
                            frontMatter[key.trim()] = rest.join(':').trim();
                        }
                    });
                    mdText = mdText.slice(frontMatterMatch[0].length);
                }

                const html = marked.parse(mdText);
                contentEl.innerHTML = html;

                contentEl.querySelectorAll("img").forEach(img => {
                    img.classList.add("img-fluid");
                });

                contentEl.querySelectorAll("a").forEach(link => {
                    const href = link.href;
                    const match = href.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                    if (match) {
                        const videoId = match[1];
                        const wrapper = document.createElement("div");
                        wrapper.className = "ratio ratio-16x9 mb-4";

                        const iframe = document.createElement("iframe");
                        iframe.src = `https://www.youtube.com/embed/${videoId}`;
                        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                        iframe.referrerPolicy = "strict-origin-when-cross-origin";
                        iframe.allowFullscreen = true;
                        iframe.title = "YouTube video player";

                        wrapper.appendChild(iframe);
                        link.replaceWith(wrapper);
                    }
                });

                if (frontMatter.title) {
                    const titleEl = document.getElementById("article-title");
                    if (titleEl) titleEl.textContent = frontMatter.title;
                    document.title = frontMatter.title;
                } else {
                    document.title = defaultTitle;
                }
                if (frontMatter.date) {
                    const dateEl = document.getElementById("article-date");
                    if (dateEl) dateEl.textContent = frontMatter.date;
                }

                generateToc();
                hljs.highlightAll();
            })
            .catch(err => {
                contentEl.innerHTML = `<p style="color: red;">読み込みエラー: ${err.message}</p>`;
            });
    };

    const handleRoute = () => {
        const params = new URLSearchParams(location.search);
        const articleParam = params.get("article");

        if (!articleParam) {
            showLanding();
            return;
        }

        showArticle();
        loadArticle(articleParam);
    };

    if (brandLink) {
        brandLink.addEventListener("click", event => {
            event.preventDefault();
            if (location.search) {
                history.pushState({}, "", location.pathname);
            }
            handleRoute();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    window.addEventListener("popstate", handleRoute);

    handleRoute();
});

function generateToc() {
    const tocContainer = document.getElementById("article-toc");
    if (!tocContainer) return;
    tocContainer.innerHTML = "";

    const headings = document.querySelectorAll("#content h1, #content h2");
    const getStickyOffset = () => {
        const stickyNav = document.querySelector(".fancy-nav");
        return (stickyNav ? stickyNav.offsetHeight : 0) + 16;
    };

    const scrollToHeading = (headingId, behavior = "smooth") => {
        const target = document.getElementById(headingId);
        if (!target) return false;

        const targetPosition = window.scrollY + target.getBoundingClientRect().top - getStickyOffset();

        window.scrollTo({
            top: Math.max(targetPosition, 0),
            behavior
        });

        return true;
    };

    headings.forEach(heading => {
        if (!heading.id) {
            heading.id = heading.textContent.replace(/\s+/g, "-").toLowerCase();
        }
        const link = document.createElement("a");
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;

        const level = parseInt(heading.tagName.substring(1), 10);
        link.classList.add(level === 1 ? "toc-h1" : "toc-h2");

        link.addEventListener("click", event => {
            event.preventDefault();

            scrollToHeading(heading.id, "smooth");

            if (typeof window.history.replaceState === "function") {
                const url = new URL(window.location.href);
                url.hash = heading.id;
                window.history.replaceState({}, "", url);
            } else {
                window.location.hash = heading.id;
            }
        });

        tocContainer.appendChild(link);
    });

    const decodeHash = value => {
        try {
            return decodeURIComponent(value);
        } catch (error) {
            return value;
        }
    };

    if (window.location.hash) {
        const currentHash = decodeHash(window.location.hash.substring(1));
        requestAnimationFrame(() => {
            scrollToHeading(currentHash, "auto");
        });
    }
}
