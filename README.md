네이버로 각종 AIP 서비스를 땡겨와서 여러가지 서비스 해주는 프로젝트 입니다.# NaverApi

이미 npm 및 모듈 번들러(예: webpack 또는 Rollup)를 사용 중인 경우 다음 명령어를 실행하면 최신 SDK를 설치할 수 있습니다
npm install firebase

그런 다음 Firebase를 초기화하여 사용하려는 제품의 SDK를 사용하세요.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALnGjl5958hVTn8emCuMmfaFxX1MC3FxM",
  authDomain: "naverapiservice.firebaseapp.com",
  projectId: "naverapiservice",
  storageBucket: "naverapiservice.appspot.com",
  messagingSenderId: "442315113281",
  appId: "1:442315113281:web:6a4938d21f5b2ee81217c0",
  measurementId: "G-4N6W44ZB7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Firebase 호스팅으로 사이트를 호스팅하려면 Firebase CLI(명령줄 도구)가 필요합니다.
다음 npm 명령어를 실행하여 CLI를 설치하거나 최신 CLI 버전으로 업데이트하세요.
npm install -g firebase-tools

Google에 로그인
firebase login

프로젝트 시작
앱의 루트 디렉터리에서 다음 명령어를 실행하세요.
firebase init

준비되면 웹 앱 배포
정적 파일(예: HTML, CSS, JS)을 앱의 배포 디렉터리에 넣으세요. 기본값은 '공개'입니다. 그런 다음 앱의 루트 디렉터리에서 이 명령어를 실행하세요.
firebase deploy

배포 후 naverapiservice.web.app에서 앱을 확인하세요.

