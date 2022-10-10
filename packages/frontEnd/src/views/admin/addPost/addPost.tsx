import { AdInformation } from "./adInformation";
import { AuthorInformation } from "./authorInformation";
import { PlanInformation } from "./planInformation";
import { SafetyTips } from "./safetyTips";
import { CustomOffer } from "./customOffer";
export const AddPost = () => {
  return (
    <div className="w-100%">
      <AdInformation />
      <AuthorInformation />
      <PlanInformation />
      <div className="w-full p-5 bg-white rounded-lg text-sm mb-5">
        <form>
          <label className="flex items-start text-cold-gray">
            <input className="mr-2 leading-tight mt-1" type="checkbox" />
            <p className="text-sm">
              Send me Trade Email/SMS Alerts for people looking to buy mobile
              handsets in www By clicking "Post", you agree to our Terms of Use
              and Privacy Policy and acknowledge that you are the rightful owner
              of this item and using Trade to find a genuine buyer.
            </p>
          </label>
        </form>
        <div className="w-full flex justify-end mt-4">
          <button className="text-white font-bold bg-dark-blue rounded px-7 py-3 hover:bg-dark-blue-hover duration-500">
            PUBLISHED YOUR AD
          </button>
        </div>
      </div>
      <SafetyTips />
      <CustomOffer />
    </div>
  );
};
