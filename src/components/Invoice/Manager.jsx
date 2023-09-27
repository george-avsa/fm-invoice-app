import { useDispatch, useSelector } from "react-redux";
import { Button } from "../UI/Buttons/Button";
import { BodyText } from "../UI/Texts/BodyText";
import { Status } from "./Status";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { doSomethingAsync, fillFormWithItem } from "../../store/form";
import { toggleFormModal, toggleModalPrompt } from "../../store/settings";
import { changeStatus, deleteInvoice, updateStatus } from "../../store/invoices";

export function Manager({status}) {
    const theme = useSelector(state => state.settings.theme);
    const dispatch = useDispatch();

    const {id} = useParams();
    
    const handleClick = (e) => {
        dispatch(toggleFormModal());
        dispatch(doSomethingAsync(id))
    }

    const handleClickPaid = (e) => {
        dispatch(updateStatus({id, status: 'paid'}));
    }

    const handleClickDelete = (e) => {
        dispatch(toggleModalPrompt());
    }

    return (
        <div className={`invoice-managment invoice-managment--${theme}`}>
            <div className="invoice-managment__status">
                <BodyText grey={true} >Status</BodyText>
                <Status status={status}></Status>
            </div>
            <Button color="grey" onClick={(e) => handleClick(e)}>Edit</Button>
            <Button color="red" data-id={id} onClick={(e) => handleClickDelete(e)}>Delete</Button>
            {status !== 'paid' && (
                <Button color="purple" onClick={(e) => handleClickPaid(e)}>Mark as Paid</Button>
            )}
        </div>
    );
}