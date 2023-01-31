import { Link } from "react-router-dom";


export function Navbar(){
  return (
    <nav>
        <Link to="/login">
            <>Login</>
        </Link>
        <Link to="/Profile">
            <>Profile</>
        </Link>
    </nav>
  )  
}