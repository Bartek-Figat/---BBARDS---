import { StripePayment } from '../dto/dto';
import { StripeMode, StripeStandardPlan, PricingPlan, StripePremiumPlan } from '../enum/index'
import { StatusCode } from '../enum';
import { BaseHttpResponse } from '../httpError/baseHttpResponse';
import { stripe } from '../provider/payment/stripe'

export class PaymentService {

  async payStripe(payment: StripePayment) {
    const { mode, pricingPlan } = payment
    let price_id

    switch (pricingPlan) {
      case (PricingPlan.STANDARD):
        switch (mode) {
          case (StripeMode.ONE_TIME_PAYMENT):
            price_id = StripeStandardPlan.ONE_TIME_PAYMENT
            break
          case (StripeMode.SUBSCRIPTION):
            price_id = StripeStandardPlan.SUBSCRIPTION
            break
        }
        break
      case (PricingPlan.PREMIUM):
        switch (mode) {
          case (StripeMode.ONE_TIME_PAYMENT):
            price_id = StripePremiumPlan.ONE_TIME_PAYMENT
            break
          case (StripeMode.SUBSCRIPTION):
            price_id = StripePremiumPlan.SUBSCRIPTION
            break
        }
        break
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price_id,
          quantity: 1,
        },
      ],
      mode: mode,
      //TODO frontend
      success_url: `http://localhost:3000/success.html`,
      cancel_url: `http://localhost:3000/cancel.html`,
    });

    return BaseHttpResponse.sucessResponse(
      session.url,
      StatusCode.SUCCESS,
      {}
    );
  } catch(err) {
    return BaseHttpResponse.failedResponse(
      err.message,
      StatusCode.INTERNAL_SERVER_ERROR
    );
  }
}
