import { useRef } from "react"


export default function ScrollToSection(){

    const ref = useRef(null);



    const data = [
        {
            lable : "first",
            style:{
                width: "100%",
                height: "600px",
                background: "red",
            }
        },
        {
            lable : "second",
            style:{
                width: "100%",
                height: "600px",
                background: "orange",
            }
        },
        {
            lable : "third",
            style:{
                width: "100%",
                height: "600px",
                background: "blue",
            }
        },
        {
            lable : "fourth",
            style:{
                width: "100%",
                height: "600px",
                background: "green",
            }
        },
    ]

    const handleToScroll = () => {
        let pos = ref.current.getBoundingClientRect().top;

        window.scrollTo({
            top: pos,
            behavior: "smooth",
        });
    }

    return(
        <div>
            <h1>Scroll to A Section</h1>
            <button onClick={handleToScroll}>Scroll</button>
            {
                data.map((item, index)=>{
                    return <div 
                    style={item.style} 
                    key={index} 
                    ref={index === 3  ? ref : null}   className="text-center mt-5">
                        <h1 >{item.lable}</h1>
                    </div>
                })
            }
        </div>
    )
}