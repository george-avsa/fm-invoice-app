import { Button } from "./Button";

function ButtonLong(props) {
    return (
        <Button color='grey' additionalClass='button--long' {...props}>
            {props.children}
        </Button>
    );
}

export { ButtonLong };