import './header.css'

const Header = () => {

// function clickHome () {
//     return { home }
// }

    return (
        <header className="header">
            <div className='logo'>LAB29</div>
            <div className="nav">
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
            </div>
        </header>
    )
}

export default Header