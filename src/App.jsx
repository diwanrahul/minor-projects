/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import Accordion from "./components/accordion/Accordion"
import ImageSlider from "./components/image-slider"
import RandomColor from "./components/RandomColor"
import StarRating from "./components/star-rating"
import { LoadMoreData } from "./components/load-more-data"
import TreeView from "./components/tree-view"
import menus from "./components/tree-view/data"
import QRCodeGenerator from "./components/QR-code-generator"
import LightDarkTheme from "./components/light-dark-theme"
import ScrollIndicator from "./components/scroll-indicator"
import TabTest from "./components/custom-tabs/tab-test"
import ModalTest from "./components/custom-modal-popup/modal-test"
import GithubProfileFinder from "./components/github-profile-finder"
import SearchAutocomplete from "./components/search-autocomplete"
import TikTacToe from "./components/tik-tak-toe"
import UseFetchHookTest from "./components/use-fetch/test"
import UseWindowResizeTest from "./components/use-windowsize/test"
import ScrollToSection from "./components/scroll-to-top-bottom"
import Weather from "./components/weather-app/Weather"
import {Routes, Route} from "react-router-dom"
import Components from "./components"
import MenuList from "./components/tree-view/menu-list"
// import Modal from "./components/custom-modal-popup/modal"
function App() {
  const url = "https://picsum.photos/v2/list";

  return (
  
    <>
    
      <Routes>
        
        <Route path="/" element={<Components />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/scrolltosection" element={<ScrollToSection />} />
        <Route path="/usewindowresizetest" element={<UseWindowResizeTest />} />
        <Route path="/usefetchhooktest" element={<UseFetchHookTest />} />
        <Route path="/tiktaktoe" element={<TikTacToe />} />
        <Route path="/searchautocomplete" element={<SearchAutocomplete />} />
        <Route path="/githubprofilefinder" element={<GithubProfileFinder />} />
        <Route path="/modaltest" element={<ModalTest />} />
        <Route path="/starrating" element={<StarRating />} />
        <Route path="/tabtest" element={<TabTest />} />
        <Route path="/scrollindicator" element={<ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />} />
        <Route path="/lightdarktheme" element={<LightDarkTheme />} />
        <Route path="/grcodegenerator" element={<QRCodeGenerator />} />
        <Route path="/treeview" element={<TreeView menus={menus}/>} />
        <Route path="/randomcolor" element={<RandomColor />} />
        <Route path="/imageslider" element={<ImageSlider />} />
        <Route path="/loadmoredata" element={<LoadMoreData />} />
      </Routes>
    </>
 
  )
}

export default App
