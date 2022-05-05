import React from "react";
import "../app.css";

function MyMessage(props) {
	return (
		<div className="me bubble">
			<p className="message-text">{props.message}</p>
		</div>
	);
}

function SenderMessage(props) {
	return (
		<div className="them bubble">
			<p className="message-text">{props.message}</p>
		</div>
	);
}

function MainMessage(props) {
	return (
		<div id="messages">
			{props.sentMessages.map((messages) => {
				return (
					<>
						{messages.bubbleColour === "blue" ? (
							<MyMessage message={messages?.message} />
						) : (
							<SenderMessage message={messages?.message} />
						)}
					</>
				);
			})}
		</div>
	);
}

export { MainMessage };
