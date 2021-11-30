import Header from "./components/header";
import React, { useState } from "react";
import initialEmails from "./data/emails";

import "./styles/app.css";

function App() {
  // Use initialEmails for state
  console.log(initialEmails);
  const [emails, setEmails] = useState(initialEmails);
  const toggleRead = (e) => {
    const index = emails.findIndex((email) => {
      return email.id.toString() === e.target.id;
    });
    const newEmails = [...emails];
    if (index > -1) {
      console.log(newEmails);
      console.log(index);
      newEmails[index].read = !newEmails[index].read;
      setEmails(newEmails);
    }
  };

  const toggleStar = (e) => {
    const index = emails.findIndex((email) => {
      return email.id.toString() === e.target.id;
    });
    const newEmails = [...emails];
    if (index > -1) {
      console.log(newEmails);
      console.log(index);
      newEmails[index].starred = !newEmails[index].starred;
      setEmails(newEmails);
    }
  };

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              defaultChecked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul className="emails">
          {emails.map((email) => (
            <li
              className={`email ${email.read ? "read" : "unread"}`}
              key={email.id}
            >
              <input
                id={email.id}
                type="checkbox"
                name="emailcheck"
                defaultChecked={email.read}
                onChange={toggleRead}
              />
              <input
                type="checkbox"
                className="star-checkbox"
                name="star"
                defaultChecked={email.starred}
              />
              <span>{email.sender}</span>
              <span>{email.title}</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
