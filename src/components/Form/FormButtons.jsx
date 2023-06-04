import { useEffect } from "react";
import { Button } from "../UI/Buttons/Button";

export function FormButtons({editing=false}) {
    
    return (
        <div className={`creation-form__buttons creation-form__buttons--${editing ? 'adding' : 'editing'}`}>
            {!editing ? (
                <>
                    <div style={{flexGrow: '1'}}>
                        <Button color="grey">Discard</Button>
                    </div>
                    <Button color="grey-black">Save as Draft</Button>
                    <Button color="purple">Save & Send</Button>
                </>
            )
            : (
                <>
                    <Button color="grey-black">Save Changes</Button>
                    <Button color="purple">Cancel</Button>   
                </>
            )}
        </div>
    );
}