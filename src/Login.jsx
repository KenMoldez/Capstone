import LoginCSS from "./Login.module.css";
import { auth, googleProvider } from "./config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

function Login() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errmz, setErrmz] = useState("");

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setCount(count + 1);
    } catch (err) {
      console.error(err);
    }
  };
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setCount(count + 1);
    } catch (err) {
      console.error(err);
      setErrmz("not logged in or invalid password");
    }
  };

  return (
    <form>
      <div className={LoginCSS["title"]}>
        <h1>LOG IN</h1>
        <p>Welcome back! Please enter your details.</p>
      </div>
      <button id={LoginCSS["google-signin"]} onClick={signInWithGoogle}>
        <img src="assets/google-logo.svg" alt="" />
        Log in with Google
      </button>
      <span className={LoginCSS["or"]}>or</span>
      <div className={LoginCSS["input-field"]}>
        <input
          type="email"
          id="email"
          placeholder=""
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p htmlFor="email">Email</p>
      </div>
      <div className={LoginCSS["input-field"]}>
        <input
          type="password"
          id="password"
          placeholder=""
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p htmlFor="password">Password</p>

        <label htmlFor="hide-show" id={LoginCSS["show-hide-pass"]}></label>

        <input
          type="checkbox"
          name="showPass"
          id="hide-show"
          className={LoginCSS["hide-show"]}
        />
      </div>

      <p className={LoginCSS["userLoginErrorMessage"]}></p>

      <button id={LoginCSS["signin"]} onClick={signIn}>
        Sign in
      </button>
      <button onClick={signIn}>HUY</button>
    </form>
  );
}

export default Login;
