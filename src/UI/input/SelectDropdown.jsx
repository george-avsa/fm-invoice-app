import React from "react";

export default function SelectDropdown() {
    return (
        <div className='dropdown'>
            {options.map((option) => (
                <div
                    className='dropdown__item'
                    onClick={(e) => selectValue(e)}
                    key={option}
                >
                    {option}
                </div>
            ))}
        </div>
    );
}
