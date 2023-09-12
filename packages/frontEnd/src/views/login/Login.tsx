import { useSelector } from "react-redux";
import { TabButton } from "components/tabs/TabButton";
import { Tab } from "@headlessui/react";
import AsideSection from "./AsideSection";
import SignInTab from "./tabs/SignInTab";
import SignUpTab from "./tabs/SignUpTab";
import { Navigate } from "react-router-dom";
import { selectSingIn } from "../../slice/singIn";

function Login() {
  const { status } = useSelector(selectSingIn);

  return (
    <div className="flex h-screen w-screen">
      {status === "success" && <Navigate to="/dashboard" replace={true} />}
      <AsideSection />
      <div className="w-full md:w-3/6 xl:w-2/5 bg-[#fbfbfb]">
        <Tab.Group>
          <Tab.List className="flex w-full">
            <Tab className="w-full">
              {({ selected }) => (
                <TabButton
                  className="px-0 py-4 font-semibold text-sm"
                  selected={selected}
                >
                  Sign In
                </TabButton>
              )}
            </Tab>
            <Tab className="w-full">
              {({ selected }) => (
                <TabButton
                  className="px-0 py-4 font-semibold text-sm"
                  selected={selected}
                >
                  Sign Up
                </TabButton>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <SignInTab />
            </Tab.Panel>
            <Tab.Panel>
              <SignUpTab />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Login;
