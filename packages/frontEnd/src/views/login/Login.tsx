import { useEffect } from "react";
import { TabButton } from "components/tabs/TabButton";
import { Tab } from "@headlessui/react";
import AsideSection from "./AsideSection";
import SignInTab from "./tabs/SignInTab";
import SignUpTab from "./tabs/SignUpTab";
import { useAppSelector } from "store/hooks";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const { isLogin, successResponse } = useAppSelector((store) => store.login);

  useEffect(() => {
    if (isLogin) {
      navigate("/dashboard", { replace: true });
    }
  }, [isLogin, navigate]);

  return (
    <div className="flex h-screen w-screen">
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
