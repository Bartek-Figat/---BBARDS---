import { SummaryList } from "./header/summaryList";
import { Profile } from "./profile/profile";

export const Content: React.FunctionComponent = () => {
  return (
    <div>
      <SummaryList />
      <Profile />
    </div>
  );
};
