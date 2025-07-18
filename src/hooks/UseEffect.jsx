import React, { useState, useEffect } from "react";

function Counter() {
  const [theme, settheme] = useState("light");

  useEffect(() => {
    const savedtheme = localStorage.getItem("theme") || "light";
    settheme(savedtheme);
    document.body.className = savedtheme;
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  const toggletheme = () => {
    settheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <button
        onClick={toggletheme}
        className="flex items-center justify-center h-screen ml-28 "
      >
        click me
      </button>
      <br />
    </div>
  );
}
export default Counter;
