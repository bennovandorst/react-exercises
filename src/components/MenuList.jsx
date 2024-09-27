import { useState } from 'react';
import data from '../data';
import Menu from './Menu';
import '../css/Menu.css';


const MenuList = () => {
    const [menuItems] = useState(data);
    const capitalizeTitle = (title) => {
        return title.charAt(0).toUpperCase() + title.slice(1);
    };

    return ( 
        <>
        <div className="menuContainer">
            <div className="menuTitle">
                <h1>Our Menu</h1>
            </div>
            <div className="menuList">
                {menuItems.map((item) => (
                    <Menu 
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    desc={capitalizeTitle(item.desc)}
                    img={item.img}
                    />
                ))}
            </div>
        </div>
        </>
     );
}
 
export default MenuList;