import React from "react";

function InputGeral(props) {
  return (
    <div className="InputGeral">
      <div>
        <p>{props.texto}</p>
        <input type="text" id="lname" name="lname" />
      </div>
    </div>
  );
}

export default InputGeral;
