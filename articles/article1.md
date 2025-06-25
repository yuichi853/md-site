# Markdown記法変換サンプル

これはMarkdownの各種構文の説明と、MarkDownをHTMLに変換した際の表示確認のためのサンプルです

MarkDownの原文ファイルは[こちらのリンクからご覧いただけます](https://github.com/yuichi-853/md-site/blob/main/articles/article1.md?plain=1)。

---

## 1. 基本構文

### 1.1 見出し（Headings）

Markdownでは、`#` 記号の数で見出しのレベルを表します。

- `# 見出しレベル1`
- `## 見出しレベル2`
- `### 見出しレベル3`
- `#### 見出しレベル4`

なお、見出しレベル1と2の見出しから、自動的に目次を生成する仕組みになっています。

### 1.2 段落と改行（Paragraphs & Line Breaks）

これは段落です。改行は2つのスペースを行末に入れるか、空行を挟みます。  
この行はスペース2つによる改行で繋がっています。

---

## 2. 強調表現（Emphasis）

- *イタリック体*：`*イタリック体*`
- **ボールド体**：`**ボールド体**`
- ~~打ち消し線~~：`~~打ち消し線~~`

---

## 3. リスト（Lists）

### 3.1 箇条書き（Unordered）

- りんご
- バナナ
  - 熟したバナナ
  - 青いバナナ
- オレンジ

### 3.2 番号付きリスト（Ordered）

1. はじめに
2. 方法
   1. 準備
   2. 実行
3. おわりに

---

## 4. ハイパーリンク

リンクを以下の記法で埋め込むことができます。

```md
[Google](https://www.google.com)
```

[Google](https://www.google.com)

---

## 5. コード（Code）

### 5.1 インラインコード

例えば、`console.log("Hello, World!")` のように書けます。

### 5.2 コードブロック（多行）

構文が美しくハイライトされた、視認性の高いコードブロックを生成します。  
この世のありとあらゆる言語に対応しています。

#### JavaScript

```javascript
function greet(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}

for (let i = 0; i < 3; i++) {
  greet("User" + i);
}
````

---

#### Python

```python
def greet(name):
    message = f"Hello, {name}!"
    print(message)

for i in range(3):
    greet("User" + str(i))
```

---

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Sample</title>
</head>
<body>
  <h1>Hello, world!</h1>
</body>
</html>
```

---

#### Go

```go
package main

import "fmt"

func greet(name string) {
    fmt.Printf("Hello, %s!\n", name)
}

func main() {
    for i := 0; i < 3; i++ {
        greet(fmt.Sprintf("User%d", i))
    }
}
```

---

## 6. 水平線（Horizontal Rule）

上のテーブルとこの文章の間には水平線があります。
水平線は3つ以上の `-` または `*` または `_` で作ります。

---

## 7. チェックリスト（タスクリスト）

* [x] サイトのデザインを決定
* [x] Markdown構文を試す
* [ ] バグ修正
* [ ] 機能追加

---

## おわりに

このサンプルでは、Markdownの主要な構文を網羅しました。

このように、HTMLのコードを一切書くことなく、メモ帳にメモしていく感覚で記事を執筆・更新していくことができます。
