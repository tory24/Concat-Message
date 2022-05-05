import React from "react";
import "../app.css";

function InputField(props) {
	return (
		<div id="input-container">
			<div id="input-field-decoraiton">
				<form onSubmit={props.handleSubmit}>
					<input
						type="text"
						id="input-field"
						value={props.currentMessage}
						onChange={props.handleChange}
					/>
				</form>
			</div>
		</div>
	);
}

export { InputField };
