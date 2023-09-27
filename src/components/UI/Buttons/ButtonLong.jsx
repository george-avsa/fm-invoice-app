import { Button } from "./Button";
import './buttons.css';

function ButtonLong(props) {

    return (
        <Button color='grey' additionalClass='button--long' {...props}>
            {props.children}
        </Button>
    );
}

export { ButtonLong };