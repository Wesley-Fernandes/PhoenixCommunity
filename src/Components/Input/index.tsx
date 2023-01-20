import React from 'react'

type inputType = {
    placeholder?: string;
    type: 'password'|'text'|'number'|'email';
    label?: string;
    name: string;
    styles?: string;
}
export const Input = ({placeholder, type, label, name, styles}:inputType) => {
  return (
    <div className={"mb-3"||styles}>
        {label&&(
            <label
                htmlFor="exampleFormControlInput1"
                className="form-label">
                    {label}
            </label>
        )}
        <input
            type="email"
            name={name}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder={placeholder}
        />
    </div>
  )}
