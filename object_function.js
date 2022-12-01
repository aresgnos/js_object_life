const song = {name : 'song', first : 20, second : 30}
const lee = {name : 'lee', first: 10, second : 15}
function sum(prefix) {
    return this.first + this.second;
}

// call
// sum이라는 함수를 실행시킨다.
// sum();과 같음
// sum.call();
// call = 유사품으로 apply
console.log('sum.call(song)', sum.call(song, '=> '));
// 인자로 kim을 주면 상단의 this는 song이 됨.
// '=>'와 ':'는 인자 prefix의 값으로 들어감.
console.log('sum.call(lee)', sum.call(lee, ' : '));

// bind
// this를 song으로 하는 함수를 만듦.
// sum 함수를 바꾼게 아니라 취지에 맞는 새로운 함수가 생성된 것.
// '-> ' = prefix의 값
const songSum = sum.bind(song, '-> ');
console.log('songSum', songSum());

z