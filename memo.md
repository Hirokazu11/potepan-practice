
# スタイル修正

## 真ん中寄せ1, 2

### 前提知識

* cssには適用順番があり、優先度が高いものが適用される
  * 詳細に適用している方が優先される

参考
http://www.htmq.com/csskihon/007.shtml

### 現状

* pタグ全てにおいて、左寄せが適用されている

```
.topic h4,p { 
 text-align: left;
}
```

* pタグを操作するために、top-contentsクラスにおいてtext-align: left: を適用している

下記2つのうち、どちらが優先されるか？
* pタグ自体に適用している左寄せ
* pタグを囲んでいるdivタグから適用している中央寄せ

→pタグに適用されている方が詳細度が高いため、優先され適用される

### 対策

* pタグ全体に適用されている左寄せを削除する

```
.topic h4 {  // pを削除 
 text-align: left;
}
```


## 真ん中寄せ3

### 前提知識

* 連続した子要素の横幅は、子要素ごとの大きさによって自動調整される


### 現状

#### 不正な横幅

* 埋め込み箇所のスタイルの横幅が不正に指定されている
* クラスを大きい順番から並べてみると
  1. students // 横幅は画面いっぱい
  2. student  // 生徒インタビューとして、3つそれぞれに横幅が決められている
  3. a  // ここがstudent aで指定しているところ studentの中の60%として決められているが、適用箇所に横幅を決めるべき内容がない

```
.student a {
  display: inline-block; 
  width: 60%;
}
```

#### 連続した子要素の横幅

* studentとして3つの要素がHTMLに記載されている
* 3つの要素の大きさは微妙に異なり、画像左右の余白スペースに差が出ている
  * 連続した子要素の横幅は、子要素ごとの大きさによって自動調整されるため
  * ここで言う子要素の大きさは、紹介文の文字数の長さ

### 対策

* 横幅自動調整を防ぐために、埋め込み箇所それぞれの横幅を指定する

```
.student {
  width: 33%;
}
```

## 背景

### 前提知識

* 各タグにはデフォルトでスタイルが適用されている
参考
http://tamachan.tama777.com/Reference/default_css.html


### 現状

* h1タグにスタイルを適用して、コース・料金、と言う文字を表示している
* h1タグのデフォルトスタイルは、h1タグ上下にmarginが付与されている

### 対策
* デフォルトのスタイルを上書きする


## 背景（2）

### 前提知識

* marginには背景が適用されない

### 現状

* フッター上部に100pxの余白がある

```
.site-fooder {
  float: left;
  color: white;
  background-color: #f79214;
  width: 100%;
  margin-top: 100px;
}
```

### 対策

* 余白を削除すれば、背景が白くなることを防げる


## 画像の収まり

### 前提知識

* デフォルトのborder-widthは大きくて3px
  * ブラウザによって異なる

参考
http://www.htmq.com/style/border-width.shtml

### 現状

* 要素の下部にpaddingが設定されており、余白を生んでいる

```
.task-topic {
  border-style: solid;
  border-color: #f79214; 
  position: relative;
  margin-bottom: 30px;
  padding: 0px 0px 25px 0px; // これ
}
```

### 対策

* paddingの値を減らす
  * デフォルトのborderの大きさを残す

```
.task-topic {
  border-style: solid;
  border-color: #f79214; 
  position: relative;
  margin-bottom: 30px;
  padding: 0px 0px 3px 0px;
}
```

* それか、border-widthをあらかじめ指定しておき、その値のpaddingを残す
  * この方がブラウザによって表示が変わらないため、ベター


## ホバーの設定

### 前提知識

* 親要素、子要素で適用するスタイルが優先されるのは子要素

### 現状

* htmlでは、course-anchorの下に文字を描くaタグがある

```
<div class="course-anchor">
  <a href="#index1">選抜クラス　キャリアコース</a> 
```

* cssでは文字色の定義はaタグ内で行っている

```
.course-anchor a {
  color: #f79214;
  display: block;
}
```

* cssでは、ホバーしたときの設定が、ボタン全体のみの設定しか描かれていない

```
.course-anchor:hover {
  color: white;
  background-color: #f79214;
}
```

### 対策

* ホバーしたときの設定を、文字にも設定する

```
.course-anchor:hover {
  background-color: #f79214;
}

.course-anchor:hover a {
  color: white;
}
```

