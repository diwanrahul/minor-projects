/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import './scroll.css'
export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const res = await fetch(getUrl);
      const data = await res.json();
      // console.log(data);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  const handleScrollPercentage = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  // console.log(scrollPercentage);
  useEffect(() => {
    fetchData(url);
  }, [url]);

  if(loading){
    return <div>Loading data! Please wait</div>
  }

  if(errorMessage){
    return <div>Error! {errorMessage}</div>
  }
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>

        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem, index) => <p key={index}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
