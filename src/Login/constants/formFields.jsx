const loginFields = [
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "text",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Enter your email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Enter your Password",
  },
  {
    labelText: "Role",
    labelFor: "user-role",
    id: "user-role",
    name: "user-role",
    type: "select",
    // style: "height:300px",
    isRequired: true,
    options: [
      { value: "USER_AGENT", label: "Agent" },
      { value: "USER_CUSTOMER", label: "Customer" },
      { value: "USER_ADMIN", label: "Admin" },
    ],
    placeholder: "Select User Role",
  },
];
export { loginFields };
