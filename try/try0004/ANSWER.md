<!-- TODO 解答を書く -->
【理由】
イベントリスナーにprintNameメソッドが呼び出された際に、
printNameメソッドに記述されたthisの値の参照先がイベントのターゲット要素に変わってしまうため。

▽参考
https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener
ハンドラー内での "this" の値

【解決方法】
・bindを使う
・自分自身ではthisを持たないアロー関数式を使う