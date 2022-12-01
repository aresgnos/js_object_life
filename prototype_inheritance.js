const superObj = {superVal : 'super'}
// const subObj = {subVal : 'sub'}

// prototype link
// 남남인 객체를 부모 자식 관계로 만들기
// subObj.__proto__ = superObj;
// => subObj의 원형은 superObj이다.
// => subObj는 superObj의 자식이다.

// const subObj = {subVal : 'sub'}
// subObj.__proto__ = superObj;

// 상단 두 줄과 같음.
// superObj를 부모로하는 새로운 객체 만드는 다른 방법
// __proto__ = Object.create(부모로할 객체);
const subObj = Object.create(superObj);
subObj.subVal = 'sub';
// debugger; // 자바스크립트를 일시중지시키고 객체의 상태를 자세히 볼 수 있다.

console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
// console.log(superObj.subVal); => undefined
subObj.superVal = 'sub'; // 바뀌지 않는다.
console.log('superObj.superVal =>', superObj.superVal);

// 새로운 객체 만들기
const song = {
    name : 'song',
    first : 20, second : 30,
    sum : function() {
        return this.first+this.second
    }
}
// const lee = {
//     name : 'lee',
//     first : 20, second : 20,
//     avg : function() {
//         return (this.first+this.second) /2
//     }
// }

// lee 객체의 원형을 song으로 한다.
// lee.__proto__ = song;
// console.log('lee.sum', lee.sum());
// console.log('lee.avg', lee.avg());

// Object create 사용
const lee = Object.create(song);
lee.name = 'lee';
lee.first = 10;
lee.second = 15;
lee.avg = function() {
    return (this.first + this.second) /2;
}

console.log('lee.sum', lee.sum());
console.log('lee.avg', lee.avg());