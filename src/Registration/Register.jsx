import {useRef, useState, useEffect} from "react";
import "./Register.css";

//password,email and username validation
const FIRST_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const LAST_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
    // for setting the focus on user input and if error occurs
    const userRef = useRef();
    const errRef = useRef();

    //for firstname
    const [firstName, setFirstName] = useState("");
    const [validFirstName, setValidFirstName] = useState(false);
    const [userFirstFocus, setFirstFocus] = useState(false);

    //for lastname
    const [lastName, setLastName] = useState("");
    const [validLatName, setValidLastName] = useState(false);
    const [userLastFocus, setLastFocus] = useState(false);

    //for email
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    //for password
    const [pass, setPass] = useState("");
    const [validPass, setValidPass] = useState(false);
    const [passFocus, setPassFocus] = useState(false);

    //for confirm password
    const [confirmPass, setConfirmPass] = useState("");
    const [validConfirm, setValidConfirm] = useState(false);
    const [confirmFocus, setConfirmFocus] = useState(false);

    //if error and successs
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    //   //useeffect for focus
    useEffect(() => {
        userRef.current.focus();
    }, []);

    //useeffect for firstname
    useEffect(() => {
        const result = FIRST_REGEX.test(firstName);
        console.log(result);
        console.log(firstName);
        setValidFirstName(result);
    }, [firstName]);

    //useeffect for username
    useEffect(() => {
        const result1 = LAST_REGEX.test(lastName);
        console.log(result1);
        console.log(lastName);
        setValidLastName(result1);
    }, [lastName]);

    //useeffect for password
    useEffect(() => {
        const result = PASS_REGEX.test(pass);
        console.log(result);
        console.log(pass);
        setValidPass(result);
        const confirm = pass == confirmPass;
        setValidConfirm(confirm);
    }, [pass, confirmPass]);

    //useeffect for error message
    useEffect(() => {
        setErrMsg(" ");
    }, [firstName, lastName, pass, confirmPass]);

    const handleLoginRedirect = () => {
        navigate("/LoginPage/");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PASS_REGEX.test(pass);
        if (!v1 || !v2) {
            console.log("ERror");
        }
        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({user, pass}),
                {
                    headers: {"Content-Type": "application/json"},
                    withCredentials: true,
                }
            );
            console.log(response.data);
            console.log(JSON.stringify(response));
        } catch (err) {
            if (!err?.response) {
                console.log("SErver problem");
            } else {
                console.log("Registration Failed");
            }
        }
    };

    return (
        <div>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
                {errMsg}
            </p>
            <div class="register-form">
                <h1>Register</h1>
                <p>We have a team to guide you</p>
                <form>
                    <div class="input-container">
                        <span className={validFirstName ? "valid" : "hide"}></span>
                        <span
                            className={validFirstName || !firstName ? "hide" : "invalid"}
                        ></span>
                        <input
                            type="text"
                            id="firstname"
                            placeholder="First name"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setFirstName(e.target.value)}
                            onFocus={() => setFirstFocus(true)}
                            onBlur={() => setFirstFocus(false)}
                        />
                    </div>
                    <p
                        className={
                            userFirstFocus && firstName && !validFirstName
                                ? "instructions"
                                : "offscreen"
                        }
                    >
                        Must be 4 to 24 character
                    </p>
                    <div class="input-container">
            <span class="icon">
              <i class="fas fa-user"></i>
            </span>
                        <input
                            type="text"
                            id="lastname"
                            placeholder="Last name"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setLastName(e.target.value)}
                            onFocus={() => setLastFocus(true)}
                            onBlur={() => setLastFocus(false)}
                        />
                    </div>
                    <div class="input-container">
                        <label for="email">
                            <i class="fas fa-envelope"></i> Email
                        </label>
                        <input type="text" id="email" placeholder="jdname@gmail.com"/>
                    </div>
                    <div class="input-container">
                        <label for="password">
                            <i class="fas fa-lock"></i> Password
                        </label>
                        <input type="password" id="password" placeholder="Password"/>
                    </div>
                    <div class="input-container">
                        <label for="confirm_password">
                            <i class="fas fa-lock"></i> Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm_password"
                            placeholder="Confirm Password"
                        />
                    </div>
                    <div class="input-container">
                        <label for="dob">
                            <i class="fas fa-calendar-alt"></i> Date of Birth
                        </label>
                        <input type="date" id="dob"/>
                    </div>
                    <button>Register</button>
                </form>
                <p onClick={handleLoginRedirect}>Already have an account?</p>
            </div>
        </div>
    );
};

export default Register;
