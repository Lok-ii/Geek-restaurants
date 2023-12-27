import logo from './logo.svg';
import "./header.css";

function Header(){
    return(
        <header>
            <div className= "logo">
                <img src={logo} alt="logo"/>
                <h1 className="logoName">GeekFoods</h1>
            </div>

            <ul className="navbar">
                <li className="navlink home">Home</li>
                <li className="navlink">Quote</li>
                <li className="navlink">Restaurants</li>
                <li className="navlink">Foods</li>
                <li className="navlink">Contact</li>
            </ul>

            <div className="menu">
                <button className="getStarted">Get started</button>

                <i className="fa-solid fa-bars menuIcon" id="menuIcon"></i>
            </div>
        </header>
    );
}

export default Header;