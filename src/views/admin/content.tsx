import { SummaryList } from "./header/summaryList";
import { Profile } from "./profile/profile";

export const Content: React.FunctionComponent = () => {
  return (
    <div className="bg-slate-100">
      <SummaryList />
      <Profile />
    </div>
  );
};
