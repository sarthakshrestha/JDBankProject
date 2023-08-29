import { Link } from "react-router-dom";
import "../pages/LoginPage.css"
export default function LoginHeader({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div className="mt-10">
      <div className="d-flex justify-content-center">
        <br/>
        <img
          src="/Logo.png"
          alt="logo"
          style={{ width: "100px", height: "auto", marginLeft: "80px" }}
        />
      </div>
        <br/>
      <h2 className="subheading">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 mt-5" style={{fontSize: "15px"}}>
        {paragraph}{" "}
        <Link
            style={{textDecoration: "underline"}}
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500 underline"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
