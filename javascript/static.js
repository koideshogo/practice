// オブジェクトの静的メソッド
const obj = {
    "one": 1,
    "two": 2,
    "three": 3,
}

const keyObject = Object.keys(obj);

console.log(Object.keys(obj)); // ["one", "two", "three"]

keyObject.forEach((key, value) => {
    console.log(value, key)
});

const entries = Object.entries(obj);
console.log(entries); // [["one", 1], ["two", 2], ["three", 3]]
const values = Object.values(obj);
console.log(values); // [1, 2, 3]

// 本当に空の（prototype がないオブジェクト）オブジェクトを作成
const empty = Object.create(null);
console.log(empty); // {}
console.log(empty.toString); // undefined

// 配列へのアクセス(末尾)
const array = [1, 2, 3, 4, 5];
console.log(array.at(-1))
console.log(array.at(-2))

// 配列の分割代入
const [first, second, third] = array;
console.log(first, second, third);
const [first2, ...rest] = array;
console.log(first2, rest);

// indexOf （合致した index を返す、なければ -1 を返却）
const index = array.indexOf(1);
console.log(index);

const color = [
    {color : "red"},
    {color : "blue"},
    {color : "green"},
];

// 配列内のオブジェクトから合致した index を返却する
const indexOfColor = color.findIndex((item) => {
   return item.color === "red";
});

console.log(indexOfColor);
console.log(color[indexOfColor]);

// オブジェクトそのものを取得する
const foundRed = color.find((item) => {
    return item.color === "red";
});
console.log(foundRed)

// includes メソッド
if (array.includes(1)) {
    console.log('1 は含まれています')
}

// 配列の結合
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = array1.concat(array2);
console.log(array3);

// 配列の展開
const spreadArray = [7,8,9, ...array1];
console.log(spreadArray);

// flat
const arrayInArray = [[["A"],"B"], array1, array2];
console.log(arrayInArray.flat());
console.log(arrayInArray.flat(1));
console.log(arrayInArray.flat(2));
console.log(arrayInArray.flat(Infinity));






