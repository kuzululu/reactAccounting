import React from "react";

const MessengerButton = () => {
  const handleClick = () => {
    // Replace with your actual page username or ID
    window.open("https://m.me/702948410077187", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        backgroundColor: "#0624BD",
        color: "#CCCDCF",
        border: "5px solid #C4C4BE",
        padding: "12px 16px",
        borderRadius: "50px",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        zIndex: 9999,
      }}
    >
      💬 Message Us
    </button>
  );
};

export default MessengerButton;
