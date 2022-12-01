// class : 객체를 만드는 공장
class Person {
  // 생성자
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    console.log("consturctor");
  }
  // 이 안에서 함수 실행시에는 function 생략
  sum() {
    return "prototype " + (this.first + this.second);
  }
}
// 함수 추가
// Person.prototype.sum = function() {
//     return 'prototype ' +(this.first + this.second);
// }

// 상속
// Person class를 확장한다.
// class PersonPlus extends Person {
//   // 중복되는 코드는 제거 가능
//   // 자동으로 loading
//   avg() {
//     return (this.first+this.second)/2;
//   }
// }

// super
class PersonPlus extends Person {
  constructor(name, first, second, third) {
    // 부모 class의 생성자
    // Person class의 생성자가 호출됨.
    super(name, first, second);
    this.third = third;
  }
  sum() {
    // super.sum() => 부모 class의 sum이 호출됨.
    return super.sum()+this.third;
  }
  avg() {
    return (this.first + this.second + this.third) / 3;
  }
}

// 새로운 객체 생성
const song = new Person("song", 10, 25);
console.log("song", song);
// song은 다른 method를 가지고 있다.
song.sum = function () {
  return "this " + (this.first + this.second);
};
console.log("song.sum", song.sum());

// 새로운 객체 생성
const lee = new PersonPlus("lee", 15, 5, 30);
console.log("lee.sum", lee.sum());
console.log("lee.avg", lee.avg());
