import React from 'react';
import { CustomInputForm } from './create-order.interface';


export const InputForm: React.FC<CustomInputForm> = ({ field, register }) => {

    return (
        <div className="user-form__field">
            <input
                className="user-form__input"
                type="text"
                required={field.required}
                {...register(field.value)}
                defaultValue={field.value}
            />
        </div>
    );
};