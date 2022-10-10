export const CustomOffer = () => {
  return (
    <div className="w-full p-5 bg-white rounded-lg text-sm mb-5">
      <h2 className="font-bold relative mt-2 text-lg border-b pb-2 before:content-[''] before:absolute before:w-1/6 before:h-0.5 before:bg-dark-blue before:-bottom-[1px]">
        Custom Offer
      </h2>
      <form className="my-5">
        <div className="mb-4">
          <input
            className="bg-gray-chalk appearance-none w-full p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <input
            className="bg-gray-chalk appearance-none w-full p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Message"
            className="bg-gray-chalk appearance-none w-full h-[20vh] p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
          ></textarea>
        </div>
        <div className="mb-4 w-full">
          <button className="text-white font-bold bg-dark-blue rounded px-7 py-3 w-full hover:bg-dark-blue-hover duration-500">
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};
