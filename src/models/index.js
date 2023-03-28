// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Item, Order, Product, ShippingAddress } = initSchema(schema);

export {
  Item,
  Order,
  Product,
  ShippingAddress
};