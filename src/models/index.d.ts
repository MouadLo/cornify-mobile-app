import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";



type EagerShippingAddress = {
  readonly address?: string | null;
  readonly city?: string | null;
  readonly postalCode?: string | null;
  readonly country?: string | null;
}

type LazyShippingAddress = {
  readonly address?: string | null;
  readonly city?: string | null;
  readonly postalCode?: string | null;
  readonly country?: string | null;
}

export declare type ShippingAddress = LazyLoading extends LazyLoadingDisabled ? EagerShippingAddress : LazyShippingAddress

export declare const ShippingAddress: (new (init: ModelInit<ShippingAddress>) => ShippingAddress)

type EagerItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price?: number | null;
  readonly image?: string | null;
  readonly product?: string | null;
  readonly qty: number;
  readonly orderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price?: number | null;
  readonly image?: string | null;
  readonly product?: string | null;
  readonly qty: number;
  readonly orderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item>) => Item) & {
  copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderItems?: (Item | null)[] | null;
  readonly use?: string | null;
  readonly paymentMethod?: string | null;
  readonly taxPric?: number | null;
  readonly shippingPrice?: number | null;
  readonly totalPrice?: number | null;
  readonly isPaid?: boolean | null;
  readonly paidAt?: string | null;
  readonly isDevlivered?: boolean | null;
  readonly deliveredAt?: string | null;
  readonly shippingAddress?: (ShippingAddress | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderItems: AsyncCollection<Item>;
  readonly use?: string | null;
  readonly paymentMethod?: string | null;
  readonly taxPric?: number | null;
  readonly shippingPrice?: number | null;
  readonly totalPrice?: number | null;
  readonly isPaid?: boolean | null;
  readonly paidAt?: string | null;
  readonly isDevlivered?: boolean | null;
  readonly deliveredAt?: string | null;
  readonly shippingAddress?: (ShippingAddress | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly brand: string;
  readonly category: string;
  readonly description?: string | null;
  readonly price: number;
  readonly countInStock: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly brand: string;
  readonly category: string;
  readonly description?: string | null;
  readonly price: number;
  readonly countInStock: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}