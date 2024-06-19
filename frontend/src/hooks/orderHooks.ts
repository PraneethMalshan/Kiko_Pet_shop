import { ShippingAddress, CartItem } from './../types/Cart';
import { useMutation } from "@tanstack/react-query";
import apiClient from '../apiClient';
import { Order } from '../types/Order';

export const useCreateOrderMutation = () => useMutation({
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