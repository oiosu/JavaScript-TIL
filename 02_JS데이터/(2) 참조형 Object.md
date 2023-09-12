# (1) 참조형 Array

##### (1) 생성자 함수 방식으로 작성한 코드 

```javascript
const user = new Object()
user.name = "su"
user.age = 5

console.log(user)
```

> * age : 5 형태는 key:value 형태이다.
> * key => 속성(property) : key는 고유한 값이며 순서가 따로 존재하지 않는다. (같은 속성 사용 주의 하기 )
> *  value => 값



##### (2) 함수 방식으로 작성한 코드 

```javascript
function user() {
    this.name = "su"
    this.age = 5
}
const user = new User()

console.log(user)
```



##### (3)  리터널 방식 (대부분 사용하는 방법) _ 기호로 만드는 방식 

```javascript
const user = {
    name: "su",
    age: 5
}
```

> * 전표기법 : 마침표를 사용해서 객체의 속성을 조회하는 방법
>
>   ```javascript
>   console.log(user.name)
>   ```
>
> * 대괄호 표기법 
>
>   ```javascript
>   console.log(user['name'])
>   ```

---

```javascript
const userA = {
    name: "su",
    age: 29
}

const userB = {
    name: "hy",
    age: 32,
    parent: userA
}
```

> ```javascript
> console.log(userB)
> ```
>
> ```js
> // 조회 값 
> age : 22
> name : "hy"
> parent: {name: "su", age: 29}
> [[prototype]] : Object
> ```
>
> ```js
> console.log(userB.parent.name)
> ```
>
> ```javascript
> console.log(userB['parent'])
> ```
>
> ```js
> console.log(userB['parent'].name)
> ```
>
> ```js
> console.log(userB['parent']['name'])
> ```
>
> ```js
> // 조회 값 
> su
> ```
>
> * ##### 배열 데이터 추가 
>
> ```javascript
> const users = [userA, userB]
> ```
>
> ```js
> cosole.log(user[0])
> ```
>
> > `{name : "su", age : 29 }`
>
> ```js
> cosole.log(user[0].name)
> ```
>
> ```js
> cosole.log(user[0]['name'])
> ```
