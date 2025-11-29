# MarkdownでWebサイトを作る手順

このページでは、Markdown Starter Templateを使って、
自分のパソコン上でMarkdownファイルをHTMLに変換し、
Webページとして表示する方法を説明します。

---

# 1. 準備

## 必要なもの

* パソコン（Mac または Windows）
* インターネット接続（最初のダウンロード時のみ）
* Webブラウザ（Chrome, Firefox, Edgeなど）

---

# 2. テンプレートのダウンロード

1. GitHub上のテンプレートリポジトリを開く。  
   リンク：https://github.com/yuichi853/md-site-template

2. 右上の「Code」ボタンをクリック。

3. 「Download ZIP」を選択してファイルを保存。

4. ダウンロードしたZIPファイルを解凍する。
   解凍すると、`index.html`, `run.sh`, `articles` などが入ったフォルダができます。

---

# 3. Pythonをインストールする

サイトテンプレートでは、ローカルサーバーを起動するためにPythonを使います。
Pythonは無料で、ほとんどのパソコンで簡単に導入できます。

## Macの場合

1. ターミナルを開く。
   （Finder → アプリケーション → ユーティリティ → ターミナル）

2. 次のコマンドを入力して実行する：

   ```bash
   python3 --version
   ```

   バージョン番号（例: `Python 3.12.2`）が表示されれば、すでにインストール済みです。

