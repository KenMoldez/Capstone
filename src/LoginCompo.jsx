import { auth, googleProvider } from "./config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";

export const LoginX = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailz, setEmailz] = useState("");
  const [passwordz, setPasswordz] = useState("");
  const [count, setCount] = useState(0);
  const [errmy, setErrmy] = useState("hello");
  const [errmz, setErrmz] = useState("goodbye");

  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setCount(count + 1);
    } catch (err) {
      console.error(err);
      setErrmy("invalid or used email");
    }
  };

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
      await signInWithEmailAndPassword(auth, emailz, passwordz);
      setCount(count + 1);
    } catch (err) {
      console.error(err);
      setErrmz("not logged in or invalid password");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setCount(count + 1);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);

  return (
    <div>
      {auth.currentUser ? (
        <button onClick={logout}> Logout </button>
      ) : (
        <div>
          <div>
            <input
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password..."
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={createAccount}>Create Account</button>
            {errmy}
          </div>
          <div>
            <input
              placeholder="Email..."
              onChange={(e) => setEmailz(e.target.value)}
            />
            <input
              placeholder="Password..."
              type="password"
              onChange={(e) => setPasswordz(e.target.value)}
            />
            <button onClick={signIn}>Sign In</button>
            {errmz}
          </div>
          <div>
            <button onClick={signInWithGoogle}> Sign In With Google</button>
          </div>
        </div>
      )}
      <br />
    </div>
  );
};
