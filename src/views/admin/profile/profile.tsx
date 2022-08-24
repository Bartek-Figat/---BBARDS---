import { currencyNumberFormat, fromatPhoneNumber } from "util/helpers";

export const Profile: React.FC = () => {
  return (
    <div className="flex justify-center w-full p-4">
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 gap-x-8 gap-y-2 lg:grid-cols-16 desktop:grid-cols-14 sm:grid-cols-12">
          <div className="flex justify-center items-center flex-col rounded-md mb-8 p-2 bg-white">
            <div className="flex flex-col w-[100%] h-[15rem] p-4">
              <div className="flex justify-between mb-5 border-b-2 border-gray-100 p-2">
                <h2 className="text-black text-lg">Membership</h2>
                <button className="bg-blue-200 hover:bg-blue-300 rounded-md px-4 py-1 text-blue-900  font-[600]">
                  Edite
                </button>
              </div>
              <div className="flex ">
                <ul className="flex flex-col w-full justify-between">
                  <li className="flex justify-between items-center pb-2 mb-2 border-b-2 border-gray-100">
                    <h5>Staus</h5>
                    <p>Premium</p>
                  </li>
                  <li className="flex justify-between items-center pb-2 mb-2 border-b-2 border-gray-100">
                    <h5>Joined</h5>
                    <p>February 02, 2021</p>
                  </li>
                  <li className="flex justify-between items-center pb-2 mb-2 border-b-2 border-gray-100">
                    <h5>Spand</h5>
                    <p>{currencyNumberFormat(4.587)}</p>
                  </li>
                  <li className="flex justify-between items-center pb-2 mb-2">
                    <h5>Earn</h5>
                    <p>{currencyNumberFormat(97.325)}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap items-center flex-col rounded-md mb-8 p-2 bg-white">
            <div className="flex flex-col w-[100%] h-[15rem] p-4">
              <div className="flex justify-between mb-5 border-b-2 border-gray-100 p-2">
                <h2 className="text-black text-lg">Billing Address</h2>
                <button className="bg-blue-200 rounded-md px-4 py-1 text-blue-900 font-[600]">
                  Edite
                </button>
              </div>
              <div className="flex">
                <ul className="flex flex-col w-full justify-between">
                  <li className="flex justify-between items-center pb-2 mb-2 border-b-2 border-gray-100">
                    <h5>Post Code:</h5>
                    <p>1420</p>
                  </li>
                  <li className="flex justify-between items-center pb-2 mb-2 border-b-2 border-gray-100">
                    <h5>State:</h5>
                    <p>West Jalkuri</p>
                  </li>
                  <li className="flex justify-between items-center pb-2 mb-2 border-b-2 border-gray-100">
                    <h5>City:</h5>
                    <p>Narayanganj</p>
                  </li>
                  <li className="flex justify-between items-center pb-2 mb-2">
                    <h5>Country:</h5>
                    <p>Bangladesh</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center  flex-wrap items-center flex-col rounded-md mb-8 p-2 bg-white">
            <div className="flex flex-col w-[100%] h-[15rem] p-4">
              <div className="flex justify-between mb-5 border-b-2 border-gray-100 p-2">
                <h2 className="text-black text-lg">Contact Info</h2>
                <button className="bg-blue-200 rounded-md px-4 py-1 text-blue-900 font-[600]">
                  Edite
                </button>
              </div>
              <div className="flex">
                <ul className="flex flex-col w-full justify-between">
                  <li className="flex justify-between items-center pb-2 mb-2 border-b-2 border-gray-100">
                    <h5>Website:</h5>
                    <p>www.bbards.com</p>
                  </li>
                  <li className="flex justify-between items-center pb-2 mb-2 border-b-2 border-gray-100">
                    <h5>Email:</h5>
                    <p>carrill@arvinmeritor.info</p>
                  </li>
                  <li className="flex justify-between items-center pb-2 mb-2 border-b-2 border-gray-100">
                    <h5>Phone:</h5>
                    <p>{fromatPhoneNumber("2027953213")}</p>
                  </li>
                  <li className="flex justify-between items-center pb-2 mb-2">
                    <h5>Skype:</h5>
                    <p>live:richard</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap items-center flex-col rounded-md mb-8 p-2 bg-white">
            <div className="flex flex-col w-[100%] h-[15rem] p-4">
              <div className="flex justify-between mb-5 border-b-2 border-gray-100 p-2">
                <h2 className="text-black text-lg">Shipping Address</h2>
                <button className="bg-blue-200 rounded-md px-4 py-1 text-blue-900 font-[600]">
                  Edite
                </button>
              </div>
              <div className="flex">
                <ul className="flex flex-col w-full justify-between">
                  <li className="flex justify-between items-center pb-2 mb-2 border-b-2 border-gray-100">
                    <h5>Post Code:</h5>
                    <p>1420</p>
                  </li>
                  <li className="flex justify-between items-center pb-2 mb-2 border-b-2 border-gray-100">
                    <h5>State:</h5>
                    <p>West Jalkuri</p>
                  </li>
                  <li className="flex justify-between items-center pb-2 mb-2 border-b-2 border-gray-100">
                    <h5>City:</h5>
                    <p>Narayanganj</p>
                  </li>
                  <li className="flex justify-between items-center pb-2 mb-2">
                    <h5>Country:</h5>
                    <p>Bangladesh</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
