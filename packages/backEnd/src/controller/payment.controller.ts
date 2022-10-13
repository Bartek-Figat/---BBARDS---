import { Controller, Post } from "@overnightjs/core";
import { Request, Response, NextFunction } from "express";
import { PaymentService } from "../services/payment.services";

@Controller("api/v1")

export class PaymentController {
    constructor(private service: PaymentService = new PaymentService()) {}
  
    @Post("payment/stripe")
    async stripePayment(req: Request, res: Response, next: NextFunction) {
      const response = await this.service.payStripe(req.body);
      res.status(response.statusCode).json(response);
    }
  }