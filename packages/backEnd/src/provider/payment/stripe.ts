import { Stripe } from 'stripe';
import { config } from "dotenv";

config({ path: "../../.env" });
const { stripeApi } = process.env;

export const stripe = new Stripe(stripeApi,{
    apiVersion: '2022-08-01',
    typescript: true
})
