export default function Settings ({data, setData}) {
  const { theme } = data
  const availableTheme = ['white', 'dark', 'auto']
  
  const handleTheme = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.value
    }))
  }
  return (
    <div className="settings">
      <h3>Select Theme:</h3>
      <div className="theme-options">
        {availableTheme.map((t, index) => (
          <label key={index} className="theme-options">
            <input 
              type="radio" 
              checked={t===theme}
              onChange={handleTheme}
              value={t}
            />
            {t}
          </label>
        ))}
      </div>
    </div>
  )
}