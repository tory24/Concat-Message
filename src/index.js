import ReactDOM from "react-dom";
import React from "react";
import "./app.css";

const list = [
  ["Chelsi Bielovich", "Hey, hru?'"],
  ["Tom Cave", "I'm a dweeb"],
  ["Tristan Casey", "Freeze! Imma shoot!"],
  ["Olivia Bielovich", "Pilates time?"],
  ["ABC123", "Hi, do you know your alphabet?"],
  [
    "SXC6969",
    "I am nigerian prince, I need 1mil$$ to get to Australia l$$ to get to Australia l$$ to get to Australia",
  ],
  ["Chizle", "Get ripped quick! $1 million!"],
  ["Leslie", "Black widow suxxz"],
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: "",
      sender: "",
      messages: {
        senderMessages: [],
        recievedMessages: [],
      },
      sentMessages: [],
      currentMessage: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ currentMessage: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const time = new Date().getTime();
    const { currentMessage, sentMessages } = this.state;
    var sentMessagesLength = sentMessages.length;
    if (
      currentMessage.length > 0 &&
      !!currentMessage.replace(/\s/g, "").length
    ) {
      // If there's more than one message
      if (sentMessagesLength > 0) {
        // If it's been > 5 seconds since last message add new bubble
        if (
          time - sentMessages[sentMessagesLength - 1].timeEnd > 5000 ||
          sentMessages[sentMessagesLength - 1].bubbleColour === "white"
        ) {
          // console.log(">5::" + time - sentMessages[sentMessagesLength].timeEnd);
          this.setState({
            sentMessages: [
              ...this.state.sentMessages,
              {
                bubbleColour: "blue",
                message: this.state.currentMessage,
                timeStart: time,
                timeEnd: time,
              },
            ],
          });
          // If it's been < 5 seconds since last message add to bubble
        } else {
          const lastBubble = sentMessages[sentMessagesLength - 1];
          const removeLastMessage = this.state.sentMessages.slice(0, -1);
          this.setState({
            sentMessages: [
              ...removeLastMessage,
              {
                bubbleColour: "blue",
                message: lastBubble.message + "\n" + currentMessage,
                timeStart: lastBubble.timeStart,
                timeEnd: time,
              },
            ],
          });
        }

        // If there's no messages sent
      } else {
        this.setState({
          sentMessages: [
            {
              bubbleColour: "blue",
              message: this.state.currentMessage,
              timeStart: time,
              timeEnd: time,
            },
          ],
        });
      }
    }
    this.setState({ currentMessage: "" });
  }

  componentDidUpdate(prevProps, prevState) {
    const { sentMessages } = this.state;
    // Just to add fake responses
    if (
      prevState.sentMessages !== this.state.sentMessages &&
      sentMessages.length === 3
    ) {
      if (sentMessages[sentMessages.length - 1].bubbleColour !== "white") {
        const time = new Date().getTime();
        setTimeout(() => {
          this.setState({
            sentMessages: [
              ...this.state.sentMessages,
              {
                bubbleColour: "white",
                message: "Hey! Long time no speak! Whats up?",
                timeStart: time,
                timeEnd: time,
              },
            ],
          });
        }, 10);
      }
    }
  }

  render() {
    const messages = this.state.sentMessages;
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
                <h2 className="conversation-sender">{list[1][0]}</h2>
              </div>

              {/* Conversation Messages */}
              <div id="messages">
                {messages.map((messages) => {
                  if (messages.bubbleColour === "blue") {
                    return (
                      <div className="me bubble">
                        <p className="message-text">{messages?.message}</p>
                      </div>
                    );
                  } else if (messages.bubbleColour === "white") {
                    return (
                      <div className="them bubble">
                        <p className="message-text">{messages?.message}</p>
                      </div>
                    );
                  }
                })}
              </div>

              {/* Input Field */}
              <div id="input-container">
                <div id="input-field-decoraiton">
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      id="input-field"
                      value={this.state.currentMessage}
                      onChange={this.handleChange}
                    ></input>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
