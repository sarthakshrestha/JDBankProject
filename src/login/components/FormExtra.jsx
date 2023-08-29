import React from "react";
import "../pages/LoginPage.css";

export default function FormExtra() {
    return (
        <div className="below-form-container">
            <div className="lower-form">
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
                    style={{ fontSize: "14px" }}
                >
                    Forgot your password?
                </a>
            </div>
        </div>
    );
}
