// TODO 下記のコードの冗長性を排除してください。
function Box(value) {
    this.value = value;

}
Box.prototype.getValue = function() {
    return this.value;
}

const boxes = [
    new Box(1),
    new Box(2),
    new Box(3),   
]

// 結果は変わらないようにしてください。
boxes.forEach((box) => {
    console.log(box.getValue());
});