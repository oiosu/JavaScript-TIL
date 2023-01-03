# JavaScript-TIL
### (1) Node.js

> * ##### Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임 
>
>   🔥 런타임 : 프로그래밍 언어가 동작하는 환경
>
>   📚 Node.js 를 배운다는 것은 컴퓨터를 제어하는 것을 배운다는 것이다. 
>
>   🤔 왜 Node.js 를 배워야 할까? 
>
>   ​	브라우저를 동작하는 웹 페이지를 제작을 할 때, 제작이라는 것은 컴퓨터에서 진행을 하는 것이고 그 컴	퓨터에서 다양한 역할들을 수행하기 위해 Node.js의 도움을 받아야 한다. 

![image-20230103210836842](../imges/README/image-20230103210836842.png)

##### ◼ Node.js 설치 후 확인하기 (npm도 같이 설치 됨)

```bash
node --version 
```

```bash
node -v
```

---



### (2) npm 

> * ##### NPM (Node Package Manager)은 전 세계의 개발자들이 만든 다양한 기능(패키지, 모듈)들을 관리 

![image-20230103210938359](../imges/README/image-20230103210938359.png)



---



### (3) NPM 프로젝트 시작, package.json

##### ◼ npm 버전 확인하기 

```bash
npm --version
```

```bash
npm -v
```



##### ◼ 프로젝트 시작

```bash
npm init -y
```

> 별도의 질문을 거치지 않아도 json 파일이 바로 생성된다. 



##### ◼ lodash 설치 

```bash
npm install lodash
```



##### ◼ parcel 설치 

```bash
npm install parcel --save-dev
```

> 📚 **parcel : lodash와 같은 패키지들을 실제 웹사이트에 올라갈 수 있는 하나의 구조로 묶어주는 역할을 한다.**
>
> ##### 				   : (번들러Bundler) 라고 불린다. 
>
> ##### 				   : 묶어주는 것 뿐 실제로 동작하는 것은 아니다. 따라서 뒤에 --save-dev 를 붙여줘야한다. 
>
> * ##### 🔥 --save-dev : parcel 를 save 할 것 이다 하지만 dev 개발할 때만 사용될 뿐 실제 웹 브라우저에 동작하는 패키지는 아니다. 
>
> * ##### parcel --save-dev  와 --save-dev parcel 순서 바꿔서 명령어 입력해도 상관없다
>
> * ##### 축약형으로 다음과 같이 명령어를 작성 할 수 있다. (대문자 D이어야만 한다.)
>
>   ```bash
>   npm install -D parcel 
>   ```

![image-20230103174150182](../imges/README/image-20230103174150182.png)

> ### devDependencies (개발 의존성)
>
> * ##### dev : 개발용 
>
> * ##### Dependencies : 복수형으로, 의존성이라는 의미를 가지고 있다. 
>
> ##### 🤔 의존성???
>
> * ##### 우리가 만들 하나의 프로젝트가 외부의 개발자가 만들어 놓은 패키지에 의존해서 동작을 하고 있다는 의미이다. 

![image-20230103174542211](../imges/README/image-20230103174542211.png)

> parcel의 정보를 담고 있는 파일이 package.json이라는 파일이고, 우리의 프로젝트도 하나의 패키지 라는 개념이기 떄문에 root 경로에 package.json 파일이 있는것이다. 





##### ◼ package-lock.json 파일과 package.json 파일이 있기 때문에 node_modules 파일을 지워도 복구가 가능하다. 

> 지운 후에 복구할 경우 다음과 같이 명령어만 입력하면 된다. 
>
> ```bash
> npm install 
> ```



---



### (4) Parcel, 개발 서버 실행과 빌드 

##### ◼ 서버 실행 

`npm run (스크립트 이름)`

```bash
npm run dev
```

![image-20230103185448571](../imges/README/image-20230103185448571.png)



##### ◼ Typescript로 바꿔보기 

> * 파일명을 main.js 를 main.ts로 바꾸기 

```typescript
interface User {
    name: String
    age: Number
}

const user: User = {
    name: 'su',
    age: 25
}
```

> * ##### 에러메시지 발생 : 현재 index.html 파일에서 main.js 파일을 가져오려고 하는데 파일을 찾을 수 없다
>
> ![image-20230103190112918](../imges/README/image-20230103190112918.png)
>
> * ##### 해결 방법 : js부분을 ts로 수정한다. 
>
> ```html
> <script type="module" src="./main.ts"></script>
> ```



#### 📁 dist (= distribution)

> 실제 서비스가 될 빌드된 결과의 폴더 
>
> * 브라우저에서 동작 시키는 것이 목적이기 떄문에 줄바꿈, 띄어쓰기 등 필요가 없다 따라서 다음과 같이 코드가 인라인 형식으로 보여짐을 알 수 있다. 
>
>   ![image-20230103203249897](../imges/README/image-20230103203249897.png)
>
> * 난독화가 되었다. 
>
> * ##### 난독화가 된 이유 : npm run build의 build가 포함이되어져있기 때문 
>
>   ![image-20230103203850561](../imges/README/image-20230103203850561.png)



---



### (5) 유의적 버전(Semver)

#### Semantic Versioning, SemVer

#####  프로젝트가 개발되는 특정한 시점 상태에 의미를 부여하여 숫자를 매기는 방법이다. 

![image-20230103204758620](../imges/README/image-20230103204758620.png)

#### ✅ Major 4

> * **기존 버전과 호환되지 않는 새로운 버전이다.** 
>   * 여기서, 호환되지 않는다는 점이 중요하다. 
>   * 여기서 기존버전이란, 현재 숫자가 4버전이니깐 이전 버전인 3버전을 말한다. 



#### ✅ Minor 17

> * **기존 버전과 호환되는 기능이 추가된 버전이다.** 
>   * Major와 다르게 호환이 된다. 
>   * 기존 버전은 4.16 버전임을 알 수 있다. 



#### ✅ Patch 21

> * **기존 버전과 호환되는 버그 및 오타 등이 수정된 버전** 
>   * 기존 버전은 4.17.20 버전임을 알 수 있다. 



#### 🤔 `^4.17.21` 의 `^` 의미 

> ##### Major 버전 안에서 가장 최신 버전으로 업데이트 가능
>
> * Major 버전 안이라는 것은, Major 숫자는 바뀌지 않고 17은 18이라는 숫자로, 21는 22 숫자로 바뀔 수 있다는 의미이다. 

#### 🤔 `~Major.Minor.Patch` 의 `~` 의미

> ##### Minor 버전 안에서 가장 최신 버전으로 업데이트 가능 
>
> * Patch 버전만 업데이트가 된다. 
