import React from "react";
import "./text.css";

const theme = "dark";

function Heading({ additionClass, props }) {
    return (
        <p className={"heading " + additionClass + ` heading--${theme}-theme`}>
            {props.children}
        </p>
    );
}

function HeadingL(props) {
    return <Heading additionClass='heading-l'>{props.children}</Heading>;
}

function HeadingM(props) {
    return <Heading additionClass='heading-m'>{props.children}</Heading>;
}

function HeadingS(props) {
    return <Heading additionClass='heading-s'>{props.children}</Heading>;
}

export { HeadingL, HeadingM, HeadingS };
