import "./Navbar.css";
import {  NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link> 
        className={({isActive}) =>(isActive ? 'esta-ativo' : 'nao-ativo')}
        */}
        <NavLink to="/">Home</NavLink> 
        <NavLink to="/cadastro" >Cadastro</NavLink>
        <NavLink to="/about" >Sobre</NavLink>
        <NavLink to="/nome" >Nome</NavLink>
    </nav>
  )
}

export default Navbar