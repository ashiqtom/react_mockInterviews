export default function Profile ({data, setData, error}) {
  const {name, age, email } = data;

  const handleInputChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value
    }))
  }
  //React relies on immutability for state updates.
    //The spread operator (...prevState) creates a new object
    //rather than mutating the old one.
  return(
    <div className="profile">
        <label >
          name: 
          <input 
            type="text" 
            value={name} 
            onChange={(e) => handleInputChange(e, "name")}
          />
          {error.name && <span className="error">{error.name}</span>}
        </label>   
        <label >
          age: 
          <input 
            type="number" 
            value={age} 
            onChange={(e) => handleInputChange(e, "age")}
          />
          {error.age && <span className="error">{error.age}</span>}
        </label>    
        <label >
          email: 
          <input 
            type="text" 
            value={email} 
            onChange={(e) => handleInputChange(e, "email")}
          />
          {error.email && <span className="error">{error.email}</span>}
        </label>      
    </div>
  )
}