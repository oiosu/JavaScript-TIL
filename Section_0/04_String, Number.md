### 4. String, Number

* 데이터 타입 : string, number, boolean, null, symbol, bigint, object

| String                 | Number           |
| ---------------------- | ---------------- |
| 더하기 연산작용만 가능 | 모든 연산이 가능 |



#### (1) String 문자열 

```javascript
console.log('Hello' + 'World');
// Hello World
```



#### (2) Number 숫자 

```javascript
console.log('a' + 1)
//a1
```

> * 문자열 + 숫자 = 문자열로 반환 
>   * 반환 : 어떠한 기능을 동작시켰을 때 우리가 그 결과로 무언가를 돌려받는 다른 의미로 사용

```javascript
console.log(1 + '')
//1
```

> 빈 문자열도 하나의 문자열로 취급이 되기 때문에 결과적으로 문자열과 숫자의 더하기 연산이 된다. 

```javascript
console.log('a' * 1)
//NaN
```

> * NaN : not a number의 약자 



---



#### ✅ 문자 연산 

* 더하기만 가능 
* 다른 연산 시도 시 Nan 반환 



#### ✅ 숫자 연산 

* 모든 연산이 가능 
* 문자와 혼합 연산 시  Nan 반환 (더하기 제외)

```javascript
//예외 상황 

'abc' * 5 => Nan
'100' * 5 => 500
```

