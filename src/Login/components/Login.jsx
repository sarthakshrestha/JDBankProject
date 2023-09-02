import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import "../pages/LoginPage.css";
import { useNavigate } from "react-router-dom";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

// fieldsState["role"] = "";

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const navTo = useNavigate();

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {
    console.log(loginState);

    const data = {
      email: loginState.email,
      password: loginState.password,
      role: loginState.role,
    };

    axios
      .post("http://localhost:8080/home/login", data)
      .then((response) => {
        localStorage.setItem(
          "UserToken",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem("UserData", JSON.stringify(response.data.person));
      })
      .then(() => {
        if (roleRef.current.value == "ROLE_USER") {
          navTo("/UserDashboard");
        } else if (roleRef.current.value == "ROLE_ADMIN") {
          navTo("/Admin");
        } else if (roleRef.current.value == "ROLE_AGENT") {
          navTo("/Agent");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="forms">
        {fields.map((field) => (
          <div key={field.id} className="form-group">
            {field.type === "select" ? (
              <select
                style={{
                  height: "30px",
                  backgroundColor: "#E0DEDD",
                  borderRadius: "10px",
                }}
                id={field.id}
                name={field.name}
                value={loginState[field.id]}
                onChange={handleChange}
                required={field.isRequired}
              >
                <option value="">{field.placeholder}</option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <Input
                key={field.id}
                handleChange={handleChange}
                value={loginState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
