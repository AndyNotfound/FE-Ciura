function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <div className="logo">CIURA</div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Artikel</a></li>
                    <li><a href="">Aplikasi</a></li>
                    <li><a href="">Nutrisi</a></li>
                    <li><a href="">Forum</a></li>
                </ul>
                <div className="button-navbar">
                    <button>
                        <a href="">Download App</a>
                    </button>
                    <button>
                        <a href="">Login</a>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar