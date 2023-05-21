import { HeadingM } from './../UI/texts/Heading';
import './form.css';

function FormModal() {
    return (
        <div className='modal-wrapper'>
            <form className='invoice-creator'>
                <HeadingM style={{paddingBottom: '46px'}}>New invoice</HeadingM>
            </form>
        </div>
    );
}

export default FormModal;