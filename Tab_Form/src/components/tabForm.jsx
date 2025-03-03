import { useState } from "react"
import InterestForm from "./interest"
import Profile from "./profile"
import Settings from "./settings"

export default function TabFrom (){
  const [activeTab, setActiveTab ] = useState(0)
  const [data, setData] = useState({
    name:"",
    age: "",
    email: "",
    interests: [],
    theme: "dark"
  })

  const [error, setError ] = useState({})

  const tabs = [
    {
      "name": "profile",
      component: Profile,
      validate: () => {
        const err={}
        if(data.name.length <2 ){
          err.name = "Invalide name"
        }
        if(data.age <18 ){
          err.age = "Invalide age"
        }
        if(data.email <2 ){
          err.email = "Invalide email"
        }
        setError(err)
        return err.name || err.age || err.email ? false : true
      }
    },
    {
      "name": "interest",
      component: InterestForm,
      validate: () => {
        const err = {}
        if(data.interests.length < 1){
          err.interests="Add atleast one"
        }
        setError(err)
        return err.interests ? false : true;
      }
    },
    {
      "name": "settings",
      component: Settings,
      validate : () => {
        return true
      }
    }
  ]

  const ActiveTabComponent = tabs[activeTab].component;

  const handleTabClick = (index) => {
    if(tabs[activeTab].validate()){
      setActiveTab(index)
    }
  }

  const handlePrevButton = () => {
    if(tabs[activeTab].validate()){
      setActiveTab((prev) => prev-1)
    }
  }

  const handleNextButton = () => {
    if(tabs[activeTab].validate()){
      setActiveTab((prev) => prev+1)
    }
  }

  const handleSubmitButton = () => {
    alert("submited");
    console.log(data)
  }

  return (
    <div>
      <div className="headingContainer">
        {tabs.map((tab,index) => (
          <div 
            className="heading" 
            key={index}
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="mainContainer">
        <ActiveTabComponent data={data} setData={setData} error={error}/>
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevButton}>Prev</button>}
        {activeTab < tabs.length - 1 && <button onClick={handleNextButton}>Next</button>}
        {activeTab === tabs.length - 1 && <button onClick={handleSubmitButton}>Submit</button>}
      </div>
    </div>
  )
}