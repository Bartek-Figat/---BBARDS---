import { Link } from "react-router-dom";
import { useRegisterMutation } from "../../../api/services/api";
import { FaUserCheck } from "react-icons/fa";
import FormSubmit from "../form/FormSubmit";
import FormInputWithTooltip from "../form/FormInputWithTooltip";
import FormCheckboxInput from "../form/FormCheckboxInput";
import { SubmitHandler, useForm } from "react-hook-form";

function SignUpTab() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const [userRegister, { isLoading, isError, isSuccess }] =
    useRegisterMutation();

  const onSubmit: SubmitHandler<IFormInput> = ({
    name,
    email,
    password,
    repeatPassword,
  }) => {
    userRegister({ name, email, password, repeatPassword });
  };

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
            type="text"
            placeholder="Name"
            register={register}
            options={{
              required: "This is required",
            }}
            tooltip={errors.name && errors.name.message}
          />
          <FormInputWithTooltip
            id="email"
            type="email"
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
            type="password"
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
            type="password"
            placeholder="Repeat Password"
            register={register}
            options={{
              required: "This is required",
              minLength: {
                value: 8,
                message: "Min length is 8",
              },
              validate: (value: string) => {
                if (watch("password") !== value) {
                  return "Passwords do no match";
                }
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

      {isSuccess && (
        <p className="mt-5 text-green-400">
          You are successfully registered! Before login you must confirm your
          email.
        </p>
      )}
      {isLoading && <p className="mt-5">Your data is processing...</p>}
      {isError && (
        <p className="mt-5 text-red-400">
          Something wrong happened... Try again!
        </p>
      )}

      <p className="mt-12 text-center text-lg w-[290px] m-auto">
        Already have an account? click on the{" "}
        <span className="text-dark-blue font-medium">( sign in )</span> button
        above.
      </p>
    </div>
  );
}

export default SignUpTab;
