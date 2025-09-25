window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(location.search);
    const articleFile = params.get("article") || "article1.md";

    fetch(`articles/${articleFile}`)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.text();
        })
        .then(mdText => {
            // フロントマター抽出
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

                // フロントマターをMarkdown本文から除外
                mdText = mdText.slice(frontMatterMatch[0].length);
            }

            // Markdown本文をHTMLに変換
            const html = marked.parse(mdText);
            // document.getElementById("content").innerHTML = html;
            const contentEl = document.getElementById("content");
            contentEl.innerHTML = html;

            // Markdown描画後に画像にBootstrapのimg-fluidを追加
            contentEl.querySelectorAll("img").forEach(img => {
                img.classList.add("img-fluid");
            });

            // YouTubeリンクをiframeに変換
            contentEl.querySelectorAll("a").forEach(link => {
                const href = link.href;
                const match = href.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                if (match) {
                    const videoId = match[1];
                    const wrapper = document.createElement("div");
                    wrapper.className = "ratio ratio-16x9 mb-4"; // Bootstrapの埋め込み対応クラス

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

            // フロントマターをHTMLに反映
            if (frontMatter.title) {
                const titleEl = document.getElementById("article-title");
                if (titleEl) titleEl.textContent = frontMatter.title;
                document.title = frontMatter.title; // ページタイトルも更新
            }
            if (frontMatter.date) {
                const dateEl = document.getElementById("article-date");
                if (dateEl) dateEl.textContent = frontMatter.date;
            }

            generateToc();

            hljs.highlightAll();
        })
        .catch(err => {
            document.getElementById("content").innerHTML =
                `<p style="color: red;">読み込みエラー: ${err.message}</p>`;
        });

    const panel = document.getElementById("toc-panel");
    panel.classList.toggle("open");
});

/**
 * 記事本文の見出し(h1～h3)からTOCを生成
 */
function generateToc() {
    const tocContainer = document.getElementById("article-toc");
    tocContainer.innerHTML = "";

    const headings = document.querySelectorAll("#content h1, #content h2");
    headings.forEach(heading => {
        if (!heading.id) {
            heading.id = heading.textContent.replace(/\s+/g, "-").toLowerCase();
        }
        const link = document.createElement("a");
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;

        const level = parseInt(heading.tagName.substring(1), 10); // 1 or 2
        link.classList.add(level === 1 ? "toc-h1" : "toc-h2");

        // 既存の少しインデント（h2だけ10px）
        link.style.marginLeft = `${(level - 1) * 10}px`;

        tocContainer.appendChild(link);
    });
}

