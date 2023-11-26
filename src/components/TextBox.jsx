import { useState } from "react";
import "../index.css";

const TextBox = (props) => {
  // const [text, setText] = useState("Enter your text here"); //here text is variable setText is function which takes value as argument which will update the variable text.
  const [text, setText] = useState(""); //here text is variable setText is function which takes value as argument which will update the variable text.

  /*
  text = 'hello' //wrong way of changing value of text variable
  text('hello') //right way of changing value of text variable 
  */

  //function to set the typed value to text variable, state variable
  const handleChange = (event) => {
    setText(event.target.value);
  };

  //function to do change text to uppercase on click
  const handleUpClick = () => {
    setText(text.toUpperCase());
    if (text.length - text.split(" ").length + 1 > 0) {
      props.showalert("Text is capilatized!", "success");
    } else {
      props.setAlertMsg(null);
    }
  };

  //function to do change text to lowercase on click
  const handleLwrClick = () => {
    setText(text.toLowerCase());
    if (text.length - text.split(" ").length + 1 > 0) {
      props.showalert("Text is lower cased!", "success");
    } else {
      props.setAlertMsg(null);
    }
  };

  //function to do copy text to clipboard on click
  const handleCopyText = () => {
    let copyText = document.querySelector(".textInput");
    copyText.select();
    document.execCommand("copy");
    document.getSelection().removeAllRanges()
    if (text.length - text.split(" ").length + 1 > 0) {
      props.showalert("Text copied!", "success");
    } else {
      props.setAlertMsg(null);
    }
  };

  //function to do change remove extra spaces on click
  const handleRemoveExtraSpace = () => {
    const textWithoutExtraSpace = text.replace(/\s+/g, " ").trim();
    setText(textWithoutExtraSpace);
    if (text.length - text.split(" ").length + 1 > 0) {
      if (text.split(" ").length - 1 > 0) {
        props.showalert("Extra spaces removed!", "success");
      } else {
        props.setAlertMsg(null);
      }
    } else {
      props.setAlertMsg(null);
    }
  };

  const handelTextClear = () => {
    setText("");
    if (text.length - text.split(" ").length + 1 > 0) {
      props.showalert("Text is cleared!", "success");
    } else {
      props.setAlertMsg(null);
    }
  };

  return (
    <>
      <div className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className={`placeHoldDark textInput form-control border border-${
              props.mode === "dark" ? "light" : "secondary"
            } shadow-sm bg-${props.mode === "dark" ? "dark" : "light"} text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleChange}
            placeholder="Enter your text here"
          ></textarea>
        </div>

        <div className="">
          <button
            className="btn btn-outline-success mx-1 my-1"
            onClick={handleUpClick}
          >
            Upper Case
          </button>

          <button
            className="btn btn-outline-success mx-1 my-1"
            onClick={handleLwrClick}
          >
            Lower Case
          </button>

          <button
            className="btn btn-outline-success mx-1 my-1"
            onClick={handleCopyText}
          >
            Copy Text
          </button>
          <button
            className="btn btn-outline-success mx-1 my-1"
            onClick={handleRemoveExtraSpace}
          >
            Remove Extra Space
          </button>
          <button
            className="btn btn-outline-success mx-1 my-1"
            onClick={handelTextClear}
          >
            Clear Text
          </button>
        </div>

        <div className="container my-3">
          <h4>Your text summary:</h4>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length != 0;
              }).length
            }{" "}
            words and {text.length - text.split(/\s+/).filter((element) => {
                return element.length != 0;
              }).length} characters
            typed.
          </p>
          <p>
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length != 0;
              }).length}{" "}
            minutes read
          </p>
          <h5>Preview</h5>
          <p className="">{text.length > 0 ? text : "Enter text to preview"}</p>
        </div>
      </div>
    </>
  );
};

export default TextBox;
