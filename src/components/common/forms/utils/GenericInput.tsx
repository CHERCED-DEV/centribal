import React from 'react'
import { CustomInputForm } from './general-forms.utils';

export const GenericInput: React.FC<CustomInputForm> = ({ field, register, type, defaultValue }) => {
    return (
        <div className="general-form__field">
            <input
                className="general-form__input"
                type={type}
                required={field.required}
                {...register(field.value)}
                placeholder={field.value}
                defaultValue={defaultValue}                
            />
        </div>
    )
}