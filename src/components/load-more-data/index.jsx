import { useEffect,useState } from 'react';
import './style.css'

export const LoadMoreData = () => {

    const [loading, setLoading] = useState(false
        );
        const [count, setCount] = useState(0);
        const [products, setProducts] = useState([]);
        const [disablebutton, setDisablebutton] = useState(false);

const fetchProducts = async() => {
        try {
            setLoading(true);
            const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count*20}`);
            const data = await res.json();
            console.log(data);
            if(data && data.products && data.products.length){
                setProducts((prevData)=>
                [...prevData, ...data.products]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
}
        useEffect(()=>{
fetchProducts();
        }, [count]);

        useEffect(()=>{
            if(products && products.length === 100)setDisablebutton(true);
        },[products])
        
        if(loading){
            return <div>Loading products!</div>
        }
return(
    <div className='load-more-container'>
        <div className='product-container'>
            {
                products && products.length 
                ? products.map((item)=>(
                    <div className='product' key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                ))
                : null
            }
        </div>
        <div className='button-container'>
            <button
            disabled={disablebutton}
            onClick={()=>setCount(count+1)}>Load More Products</button>{
                products.length
            }
        {
            disablebutton ? <p>you have reached to 100 products</p> : null
        }
        </div>
    </div>
)
}