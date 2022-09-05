import React from "react";
import { Link } from "react-router-dom";
import { FaUnlock } from "react-icons/fa";
import FormTextInput from "../form/FormTextInput";
import FormSubmit from "../form/FormSubmit";
import FormCheckboxInput from "../form/FormCheckboxInput";

function SignInTab() {
  return (
    <div className="m-12">
      <hgroup className="flex flex-col items-center w-full">
        <h2 className="text-4xl font-bold">Welcome!</h2>
        <p className="mt-2">Use credentials to access your account.</p>
      </hgroup>

      <div className="mt-11">
        <FormTextInput placeholder="Phone number" />
        <FormTextInput placeholder="Password" />
      </div>

      <div className="mt-5 flex justify-between">
        <FormCheckboxInput label="Remember me" />

        <Link to="/">Forget password?</Link>
      </div>

      <FormSubmit>
        <FaUnlock />
        <p className="ml-2">Enter your account</p>
      </FormSubmit>

      <p className="mt-12 text-center text-lg w-[290px] m-auto">
        Don't have an account? click on the{" "}
        <span className="text-dark-blue font-medium">( sign up )</span> button
        above.
      </p>
    </div>
  );
}

export default SignInTab;
