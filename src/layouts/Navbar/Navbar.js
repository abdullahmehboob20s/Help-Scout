import React from "react";
import "./Navbar.css";
import brandLogo from "assets/images/brand-logo.svg";
import DropdownItem from "components/DropdownItem/DropdownItem";

import inboxImg from "assets/images/inbox-2.svg";
import analyticsImg from "assets/images/analytics-2.svg";
import newsLetterImg from "assets/images/new-letter.svg";
import liveChatImg from "assets/images/live-chat.svg";
import heartImg from "assets/images/heart-2.svg";
import integrationImg from "assets/images/integration.svg";
import booksImg from "assets/images/books-2.svg";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="container-wrapper">
        <div className="navbar">
          <div className="navbar-left">
            <img src={brandLogo} className="brand-logo" alt="" />
          </div>
          <div className="navbar-right">
            <div className="navbar-links">
              <div className="navbar-link light-blue graphik-regular fs-15px pointer dropdown-icon ">
                Features
                <div className="navbar-dropdown columns-2">
                  <DropdownItem
                    img={inboxImg}
                    title="Shared Inbox"
                    subtitle="Manage conversations at scale"
                  />
                  <DropdownItem
                    img={analyticsImg}
                    title="Reporting"
                    subtitle="Real-time data at your fingertips"
                  />
                  <DropdownItem
                    img={booksImg}
                    title="Knowledge Base"
                    subtitle="Instant answers for customers"
                  />
                  <DropdownItem
                    img={liveChatImg}
                    title="Live Chat"
                    subtitle="Make your website more useful"
                  />
                  <DropdownItem
                    img={heartImg}
                    title="Messages"
                    subtitle="Provide proactive customer support"
                  />
                  <DropdownItem
                    img={integrationImg}
                    title="Integrations"
                    subtitle="Connect the tools you already use"
                  />
                  <DropdownItem
                    img={newsLetterImg}
                    title="Customer Management"
                    subtitle="Know your VIPs"
                  />
                </div>
              </div>
              <div className="navbar-link light-blue graphik-regular fs-15px pointer dropdown-icon ">
                Resources
              </div>
              <div className="navbar-link light-blue graphik-regular fs-15px pointer ">
                Blog
              </div>
              <div className="navbar-link light-blue graphik-regular fs-15px pointer ">
                Demo
              </div>
              <div className="navbar-link light-blue graphik-regular fs-15px pointer ">
                Pricing
              </div>
            </div>

            <div className="navbar-btns">
              <p className="light-blue graphik-regular fs-15px pointer ">
                Login
              </p>
              <button className="button-wrapper radius-4px bg-sharp-blue white graphik-regular weight-5">
                Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
