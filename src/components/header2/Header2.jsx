import React from 'react';
import state from "../../redux/state";
import classes from './Header2.module.css';
import {NavLink} from "react-router-dom";

const Header2 = () => {
    return(
        <header className={classes.header}>

            <div className={classes.hello}><b><h3>Привет {state._state.ProfileInfo[0].Firstname}!</h3></b></div>
<div>
    <h3>
        <NavLink className={classes.item} activeClassName={classes.activeLink} to='/content'>Главная</NavLink> <NavLink className={classes.item2} activeClassName={classes.activeLink} to='/dialogs'>Диалоги</NavLink> 

                   
    <NavLink className={classes.item4} activeClassName={classes.activeLink} to='/findusers'>Найти друзей </NavLink>

    </h3>
</div>


      </header>
    )
}

export default Header2;