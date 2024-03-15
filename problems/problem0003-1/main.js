// TODO 下記のコードの冗長性を排除してください。
const boxes = [
    {
        value: 1,
        getValue() {
            return this.value;
        },
    },
    {
        value: 2,
        getValue() {
            return this.value;
        },
    },
    {
        value: 3,
        getValue() {
            return this.value;
        },
    },
];


// 結果は変わらないようにしてください。
boxes.forEach((box) => {
    console.log(box.getValue());
});