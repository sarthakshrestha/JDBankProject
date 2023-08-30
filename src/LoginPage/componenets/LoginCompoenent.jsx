import axios from "axios";
import { useRef } from "react";
import "./LoginCompoenent.css";

export default function LoginCompoenent() {
  let emailRef = useRef("");
  let passwordRef = useRef("");

  function loginHandle() {
    axios
      .post("url", {
        user: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((reponse) => {
        // console.log(reponse.headers.Authorization))
        console.log(reponse);
      });
  }

  return (
    <>
      <div className="LoginContainer">
        <h4>You must register to join</h4>
        <p>We have a team to guide you</p>

        <div className="emailDiv">
          <p>Email</p>
          <input
            type="email"
            required
            placeholder="user@gmail.com"
            ref={emailRef}
          />
        </div>

        <div className="passwordDiv">
          <p>Password</p>
          <input
            type="password"
            required
            placeholder="password"
            ref={passwordRef}
          />
        </div>

        <button className="logInButton" onClick={loginHandle}>
          Log in
        </button>
      </div>
    </>
  );
}
