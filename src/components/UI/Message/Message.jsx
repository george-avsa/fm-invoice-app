import { useEffect, useState } from 'react';
import { BodyText } from '../Texts/BodyText';
import { HeadingL, HeadingS } from '../Texts/Heading';
import './message.css';

function Message({success, children}) {

    return (
        <>
            <div className={`message button ${success && 'button--purple message--success'}`}>
                {children}
            </div>
        </>
    );
}

export default Message;