import '../css/Menu.css'

const Menu = ({title, img, desc, price}) => {
    return ( 
        <>
            <div className="menuContainer">
                <img src={img} alt="" />
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <div className="price">
                    <span>${price}</span>
                </div>
                <div className="desc">
                    <span>{desc}</span>
                </div>
            </div>
        </>
     );
}
 
export default Menu;