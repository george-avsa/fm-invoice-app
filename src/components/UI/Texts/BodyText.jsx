import { useSelector } from "react-redux";
import "./text.css";

const colors = {
    dark: {
        grey: 'grey',
        black: 'dark',
    },
    light: {
        grey: 'grey',
        black: 'light',
    }
}


function BodyText({ additionalClass = "", grey=false, style, ...props }) {

    const theme = useSelector(state => state.settings.theme);

    return <p 
        className={`body-text body-text--${colors[theme][grey ? 'grey' : 'black']} ` + additionalClass} 
        style={{...style}}
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
