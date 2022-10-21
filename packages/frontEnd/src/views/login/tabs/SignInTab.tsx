import React from "react";
import { Link } from "react-router-dom";
import { FaUnlock } from "react-icons/fa";
import FormSubmit from "../form/FormSubmit";
import FormCheckboxInput from "../form/FormCheckboxInput";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInputWithTooltip from "../form/FormInputWithTooltip";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { signIn } from "../../../slice/login";

function SignInTab() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const dispatch = useAppDispatch();
  const isError = useAppSelector((state) => state.login.status) === "error";
  const isPending = useAppSelector((state) => state.login.status) === "pending";
  const errorMessage = useAppSelector((state) => state.login.errorMessage);

  const onSubmit: SubmitHandler<IFormInput> = ({ email, password }) => {
    dispatch(signIn({ email, password }));
  };

  interface IFormInput {
    email: string;
    password: string;
  }

  return (
    <div className="m-12">
      <hgroup className="flex flex-col items-center w-full">
        <h2 className="text-4xl font-bold">Welcome!</h2>
        <p className="mt-2">Use credentials to access your account.</p>
      </hgroup>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-11">
          <FormInputWithTooltip
            id="email"
            placeholder="E-mail"
            register={register}
            options={{
              required: "This is required",
            }}
            tooltip={errors.email && errors.email.message}
          />

          <FormInputWithTooltip
            id="password"
            placeholder="Password"
            register={register}
            options={{
              required: "This is required",
            }}
            tooltip={errors.password && errors.password.message}
          />
        </div>

        <div className="mt-5 flex justify-between">
          <FormCheckboxInput label="Remember me" />

          <Link to="/">Forget password?</Link>
        </div>

        <FormSubmit>
          {isPending ? (
            <div className=" flex justify-center items-center">
              <div className="animate-spin rounded-full border-b-2 w-4 h-4 border-white"></div>
              <p className="ml-2">Loading...</p>
            </div>
          ) : (
            <>
              <FaUnlock />
              <p className="ml-2">Enter your account</p>
            </>
          )}
        </FormSubmit>
      </form>

      {/* {isError && <p className="mt-5 text-red-600">{errorMessage}</p>} */}

      <p className="mt-12 text-center text-lg w-[290px] m-auto">
        Don't have an account? click on the{" "}
        <span className="text-dark-blue font-medium">( sign up )</span> button
        above.
      </p>
    </div>
  );
}

export default SignInTab;
