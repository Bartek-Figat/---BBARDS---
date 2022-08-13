import { SummaryList } from "./header/summaryList";
import { Profile } from "./profile/profile";

export const Content: React.FunctionComponent = () => {
  return (
    <div className="flex-grow">
      <SummaryList />
      <Profile />
    </div>
  );
};
