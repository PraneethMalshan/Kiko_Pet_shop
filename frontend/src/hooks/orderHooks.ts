import { ShippingAddress, CartItem } from './../types/Cart';
import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from '../apiClient';
import { Order } from '../types/Order';

export const useGetOrderDetailsQuery = (id: string) =>
    useQuery({
        queryKey: ['orders', id],
        queryFn: async () => (await apiClient.get<Order>(`api/orders/${id}`)).data,
    })
    

export const useCreateOrderMutation = () => 
    useMutation({
        mutationFn: async (order: {
            orderItems: CartItem[]
            ShippingAddress: ShippingAddress
            paymentMethod: string
            itemsPrice: number
            shippingPrice: number
            taxPrice: number
            totalPrice: number
        }) => 
            (
                await apiClient.post<{ message: string; order: Order }>(
                    `api/orders`,
                    order
                )
            ).data,
})