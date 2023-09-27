import { useDispatch } from "react-redux";
import { BodyText } from "../UI/Texts/BodyText";
import { HeadingS } from "../UI/Texts/Heading";
import { ButtonLong } from './../UI/Buttons/ButtonLong';
import ItemsToAddList from "./ItemsToAddList";
import { addItem } from "../../store/form";

function ItemsList() {
    const dispatch = useDispatch();
    return (
        <>
            <HeadingS style={{color: '#777F98', marginBottom: '14px', fontSize:'18px'}}>Item List</HeadingS>
            <div className='creation-form__items'>
                <BodyText additionalClass="form-list__item-name" grey>Item Name</BodyText>
                <BodyText grey>Qty.</BodyText>
                <BodyText additionalClass="form-list__quantity" grey>Price</BodyText>
                <BodyText additionalClass="form-list__total" grey>Total</BodyText>
            </div>
            <ItemsToAddList></ItemsToAddList>
            <ButtonLong 
                onClick={() => {dispatch(addItem()); console.log(123)}}
                style={{marginTop: '16px'}}
            >
                + Add new item
            </ButtonLong>
        </>
    );
}

export default ItemsList;