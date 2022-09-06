export const Footer = () => {
  return (
    <div className="bg-black-blue w-full py-10 sm:text-sm">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 mb-16">
          <div className="w-full">
            <h2 className="text-white text-4xl font-bold">
              Subscribe for Latest Offers
            </h2>
            <p className="text-gray-dark">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam, aliquid reiciendis! Exercitationem soluta provident
              non.
            </p>
          </div>
          <div className="w-full">
            <form className="w-full bg-white rounded flex justify-between items-center">
              <input
                type="search"
                placeholder="Enter Your Email Address"
                className="overflow-hidden outline-none mx-2 h-14 w-3/5"
              />
              <button className="bg-dark-blue text-white py-2.5 w-1/3 rounded mx-2">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 border-b border-gray-dark border-0">
          <div className="w-full">
            <h3 className="text-gray-chalk relative border-b border-gray-dark pb-3.5 mb-5 before:content-[''] before:absolute before:w-1/3 before:h-0.5 before:bg-dark-blue before:-bottom-[1px]">
              Contact us
            </h3>
            <ul className="text-gray-dark">
              <li className="mb-5">
                <p>1420 West Jalkuri Fatullah,</p>
                <p>Narayanganj, BD</p>
              </li>
              <li className="mb-5">
                <p>support@classicads.com</p>
                <p> info@classicads.com</p>
              </li>
              <li className="mb-5">
                <p>+8801838288389</p>
                <p>+8801941101915</p>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h3 className="text-gray-chalk relative border-b mb-5 border-gray-dark pb-3.5 before:content-[''] before:absolute before:w-1/3 before:h-0.5 before:bg-dark-blue before:-bottom-[1px]">
              Quick links
            </h3>
            <ul className="text-gray-dark">
              <li className="mb-5">
                <a href="#">Store Location</a>
              </li>
              <li className="mb-5">
                <a href="#">Order Tracking</a>
              </li>
              <li className="mb-5">
                <a href="#">My Account</a>
              </li>
              <li className="mb-5">
                <a href="#">Size Guide</a>
              </li>
              <li className="mb-5">
                <a href="#">Faq</a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h3 className="text-gray-chalk relative border-b mb-5 border-gray-dark pb-3.5 before:content-[''] before:absolute before:w-1/3 before:h-0.5 before:bg-dark-blue before:-bottom-[1px]">
              Information
            </h3>
            <ul className="text-gray-dark">
              <li className="mb-5">
                <a href="#">About Us</a>
              </li>
              <li className="mb-5">
                <a href="#">Delivery System</a>
              </li>
              <li className="mb-5">
                <a href="#">Secure Payment</a>
              </li>
              <li className="mb-5">
                <a href="#">Contact Us</a>
              </li>
              <li className="mb-5">
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h3 className="text-gray-chalk relative border-b border-gray-dark pb-3.5 before:content-[''] before:absolute before:w-1/3 before:h-0.5 before:bg-dark-blue before:-bottom-[1px]">
              Contact us
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
