/* eslint-disable no-unused-vars */
import User from "./user";
import { useEffect, useState } from "react";
export default function GithubProfileFinder(){

    const [username, setUsername] = useState("diwanrahul");
    const [userData, setUserData] = useState(null);

function handleSubmit (){

}
    const fetchData = async()=>{
        try {
            const res = await fetch(`https://api.github.com/users/${username}`);

        const data = await res.json();
        if(data){
            setUserData(data);
        }
        console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input type="text" name="search-by-username" 
                placeholder="Search Github Username..." 
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>

                <button onClick={handleSubmit}>
                    Search
                </button>
                <div>
                    {userData && <User user={userData} />}
                </div>
            </div>
        </div>
    )
}