const memberArray = ['sera', '20', 'student'];

console.group('array loop');
// 배열 반복문
let i = 0;
while(i < memberArray.length) {
    console.log(i, memberArray[i]);

    // 이 부분이 없으면 i=0이기 때문에 무한반복됨.
    i = i + 1;
}
console.groupEnd('array loop');
console.log('memberArray[2]', memberArray[2]);

const memberObject = {
    name : 'sera',
    age : 20,
    job : 'student'
}
console.group('object loop');

// 객체의 for문
for(const a in memberObject) {
    console.log(a, memberObject[a]);
}
console.groupEnd('object loop');

