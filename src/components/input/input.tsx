import * as React from 'react';

import './input.scss';


interface ICallbackObject {
    value: string
}

interface IInputProps {
    value: string,
    placeholder?: string,
    disabled?: boolean,
    onChange?(result: object): ICallbackObject,
    onEnter?(result: object): ICallbackObject
}


const Input: React.SFC<IInputProps> = ({ value, placeholder, disabled, onChange, onEnter }) => {
    const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleOnEnter(event);
        }
    }

    const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
        return onChange && onChange({ value: event.currentTarget.value });
    }

    const handleOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        return onEnter && onEnter({ value: event.currentTarget.value });
    }
    return <input
        className="todo-input"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
    />
};

export default Input;