import { useDispatch, useSelector } from "react-redux";
import { Input } from "../UI/Input/Input";
import { BodyText } from "../UI/Texts/BodyText";
import { HeadingS } from "../UI/Texts/Heading";
import trash from './../../images/trash.svg';
import { changeItemField, deleteItem } from "../../store/form";
import { useEffect } from "react";

function ItemsToAddList() {
    const formItems = useSelector(state => state.form.items);
    const dispatch = useDispatch();

    const onChangeItemField = (e) => {
        const [id, type] = e.target?.getAttribute('data-id')?.split('|');
        
        if (id && type) {
            let value = e.target.value;
            let shouldDispatch = true;
            if (type === 'quantity' || type === 'price') {
                if (!!value && value.replaceAll(/[\d\.]/g, '')) {
                    shouldDispatch = false;
                }
            }
            if (shouldDispatch) {
                dispatch(changeItemField({
                    value,
                    id,
                    type
                }));
            }
        }
    }

    const handleDeleteButton = (e) => {
        const id = e.target.getAttribute('data-id');
        dispatch(deleteItem(id));
    }

    return (
        <>
        {formItems.map((item, i) => (
            <div className="creation-form__items" key={item.id}>
                <Input 
                    id = {`${item.id}|name`}
                    value={item.name} 
                    onChange={(e) => onChangeItemField(e)}
                    additionalClass="form-list__item-name" 
                />
                <Input 
                    padding0
                    id = {`${item.id}|quantity`}
                    value={item.quantity} 
                    onChange={(e) => onChangeItemField(e)}
                ></Input>
                <Input 
                    additionalClass="form-list__quantity"
                    id = {`${item.id}|price`}
                    value={item.price} 
                    onChange={(e) => onChangeItemField(e)}
                ></Input>
                <div className='create-form__cell-center'>
                    <HeadingS>{item.total ? item.total : ' '}</HeadingS>
                    <img src={trash} alt="" data-id={item.id} onClick={(e) => handleDeleteButton(e)} />
                </div>
            </div>
        ))}
    </>
    );
}

export default ItemsToAddList;