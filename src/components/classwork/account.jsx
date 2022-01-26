import React from "react";
import "./account.css";
import { Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import TopicIcon from "@mui/icons-material/Topic";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";

function Account() {
  return (
    <div className="accountcontainer container-fluid">
      <div
        className="accountleft d-flex flex-column vh-100 flex-shrink-0 p-3 text-dark bg-light col-md-3 col-5"
        style={{ width: "250px" }}
      >
        <div className="topaccountleft d-md-flex justify-content-md-between d-block d-md-inline">
          <img
            className="accountleftimg img-fluid rounded-circle me-2"
            src="images/profilepic2.png"
            alt=""
          />
          <div className="engagements d-flex justify-content-md-between">
            <span className="pr-3">
              Followers<p className="topcounter text-dark p-0 mb-0">100</p>{" "}
            </span>
            <span className="pl-0">
              Following <p className="topcounter text-dark p-0 mb-0">50</p>{" "}
            </span>
          </div>
        </div>
        <strong>
          <p className="username">{sessionStorage.getItem("username")}</p>
        </strong>
        <p className="useremail">{sessionStorage.getItem("email")}</p>
        <hr className="accountlefthr" />
        <ul className="nav flex-column accountleftlist mb-3">
          <li className="nav-item">
            {" "}
            <a
              href="#"
              className="nav-link active text-dark"
              aria-current="page"
            >
              <TopicIcon className="accountitemicons"></TopicIcon>Topic
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#" className="nav-link text-dark">
              <BookmarkIcon className="accountitemicons"></BookmarkIcon>
              Bookmarks{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#" className="nav-link text-dark">
              <HistoryIcon className="accountitemicons"></HistoryIcon>History{" "}
            </a>{" "}
          </li>
          <li>
            <a href="#" className="nav-link text-dark">
              <Badge
                badgeContent={1}
                color="primary"
                className="accountitemicons"
              >
                <MailIcon color="action" />
              </Badge>
              Messages
            </a>
          </li>
          <li>
            {" "}
            <a href="#" className="nav-link text-dark">
              <SettingsIcon className="accountitemicons"></SettingsIcon>Settings
            </a>{" "}
          </li>
        </ul>
        <button className="btn btn-primary rounded-pill">Edit Profile</button>
      </div>

      <div className="account-center col-md-9 col-7">
        <div className="account">
          <div className="accountinfo">
            <h4 className="accountinfotitle">Personal Info</h4>
          </div>
          <hr className="accounthr" />
          <div className="accountinfodetails">
            <p className="details">
              Name : {sessionStorage.getItem("username")}
            </p>
            <p className="details">Address : Lagos</p>
            <p className="details">Birthday : 10th April, 2022</p>
            <p className="details">Email : {sessionStorage.getItem("email")}</p>
            <p className="details">Posts : 30</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
