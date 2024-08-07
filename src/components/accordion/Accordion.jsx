import React, {useState} from 'react'
import Data from "./data"
export default function Accordion() {

    const [enableMultiPleAccordion, setEnableMultiPleAccordion] = useState(false);
    const [multiple, setMultiple] = useState([]);
const [selected, setselected] = React.useState(null);
    const handleSingleAccordion = (id) =>{
// console.log(id);
setselected(id === selected ? null : id);
    }

    const handleMultiSelection = (id) => {

        let cpyMultiple = [...multiple];
        let findIndexOfCurrentId = multiple.indexOf(id);

        findIndexOfCurrentId == -1
        ? cpyMultiple.push(id)
        : cpyMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMultiple);
    }
// console.log(enableMultiPleAccordion);
   
  return (
    <div className='flex justify-center items-center mt-[100px] flex-col gap-5 '>
        <button
       
         className={`${enableMultiPleAccordion ? "bg-blue-200 outline" : "bg-blue-700 text-white" } p-2 text-center hover:bg-blue-700 hover:text-white transition-all`}
         onClick={()=>setEnableMultiPleAccordion(!enableMultiPleAccordion)}>Enable Multiple accordion Selection  :{enableMultiPleAccordion? "true" : "false" }</button>
        <div className='flex flex-col gap-3 '>
            {
               Data.map((dataItem)=>(
                    <div key={dataItem.id} className='bg-orange-500 p-3 w-[500px] gap-5 flex flex-col'>
                        <div onClick={
                            enableMultiPleAccordion 
                            ? ()=>handleMultiSelection(dataItem.id)
                            :()=> handleSingleAccordion(dataItem.id)
                        } 
                        className='flex  justify-between '>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                       <div className='bg-orange-600'>
                       {
                            selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <p>{dataItem.content}</p>:null
                        }
                       </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
