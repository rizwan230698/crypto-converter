import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import FormInput from "../components/FormInput";

type State = { nep?: number; busd?: number };

const exchangeRate = 3;

const Home: NextPage = () => {
  const [values, setValues] = useState<State>({});

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, valueAsNumber } = e.target;

    const state =
      name === "nep"
        ? { nep: valueAsNumber, busd: valueAsNumber * exchangeRate }
        : {
            nep: parseFloat((valueAsNumber / exchangeRate).toFixed(2)),
            busd: valueAsNumber,
          };

    setValues(state);
  };

  return (
    <div className="h-screen bg-darkblue flex justify-center items-center px-5 lg:px-0">
      <div className="flex flex-col rounded-md bg-white p-6 lg:p-14 lg:pb-8 w-full lg:max-w-md">
        <p className="text-3xl font-medium mb-[30px]">Crypto converter</p>
        <div className="space-y-8 mb-10">
          <FormInput
            label="nep"
            name="nep"
            value={values["nep"]}
            onChange={onChange}
          />
          <FormInput
            label="busd"
            name="busd"
            value={values["busd"]}
            onChange={onChange}
          />
        </div>

        <button className="text-blue font-medium">Check Wallet Details</button>
      </div>
    </div>
  );
};

export default Home;
