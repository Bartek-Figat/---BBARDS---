import React from "react";
import { Link } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import FormSubmit from "../form/FormSubmit";
import FormInputWithTooltip from "../form/FormInputWithTooltip";
import FormCheckboxInput from "../form/FormCheckboxInput";

function SignUpTab() {
  return (
    <div className="m-12">
      <hgroup className="flex flex-col items-center w-full">
        <h2 className="text-4xl font-bold">Register</h2>
        <p className="mt-2">Setup a new account in a minute.</p>
      </hgroup>

      <div className="mt-11">
        <FormInputWithTooltip
          placeholder="Phone number"
          tooltip="Please follow this example - 01XXXXXXXXX"
        />
        <FormInputWithTooltip
          placeholder="Password"
          tooltip="Password must be 6 characters"
        />
        <FormInputWithTooltip
          placeholder="Repeat Password"
          tooltip="Password must be 6 characters"
        />
      </div>

      <div className="mt-5 flex">
        <FormCheckboxInput
          label={
            <>
              I agree to the all{" "}
              <Link className="text-[#007bff]" to="/">
                terms & consitions
              </Link>{" "}
              of bebostha.
            </>
          }
        />
      </div>

      <FormSubmit>
        <FaUserCheck />
        <p className="ml-2">Create new account</p>
      </FormSubmit>

      <p className="mt-12 text-center text-lg w-[290px] m-auto">
        Already have an account? click on the{" "}
        <span className="text-dark-blue font-medium">( sign in )</span> button
        above.
      </p>
    </div>
  );
}

export default SignUpTab;
