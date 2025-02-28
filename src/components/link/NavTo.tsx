import { NavLink } from "react-router-dom";

export const NavTo = ({address,label}) => {
    return ( 
        <NavLink to={address}>
         {label}   
   </NavLink>
     );
}