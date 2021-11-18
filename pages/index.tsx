import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import WalletModal from "../components/WalletModal";

type State = { nep?: number; busd?: number };

const exchangeRate = 3;

const Home: NextPage = () => {
  const [values, setValues] = useState<State>({});
  const [showmodal, setShowmodal] = useState(false);

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
    <>
      <div className="h-screen bg-darkblue flex flex-col justify-center items-center px-5 lg:px-0">
        <div className="mb-20">
          <Image src="/neptune-mutual.svg" height={64} width={330} />
        </div>
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

          <Button
            onClick={() => setShowmodal(true)}
            textColor="text-blue"
            bgColor="bg-transparent"
          >
            Check Wallet Details
          </Button>
        </div>
      </div>
      {showmodal && <WalletModal onClose={() => setShowmodal(false)} />}
    </>
  );
};

export default Home;
