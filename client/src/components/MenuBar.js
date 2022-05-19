import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
//import { Link } from 'react-router-dom';           

//import { AuthContext } from '../context/auth';

function MenuBar() {
    //const { user, logout } = useContext(AuthContext);
    //const pathname = window.location.pathname;

    //const path = pathname === '/' ? 'home' : pathname.substr(1);
    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <Menu pointing secondary >
            <Menu.Item
                name="home"
                active={activeItem === 'home'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name="home"
                active={activeItem === 'home'}
                onClick={handleItemClick}
            />

            <Menu.Menu position="right">
                <Menu.Item
                    name="login"
                    active={activeItem === 'login'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name="register"
                    active={activeItem === 'register'}
                    onClick={handleItemClick}
                />
            </Menu.Menu>
        </Menu>
    )
}

export default MenuBar;
