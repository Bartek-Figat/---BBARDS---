export const Footer = () => {
  return (
    <div className="bg-black-blue w-full py-10">
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
        <div className="grid grid-cols-4 gap-4">
          <div className="w-full">
            <h3 className="text-gray-chalk relative border-b border-gray-dark pb-3.5 before:content-[''] before:absolute before:w-1/3 before:h-0.5 before:bg-dark-blue before:bottom-0">
              Contact us
            </h3>
          </div>
          <div className="bg-white w-full">test</div>
          <div className="bg-white w-full">test</div>
          <div className="bg-white w-full">test</div>
        </div>
      </div>
    </div>
  );
};
