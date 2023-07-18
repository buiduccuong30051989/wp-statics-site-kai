import { useState, Fragment, useEffect } from "react";
import OtpInput from "react-otp-input";

export const PageLuckyNumber = () => {
  const [otps, setOtps] = useState([]);
  const [otp, setOtp] = useState("");

  // @TODO: get user info to show otp more or less
  useEffect(() => {
    const total = 800;
    if (total >= 800) {
      setOtps(Array(6).fill(""));
    } else {
      setOtps(Array(1).fill(""));
    }
  }, []);

  const handleChange = (data, i) => {
    const newOtps = [...otps];
    newOtps[i] = data;
    setOtps(newOtps);
  };

  return (
    <div className="p-register py-8">
      <div className="container">
        <div className="register-inner flex justify-center">
          <div className="order-confirm-form space-y-6">
            {otps.map((i, index) => (
              <OtpInput
                key={index}
                value={i}
                onChange={(data) => handleChange(data, index)}
                numInputs={8}
                renderSeparator={<span className="px-4"></span>}
                renderInput={(props) => {
                  return (
                    <input
                      {...props}
                      className="input text-red-900 !w-12 !h-12"
                    />
                  );
                }}
              />
            ))}
            {otps.length === 1 && (
              <p className="text-center">Order set chibiX5 for more changes!</p>
            )}
            <div className="flex justify-center pt-8">
              <button className="btn-main lg min-w-[160px]">Finish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
