import React from "react";
import "../pages/LoginPage.css";

export default function FormExtra() {
  return (
    <div className="role-dropdown">
      <label
        htmlFor="roles"
        className="block text-sm text-gray-900 mt-4"
        style={{ fontSize: "16px" }}
      >
        <b>Role:</b>
      </label>
      <br />
      <select
        id="roles"
        name="roles"
        className="mt-1 block w-full rounded-md border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
      >
        <option value="customer">Customer</option>
        <option value="agent">Agent</option>
        <option value="administrator">Administrator</option>
      </select>

      <div className="below-form-container">
        <div className="lower-form">
          <br />
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
            style={{ fontSize: "14px" }}
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-purple-600 hover:text-purple-500"
            style={{ fontSize: "14px", textDecoration: "underline" }}
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}
