import { useDispatch, useSelector } from "react-redux";
import { HeadingS } from "../UI/Texts/Heading";
import { BodyText } from "../UI/Texts/BodyText";
import { Button } from "../UI/Buttons/Button";
import { useParams } from "react-router-dom";
import { closeModalPrompt, toggleModalPrompt } from "../../store/settings";
import { deleteInvoice } from "../../store/invoices";

function Modal() {

    let {id} = useParams();

    const dispatch = useDispatch();

    function closeFormModal(e) {
        const className = e.target.getAttribute('class');
        const innerText = e.target.innerText;
        if (className === 'modal-wrapper') {
            dispatch(toggleModalPrompt());
        }
    }

    const handleClickDelete = (e) => {
        dispatch(deleteInvoice(e.target.getAttribute('data-id')));
    }

    const theme = useSelector(state => state.settings.theme);
    return (
        <div className="modal-wrapper" onClick={(e) => closeFormModal(e)}>
            <div className={`modal modal--${theme}`}>
                <HeadingS>Confirm Deletion</HeadingS>
                <BodyText grey style={{padding: "12px 0px 14px 0px"}}>Are you sure you want to delete invoice #{id}? This action cannot be undone.</BodyText>
                <div className="modal__buttons">
                    <Button color="grey-black" onClick={() => dispatch(closeModalPrompt())}>Cancel</Button>
                    <Button color="red" data-id={id} onClick={(e) => handleClickDelete(e)} >Delete</Button>
                </div>
            </div>
        </div>
    );
}

export default Modal;