import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

// Logo
import Logo  from "../../assets/img/Logo.svg"

export function Header() {
    return (
        <div>
            <HeaderContainer>
                <NavLink to="/">
                    <img 
                        src={Logo} 
                        alt=""
                    />
                </NavLink>

            </HeaderContainer>
        </div>
    )
}