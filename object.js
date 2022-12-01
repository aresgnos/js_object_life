const memberArray = ['sera', '20', 'student'];
console.log('memberArray[2]', memberArray[2]);

const memberObject = {
    name : 'sera',
    age : 20,
    job : 'student'
}

// 수정
memberObject.job = 'doctor';

console.log('memberObject.job', memberObject.job);
console.log("memberObject['name']", memberObject['name']);

// 삭제
delete memberObject.age;
console.log('after delete', memberObject);
