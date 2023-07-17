import { useState, useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "./config/firebase";
import "./Login.module.css"; // Import the CSS file for LoginX

export const LoginX = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailz, setEmailz] = useState("");
  const [passwordz, setPasswordz] = useState("");
  const [count, setCount] = useState(0);
  const [errmy, setErrmy] = useState("");
  const [errmz, setErrmz] = useState("");

  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setCount(count + 1);
    } catch (err) {
      console.error(err);
      setErrmy("Invalid or used email");
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
      setErrmz("Not logged in or invalid password");
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
    <div className="form-bg">
      {auth.currentUser ? (
        <Button variant="primary" onClick={logout}>
          Logout
        </Button>
      ) : (
        <div className="container">
          <Card>
            <div className="form-container">
              <div className="left-content">
                <h3 className="title">Site Name</h3>
                <h4 className="sub-title">Lorem ipsum dolor sit amet.</h4>
              </div>
              <div className="right-content">
                <h3 className="form-title">Login</h3>
                <Form>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="Email..."
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                      type="password"
                      placeholder="Password..."
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={createAccount}>
                    Create Account
                  </Button>
                  <div className="error-message">{errmy}</div>
                </Form>
              </div>
            </div>
          </Card>
          <Card>
            <div className="form-container">
              <div className="left-content">
                <h3 className="title">Site Name</h3>
                <h4 className="sub-title">Lorem ipsum dolor sit amet.</h4>
              </div>
              <div className="right-content">
                <h3 className="form-title">Login</h3>
                <Form>
                  <Form.Group className="mb-3" controlId="emailz">
                    <Form.Control
                      type="email"
                      placeholder="Email..."
                      onChange={(e) => setEmailz(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="passwordz">
                    <Form.Control
                      type="password"
                      placeholder="Password..."
                      onChange={(e) => setPasswordz(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={signIn}>
                    Sign In
                  </Button>
                  <div className="error-message">{errmz}</div>
                </Form>
              </div>
            </div>
          </Card>
          <Card>
            <div className="form-container">
              <h3 className="form-title">Login</h3>
              <Button variant="primary" onClick={signInWithGoogle}>
                Sign In With Google
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
