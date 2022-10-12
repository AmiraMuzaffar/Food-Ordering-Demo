import React from 'react'
import HeaderImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';

const Header = props  => {

    return (
        <React.Fragment>
            <header className = {classes.header}>
                <h1>React Meal</h1>
                <HeaderCartButton onClick = {props.onShowCart}/>
            </header>
            <div className = {classes["main-image"]}>
                <img src = {HeaderImage} alt = "A table full for delicious food"/>
            </div>
            </React.Fragment>
    )
}

export default Header
