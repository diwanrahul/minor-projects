import { Link, Outlet } from "react-router-dom";

const comp = [
  {
    name: "Accordion",
    path: "/accordion",
  },
  {
    name: "Weather",
    path: "/weather",
  },
  {
    name: "Tik-Tak-Toe",
    path: "/tiktaktoe",
  },
  {
    name: "TabTest",
    path: "/tabtest",
  },
  {
    name: "ScrollIndicator",
    path: "/scrollindicator",
  },
  {
    name: "LightDarkTheme",
    path: "/lightdarktheme",
  },
  {
    name: "QRCodeGenerator",
    path: "/grcodegenerator",
  },
 
  {
    name: "TreeView-menu",
    path: "/treeview",
  },
  {
    name: "StarRating",
    path: "/starrating",
  },
  {
    name: "RandomColor",
    path: "/randomcolor",
  },
  {
    name: "ImageSlider",
    path: "/imageslider",
  },
  
];

const Components = () => {
  return (
    <div className="h-full w-full bg-red-400 grid grid-cols-3 justify-center">
      {comp.map((item, index) => (
        <div
          key={index}
          className="w-32 h-32 flex items-center flex-col justify-center bg-purple-700 text-white m-2 p-2 rounded"
        >
          <h1>{item.name}</h1>
        
          <Link to={item.path} className="text-blue-300 hover:text-blue-500">
            Demo
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Components;
