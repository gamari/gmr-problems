// TODO InvalidInputErrorという例外クラスを定義してください。

function validateUserInput(input) {
    // TODO inputの継承をして「InvalidInputError」をスローしてください。
}

try {
    validateUserInput('不適切な入力例');
} catch (error) {
    if (error instanceof InvalidInputError) {
        console.error(error.message);
    } else {
        console.error('未知のエラーが発生しました。');
    }
}

