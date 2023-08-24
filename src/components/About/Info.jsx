import React from "react";

function Info() {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="uil uil-briefcase-alt about_icon"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">6 years working</span>
      </div>

      <div className="about_box">
        <i class="uil uil-diary about_icon"></i>
        <h3 className="about_title">Academic</h3>
        <span className="about_subtitle">10+ projects</span>
      </div>

      <div className="about_box">
        <i class="uil uil-setting about_icon"></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">24/7 online</span>
      </div>
    </div>
  );
}

export default Info;
