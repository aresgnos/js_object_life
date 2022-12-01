// constructor
// 객체를 찍어내는 공장
function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function() {
        return this.first+ this.second+this.third;
    }
}

// const song = {
//     name : 'song',
//     first : 10,
//     second : 20,
//     sum : function() {
//         return this.first+ this.second;
//     }
// }

// const lee = {
//     name : 'lee',
//     first : 20,
//     second : 30,
//     sum : function() {
//         return this.first+ this.second;
//     }
// }

// 새로운 객체 생성
const song = new Person('song', 10, 25, 20);
const lee = new Person('lee', 15, 5, 40);

// console.log('song.sum', song.sum(song.first, song.second));
console.log('song.sum', song.sum());
console.log('lee.sum', lee.sum());

const d1 = new Date('2022-10-14');
console.log('d1.getFullYear', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth());
console.log('Date', Date);


// 함수 호출
// console.log('Person', Person());
// 새로운 객체 생성(new 함수명) = 생성자(constructor)
console.log('new Person', new Person());