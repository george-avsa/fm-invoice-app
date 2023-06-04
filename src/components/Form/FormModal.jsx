import { Datepicker } from './../Datepicker/Datepicker';
import { Input } from './../UI/Input/Input';
import { HeadingM, HeadingS } from './../UI/Texts/Heading';
import { BodyText } from './../UI/Texts/BodyText';
import trash from './../../images/trash.svg';
import './form.scss';
import { Select } from './../UI/Select/Select';
import { ButtonLong } from './../UI/Buttons/ButtonLong';
import { FormButtons } from './FormButtons';
import { useSelector } from 'react-redux';

function FormModal({editing}) {
    const theme = useSelector(state => state.settings.theme);
    return (
        <div className='modal-wrapper'>

            <form className={`invoice-creator invoice-creator--${theme}`}>
                <div className='invoice-creator__inner'>

                    <HeadingM style={{paddingBottom: '46px'}}>{editing ? 'Editing' : 'New invoice'}</HeadingM>
                    <HeadingS style={{marginBottom: '24px'}} purple>Bill From</HeadingS>
                    <div className='creation-form__grid-3'>
                        <Input label="Street Address" fullW="true"></Input>
                        <Input label="City"></Input>
                        <Input label="Post Code"></Input>
                        <Input label="Country"></Input>
                    </div>

                    <HeadingS style={{marginBottom: '24px'}} purple>Bill To</HeadingS>
                    <div className='creation-form__grid-3'>
                        <Input label="Street Address" fullW="true"></Input>
                        <Input label="Client’s Email" fullW="true"></Input>
                        <Input label="Street Address" fullW="true"></Input>
                        <Input label="City"></Input>
                        <Input label="Post Code"></Input>
                        <Input label="Country"></Input>
                    </div>

                    <div className='creation-form__grid-2'>
                        <Datepicker></Datepicker>
                        <Select style={{marginTop: '0px'}} label="Payment Terms"></Select>
                        <Input label="Project Description" style={{gridColumn: '1/3'}}></Input>
                    </div>

                    <HeadingS style={{color: '#777F98', marginBottom: '14px', fontSize:'18px'}}>Item List</HeadingS>
                    <div className='creation-form__items'>
                        <BodyText style={{gridColumn: '1/5'}} grey="true">Item Name</BodyText>
                        <BodyText grey="true">Qty.</BodyText>
                        <BodyText style={{gridColumn: '6/8'}} grey="true">Price</BodyText>
                        <BodyText style={{gridColumn: '8/10'}} grey="true">Total</BodyText>

                        <Input style={{gridColumn: '1/5'}}></Input>
                        <Input padding0="true"></Input>
                        <Input style={{gridColumn: '6/8'}}></Input>
                        <div className='create-form__cell-center'>
                            <HeadingS>156.00</HeadingS>
                        </div>
                        <div className='create-form__delete'>
                            <img src={trash} alt="" />
                        </div>
                    </div>
                    <ButtonLong
                        style={{marginTop: '16px'}}>+ Add new item</ButtonLong>

                </div>
                <FormButtons editing={editing}></FormButtons>
            </form>
        </div>
    );
}

export default FormModal;