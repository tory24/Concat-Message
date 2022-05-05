import React from "react";
import "../app.css";

function Conversations(props) {
	return (
		<div id="message-conversations">
			{props.list.map((message) => (
				<div className="conversations">
					<h3 style={{ margin: 0 }}>{message[0]}</h3>
					<p className="conversation-preview">{message[1]}</p>
				</div>
			))}
		</div>
	);
}

export { Conversations };
