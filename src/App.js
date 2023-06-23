import React,{useState,useEffect} from "react";

// npm i axios to install axios & it is used in behalf of fetch()
import axios from "axios";

const App = ()=>{

  const [name,setName] = useState("");
  const [userData,setUserData] = useState("")

  /* since the name input is changing at every input character so thats why useEffect is 
     rendering again & again and for this the time limit of an api go exceed and so we use
     normal function that runs when click on something like button
  */   
  // useEffect(()=>{
     
  //     axios.get(`https://api.github.com/users/${name}`)
  //     .then(res=>{
  //       // console.log(res.status)
  //       setUserData(res.data)})
  //     .catch(err=>{console.log(err)
  //            setUserData("");
  //     })

  // },[name])
  function fetchData(){
    axios.get(`https://api.github.com/users/${name}`)
      .then(res=>{
        // console.log(res.status)
        setUserData(res.data)})
      .catch(err=>{console.log(err)
             setUserData("");
      })
  }

  return (
    <div>
        <input
          type="text"
          placeholder="Enter your github username"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        ></input>
        <button onClick={fetchData}>find user</button>
        {
          userData==""?<h1>user not found</h1>:
                    <div>
                        <h1>{userData.name}</h1>
                        <img src={userData.avatar_url} alt="profilePic" style={{width:"200px"}}></img>
                        <h2>followers: {userData.followers}</h2>
                        <h2>following: {userData.following}</h2>
                        <a href={userData.html_url}>Link to your profile</a>
                    </div>
        }
    </div>
  )
}

export default App;