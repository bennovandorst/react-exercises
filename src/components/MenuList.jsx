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
        <div className="menuTitle">
            <h1>Our Menu</h1>
        </div>
        <div className="menuList">
            {menuItems.map((item) => (
                <Menu 
                  key={item.id}
                  title={capitalizeTitle(item.title)}
                  price={item.price}
                  desc={item.desc}
                  img={item.img}
                />
            ))}
        </div>
        </>
     );
}
 
export default MenuList;