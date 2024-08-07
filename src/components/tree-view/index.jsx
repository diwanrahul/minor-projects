/* eslint-disable react/prop-types */
import MenuList from './menu-list'
import './style.css'

export default function TreeView({menus = []}){
    return(
        <div>
            <MenuList list={menus}/>
        </div>
    )
}