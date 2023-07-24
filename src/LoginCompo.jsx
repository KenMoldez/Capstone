import { useState } from "react";
import { Button, Card, Form, Nav } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "./config/firebase";
import LoginCSS from "./Login.module.css";
import { useEffect } from "react";
import LandingPage from "./Home";

export const LoginX = (props) => {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerRepeatPassword, setRegisterRepeatPassword] = useState("");
  const [errmy, setErrmy] = useState("");
  const [errmz, setErrmz] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const createAccount = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      setErrmy("Invalid or used email");
    }
    props.getBookings();
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
    props.getBookings();
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      setErrmz("Not logged in or invalid password");
    }
    props.getBookings();
  };

  return (
    <>
      {auth.currentUser ? (
        <LandingPage></LandingPage>
      ) : (
        <div className={`${LoginCSS["form-bg"]}`}>
          <div className={`${LoginCSS["container"]}`}>
            <Card className={`${LoginCSS["card"]}`}>
              <Nav
                variant="pills"
                className={`${LoginCSS["nav-justified mb-3"]}`}
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="login"
                    active={activeTab === "login"}
                    onClick={() => handleTabChange("login")}
                    className={`${LoginCSS["llogin"]}`} // Add class to the "Login" button
                  >
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="register"
                    active={activeTab === "register"}
                    onClick={() => handleTabChange("register")}
                    className={`${LoginCSS["rregister"]}`} // Add class to the "Sign Up" button
                  >
                    Register
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="tab-content">
                <div
                  className={`tab-pane fade show ${
                    activeTab === "login" ? "active" : ""
                  }`}
                >
                  <Form>
                    <div className={`${LoginCSS["text-center mb-3"]}`}>
                      <p className={`${LoginCSS["text"]}`}>Sign in with:</p>
                      <Button
                        type="button"
                        variant="pills"
                        className={`${LoginCSS["btn-floating md-1"]}`}
                        onClick={signInWithGoogle}
                      >
                        Sign in with Google
                      </Button>
                    </div>
                    <p className={`${LoginCSS["text-center"]}`}>or:</p>
                    <Form.Group controlId="loginName">
                      <Form.Label>Email or username</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="loginPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      className={`${LoginCSS[" mb-4"]}`}
                      controlId="loginCheck"
                    >
                      <Form.Check type="checkbox" label="Remember me" checked />
                      <a href="#!" className="ms-4">
                        Forgot password?
                      </a>
                    </Form.Group>
                    <Button
                      type="submit"
                      variant="pills"
                      className={`${LoginCSS["justify-content-center mb-4"]}`}
                      onClick={signIn}
                    >
                      Sign in
                    </Button>
                    <div className={`${LoginCSS["text-center"]}`}>
                      <p>
                        Not a member? <a href="#!">Register</a>
                      </p>
                    </div>
                  </Form>
                </div>
                <div
                  className={`tab-pane fade show ${
                    activeTab === "register" ? "active" : ""
                  }`}
                >
                  <Form>
                    <div className={`${LoginCSS["text-center mb-3"]}`}>
                      <p className={`${LoginCSS["text"]}`}>Sign up with:</p>
                      <Button
                        type="button"
                        variant="pills"
                        className={`${LoginCSS["btn-floating md-1"]}`}
                        onClick={signInWithGoogle}
                      >
                        Sign in with Google
                      </Button>
                    </div>
                    <p className={`${LoginCSS["text-center"]}`}>or:</p>
                    <Form.Group controlId="registerName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Name..."
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="registerUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Username..."
                        value={registerUsername}
                        onChange={(e) => setRegisterUsername(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="registerEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email..."
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="registerPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password..."
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="registerRepeatPassword">
                      <Form.Label>Repeat password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Repeat password..."
                        value={registerRepeatPassword}
                        onChange={(e) =>
                          setRegisterRepeatPassword(e.target.value)
                        }
                      />
                    </Form.Group>
                    <Form.Group
                      className={`${LoginCSS[" mb-4"]}`}
                      controlId="registerCheck"
                    >
                      <Form.Check
                        type="checkbox"
                        label="I have read and agree to the terms"
                        checked
                      />
                    </Form.Group>
                    <Button
                      type="submit"
                      variant="pills"
                      className={`${LoginCSS[" mb-3"]}`}
                      onClick={createAccount}
                    >
                      Sign up
                    </Button>
                  </Form>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};
