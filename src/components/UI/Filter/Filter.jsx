import { HeadingS } from '../Texts/Heading';
import './filter.css';
import '../Input/input.css';
import arrowLeft from './../../../images/arrowLeft.svg'
import { useEffect, useRef, useState } from 'react';
import SelectDropdown from '../Select/SelectDropdown';

export function Filter() {

    const options = ["Lorem", "Ipsum",];
    const [dropdown, setDropdown] = useState(false);
    const [fieldValue, setFieldValue] = useState(options[0]);

    function selectValue(e) {
        const value = e.target.innerText;
        if (!!value) {
            setFieldValue(value);
            setDropdown(false);
        }
    }

    const filterRef = useRef();

    // dropdown on hover rules
    useEffect(() => {
        let timerId;
        filterRef.current.addEventListener('mouseover', () => {
            if (timerId) {
                clearTimeout(timerId);
            }
            setDropdown(true)
        });
        
        filterRef.current.addEventListener('mouseout', () => {
            timerId = setTimeout(() => {
                setDropdown(false)
            }, 500);
        });
    }, [])

    return (
        <div className='filter' ref={filterRef}>
            <HeadingS>Filter by status</HeadingS>
            <img className='filter__arrow' src={arrowLeft} alt="" />
            {dropdown && (
                <SelectDropdown options={options} selectValue={selectValue}></SelectDropdown>
            )}
        </div>
    );
}