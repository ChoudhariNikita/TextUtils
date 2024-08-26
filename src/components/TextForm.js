import React, { useState } from "react";
import "./TextForm.css";

export default function TextForm(props) {
  const [text, setText] = useState("");
  let myStyle = {
    backgroundColor: "#cbe9f3",
  };

  const [showPopup, setShowPopup] = useState(false); // State to control the popup visibility

  const handleUpClick = () => {
    if (text === null || text === undefined) {
      console.log("Text is null or undefined, cannot convert to upper case");
      return;
    }
    console.log("Set upper case button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase", "success");
  };

  const handleLowClick = () => {
    if (text === null || text === undefined) {
      console.log("Text is null or undefined, cannot convert to lower case");
      return;
    }
    console.log("Set lower case button clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase", "success");

  };

  const handleCopyClick = () => {
    if (text && text.trim() !== "") {
      // Check if text is not empty
      navigator.clipboard.writeText(text);

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");

  };

  const handleClearClick = () => {
    console.log("Clear text button clicked");
    let newText = "";
    setText(newText);
  };

  const handleTextChange = (event) => setText(event.target.value);

  return (
    <>
      <div>
        <h1>
          {props.heading}{" "}
        </h1>
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
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mxx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-dark mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-custom mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
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
        <p>{text}</p>
      </div>

      {/* Popup Notification */}
      {showPopup && <div className="popupcontainer">Copied to Clipboard!</div>}
    </>
  );
}
