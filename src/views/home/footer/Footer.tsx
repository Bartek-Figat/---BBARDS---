export const Footer = () => {
  return (
    <div className="bg-black-blue w-full py-10">
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
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
            <form className="w-full bg-white rounded">
              <input
                type="search"
                placeholder="Enter Your Email Address"
                className="overflow-hidden outline-none mx-2"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