3. もし「command not found」と表示された場合は、[公式サイト](https://www.python.org/downloads/)から最新版をダウンロードしてインストールします。

## Windowsの場合

1. [Python公式サイト](https://www.python.org/downloads/windows/)を開く。
2. 「Download Python 3.x.x」ボタンをクリックしてインストーラーをダウンロード。
3. インストール画面で **「Add Python to PATH」** にチェックを入れてから「Install Now」を選択。
4. インストール後、コマンドプロンプトを開いて次を入力：

   ```bash
   python --version
   ```

   バージョン番号が表示されれば完了です。

---

# 4. コマンドラインの操作

テンプレートを動かすには、コマンドラインでフォルダを操作します。
初めて使う人のために、基本操作を説明します。

## Mac（ターミナル）の場合

1. ダウンロードしたテンプレートのフォルダを探します。  
   例：`Downloads/md-site-template-main`

2. 次のコマンドを入力してフォルダに移動：

   ```bash
   cd ~/Downloads/md-site-template-main
   ```

   ※「cd」は「change directory（フォルダを移動）」の意味です。

## Windows（コマンドプロンプト）の場合

1. スタートメニューで「cmd」と入力してコマンドプロンプトを開く。
2. 次のように入力（フォルダの場所は自分の環境に合わせて変更）：

   ```bash
   cd C:\Users\ユーザー名\Downloads\md-site-template-main
   ```

---

# 5. ローカルサーバーを起動する

テンプレートには `run.sh` という実行ファイルが含まれています。
これはPythonを使ってローカルサーバーを起動するためのものです。

## Macの場合

1. ターミナルでテンプレートフォルダに移動した状態で、次のコマンドを実行します：

   ```bash
   chmod +x run.sh
   ./run.sh
   ```

2. 実行すると次のようなメッセージが表示されます：

   ```
   Serving HTTP on 0.0.0.0 port 8080 ...
   ```

   これでローカルサーバーが起動しています。

3. ブラウザで次のURLを開きます：

   http://localhost:8080

   テンプレートサイトが表示されれば成功です。

## Windowsの場合

1. コマンドプロンプトを開き、テンプレートフォルダに移動します。

2. 次を実行します：

   ```bash
   bash run.sh
   ```

3. ブラウザで次のURLを開きます：

   http://localhost:8080

   テンプレートサイトが表示されれば成功です。

---

# 6. Markdown記事を追加する

## 1. 新しい記事を作成

1. `articles` フォルダを開きます。

2. 新しいファイルを作成し、拡張子を `.md` にします。
   例：`my-article.md`

3. 中身をMarkdownで書きます：

   ```markdown
   # はじめてのMarkdown記事

   これはテスト記事です。  
   **太字** や *斜体*、リストなどを使って書けます。

   - リスト1
   - リスト2
   ```

## 2. ナビゲーションに追加

`index.html` 内のメニューリンクを編集します。
`45行目〜48行目`を探して、新しい記事を追加します。

```html
<li><a href="?article=my-article.md">My Article</a></li>
```

保存したらブラウザをリロードし、
ナビゲーションから新しい記事をクリックして表示できるか確認します。

---

# 7. ファイル構成の概要

```txt
md-site-template-main/
├── index.html          ← トップページ（サイトのメインファイル）
├── about.html          ← 自己紹介・サイト説明ページなどに利用可能
├── README.md           ← このテンプレートの説明書
├── run.sh              ← ローカルサーバー起動スクリプト
├── articles/           ← Markdown記事を保存するフォルダ
│   ├── images/         ← 記事内で使う画像を入れる場所
│   │   └── sample.jpg
│   ├── article1.md     ← サンプル記事1
│   └── article2.md     ← サンプル記事2
├── css/
│   └── style.css       ← デザイン調整用のCSSファイル
├── js/
│   └── main.js         ← MarkdownをHTMLに変換するJavaScript
├── assets/
│   ├── marked.min.js   ← Markdown変換ライブラリ（marked.js）
│   └── highlight/      ← コードの色分けに使うライブラリ群（highlight.js）
├── .nojekyll           ← GitHub Pagesで必要な設定ファイル（削除禁止）
└── .gitignore          ← Gitで不要なファイルを除外するための設定
```

---

## 各ファイル・フォルダの詳細

### **index.html**

* サイトのトップページです。
* Markdown記事を読み込むための仕組み（`main.js`のスクリプト呼び出し）が書かれています。
* **削除不可。** このファイルを削除するとサイト全体が表示できなくなります。
* 文章やリンクの部分は自由に編集可能です。

---

### **about.html**

* サイトの「About（このサイトについて）」ページとして利用できます。
* **削除しても構いませんが、ナビゲーションバー（メニュー）からもリンクを削除する必要があります。**
* Markdown記事ではなくHTMLで直接書く形式なので、レイアウトの練習にも使えます。

---

### **README.md**

* テンプレート自体の説明書です（開発者や利用者向け）。
* GitHubでリポジトリを公開するときに自動的にトップページに表示されます。
* **Webサイトの表示には関係しないため、削除しても問題ありません。**

---

### **run.sh**

* ローカルサーバーを起動するためのシェルスクリプトです。
* 実行するとPythonの簡易サーバーが立ち上がり、`index.html`がブラウザで確認できるようになります。
* **削除不可。** 削除するとローカルで動作確認ができなくなります。
* ただし、Mac以外の環境（例：Windows）では `bash run.sh` のように実行する必要があります。

---

### **articles/**

* すべてのMarkdown記事（`.md`ファイル）を入れるフォルダです。
* **このフォルダ名は変更しないでください。**
  `main.js` が「articles」フォルダ内を読み込む仕様になっているため、変更すると読み込みに失敗します。

---

### **articles/images/**

* 記事内で使う画像を保存するフォルダです。
* 画像はMarkdown内で次のように記述して呼び出します：

  ```markdown
  ![説明文](articles/images/sample.jpg)
  ```
* **削除不可。** 空でも構いませんが、フォルダ自体は残しておくと構成が崩れません。

---

### **css/style.css**

* サイト全体のデザインを管理します。
  色、フォント、余白、ボタンの形などを調整できます。
* 編集自由。見た目を変更したい場合はここを編集します。
* **削除するとデザインが崩れます。**
  もし別のCSSを使いたい場合は、このファイルを置き換えるかHTML内のリンク先を変更します。

---

### **js/main.js**

* MarkdownファイルをHTMLに変換し、ブラウザ上で記事を表示するスクリプトです。
* 記事タイトルや目次生成もここで行われています。
* **削除不可。** 削除すると記事が表示されなくなります。
* JavaScriptに詳しい場合のみ、機能追加や調整を行ってください。

---

### **assets/**

* JavaScriptのライブラリをまとめたフォルダです。
  Markdown変換（marked.js）やコードのハイライト表示（highlight.js）に使われます。

#### **assets/marked.min.js**

* MarkdownをHTMLに変換するためのライブラリ。
* **削除不可。** main.jsから参照されています。

#### **assets/highlight/**

* プログラミングコードを色分け表示するライブラリ群。
* コードを使わないサイトなら削除しても問題ありません。
* 削除した場合は、`index.html` の `<script src="...highlight.min.js">` の部分も削除してください。

---

### **.nojekyll**

* GitHub Pagesで **Jekyll** の自動処理を停止するための設定ファイルです。
* 中身は空で構いませんが、**絶対に削除・改名しないでください。**
  これがないとMarkdownファイルがGitHub Pagesで正しく読み込まれず、
  記事が「404 Not Found」と表示されます。

---

### **.gitignore**

* Gitで不要なファイル（例：一時ファイルやキャッシュ）を除外するための設定です。
* **Webサイトの動作には関係ありません。**
  GitHubに公開しない場合は削除しても問題ありません。
* GitHubで管理する場合は残しておくのが推奨です。

---

## 各ファイルの削除・変更

| ファイル / フォルダ            |  削除 |  変更 | 備考                    |
| ---------------------- | :-: | :-: | --------------------- |
| `index.html`           |  ✗  |  ○  | サイトの中心。中身の文章は編集可。     |
| `about.html`           |  ○  |  ○  | 不要なら削除可。              |
| `README.md`            |  ○  |  ○  | GitHub用説明書。Webには影響なし。 |
| `run.sh`               |  ✗  |  △  | 内容変更は理解がある人のみ。        |
| `articles/`            |  ✗  |  ○  | 記事追加・削除は自由。           |
| `articles/images/`     |  ✗  |  ○  | 画像の追加・削除可。            |
| `css/style.css`        |  ✗  |  ○  | デザイン調整自由。             |
| `js/main.js`           |  ✗  |  △  | JavaScriptに慣れていれば変更可。 |
| `assets/marked.min.js` |  ✗  |  ✗  | 削除・変更不可。              |
| `assets/highlight/`    |  ○  |  ○  | コードを使わない場合は削除可。       |
| `.nojekyll`            |  ✗  |  ✗  | 削除・改名禁止。              |
| `.gitignore`           |  ○  |  ○  | Gitを使わない場合は不要。        |

---

この構成を理解しておくと、テンプレートを安心してカスタマイズできます。
特に `.nojekyll`, `main.js`, `marked.min.js`, `index.html` の4つはサイトの動作に不可欠なファイルなので、編集や削除は避けてください。

---

## Markdown表示のしくみ

ここからは、**このテンプレートでどのようにMarkdownファイルをHTMLに変換し、サイトに表示しているのか** を説明します。  
この仕組みを理解しておくと、ヘッダーやレイアウトを安心してカスタマイズできます。

---

### 1. ブラウザが開いているのは「ずっと index.html」

ナビゲーション部分のリンクは、次のようになっています。

```html
<li><a href="index.html">Home</a></li>
<li><a href="?article=article1.md">Sample1</a></li>
<li><a href="?article=article2.md">Sample2</a></li>
````

ここで重要なのは、

* `article1.md` などの **Markdown ファイルそのものを開いているわけではない**
* `?article=article1.md` のように、**クエリパラメータ（URLの「?」以降の情報）だけが変わっている**

という点です。

例えば `Sample1` をクリックすると、ブラウザのURLは次のようになります。

* `http://localhost:8080/index.html?article=article1.md`

しかし、サーバーから返ってくる HTML ファイルは **どの場合も `index.html` の1種類だけ** です。
つまり、

> ブラウザが読み込んでいるページは、最初から最後まで「index.html のまま」

であり、**Markdown はあくまで「中身のデータ」として JavaScript から読み込まれているだけ**、という構造になっています。

---

### 2. `<html>` タグのクラスで「トップページ」か「記事ページ」かを切り替える

`index.html` の `<head>` には、次のようなスクリプトが書かれています。

```html
<script>
    (function () {
        const params = new URLSearchParams(window.location.search);
        const htmlEl = document.documentElement;
        if (params.get("article")) {
            htmlEl.classList.remove("mode-landing");
            htmlEl.classList.add("mode-article");
        } else {
            htmlEl.classList.remove("mode-article");
            htmlEl.classList.add("mode-landing");
        }
    })();
</script>
```

ここでやっていることはシンプルです。

1. `window.location.search` から `?article=...` の部分を取得
2. `article` というパラメータが **存在するかどうか** を判定
3. 存在すれば `<html>` に `mode-article` クラスを付ける
   存在しなければ `mode-landing` クラスを付ける

CSS 側では、このクラスによって

* 「トップページ用のレイアウト」（landing）
* 「記事ページ用のレイアウト」（article）

を切り替えています。

つまり、**開いている HTML は同じ `index.html` だけれど、「見せ方」だけをクラスで変えている**、という仕組みです。

---

### 3. main.js が Markdown を取得して `<div id="content">` に流し込む

`js/main.js` では、ページ読み込み完了時に次の処理が走ります。

```js
window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(location.search);
    const articleFile = params.get("article") || "article1.md";

    fetch(`articles/${articleFile}`)
        .then(res => res.text())
        .then(mdText => {
            const html = marked.parse(mdText);
            const contentEl = document.getElementById("content");
            contentEl.innerHTML = html;
            ...
        });
});
```

このコードの流れは次のとおりです。

1. URL から `article` パラメータを取得

   * 例：`?article=how-to-run.md` → `"how-to-run.md"`
   * パラメータがない場合は `"article1.md"` をデフォルトとして使用
2. `fetch("articles/ファイル名")` で、`articles/` フォルダ内の Markdown ファイルを読み込む
3. 読み込んだテキスト（Markdown）を `marked.parse(...)` で HTML に変換
4. 変換した HTML を、`<div id="content">` の中に `innerHTML` で挿入

ポイントは、

> **書き換えているのは `#content` の中身だけ**

ということです。

ヘッダーやフッター、メインのレイアウト枠などは、`index.html` 側に固定で書かれており、
JavaScript はそこには一切触りません。だからこそ、

* ページを「移動」しているように見えても
* 実際には **ヘッダーや全体レイアウトはそのまま残り、記事部分だけが差し替わっている**

という動きになります。

---

### 4. Front Matter（メタ情報）とタイトル・日付の反映

Markdown ファイルの冒頭に、次のような「Front Matter」を書くことができます。

```markdown
---
title: MarkdownでWebサイトを作る手順
date: 2025-11-29
---
```

`main.js` では、この部分を切り出して、次のように扱っています。

```js
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
```

* `---` 〜 `---` の間を Front Matter として認識
* `title: ...` や `date: ...` を取り出して `frontMatter` オブジェクトに保存
* Front Matter 部分は本文からは削除（画面には表示しない）

その後、次のようにして HTML 側に反映しています。

```js
if (frontMatter.title) {
    const titleEl = document.getElementById("article-title");
    if (titleEl) titleEl.textContent = frontMatter.title;
    document.title = frontMatter.title;
}
if (frontMatter.date) {
    const dateEl = document.getElementById("article-date");
    if (dateEl) dateEl.textContent = frontMatter.date;
}
```

これにより、

* 記事ページ内の見出し（`#article-title`）
* ブラウザのタブのタイトル（`document.title`）
* 記事の日付表示（`#article-date`）

などが、**Markdown 側のメタ情報から自動で埋め込まれる** ようになっています。

---

まとめると、

> * 実際に開いているのは常に `index.html`
> * URL の `?article=...` で「どの Markdown を読み込むか」だけを変えている
> * レイアウトの枠（ヘッダー・フッター等）は HTML 側に固定、記事だけ JS で差し替え

という「簡易なシングルページアプリ」のような仕組みになっています。

---

# 8. メインページのレイアウトカスタマイズ

このテンプレートの `index.html` には、最初から **複数のレイアウトサンプル** が組み込まれています。
これらはメインページ（トップページ）の見た目を構成するブロックであり、**自由に取捨選択して使うことができます**。

---

## 1. レイアウトの基本構造

`index.html` のメイン部分（`<main>` 内）には、いくつもの `<div class="landing-section">` が並んでいます。
この1つ1つの `<div>` が「レイアウトサンプル」にあたります。

各セクションは独立しているため、不要なブロックを**削除**したり、必要なブロックを**複製**したりすることで、簡単に自分好みのページ構成を作れます。

> 💡 **操作のコツ**
>
> * ブロック単位で削除／複製する場合は、必ず `<div class="landing-section">` から `</div>` までをセットで扱う。
> * 保存後にブラウザを更新して、デザイン崩れがないか確認する。
> * 編集には Visual Studio Code、Notepad、または他のテキストエディタを利用するとわかりやすい。

---

## 2. 各レイアウトの種類と特徴

### **(1) ヒーローセクション（landing-hero）**

![サンプル画像](./images/layout-1.png)

* ページの冒頭に表示される大きなタイトル・説明文・ボタンのブロックです。
* `<h1>` や `<p>` の内容を書き換えて自分のサイト紹介文に変更します。
* ブログサイト等の用途で、サイトの説明を画像を使わずに簡単に載せたい場合に便利です。

### **(2) 3カラムカードレイアウト（layout-grid）**

![サンプル画像](./images/layout-2.png)

* 3つのテーマや情報を横並びで紹介する形式です。
* 用途：記事カテゴリー紹介、更新情報、概要など。
* 各 `<article>` をコピーして項目を増やしたり、不要なものを削除できます。
* 画像は `articles/images/` の中に置いて、パスを変更すれば差し替え可能。

### **(3) ストーリー形式の紹介（layout-stack）**

![サンプル画像](./images/layout-3.png)

* 手順や流れを縦に並べて説明する形式です。
* 例：「1. 構想 → 2. 作成 → 3. 公開」など。
* 各ステップは `<article class="layout-stack__item">` として分かれており、順序変更や追加も簡単。
* 強調表示したいステップには `layout-stack__item--highlight` を付けると色が変わります。

### **(4) 左右分割レイアウト（layout-split）**

![サンプル画像](./images/layout-4.png)

* 左に画像、右にテキストという定番の2カラム構成です。
* 紹介・説明・活動報告などに向いています。
* 背景色を変更したい場合は、クラス `panel-soft` の色指定を `css/style.css` で変更します。

### **(5) 画像ギャラリー（layout-gallery）**

![サンプル画像](./images/layout-5.png)

* 作品集や写真一覧に使える、画像と説明文のギャラリーです。
* `<figure>` 要素ごとに画像とキャプションをセットで管理します。
* 画像の枚数は自由で、縦横比が違っても自動で整列します。
* 不要な場合は `<div class="layout-gallery">` ごと削除しても問題ありません。

### **(6) モザイクレイアウト（layout-mosaic）**

![サンプル画像](./images/layout-6.png)

* テキストと画像を組み合わせた不均一なグリッドレイアウトです。
* サイトに動きを出したい場合に便利。
* grid構造 (`layout-mosaic__wide` / `side` / `bottom`) を維持すれば、自由に増減可能。

### **(7) アクションエリア（layout-cta）**

![サンプル画像](./images/layout-7.png)

* ページ末尾に配置される「ユーザーにアクションを促す」ブロックです。
  例：「記事一覧を見る」「ダウンロードする」「問い合わせる」など。
* `<a class="btn-primary">` や `<a class="btn-secondary">` のボタンを編集して用途を変えます。
* サイトにCTAが不要な場合は削除しても構いません。

---

## 3. レイアウト選択の例

| 利用目的       | 推奨セクション        |
| ---------- | -------------- |
| サイト全体の紹介   | ヒーローセクション、左右分割 |
| コンテンツの一覧表示 | 3カラムカード、ギャラリー  |
| 手順・流れの説明   | ストーリー形式        |
| ビジュアル重視    | モザイク、ギャラリー     |
| アクションを促したい | アクションエリア       |


---

## 4. カスタマイズの基本手順

1. `index.html` を開く
2. 残したいブロック以外を削除（またはコメントアウト）
3. テキストと画像を自分の内容に書き換える
4. 保存し、ブラウザで確認
5. デザインを調整したい場合は `css/style.css` を編集

---

これらのレイアウトはすべて独立しているため、HTMLの専門知識がなくても安心して構成を変更できます。
**「自分のサイトに必要な部分だけを残す」** という考え方で進めるのが基本です。

---

# 9. 終了方法

サーバーを止めるには、ターミナルまたはコマンドプロンプト上で
`Ctrl + C` を押します。

再び起動したい場合は、再度 `./run.sh` を実行します。

---

# 10. よくあるトラブル

| 症状                         | 原因と対処                                     |
| -------------------------- | ----------------------------------------- |
| `Permission denied` と表示される | 実行権限がないため、ターミナル`chmod +x run.sh` を実行してから再試行する。 |
| ブラウザで「404 Not Found」になる    | `.nojekyll` が削除されていないか確認する。               |
| Markdownが反映されない            | ファイル名が一致しているか、拡張子が `.md` になっているか確認する。     |

---

# 11. まとめ

このテンプレートを使うと、Markdownで書いた文章をそのままWebページとして表示できます。
HTMLやCSSの知識がなくても、文章を書くことから始められます。

次のステップとして、`css/style.css` の内容を少しずつ変更し、
自分の好みに合わせたデザインにしてみましょう。

---

この構成で記事を `articles/how-to-run.md` のような名前で保存すると、
テンプレート内の他の記事と同様にブラウザ上で閲覧できます。

