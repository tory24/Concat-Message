import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import { Conversations } from "./components/conversations";
import { InputField } from "./components/inputfield";
import { MainMessage } from "./components/mainMessage";

const list = [
	["Chelsi Bielovich", "Hey, hru?'"],
	["Tom Cave", "I'm a dweeb"],
	["Tristan Casey", "Freeze! Imma shoot!"],
	["Olivia Bielovich", "Pilates time?"],
	["ABC123", "Hi, do you know your alphabet?"],
	["Hello,", "I am your father."],
	["Chizle", "Get ripped quick! $1 million!"],
	["Leslie", "Black widow suxxz"],
	["Chizle", "Get ripped quick! $1 million!"],
	["Leslie", "Busy?"],
	["Chizle", "Hey how are you!"],
	["Leslie", "Black widow suxxz"],
	["Chizle", "Got a min"],
	["Leslie", "Black widow suxxz"],
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
	}

	handleChange = (event) => {
		this.setState({ currentMessage: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { currentMessage, sentMessages } = this.state;
		if (currentMessage.length <= 0 || !currentMessage.replace(/\s/g, "").length)
			return;

		const time = new Date().getTime();

		// If there's more than one message
		if (sentMessages.length > 0) {
			const lastMessage = sentMessages[sentMessages.length - 1];
			// If it's been > 5 seconds since last message add new bubble
			if (
				time - lastMessage.timeEnd > 5000 ||
				lastMessage.bubbleColour === "white"
			) {
				this.setState((prevState) => ({
					sentMessages: [
						...prevState.sentMessages,
						{
							bubbleColour: "blue",
							message: currentMessage,
							timeStart: time,
							timeEnd: time,
						},
					],
					currentMessage: "",
				}));
				// If it's been < 5 seconds since last message add to bubble
			} else {
				this.setState((prevState) => ({
					sentMessages: [
						...prevState.sentMessages.slice(0, -1),
						{
							bubbleColour: "blue",
							message: lastMessage.message + "\n" + currentMessage,
							timeStart: lastMessage.timeStart,
							timeEnd: time,
						},
					],
					currentMessage: "",
				}));
			}
			// If there's no messages sent
		} else {
			this.setState({
				sentMessages: [
					{
						bubbleColour: "blue",
						message: currentMessage,
						timeStart: time,
						timeEnd: time,
					},
				],
				currentMessage: "",
			});
		}
	};

	componentDidUpdate(prevProps, prevState) {
		const { sentMessages } = this.state;
		// Just to add fake responses
		if (
			prevState.sentMessages !== this.state.sentMessages &&
			sentMessages.length === 3
		) {
			if (sentMessages[sentMessages.length - 1].bubbleColour !== "white") {
				setTimeout(() => {
					const time = new Date().getTime();
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
		const { sentMessages, currentMessage } = this.state;

		return (
			<div id="page-container">
				<h1 id="header">Concat Message</h1>
				<div id="message-container">
					<Conversations list={list} />
					<div id="conversation-container">
						<div id="message-sender">
							<h2 className="conversation-sender">{list[1][0]}</h2>
						</div>
						<MainMessage sentMessages={sentMessages} />
						<InputField
							handleSubmit={this.handleSubmit}
							handleChange={this.handleChange}
							currentMessage={currentMessage}
						/>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
