import { useEffect, useState } from "react";
import Suggestions from "./suggestion";


export default function SearchAutocomplete(){
    
    // const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    // const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("");
    const [showDropDown, setShowDropDown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleChange= (e)=>{
        const query = e.target.value.toLowerCase();
        setSearchParam(query);
        if(query.length > 1){
            // setLoading(true);
            const filteredData = users && users.length 
            ? users.filter((item)=>item.toLowerCase().indexOf(query) > -1)
            : [];
            setFilteredUsers(filteredData);
            setShowDropDown(true)
        }else{
            setShowDropDown(false);
        }
    }

    const fetchUsers = async ()=>{
        try {
            // setLoading(true);
            const res = await fetch("https://dummyjson.com/users");
            const data = await res.json();
            
            if(data && data.users && data.users.length){
                setUsers(data.users.map((user)=> user.firstName));
                // setLoading(false);
                // setError(null);
            } 
            console.log(users);
            // setLoading(false);
        } catch (error) {
            console.log(error);
            // setError(error);
            // setLoading(false);
        }
    }
    console.log(filteredUsers);
    useEffect(()=>{
        fetchUsers();
    },[]);

    const handleClick = (e)=>{
        console.log(e.target.innerText);
        setShowDropDown(false);
        setSearchParam(e.target.innerText);
        setFilteredUsers([]);
    }
    return (
        <div className="search-autocomplete">

            <input 
            onChange={handleChange}
            value={searchParam} type="text" placeholder="Search Users here..." />
            {
                showDropDown && <Suggestions data={filteredUsers}
                handleClick={handleClick} />
            }
        </div>
    )
}