import React,{useState,useEffect} from 'react'
import logo from './logo-svg.png';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src={logo} alt="sabre logo"/>

            <img className="nav_avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFD2ZL30MnfDTULzrykvGVikNahNMFmHwqcA&usqp=CAU"
            alt="sabre logo" />
        </div>

    )
}

export default Nav
