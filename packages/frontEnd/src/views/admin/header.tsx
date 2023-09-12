import avatar from "assets/images/avatar/01.jpg";
import { Nav } from "./nav";

export const Header: React.FC = () => {
  return (
    <div className="w-[70vw] pt-10 bg-white rounded-lg text-sm mb-5">
      <div className="flex laptop:flex-col w-full px-3 mb-5">
        <div className="flex px-3 w-[40%] laptop:w-full">
          <div className="mr-5">
            <p className="border-[3px] border-[#0044bb] rounded-full">
              <img
                className="rounded-full w-[120px] m-[3px]"
                src={avatar}
                alt=""
              />
            </p>
          </div>
          {/* <div className="flex flex-col">
            <ul className="text-gray-dark">
              {user && (
                <>
                  <h4 className="font-bold mt-2 text-lg">{user.name}</h4>
                  <li key={user.email}>{user.email}</li>
                </>
              )}

              <li>Los Angeles, West America</li>
            </ul>
          </div> */}
        </div>
        <div className="flex justify-between w-[60%] laptop:w-full laptop:py-4 px-3">
          <div className=" h-full w-[30%] bg-city-fog bg-cover rounded-lg">
            <div className="flex flex-col laptop:py-7 justify-center items-center text-white w-full h-full bg-[#df1313]/80 rounded-lg">
              <h4 className="font-bold text-3xl">2433</h4>
              <p>Listing Ads</p>
            </div>
          </div>
          <div className=" h-full w-[30%] bg-city-fog bg-cover rounded-lg">
            <div className="flex flex-col laptop:py-7 justify-center items-center text-white w-full h-full bg-[#00af1e]/80 rounded-lg">
              <h4 className="font-bold text-3xl">2433</h4>
              <p>Total folllower</p>
            </div>
          </div>
          <div className=" h-full w-[30%] bg-city-fog bg-cover rounded-lg">
            <div className="flex flex-col laptop:py-7 justify-center items-center text-white w-full h-full bg-[#d0a300]/80 rounded-lg">
              <h4 className="font-bold text-3xl">2433</h4>
              <p>Total Review</p>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};
