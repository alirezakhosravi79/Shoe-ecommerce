import {BiSearch, BiCart, BiUser} from 'react-icons/bi';

function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div>
                <h2>LOGO HERE</h2>
            </div>
            <div>
                <BiSearch />
                <input type="text" placeholder='Search for products' />
            </div>
            <div>
                <BiCart />
                <span>0</span>
                <BiUser />
            </div>
        </div>
    </div>
  )
}

export default Navbar