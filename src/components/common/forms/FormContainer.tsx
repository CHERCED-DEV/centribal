import React, { lazy, memo } from 'react'
import { FormsDataProps } from './utils/general-forms.utils';


const GeneralForm = lazy(() => import('./utils/GeneralForm'));

const FormContainer: React.FC<FormsDataProps> = ({forms, product}) => {
    return (
        <div className="general-form">
            <h2 className="general-form__title">{forms.title}</h2>
            <div className="general-form__content">
                <GeneralForm data_forms={forms.general_form} method={forms.method} product={product} />
            </div>
        </div>
    )
}

export default memo(FormContainer);