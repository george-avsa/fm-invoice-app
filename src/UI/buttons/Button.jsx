import React, { Children } from "react";
import "./buttons.css";
import plus from "./../../images/plus.svg";

const colors = {
    dark: {
        red: "button--red",
        purple: "button--purple",
        "grey-black": "button--black",
        grey: "button--grey",
    },
    light: {
        red: "button--red",
        purple: "button--purple",
        "grey-black": "button--grey",
        grey: "button--grey",
    },
};

const theme = "light";

function Button({ color, additionalClass = "", ...props }) {
    const colorClass = colors[theme][color];
    return (
        <button className={["button", colorClass, additionalClass].join(" ")} {...props}>
            {props.children}
        </button>
    );
}

function ButtonToAdd(props) {
    return (
        <Button color='purple' additionalClass='button--creaction'>
            <img src={plus} alt='plus' className='button__plus' />
            {props.children}
        </Button>
    );
}

function ButtonLong(props) {
    return (
        <Button color='grey' additionalClass='button--long' {...props}>
            {props.children}
        </Button>
    );
}

export { Button, ButtonToAdd, ButtonLong };
