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



// 破壊的メソッドであることに注意
function removeAtIndex(array, index) {
    array.splice(index, 1);
    return array;
}

const removedArray = removeAtIndex(array1, 2);
console.log(removedArray);

const array4 = [1, 2, 3, 4, 5];
array4.forEach((value, index, array) => {
    console.log(value, index, array);
});

// reduce
const sum = array4.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
}, 0);
console.log(sum);


console.log('あ'.codePointAt(0))

console.log('i'.toUpperCase());


const globalScope = 'global scope';

function fn (){
    const globalScope = 'local scope';
    console.log(globalScope);
}
fn();

function fn2() {
    let count = 0;
    function fn () {
        count++;
        return count;
    }
    return fn;
}
const myFn2 = fn2();

console.log(myFn2());
console.log(myFn2());

const x = 10;

// 静的スコープだからどちらも 10 が出力される
// 動的スコープだと、run() の中で x が 20 になるので、20 が出力される
function printX() {
    console.log(x);
}

function run() {
    const x = 20;
    printX();
}

printX()
run();

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
        reject(new Error('エラーが発生しました'));
    }, 1000)
})

promise.then(() => {
    console.log('成功しました');
}, (error) => {
    console.log(error);
})

function delay(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeout)
    })
}

const delay1 = delay(1000);
const delay2 = delay(2000);
const delay3 = delay(3000);

Promise.all([delay1, delay2, delay3]).then(() => {
    console.log('全ての処理が完了しました');
}).catch((error) => {
    console.log('エラーが発生しました');
});

async function fetchData()
{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData();

function dummyFetch(path) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({body: `Response body of ${path}`});
            } else {
                reject(new Error('Not Found'));
            }
        }, 1000 * Math.random());
    })
}

async function fetchResources(resources) {
    const result = [];
    console.log("1 . fetchResources 関数が呼び出されました")
    for (const resouse of resources) {
        console.log("2. fetchResources 関数内で非同期処理を実行します")
        const response = await dummyFetch(resouse);
        console.log("5. fetchResources 関数内で非同期処理が完了しました")
        result.push(response.body);
    }
    console.log("3. fetchResources 関数が呼び出されました")
    return result;
}

const resources = [
    "/resource/A",
    "/resource/B"
];

fetchResources(resources).then((result) => {
    console.log("4. fetchResources 関数が完了しました")
    console.log(result);
}).catch((error) => {
    console.log(error);
});
