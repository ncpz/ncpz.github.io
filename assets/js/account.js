window.onload = function init() {
    const auth = firebase.auth();
    const db = firebase.firestore();
    const loginErrorMsg = document.getElementById("login-error-msg");

    let email = document.querySelector("#signup-email");
    let pass = document.querySelector("#signup-pass");
    let signUpBtn = document.querySelector("#sign-up-btn");
    let signupForm = document.querySelector(".signup-form");
  
    let loginEmail = document.querySelector("#login-email");
    let loginPass = document.querySelector("#login-pass");
    let loginBtn = document.querySelector("#login-btn");
    let loginForm = document.querySelector(".login-form");
    //   console.log(auth);
  
    async function createUserWithEmailAndPassword(email, password) {
      try {
        let user = await auth.createUserWithEmailAndPassword(email, password);
        console.log(user);
      } catch (error) {
        console.log(error.code);
        loginErrorMsg.style.opacity = 1;
      }
    }
  
    async function loginWithEmailAndPassword(email, password) {
      try {
        let user = await auth.signInWithEmailAndPassword(email, password);
        if (user) {
          window.location = "./index.html";
        }
      } catch (error) {
        console.log(error.code);
        loginErrorMsg.style.opacity = 1;
      }
    }
  
    if (signupForm != null) {
      signupForm.onsubmit = function (e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email.value, pass.value);
      };
    }
  
    if (loginForm != null) {
      loginForm.onsubmit = function (e) {
        e.preventDefault();
        loginWithEmailAndPassword(loginEmail.value, loginPass.value);
      };
    }
  };
  