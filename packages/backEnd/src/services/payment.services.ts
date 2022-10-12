//import Stripe from 'stripe'
import { StripeLineItem, StripePriceData, StripeProductData } from '../dto/dto';
import { StatusCode } from '../enum';
import { BaseHttpResponse } from '../httpError/baseHttpResponse';
import { stripe } from '../tools/stripe'
export class PaymentService {

    // async payStripe(stripePayment: StripeCheckoutDto) {
    //     const { price_id, quantity, mode } = stripePayment

    //     const session = await stripe.checkout.sessions.create({
    //         line_items: [
    //           {
    //             name: "bbards item",
    //             //price: price_id,
    //             quantity: quantity,
    //           },
    //         ],
    //         mode: mode,
    //         success_url: `http://localhost:3000/success.html`,
    //         cancel_url: `http://localhost:3000/cancel.html`,
    //       });

    //       return BaseHttpResponse.sucessResponse(
    //         session.url,
    //         StatusCode.SUCCESS,
    //         {}
    //       );
    //     } catch (err) {
    //       return BaseHttpResponse.failedResponse(
    //         err.message,
    //         StatusCode.INTERNAL_SERVER_ERROR
    //       );
    //     }

    async payStripe(
        stripePriceData: StripePriceData) {
        const { id, name, description, images} = new StripeProductData
        const { currency, product_data = {name, description, images}, quantity} = stripePriceData

        const lineItem = new StripeLineItem()
        lineItem.price_data = stripePriceData

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    "price_data":{
                    "currency": "PLN",
                    "unit_amount_decimal": "4500",
                    "product_data":{
                        "name": "Testy",
                        "description": "Test opis",
                    }
                    },
                    quantity: 5
                },
                {
                    "price_data":{
                    "currency": "PLN",
                    "unit_amount_decimal": "20000",
                    "product_data":{
                        "name": "Testowe itemy",
                        "description": "najlepszy opis",
                    }
                    },
                    quantity: 1
                }
                 
            ],
            mode: 'payment',
            success_url: `http://localhost:3000/success.html`,
            cancel_url: `http://localhost:3000/cancel.html`,
          });

          return BaseHttpResponse.sucessResponse(
            session.url,
            StatusCode.SUCCESS,
            {}
          );
        } catch (err) {
          return BaseHttpResponse.failedResponse(
            err.message,
            StatusCode.INTERNAL_SERVER_ERROR
          );
        }
}
