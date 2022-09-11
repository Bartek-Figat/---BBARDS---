import React from "react";
import { Link } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import FormSubmit from "../form/FormSubmit";
import FormInputWithTooltip from "../form/FormInputWithTooltip";
import FormCheckboxInput from "../form/FormCheckboxInput";
import { SubmitHandler, useForm } from "react-hook-form";

function SignUpTab() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  interface IFormInput {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
  }

  return (
    <div className="m-12">
      <hgroup className="flex flex-col items-center w-full">
        <h2 className="text-4xl font-bold">Register</h2>
        <p className="mt-2">Setup a new account in a minute.</p>
      </hgroup>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-11">
          <FormInputWithTooltip
            id="name"
            placeholder="Name"
            register={register}
            options={{
              required: "This is required",
            }}
            tooltip={errors.name && errors.name.message}
          />
          <FormInputWithTooltip
            id="email"
            placeholder="E-mail"
            register={register}
            options={{
              required: "This is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Wrong email pattern",
              },
            }}
            tooltip={errors.email && errors.email.message}
          />
          <FormInputWithTooltip
            id="password"
            placeholder="Password"
            register={register}
            options={{
              required: "This is required",
              minLength: {
                value: 8,
                message: "Min length is 8",
              },
            }}
            tooltip={errors.password && errors.password.message}
          />
          <FormInputWithTooltip
            id="repeatPassword"
            placeholder="Repeat Password"
            register={register}
            options={{
              required: "This is required",
              minLength: {
                value: 8,
                message: "Min length is 8",
              },
            }}
            tooltip={errors.repeatPassword && errors.repeatPassword.message}
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
      </form>

      <p className="mt-12 text-center text-lg w-[290px] m-auto">
        Already have an account? click on the{" "}
        <span className="text-dark-blue font-medium">( sign in )</span> button
        above.
      </p>
    </div>
  );
}

export default SignUpTab;