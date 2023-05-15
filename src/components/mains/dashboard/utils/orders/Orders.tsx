import React, { memo } from 'react';
import { OrdersConfig } from '@/pages/api/orders/db/order.utils';
import { UIOrdersDataProps } from './util/orders.interface';
import { UseGetData } from '@/utils/providers/requests/helpers';

const Orders: React.FC<UIOrdersDataProps> = ({ ui_orders }) => {
    const orders = UseGetData<OrdersConfig[]>("api/orders", "orders");

    return (
        <>
            {orders && (
                <>
                    {orders.map((order) => (
                        <React.Fragment key={order._id}>
                            <div className="order-card">
                                <div className="order-card-content">
                                    <p className="order-card-client">{ui_orders.client}: {order.client.name}</p>
                                    <p className="order-card-orderNumber">{ui_orders.num_order}: {order.orderNumber}</p>
                                </div>
                                <hr className="order-card-separator" />
                                <div className="order-card-article">
                                    <p className="order-card-article-header">{ui_orders.name_article.title}</p>
                                    {order.order.map((article) => (
                                        <p key={article._id} className="order-card-orderItemName">
                                            {ui_orders.name_article.art}: {article.name}
                                        </p>
                                    ))}
                                </div>
                                <hr className="order-card-separator" />
                                <div className="order-card-details">
                                    <p className="order-card-delivered">{ui_orders.delivered}: {order.delivered ? 'Yes' : 'No'}</p>
                                    <p className="order-card-paid">{ui_orders.paid}: {order.paid ? 'Yes' : 'No'}</p>
                                    <p className="order-card-orderValue">{ui_orders.order_value}: ${order.orderValue}</p>
                                    <p className="order-card-orderValueWithShipping">{ui_orders.order_value_shipping}: ${order.orderValueWithShipping}</p>
                                </div>
                            </div>
                            <hr className="orders-separator" />
                        </React.Fragment>
                    ))}
                </>
            )}
        </>
    );
};

export default memo(Orders);

