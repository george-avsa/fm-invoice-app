import { useSelector } from "react-redux";
import "./buttons.css";
import { colors } from "./colors";


function Button({ color, additionalClass = "", ...props }) {
    
    const theme = useSelector((state) => state.settings.theme);

    const colorClass = colors[theme][color];
    return (
        <button className={["button", colorClass, additionalClass].join(" ")} {...props}>
            {props.children}
        </button>
    );
}

export { Button };
