import React from "react";
import "./text.css";

const theme = "dark";

function Heading({ additionClass, ...props }) {
    return (
        <p className={"heading " + additionClass + ` heading--${theme}-theme` } {...props}>
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

function HeadingS({additionClass, ...props}) {
    return <Heading additionClass={'heading-s '+ additionClass} {...props}>{props.children}</Heading>;
}

export { HeadingL, HeadingM, HeadingS };
