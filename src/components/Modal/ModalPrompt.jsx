import { useSelector } from "react-redux";
import { HeadingS } from "../UI/Texts/Heading";
import { BodyText } from "../UI/Texts/BodyText";
import { Button } from "../UI/Buttons/Button";

function Modal() {

    const theme = useSelector(state => state.settings.theme);
    return (
        <div className="modal-wrapper">
            <div className={`modal modal--${theme}`}>
                <HeadingS>Confirm Deletion</HeadingS>
                <BodyText grey style={{padding: "12px 0px 14px 0px"}}>Are you sure you want to delete invoice #XM9141? This action cannot be undone.</BodyText>
                <div className="modal__buttons">
                    <Button color="grey-black">Cancel</Button>
                    <Button color="red">Delete</Button>
                </div>
            </div>
        </div>
    );
}

export default Modal;