import React from "react";

export const SubscriptionCard = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <span className="block mb-2 text-lg font-semibold text-primary">
              Pricing Table
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              Our Pricing Plan
            </h2>
            <p className="text-base text-body-color">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          <div className="flex flex-wrap -mx-4">
            <PricingCard
              type="Personal"
              price="$59"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Personal"
              active={false}
            >
              <List>1 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Use on 1 (one) project</List>
              <List>3 Months support</List>
            </PricingCard>
            <PricingCard
              type="Business"
              price="$199"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Business"
              active={true}
            >
              <List>5 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Use on31 (Three) project</List>
              <List>4 Months support</List>
            </PricingCard>
            <PricingCard
              type="Professional"
              price="$256"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Professional"
              active={false}
            >
              <List>Unlimited User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Unlimited project</List>
              <List>12 Months support</List>
            </PricingCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
}: {
  children?: React.ReactNode;
  description: string;
  price: string;
  type: string;
  subscription: string;
  buttonText: string;
  active: boolean;
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="relative z-10 px-8 py-10 mb-10 overflow-hidden bg-white border rounded-xl border-primary border-opacity-20 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12">
          <span className="block mb-4 text-lg font-semibold text-primary">
            {type}
          </span>
          <h2 className="mb-5 text-[42px] font-bold text-dark">
            {price}
            <span className="text-base font-medium text-body-color">
              / {subscription}
            </span>
          </h2>
          <p className="mb-8 border-b border-[#F2F2F2] pb-8 text-base text-body-color">
            {description}
          </p>
          <ul className="mb-7">
            <p className="mb-1 text-base leading-loose text-body-color">
              {children}
            </p>
          </ul>
          <a
            className={` ${
              active
                ? ` w-full block text-base font-semibold text-white bg-sky-700 border border-primary rounded-md text-center p-4 hover:bg-opacity-90 transition`
                : `block w-full rounded-md border  border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-black`
            } `}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </>
  );
};

export const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <p className="mb-1 text-base leading-loose text-body-color">{children}</p>
    </>
  );
};

// {stripeLoadStripe && (
//   <button
//     className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//     role="link"
//     onClick={handleClick}
//   >
//     Subscribe
//   </button>
// )}
