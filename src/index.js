import ReactDOM from "react-dom";
import React from "react";
import "./app.css";

const list = [
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
  ["Chelsi Bielovich", "Hey, good lookin'"],
];

const App = () => {
  return (
    <>
      {/* Page Container */}
      <div id="page-container">
        {/* Title */}
        <h1 id="header">Concat Message</h1>

        {/* Message App */}
        <div id="message-container">
          {/* Message List */}
          <div id="message-conversations">
            {/* List of messages */}
            {list.map((x) => (
              <div className="conversations">
                <h3 style={{ margin: 0 }}>{x[0]}</h3>
                <p className="conversation-preview">{x[1]}</p>
              </div>
            ))}
          </div>

          {/* Messages */}
          <div id="conversation-container">
            {/* Conversation Sender */}
            <div id="message-sender">
              <h2 className="conversation-sender">{list[0][0]}</h2>
            </div>

            {/* Conversation Messages */}
            <div id="messages"></div>

            {/* Input Field */}
            <div id="input-container">
              <input id="input-field"></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
