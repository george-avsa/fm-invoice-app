import "./buttons.css";
import plus from "./../../../images/plus.svg";
import { Button } from "./Button";

function ButtonToAdd(props) {
    return (
        <Button color='purple' additionalClass='button--creaction'>
            <img src={plus} alt='plus' className='button__plus' />
            {props.children}
        </Button>
    );
}

export { ButtonToAdd };
