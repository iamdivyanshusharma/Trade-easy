import React, {useState} from 'react'; // importing a hook from the react library here 

import {Link} from 'react-router-dom';

function Menu() {

    const [selectedMenu, setSelectedMenu ] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen ] = useState(false);

    const handleMenuClick = (index) => 
        {
            setSelectedMenu(index);
        };

    const handleProfileClick = (index) => 
        {
            setIsProfileDropdownOpen(!isProfileDropdownOpen);
        };

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    return ( 
        <div class='menu-container'>
            <img src='media/logo.png' alt='logo' style={{width:"30px"}}/>
            <span class='brand'><p><b>TRADE-EASE</b></p></span>
            <div class='menus' style={{fontSize:"15px"}}>
                <ul>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/" onClick={() => handleMenuClick(0)} >
                            <p className={selectedMenu===0 ? activeMenuClass : menuClass}>Dashboard</p>
                        </Link>
                    </li>

                    <li>
                        <Link style={{textDecoration:"none"}} to="/orders" onClick={() => handleMenuClick(1)} >
                            <p className={selectedMenu===1 ? activeMenuClass : menuClass}>Orders</p>
                        </Link>
                    </li>
                    
                    <li>
                        <Link style={{textDecoration:"none"}} to="/holdings" onClick={() => handleMenuClick(2)} >
                            <p className={selectedMenu===2 ? activeMenuClass : menuClass}>Holdings</p>
                        </Link>
                    </li>

                    <li>
                        <Link style={{textDecoration:"none"}} to="/positions" onClick={() => handleMenuClick(3)} >
                            <p className={selectedMenu===3 ? activeMenuClass : menuClass}>Positions</p>
                        </Link>
                    </li>

                    <li>
                        <Link style={{textDecoration:"none"}} to="/funds" onClick={() => handleMenuClick(4)} >
                            <p className={selectedMenu===4 ? activeMenuClass : menuClass}>Funds</p>
                        </Link>
                    </li>

                    <li>
                        <Link style={{textDecoration:"none"}} to="/apps" onClick={() => handleMenuClick(5)} >
                            <p className={selectedMenu===5 ? activeMenuClass : menuClass}>Apps</p>
                        </Link>
                    </li>
                </ul>
                <hr />
                <div class='profile' onClick={handleProfileClick}>
                    <div class='avatar'> Y K </div>
                    <p class='username'> Yash </p>
                </div>
            </div>
        </div>
     );
}

export default Menu;