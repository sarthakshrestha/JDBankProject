import React from "react";
import logo from "../SideBar/Logo.png";
import "./editprofile.css";
import SideBar from "../SideBar/SideBar";

const handleSubmit = (event) => {
  event.preventDefault();
};

function EditProfile() {
  return (
    <div>
      <SideBar />
      <div class="edit_profile">
        <div class="top">
          <h1>Make Changes to your Profile</h1>
        </div>
        <div class="content">
          <form class="update_form" onSubmit={handleSubmit}>
            <div class="edit_section">
              <h3>Edit Profile</h3>
              <div class="input_fields">
                <label>First Name</label>
                <input type="text" id="firstname" />
                <label>Last Name</label>
                <input type="text" id="lastname" />
                <label>Email Address</label>
                <input type="text" id="emailaddress" />
                <label>Date of Birth</label>
                <input type="date" id="dob" />
                <label>Address</label>
                <input type="text" id="address" />
              </div>
              <div class="buttons">
                <button class="save_change">Save Changes</button>
                <button class="discard_change">Discard Changes</button>
              </div>
            </div>
          </form>
          <div class="image_change">
            <img src={logo} alt="" />
            <h2>Upload New Profile Avatar</h2>
            <button className="upload">Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
