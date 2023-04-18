import React from "react";
import "./text.css";

function BodyText({ additionalClass = "", ...props }) {
    return <p className={"body-text " + additionalClass}>{props.children}</p>;
}

function BodyTextSpaced(props) {
    return (
        <BodyText additionalClass='body-text--spaced'>
            {props.children}
        </BodyText>
    );
}

export { BodyText, BodyTextSpaced };
