import React, { memo } from 'react';
import { OrdersConfig } from '@/pages/api/orders/db/order.utils';
import { UIOrdersDataProps } from './util/orders.interface';
import { useGetData } from '@/utils/providers/requests/helpers';

const Orders: React.FC<UIOrdersDataProps> = ({ ui_orders }) => {

    const orders = useGetData<OrdersConfig[]>("api/orders", "orders");
    console.log()
    return (
        <>
            {
                orders && (
                    <>
                        {
                            orders.map((order) => (
                                <React.Fragment key={order._id}>
                                    <p className="orders-client">{ui_orders.client}: {order.client.name}</p>
                                    <p className="orders-orderNumber">{ui_orders.num_order}: {order.orderNumber}</p>
                                    <div className="orders__article">
                                        <p className="orders__article-header">{ui_orders.name_article.title}</p>
                                        {
                                            order.order.map((article) => (
                                                <p key={article._id} className="orders-orderItemName">{ui_orders.name_article.art}: {article.name}</p>
                                            ))
                                        }
                                    </div>
                                    <p className="orders-delivered">{ui_orders.delivered}: {order.delivered ? 'Yes' : 'No'}</p>
                                    <p className="orders-paid">{ui_orders.paid}: {order.paid ? 'Yes' : 'No'}</p>
                                    <p className="orders-orderValue">{ui_orders.order_value}: ${order.orderValue}</p>
                                    <p className="orders-orderValueWithShipping">{ui_orders.order_value_shipping}: ${order.orderValueWithShipping}</p>
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

export default memo(Orders);