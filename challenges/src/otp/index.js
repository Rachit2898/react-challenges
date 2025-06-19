import React, { useState, useRef } from "react";

function OTP() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRef = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted OTP:", otp.join(""));
  };

  const handleOtp = (e, index) => {
    const { value } = e.target;
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRef.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="m-4 w-1/4">
      <div className="flex flex-row m-2 justify-between">
        {otp.map((_, index) => (
          <input
            key={index}
            onChange={(e) => handleOtp(e, index)}
            inputMode="numeric"
            maxLength={1}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="border border-red-300 ml-4 w-10 h-12 rounded-lg text-center"
            type="text"
            ref={(el) => {
              if (el) inputRef.current[index] = el;
            }}
          />
        ))}
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default OTP;
