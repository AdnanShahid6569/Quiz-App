const firebaseConfig = {
    apiKey: "AIzaSyA9IQbppAhwajf4V3UBFg0tBVMf4EzLsVo",
    authDomain: "quiz-app-b1dbb.firebaseapp.com",
    projectId: "quiz-app-b1dbb",
    storageBucket: "quiz-app-b1dbb.firebasestorage.app",
    messagingSenderId: "223465955995",
    appId: "1:223465955995:web:001f7184f66525201b5c3e"
  };

  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

function signUp(){
    var email =document.getElementById("email")
    var password =document.getElementById("pass")
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
    window.location.href="quiz/quiz.html"
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    
  });

}