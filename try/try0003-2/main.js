// TODO 下記のコードの冗長性を排除してください。
class Box {
    constructor(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }
}
const boxes = [
    new Box(1),
    new Box(2),
    new Box(3)
];


// 結果は変わらないようにしてください。
boxes.forEach((box) => {
    console.log(box.getValue());
});