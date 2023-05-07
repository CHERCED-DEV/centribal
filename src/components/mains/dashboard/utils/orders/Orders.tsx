import { OrdersConfig } from '@/pages/api/orders/db/order.utils';
import React, { useCallback, useEffect, useState } from 'react';
import { OrdersDataProps } from './util/orders.interface';

export const Orders: React.FC<OrdersDataProps> = ({order}) => {
    const [orders, setOrders] = useState<OrdersConfig[]>();
    const fetchOrders = useCallback(async () => {
        try {
            const res = await fetch("/api/orders");
            if (res.status === 200) {
                const data = await res.json();
                setOrders(data);
            } else {
                throw new Error("we have an error getting the data")
            }
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders])

    return (
        <>
            {
                orders && (
                    <>
                        {
                            orders.map((order) => (
                                <React.Fragment key={order._id}>
                                    <p className="orders-client">{order.client.name}: {order.client.name}</p>
                                    <p className="orders-orderNumber">{order.}: {order.orderNumber}</p>
                                    <div className="orders__article">
                                        <p className="orders__article-header">{}</p>
                                        {
                                        order.order.map((article) => (
                                            <p key={article._id} className="orders-orderItemName">Nombre del artículo: {article.name}</p>
                                        ))
                                        }
                                    </div>
                                    <p className="orders-delivered">Entregado: {order.delivered ? 'Sí' : 'No'}</p>
                                    <p className="orders-paid">Pagado: {order.paid ? 'Sí' : 'No'}</p>
                                    <p className="orders-orderValue">Valor de la Orden (sin envío): ${order.orderValue}</p>
                                    <p className="orders-orderValueWithShipping">Valor de la Orden (con envío): ${order.orderValueWithShipping}</p>
                                    <hr className="orders-separator" />
                                </React.Fragment>
                            ))
                        }
                    </>
                )
            }
        </>
    );
};
