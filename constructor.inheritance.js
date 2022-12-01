function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function() {
    return this.first + this.second;
}

function PersonPlus(name, first, second, third) {
    Person.call(this, name, first, second);
    // super(name, first, second)와 같은 일을 함.
    this.third = third;
}
//PersonPlus.prototype.__proto__ = Person.prototype;

// 상단과 다름
// Person.prototype을 __proto__로 하는 새로운 객체 생성
PersonPlus.prototype = Object.create(Person.prototype);

// song의 constructor가 PersonPlus의 constructor가 되도록
PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.avg = function() {
    return (this.first + this.second + this.third) /3;
}

const song = new PersonPlus('song', 10, 20, 30, 40);
console.log('song.sum()', song.sum());
console.log('song.avg()', song.avg());
console.log('song.constructor', song.constructor);