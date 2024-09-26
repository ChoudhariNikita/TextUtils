import React, { useState } from "react";
import "./TextForm.css";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State to control the popup visibility

  let myStyle = {
    backgroundColor: "#cbe9f3",
  };

  const handleUpClick = () => {
    if (text.trim() === "") {
      props.showAlert("Please enter some text", "warning");
      return;
    }
    console.log("Set upper case button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase", "success");
  };

  const handleLowClick = () => {
    if (text.trim() === "") {
      props.showAlert("Please enter some text", "warning");
      return;
    }
    console.log("Set lower case button clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase", "success");
  };

  const handleCopyClick = () => {
    if (text.trim() === "") {
      props.showAlert("Please enter some text to copy", "warning");
      return;
    }
    // Check if text is not empty
    navigator.clipboard.writeText(text);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    if (text.trim() === "") {
      props.showAlert("Please enter some text to remove extra spaces", "warning");
      return;
    }
    let newText = text.split(/[ ]+/);
    if (newText.length > 1) {
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed", "success");
    }
  };

  const handleClearClick = () => {
    if (text.trim() === "") {
      props.showAlert("Nothing to clear", "warning");
      return;
    }
    console.log("Clear text button clicked");
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleTextChange = (event) => setText(event.target.value);

  return (
    <>
      <div>
        <h1>{props.heading} </h1>
        <div className="mb-3 my-4">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            placeholder="Enter text here"
            value={text}
            onChange={handleTextChange}
            style={myStyle}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-1 my-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-dark mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button
          className="btn btn-custom mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
        <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div className="container my-4">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((word) => word !== "").length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").filter((word) => word !== "").length} Minutes
          read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text in the box to preview"}</p>
      </div>

      {/* Popup Notification */}
      {showPopup && <div className="popupcontainer">Copied to Clipboard!</div>}
    </>
  );
}
