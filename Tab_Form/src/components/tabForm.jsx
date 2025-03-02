import { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";

export default function TabForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [error, setError] = useState({})
  const [data, setData] = useState({
    name: "",
    age: '',
    email: "",
    interests: [],
    theme: "dark",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: ()=>{
        const err={}
        if(!data.name || data.name.length<2){
          err.name = "name not valide"
        }
        if(!data.age || data.age < 18){
          err.age = "age not valide"
        }
        if(!data.email || data.email.length<2){
          err.email = "email not valide"
        }
        setError(err)
        return err.name || err.age || err.email ? false : true ;
      }
    },
    {
      name: "Interest",
      component: Interest,
      validate: ()=>{
        const err={}
        if(data.interests.length < 1){
          err.interests= "Atleast put one interest"
        }
        setError(err)
        return err.interests ? false : true;
      }
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true
      }
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleTabClick = (index) => {
    if(tabs[activeTab].validate()){
      setActiveTab(index);
    }
  };

  const handleSubmitButton = () => {
    console.log("data", data)
  }

  const handlePrevButton= () => {
    if(tabs[activeTab].validate()){
      setActiveTab((prev) => prev - 1)
    }
  }

  const handleNextButton = () => {
    if(tabs[activeTab].validate()){
      setActiveTab((prev) => prev + 1)
    }
  }

  return (
    <>
      <div className="headingContainer">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => handleTabClick(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tabBody">
        <ActiveTabComponent data={data} setData={setData} error={error}/>
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevButton}>prev</button>}
        {activeTab < tabs.length-1 && <button onClick={handleNextButton}>next</button>}
        {activeTab === tabs.length-1 && <button onClick={handleSubmitButton}>Submit</button>}
      </div>
    </>
  );
}
