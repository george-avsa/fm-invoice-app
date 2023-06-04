import React from "react";
import "./text.css";
import { useSelector } from "react-redux";

const colors = {
    dark: {
        grey: 'grey',
        purple: 'purple',
        black: 'dark',
    },
    light: {
        grey: 'grey',
        purple: 'purple',
        black: 'light',
    }
}


function Heading({ additionClass='', grey=false, purple=false, ...props }) {
    const theme = useSelector(state => state.settings.theme);

    return (
        <p className={`heading  body-text--${colors[theme][purple ? 'purple' : grey ? 'grey' : 'black']} ` + additionClass} {...props}>
            {props.children}
        </p>
    );
}

function HeadingL(props) {
    return <Heading additionClass='heading-l' {...props}>{props.children}</Heading>;
}

function HeadingM(props) {
    return <Heading additionClass='heading-m' {...props}>{props.children}</Heading>;
}

function HeadingS({additionClass='', ...props}) {
    return <Heading additionClass={'heading-s '+ additionClass} {...props}>{props.children}</Heading>;
}

export { HeadingL, HeadingM, HeadingS };
