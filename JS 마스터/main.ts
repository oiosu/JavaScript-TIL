import _ from 'lodash'

// hello-world를 대문자 표기로 바꿔주기
console.log(_.upperCase('hello-world'))

interface User {
    name: String
    age: Number
}

const user: User = {
    name: 'su',
    age: 25
}

console.log(user)