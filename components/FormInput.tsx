import { ChangeEvent } from "react";

export type FormInputProps = {
  name: string;
  value?: number;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({ label, name, value, onChange }: FormInputProps) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="cursor-pointer uppercase mb-2 self-start"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type="number"
        placeholder="0.00"
        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue"
      />
    </div>
  );
};

export default FormInput;
