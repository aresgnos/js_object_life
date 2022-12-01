// Math 객체
console.log('Math.PI', Math.PI);

// 랜덤 숫자
console.log('Math.random()', Math.random()); // method

// 내림
console.log('Math.floor(3.9)', Math.floor(3.9));

// 객체 만들기
// 서로 연관된(같은 취지의) 변수와 함수를 그룹핑하고 이름을 붙인 것.
const MyMath = {
    PI : Math.PI,
    random : function() {
        return Math.random();
    },
    floor : function(val) {
        return Math.floor(val);
    }
}
console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.random', MyMath.random());
console.log('MyMath.floor(4.1)', MyMath.floor(4.1));

// 상단과 같음
// const MyMath_PI = Math.PI;

// function MyMath_random() {
//     return Math.random();
// };

// function MyMath_floor(val) {
//     return Math.floor(val);
// };