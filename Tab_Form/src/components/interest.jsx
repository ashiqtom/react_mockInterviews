import { useState } from "react";

export default function Interest({ data, setData, error}) {
  const { interests } = data;
  const [newInterest, setNewInterest] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newInterest.trim()==='') return;

    setData((prevState) => ({
      ...prevState,
      interests: [...prevState.interests, newInterest]
    }))
    setNewInterest('');
  }

  const handleRemove = (indexToRemove) => {
    setData((prevState) => ({
      ...prevState,
      interests: prevState.interests.filter((_, index) => index !== indexToRemove),
    }));
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newInterest}
          onChange={e => setNewInterest(e.target.value)}
          placeholder="Enter a new Interest"
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {interests.map((interest, index) => (
          <div key={index}>
            {interest}
            <button onClick={() => handleRemove(index)}>-</button>
          </div>
        ))}
      </div>
      {error.interests && <span className="error">{error.interests}</span>}
    </div>
  );
}
  