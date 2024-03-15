## 問題

JavaScriptでは非同期処理を「直列的」に書く方法と、「並列的」に書く方法があります。

直列的処理では処理の合計値がendMills - startMillsと同じぐらいになります。
並列的処理では処理の最大の値がendMills2 - startMills2と同じぐらいになります。

実際に直列的処理と並列的処理を書いて、それぞれの処理時間を計測してください。

## 制約

- 特になし

## 完了条件

- result1 + result2 + result3 ≒ endMill - startMillを満たしてください。
- resultsの一番大きな値 ≒ endMills2 - startMills2を満たしてください。
- （処理の影響から完全に一致するとは限りません）