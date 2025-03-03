import { useState } from "react"

export default function InterestForm({data, setData, error}) {
  const { interests } = data
  const [newInterest, setNewInterest] = useState('')

  const handleAddINterest = () => {
    if(newInterest.length === '' ) return
    setData((prevState) => ({
      ...prevState,
      interests: [...prevState.interests, newInterest]
    }))
    setNewInterest('')
  }

  const handleRemove = (removeIndex) => {
    setData((prevState) => ({
      ...prevState,
      interests: interests.filter((_,i) => i !== removeIndex)
    }))
  }

  return (
    <div>
      <label>
        Add interest:
        <input 
          type="text"
          value={newInterest}
          onChange={(e) => setNewInterest(e.target.value)} 
          placeholder="Enter a new Interest"
        />
        <button onClick={handleAddINterest}>Add</button>
      </label>
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
  