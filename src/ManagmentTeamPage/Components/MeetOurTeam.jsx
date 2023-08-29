import React from "react";
import Profile1 from "../profile/profile 1.png";
import Profile2 from "../profile/profile 3.png";
import Profile3 from "../profile/profile 4.png";
import Profile4 from "../profile/profile 5.png";
import Profile5 from "../profile/profile 6.png";
import Profile6 from "../profile/profile 7.png";
import Profile7 from "../profile/profile 8.png";

import "./MeetOurTeam.css";

export default function MeetOurTeam() {
  return (
    <div className="team-container">
      <h1 className="team-heading">Meet Our Team</h1>
      <div className="top-row">
        <div className="team-member">
          <img src={Profile1} alt="John Doe" className="profile-image" />
          <h2>Sita Sharma</h2>
          <p>Branch Manager</p>
        </div>
        <div className="team-member">
          <img src={Profile2} alt="Jane Smith" className="profile-image" />
          <h2>Prakash Karki</h2>
          <p>Loan Officer</p>
        </div>
        <div className="team-member">
          <img src={Profile3} alt="Alex Johnson" className="profile-image" />
          <h2>Anjali Bhattari</h2>
          <p>Financial Advisor</p>
        </div>
        <div className="team-member">
          <img src={Profile4} alt="Emily Brown" className="profile-image" />
          <h2>Ramesh Tamang</h2>
          <p>Credit Analyst</p>
        </div>
      </div>
      <div className="bottom-row">
        <div className="team-member">
          <img src={Profile5} alt="Michael Lee" className="profile-image" />
          <h2>Bijay Joshi</h2>
          <p>Operations Manager</p>
        </div>
        <div className="team-member">
          <img src={Profile6} alt="Sara Williams" className="profile-image" />
          <h2>Arjun Dhakal</h2>
          <p>IT Specialist</p>
        </div>
        <div className="team-member">
          <img src={Profile7} alt="David Wilson" className="profile-image" />
          <h2>Asha Rai</h2>
          <p>Customer Service Representative</p>
        </div>
      </div>
    </div>
  );
}
