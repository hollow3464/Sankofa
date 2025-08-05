import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./layout.css";
import { useState } from "react";
import Menu from "../../Components/offcanvasMenu/Menu";
import { Notifications } from "../../Components/offcanvasNotifications/Notifications";

function Layout() {
    const [openNav, setOpenNav] = useState(false);
    const [openNotifications, setOpenNotifications] = useState(false);

    const handleMenu = () => { setOpenNav(!openNav) };

    const handleNotifications = () => { setOpenNotifications(!openNotifications) };

    return (
        <>
            <Navbar
                handleMenu={handleMenu}
                handleNotifications={handleNotifications}
            />

            <Menu option={openNav} handleMenu={handleMenu} />

            <Notifications
                show={openNotifications}
                handleNotifications={handleNotifications}
            />

            <section className="layer-container">
                <Outlet />
            </section>
        </>
    );
}

export default Layout;
