import React from "react";

const Alert = (props) => {
  //function to capatalize first letter of given string in paramater/argument
  const firstupper = (word) => {
    const lwr = word.toLowerCase();
    return lwr.charAt(0).toUpperCase() + lwr.slice(1);
  };

  return (
    // if props.alert is false or null then code after && wont be evaluated but if its true or there is smth then it will give code after &&
    <div style={{ height: "3.5rem", marginTop: "-2rem" }}>
      {props.alertMsg && (
        <div className="alert alert-success px-5" role="alert">
          {firstupper(props.alertMsg.type)}! {props.alertMsg.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;
