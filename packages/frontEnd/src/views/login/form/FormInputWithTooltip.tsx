import { UseFormRegister } from "react-hook-form";

interface Props {
  id: string;
  placeholder: string;
  register: UseFormRegister<any>;
  options: object;
  tooltip: string | undefined;
  type?: string | undefined;
}

function FormInputWithTooltip({
  id,
  placeholder,
  register,
  options,
  tooltip,
  type,
}: Props) {
  return (
    <label>
      <input
        className="mt-5 w-full border-b-[2px] border-gray-mercury focus:border-dark-blue focus:outline-none py-2.5 pl-5"
        type={type}
        placeholder={placeholder}
        {...register(id, options)}
      />
      <p className="text-sm pl-4 mt-1">{tooltip}</p>
    </label>
  );
}

export default FormInputWithTooltip;
