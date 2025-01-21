import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
    return (
        <StyledNavbar>
            <nav>
                <div>
                    <h1>Navbar</h1>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movie/create">Add Movie</Link>
                    </li>
                    <li>
                        <Link to="/movie/popular">Popular</Link>
                    </li>
                    <li>
                        <Link to="/movie/now">Now Playing</Link>
                    </li>
                    <li>
                        <Link to="/movie/top">Top Rated</Link>
                    </li>
                </ul>
            </nav>
        </StyledNavbar>
    )
}
export default Navbar;

