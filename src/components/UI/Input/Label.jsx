import { BodyText } from "../Texts/BodyText";

function Label({children, grey}) {
    return (
        <BodyText 
            additionalClass={`${children ? 'field__label--margin' : ''}`}
            grey={grey}
        >
            {children}
        </BodyText>
    );
}

export default Label;