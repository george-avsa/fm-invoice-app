export default function SelectDropdown({options, selectValue}) {
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
