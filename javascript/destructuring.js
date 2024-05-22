// 分割代入（ドット記法で記載していくと長くなってしまうので、この書き方ができた）
//
const lang = {ja: "日本語", en: "英語", fr: "フランス語", de: {h: "ドイツ語", i: "ほげ語"}};
const {ja, en, fr, de} = lang;
console.log(ja); // 日本語
console.log(en); // 英語
console.log(fr); // フランス語
console.log(de.h); // ドイツ語

// オブジェクトは全てミュータブルである
const key = 'key-string';
const obj = {
    [key]: 'value-string'
}
console.log(obj[key]); // value-string