import axios from "axios";
import { useRef } from "react";
import "./LoginComponent.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function LoginComponent() {
    let emailRef = useRef("");
    let passwordRef = useRef("");
    let roleRef = useRef("");
    const navTo = useNavigate();

    function loginHandle() {
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            role: roleRef.current.value,
        };

        axios
            .post("http://localhost:8080/home/login", data)
            .then((response) => {
                console.log("Login Response")
                console.log(response)
                if (response) {
                    localStorage.setItem(
                        "UserToken",
                        JSON.stringify(response.data.accessToken)
                    );
                    localStorage.setItem("UserData", JSON.stringify(response.data.person));
                }
            })
            .then(() => {
                if (roleRef.current.value == "ROLE_USER") {
                    navTo("/User");
                } else if (roleRef.current.value == "ROLE_ADMIN") {
                    navTo("/Admin");
                } else if (roleRef.current.value == "ROLE_AGENT") {
                    navTo("/Agent");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <>
            <div className="LoginContainer" style={{
                backgroundColor: "#002b5b",
                height: "500px",

            }}>
                <h4 style={{ marginBottom: "20px" }}>You must register to join</h4>
                <p style={{ marginBottom: "30px", color: "white" }}>We have a team to guide you</p>

                <div className="emailDiv">
                    <p style={{marginLeft: "-60px", color: "white"}}>Email</p>
                    <input
                        type="email"
                        isRequired
                        placeholder="user@gmail.com"
                        ref={emailRef}
                        style={{
                            width: "80%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            marginBottom: "10px",
                        }}
                    />
                </div>
                <div className="passwordDiv">
                    <p style={{marginLeft: "-60px", color: "white"}}>Password</p>
                    <input
                        type="password"
                        isRequired
                        placeholder="password"
                        ref={passwordRef}
                        style={{
                            width: "80%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            marginBottom: "10px",
                        }}
                    />
                </div>

                <div style={{ marginBottom: "30px" }}>
                    <select
                        defaultValue="ROLE_USER"
                        ref={roleRef}
                        style={{
                            width: "80%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            backgroundColor: "#ffffff",
                            color: "#002b5b",
                        }}
                    >
                        <option value="ROLE_USER">User</option>
                        <option value="ROLE_ADMIN">Admin</option>
                        <option value="ROLE_AGENT">Agent</option>
                    </select>
                </div>

                <button
                    onClick={loginHandle}
                    style={{
                        width: "80%",
                        padding: "12px",
                        borderRadius: "5px",
                        backgroundColor: "#004080",
                        color: "#ffffff",
                        border: "none",
                        cursor: "pointer",
                        marginBottom: "15px",
                        fontWeight: "bold",
                    }}
                >
                    Log In
                </button>

                <button
                    onClick={() => navTo("/Registration")}
                    style={{
                        width: "80%",
                        padding: "12px",
                        borderRadius: "5px",
                        backgroundColor: "#ffffff",
                        color: "#002b5b",
                        border: "1px solid #004080",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    Sign Up
                </button>
            </div>
        </>
    );
}
