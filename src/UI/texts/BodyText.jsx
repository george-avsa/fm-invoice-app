import React from "react";
import "./text.css";

function BodyText({ additionalClass = "", grey=false, style, ...props }) {
    return <p 
        className={"body-text " + additionalClass} 
        style={{color: grey ? "#7E88C3" : "#000", ...style}}
        {...props}
    >
        {props.children}
    </p>;
}

function BodyTextSpaced(props) {
    return (
        <BodyText additionalClass='body-text--spaced' {...props}>
            {props.children}
        </BodyText>
    );
}

export { BodyText, BodyTextSpaced };
