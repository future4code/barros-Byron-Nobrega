import React from "react";

function InputGeral(props) {
  return (
    <div className="InputGeral">
      <div>
        <label>{props.texto}</label>
        <input type="text" id="lname" name="lname" />
      </div>
    </div>
  );
}

export default InputGeral;
