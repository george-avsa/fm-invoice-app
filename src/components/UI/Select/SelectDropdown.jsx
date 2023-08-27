import { useSelector } from "react-redux";

export default function SelectDropdown({options, selectValue}) {
    const theme = useSelector(state => state.settings.theme);
    return (
        <div className={`filter__dropdown dropdown dropdown--${theme}`}>
            {options.map((option) => (
                <div
                    className={`dropdown__item dropdown__item--${theme}`}
                    onClick={(e) => selectValue(e)}
                    key={option}
                >
                    {option}
                </div>
            ))}
        </div>
    );
}
