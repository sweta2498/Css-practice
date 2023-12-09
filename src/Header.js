

function Header()
{
    return(
        <div className="App">
            <div className="header">
                <nav>
                    <div className="logo">
                        <img src="flipkart.png" alt="" />
                    </div>
                    <ul>
                        <li><a href="home.js">Home</a></li>
                        <li><a href="home.js">Contact</a></li>
                        <li><a href="home.js">About</a></li>
                    </ul>
                    <div className="search">
                        <input type="text" placeholder="Search for products,brands and more "/>
                        <button className="btn">Search</button>
                    </div>
                    <div className="loginbtn">
                        <button className="login">Login</button>
                    </div>
                    <div className="more">
                        More
                    </div>
                    <div className="mycartbtn">
                        <img src="carticon.jpeg" alt="" />
                        <button className="mycart">Cart</button>
                    </div>
                </nav>
                
                
            </div>
        </div>
    )
}
export default Header;