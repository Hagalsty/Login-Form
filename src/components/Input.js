import React from "react";

function Input({ type, pHolder, onChange, required }) {
  return (
    <React.Fragment>
      <input type={type} placeholder={pHolder} onChange={onChange} />
      {required ? <span className="require">Required</span> : null}
    </React.Fragment>
  );
}

export default Input;
