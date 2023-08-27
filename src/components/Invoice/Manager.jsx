import { useSelector } from "react-redux";
import { Button } from "../UI/Buttons/Button";
import { BodyText } from "../UI/Texts/BodyText";
import { Status } from "./Status";

export function Manager() {
    const theme = useSelector(state => state.settings.theme);
    return (
        <div className={`invoice-managment invoice-managment--${theme}`}>
            <div className="invoice-managment__status">
                <BodyText grey={true} >Status</BodyText>
                <Status status="pending"></Status>
            </div>
            <Button color="grey">Edit</Button>
            <Button color="red">Delete</Button>
            <Button color="purple">Mark as Paid</Button>
        </div>
    );
}