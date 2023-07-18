import { useState, Fragment, useEffect } from "react";
import OtpInput from "react-otp-input";

export const Otp = ({ value, onChange }) => {
  return (
    <OtpInput
      value={value}
      onChange={onChange}
      numInputs={8}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input className="input" {...props} />}
    />
  );
};
