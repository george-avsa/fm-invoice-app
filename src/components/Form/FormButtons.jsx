import { useEffect } from "react";
import { Button } from "../UI/Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { saveEditedData, setInitialState } from "../../store/form";
import { toggleFormModal } from "../../store/settings";

export function FormButtons({editing=false}) {

    const dispatch = useDispatch();

    const handleClickCancel = () => {
        dispatch(setInitialState());
        dispatch(toggleFormModal());

    }

    const handleClickSave = () => {
        dispatch(saveEditedData());
    }

    const theme = useSelector(state => state.settings.theme);
    return (
        <div className={`creation-form__buttons 
                        creation-form__buttons--${theme} 
                        creation-form__buttons--${editing ? 'adding' : 'editing'}`
        }>
            {!editing ? (
                <>
                    <div style={{flexGrow: '1'}}>
                        <Button color="grey" onClick={() => handleClickCancel()}>Discard</Button>
                    </div>
                    <Button color="grey-black">Save as Draft</Button>
                    <Button color="purple">Save & Send</Button>
                </>
            )
            : (
                <>
                    <Button color="grey-black" onClick={() => handleClickSave()}>Save Changes</Button>
                    <Button color="purple" onClick={() => handleClickCancel()}>Cancel</Button>   
                </>
            )}
        </div>
    );
}