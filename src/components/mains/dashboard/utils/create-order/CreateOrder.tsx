import React, { memo, useEffect, useState } from 'react';
import OrderForm from './util/OrderForm';
import { CreateOrderContainerDataProps } from './util/create-order.interface';


const CreateOrder: React.FC<CreateOrderContainerDataProps> = ({ create_order, products }) => {
    return (
        <>
            {
                create_order && products && (
                    <div className="create-order">
                        <h2 className="create-order__title">{create_order.title}</h2>
                        <div className="create-order__content">
                            <OrderForm client={create_order} products={products} />
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default memo(CreateOrder);