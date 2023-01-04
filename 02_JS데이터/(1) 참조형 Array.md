## (1) 참조형 Array



```javascript
const fruits = new Array()
```

> `new` 라는 키워드와 함께 호출하는 함수를 **생성자 함수** 라고 하고 자바스크립트 **클래스**라고 한다. 



```javascript
const fruits = new Array('Apple', 'Banana', 'Cherry')
console.log(fruits)
```

![image-20230104153350047](../imges/(1) 참조형 Array/image-20230104153350047.png)

> fruits 라는 데이터는 총 3개의 아이템을 가지고 있는 상태이고 그 내부에는 0번째 Apple, 1번째 Banana, 3번째 Cherry가 있음을 알 수 있다. 
>
> 각각의 `'Apple` 과일들은 요소(Element)라고 한다. 



```javascript
const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)
```

> ##### 대괄호 사용하는 것은, 배열 리터널 이라고 한다. (훨씬 간편하게 사용할 수 있다.)



```javascript
const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits[1])
```

> ##### 특정 데이터를 조회하는 것을 배열 데이터를 인덱싱한다고 말한다. 



```javascript
const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits.length)
```

> ##### length 라는 속성을 통해 배열의 길이를 알 수 있다. 



```javascript
console.log(fruits[fruits.length - 1])
```

> ##### 숫자 2의 인덱싱이 가능함을 알 수 있다. 



