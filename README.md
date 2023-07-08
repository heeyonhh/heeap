리액트 + 파이어베이스 이용한 포트폴리오에 넣을 프로젝트 만들기 시작 !<br>
<br>
<strong>0708<strong/>
<br>
<strong>1. React Redux Typescript 깃 Set Up<strong/>
npx create-react-app 프로젝트이름 --template redux-typescript (nvm use 18.16.1)<br>
cd 프로젝트이름 / npm start<br>
<br>깃허브 연결 / vs code 진입<br>
app 폴더 redux로 수정 /features 폴더 삭제 / 스크립트 내용 정리<br>
리액트 리덕스 앱 오류 없는지 확인
<br><strong>2. 파이어 베이스 셋팅<strong/>
<br>파이어 베이스 프로젝트 생성 / 웹앱 추가 / 파이어베이스 설치 npm install firebase
<br>src > Firebase 폴더 > Firebaseconfig.ts & FirebaseApi.ts 파일 생성
<br>Firebase CLI 설치 npm install -g firebase-tools
<br>디플로이 터미널 > firebase login / firebase init / 프로젝트 선택 build y n n (파일 참조)
<br>디플로이 잘 됬는지 확인
<br>Firebase Provider 만들기 npm install utility-types
<br>src > Firebase > firebaseContext.tsx 파일 생성 / Firebase 모듈 export 하기
<br>src > Firebase > index.ts 파일 만들기
<br>index.tsx > FirebaseApi & FirebaseContext import / app에 FirebaseContext.Provider wrap
<br><strong>3. Build Log in with Google Flow<strong/>
<br>Material UI install 하기 / npm install @mui/material @emotion/react @emotion/styled
<br>Firebase Authentication 켜기 / Google login 켜기
<br>src > Firebase > firebaseApi.ts 에 Auth 관련 api 추가 / auth import googleAuthProvider export
<br>onAuthStateChanged / signInWithGoogleRedirect / signOut 메소드 추가
<br>src > redux > userSlice.ts 파일 만들기 (유저 세션 state 관리)
<br>src > redux > store.ts / import userReducer user: userReducer
<br>Log In / Log Out UI 만들기 / src > components > Header.tsx 파일 만들기 
<br>src > App.tsx / import useEffect / import Header
<br>import WithFirebaseApiProps, withFirebaseApi, useAppDispatch, setUserId
<br>const props WithFirebaseApiProps 함수
<br>Loading state 처리하기 / import CircularProgress useAppDispatch, useAppSelector, RootState
<br>const isLoadingState 함수
<br><strong>추가적인 유저정보 저장 기능<strong/>
<br>src > types.ts 만들기
<br>파이어베이스에서 Firestore Database 활성화 하기
<br>Create database > Start in test mode > 가장 가까운 리전 선택 > Enable 클릭
<br>src > Firebase > firebaseApi.ts UserInfo 관련 api 추가하기
<br>import doc, Firestore, getDoc, getFirestore, setDoc import Userinfo
<br>export firestore / UserInfo get / set / update 메소드 추가
<br>userSlice.ts / export state 에 UserInfo 추가
<br>Async get / set / update thunk 만들기
<br>export setUserInfo 추가
<br>useeffect dispatch handleUserChange thunk action 핸들 만들기
<br>App.tsx > handleUserChange import (User session 바꼈으니깐) 
<br>User session 바꼈을 때 handleUserChange action dispatch 하기 
<br>UserInfo 정보에 따라 다른 페이지 보여주기 import box container typography
<br>하단 추가 ...
<br>import button stack textfield usestate asyncSetUserInfo
<br>const onboarding 추가.... (정보를 넣으라는 페이지)
<br>edit profile page rerturn < E d i t P r o f i l e / > 추가
<br>
<br><strong>0709<strong/>
<br>
<br>
