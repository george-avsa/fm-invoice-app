import { Datepicker } from './../Datepicker/Datepicker';
import { Input } from './../UI/Input/Input';
import { HeadingM, HeadingS } from './../UI/Texts/Heading';
import { BodyText } from './../UI/Texts/BodyText';

import './form.scss';
import { Select } from './../UI/Select/Select';
import { FormButtons } from './FormButtons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { toggleFormModal } from '../../store/settings';
import ItemsList from './ItemsList';
import { changeField, setInitialState } from '../../store/form';

function FormModal({editing}) {
    const theme = useSelector(state => state.settings.theme);

    const formValues = useSelector(state => state.form);

    const dispatch = useDispatch();

    useEffect(() => {
        if (editing) {
            console.log(1234)
        }
    }, []);

    function closeFormModal(e) {
        if (e.target.getAttribute('class') === 'modal-wrapper') {
            dispatch(setInitialState());
            dispatch(toggleFormModal());
        }
    }

    const handleChange = (e) => {
        dispatch(changeField({value: e.target.value, type: e.target.getAttribute('data-id')}));
    }

    return (
        <div className='modal-wrapper' onClick={e => closeFormModal(e)}>

            <form className={`invoice-creator invoice-creator--${theme}`} onSubmit={(e) => e.preventDefault()}>
                <div className='invoice-creator__inner'>

                    <HeadingM style={{paddingBottom: '46px'}}>{editing ? 'Editing' : 'New invoice'}</HeadingM>
                    <HeadingS style={{marginBottom: '24px'}} purple>Bill From</HeadingS>
                    <div className='creation-form__grid-3'>
                        <Input 
                            label="Street Address" 
                            fullW="true"
                            value={formValues.billFrom.street}
                            id="billFrom|street"
                            onChange={(e) => handleChange(e)}
                            />
                        <Input 
                            label="City" 
                            value={formValues.billFrom.city}
                            id="billFrom|city"
                            onChange={(e) => handleChange(e)}
                            />
                        <Input 
                            label="Post Code" 
                            value={formValues.billFrom.postCode}
                            id="billFrom|postCode"
                            onChange={(e) => handleChange(e)}
                            />
                        <Input 
                            label="Country" 
                            value={formValues.billFrom.country}
                            id="billFrom|country"
                            onChange={(e) => handleChange(e)}
                            />
                    </div>

                    <HeadingS style={{marginBottom: '24px'}} purple>Bill To</HeadingS>
                    <div className='creation-form__grid-3'>
                        <Input 
                            label="Client's name" 
                            fullW="true" 
                            value={formValues.billTo.fullname}
                            id="billTo|fullname"
                            onChange={(e) => handleChange(e)}
                            />
                        <Input 
                            label="Client’s Email" 
                            fullW="true" 
                            value={formValues.billTo.email}
                            id="billTo|email"
                            onChange={(e) => handleChange(e)}
                            />
                        <Input 
                            label="Street Address" 
                            fullW="true" 
                            value={formValues.billTo.street}
                            id="billTo|email"
                            onChange={(e) => handleChange(e)}
                            />
                        <Input 
                            label="City" 
                            value={formValues.billTo.city}
                            id="billTo|city"
                            onChange={(e) => handleChange(e)}
                            />
                        <Input 
                            label="Post Code" 
                            value={formValues.billTo.postCode}
                            id="billTo|city"
                            onChange={(e) => handleChange(e)}
                            />
                        <Input 
                            label="Country"
                            value={formValues.billTo.country}
                            id="billTo|country"
                            onChange={(e) => handleChange(e)}
                            />
                    </div>

                    <div className='creation-form__grid-2'>
                        <Datepicker></Datepicker>
                        <Select style={{marginTop: '0px'}} label="Payment Terms"></Select>
                        <Input 
                            label="Project Description"  
                            value={formValues.description}
                            style={{gridColumn: '1/3'}}
                            id="description" 
                            onChange={(e) => handleChange(e)}
                            />
                    </div>

                    <ItemsList></ItemsList>

                </div>
                <FormButtons editing={editing}></FormButtons>
            </form>
        </div>
    );
}

export default FormModal;