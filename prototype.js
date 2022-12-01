function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}

// 생성자 안에서 공통적으로 사용하는 속성 만들기(모든 객체가 공유하는)
// 생성자 함수의 원형을 정한다.
Person.prototype.sum = function() {
    return 'prototype ' +(this.first + this.second);
}


const song = new Person('song', 10, 25);
// song에만 다른 method를 적용하고 싶을 때
// 객체 자체로 속성이나 함수를 가지고 있으면 우선적으로 실행시킴
song.sum = function() {
    return 'this ' + (this.first+this.second);
}
const lee = new Person('lee', 15, 5);

console.log('song.sum', song.sum());
console.log('lee.sum', lee.sum());