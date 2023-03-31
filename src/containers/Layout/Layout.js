import "./Layout.css"
import Navbar from "../../components/Navigation/NavBar/Navbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { useState } from 'react';


const Layout = (props) => {
      
    const [showSideDrawer, setShowSideDrawer] = useState(false)


   const sideDrawerClosedHandler = () => {

        setShowSideDrawer(false)
       
    }

   const sideDrawerToggleHandler = () => {
        setShowSideDrawer(prevValue => !prevValue)
    }
     
        return (
            <div>
                <Navbar  
                drawerToggleClicked={sideDrawerToggleHandler} />
                <SideDrawer
                    open={showSideDrawer}
                    closed={sideDrawerClosedHandler} />
                <main className="Content">
                    {props.children}
                </main>
            </div>
        )
}



export default Layout;

