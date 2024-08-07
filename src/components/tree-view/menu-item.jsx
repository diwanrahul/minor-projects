/* eslint-disable react/prop-types */
import { useState } from "react";
import MenuList from "./menu-list"
import {FaMinus, FaPlus} from "react-icons/fa6"

export default function MenuItem({item}){
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    const handleToggleChildren= (getCurrentLabel)=> {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]:!displayCurrentChildren[getCurrentLabel],
        });
    }

    console.log(displayCurrentChildren);
    return (
        <li className="ml-8">
            <div className="flex gap-2 items-center">
                <p>{item.label}</p>
                {
            item && item.children && item.children.length > 0
            ? (
                <span
                className="cursor-pointer"
                onClick={()=> handleToggleChildren(item.label)}>
                    {
                        displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={20}/> : <FaPlus color="#fff" size={20}/>
                    }
                </span>
            )
            : null
           }
            </div>
           
           {
            item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]
            ? (<MenuList list={item.children} />)
            : null
           }
        </li>
    )
} 