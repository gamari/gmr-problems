// TODO ここに解答
for (let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// ワンライナー（１行目）で書くことを競うものもある

// ## 問題

// 1～100の数字を、以下の制約を満たしながら表示してください。

// ## 制約

// - 数が3で割り切れる場合は、数の代わりに「Fizz」と表示してください。
// - 数が5で割り切れる場合は、「Buzz」と表示してください。
// - 数が3と5の両方で割り切れる場合は、「FizzBuzz」と表示してください。
// - それ以外の場合は、数自体を表示してください。

// ## 完了条件

// - 制約を満たした状態でコンソール上に表示されていること