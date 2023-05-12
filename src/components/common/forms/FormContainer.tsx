import React, { memo } from 'react'

const FormContainer = () => {
    return (
        <div className="general-form">
            <h2 className="general-form__title">{create_order.title}</h2>
            <div className="general-form__content">
                <OrderForm client={create_order} products={products} />
            </div>
        </div>
    )
}

export default memo(FormContainer);