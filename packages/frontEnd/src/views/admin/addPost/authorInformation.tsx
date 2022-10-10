export const AuthorInformation = () => {
  return (
    <div className="w-full p-5 bg-white rounded-lg text-sm mb-5">
      <h2 className="font-bold relative mt-2 text-lg border-b pb-2 before:content-[''] before:absolute before:w-1/6 before:h-0.5 before:bg-dark-blue before:-bottom-[1px]">
        Author Information
      </h2>
      <form className="my-5">
        <div className="mb-4">
          <label className="block text-cold-gray text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="bg-gray-chalk appearance-none w-full p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-cold-gray text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="bg-gray-chalk appearance-none w-full p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-cold-gray text-sm font-bold mb-2">
            Number
          </label>
          <input
            className="bg-gray-chalk appearance-none w-full p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
            id="number"
            type="number"
            placeholder="Your Number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-cold-gray text-sm font-bold mb-2">
            Product Name
          </label>
          <input
            className="bg-gray-chalk appearance-none w-full p-4 text-cold-gray leading-tight border-b-2 outline-none focus:border-dark-blue duration-500"
            id="adress"
            type="text"
            placeholder="Your Adress"
          />
        </div>
      </form>
    </div>
  );
};
