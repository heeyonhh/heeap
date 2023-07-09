# React + Firebase 포트폴리오 프로젝트 시작 !


## 📱로그인 앱

## 0708


### 1. React Redux Typescript 깃 Set Up

npx create-react-app 프로젝트이름 --template redux-typescript (nvm use 18.16.1)

cd 프로젝트이름 / npm start

깃허브 연결 / vs code 진입

app 폴더 redux로 수정 /features 폴더 삭제 / 스크립트 내용 정리

리액트 리덕스 앱 오류 없는지 확인


### 2. 파이어 베이스 셋팅

파이어 베이스 프로젝트 생성 / 웹앱 추가 / 파이어베이스 설치 npm install firebase

src > Firebase 폴더 > Firebaseconfig.ts & FirebaseApi.ts 파일 생성

Firebase CLI 설치 npm install -g firebase-tools

디플로이 터미널 > firebase login / firebase init / 프로젝트 선택 build y n n (파일 참조)

디플로이 잘 됬는지 확인

Firebase Provider 만들기 npm install utility-types

src > Firebase > firebaseContext.tsx 파일 생성 / Firebase 모듈 export 하기

src > Firebase > index.ts 파일 만들기

index.tsx > FirebaseApi & FirebaseContext import / app에 FirebaseContext.Provider wrap



### 3. Build Log in with Google Flow

Material UI install 하기 / npm install @mui/material @emotion/react @emotion/styled

Firebase Authentication 켜기 / Google login 켜기

src > Firebase > firebaseApi.ts 에 Auth 관련 api 추가 / auth import googleAuthProvider export

onAuthStateChanged / signInWithGoogleRedirect / signOut 메소드 추가

src > redux > userSlice.ts 파일 만들기 (유저 세션 state 관리)

src > redux > store.ts / import userReducer user: userReducer

Log In / Log Out UI 만들기 / src > components > Header.tsx 파일 만들기 

src > App.tsx / import useEffect / import Header

import WithFirebaseApiProps, withFirebaseApi, useAppDispatch, setUserId

const props WithFirebaseApiProps 함수

Loading state 처리하기 / import CircularProgress useAppDispatch, useAppSelector, RootState

const isLoadingState 함수


### 4. 추가적인 유저정보 저장 기능

src > types.ts 만들기

파이어베이스에서 Firestore Database 활성화 하기

Create database > Start in test mode > 가장 가까운 리전 선택 > Enable 클릭

src > Firebase > firebaseApi.ts UserInfo 관련 api 추가하기

import doc, Firestore, getDoc, getFirestore, setDoc import Userinfo

export firestore / UserInfo get / set / update 메소드 추가

userSlice.ts / export state 에 UserInfo 추가

Async get / set / update thunk 만들기

export setUserInfo 추가

useeffect dispatch handleUserChange thunk action 핸들 만들기

App.tsx > handleUserChange import (User session 바꼈으니깐) 

User session 바꼈을 때 handleUserChange action dispatch 하기 

UserInfo 정보에 따라 다른 페이지 보여주기 import box container typography

하단 추가 ...

import button stack textfield usestate asyncSetUserInfo

const onboarding 추가.... (정보를 넣으라는 페이지)

edit profile page rerturn <EditProfile/> 추가


## 0709


### 프로필 사진 업데이트

components > Onboarding.tsx 파일 만들기

OnboardingBase component 내용 src/App.tsx -> Onboarding.tsx 옮기기

components > EditProfile.tsx 파일 만들기

EditProfileBase component 내용 src/App.tsx -> components/EditProfile.tsx 옮기기

npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

Username / ProfilePic Update Flow 만들기

EditUsernameViewMode component 만들기

EditUsernameEditMode component 만들기

EditProfilePicViewMode component 만들기

EditProfilePicEditMode component 만들기 



## 📱Todo list


###
