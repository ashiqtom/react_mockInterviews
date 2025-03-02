import React from "react";

function Settings({data, setData}) {
  const { theme } = data;

  const availableThemes = ["light", "dark", "auto"]; // Adjust as needed

  const handleThemeChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.value, // Update theme with selected value
    }));
  };

  return (
    <div className="settings">
      <h3>Select Theme:</h3>
      <div className="theme-options">
        {availableThemes.map((t, index) => (
          <div key={index} className="theme-option">
            <label>
              <input
                type="radio"
                name="theme"
                value={t}
                checked={theme === t}
                onChange={handleThemeChange}
              />
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Settings;