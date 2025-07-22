import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

// In frontend terms, any shared piece of UI that should be rendered on every page is called a layout.
// In this case, the Navbar is a shared component that should be displayed on every page of the application.

function Layout () {

    return(
        <>
        <Navbar/>  {/* Navbar will be rendered on every page */}
        <Outlet/> {/* Outlet will render the child routes */}
        </>
    )

}
export default Layout;