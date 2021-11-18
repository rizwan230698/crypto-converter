import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";
import Button from "./Button";
import Modal from "./Modal";
import Spinner from "./Spinner";
import { injected } from "../utils/connector";
import { truncate } from "../utils";

export type WalletModalProps = {
  onClose?: () => void;
};

const WalletModal = ({ onClose }: WalletModalProps) => {
  const [loading, setLoading] = useState(false);
  const { active, account, activate, deactivate, chainId, library } =
    useWeb3React();
  const [balance, setBalance] = useState<any>();

  const connect = async () => {
    try {
      setLoading(true);
      await activate(injected);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const disconnect = () => {
    try {
      deactivate();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!!account && !!library) {
      library
        .getBalance(account)
        .then((balance: any) => {
          setBalance(balance);
        })
        .catch(() => {
          setBalance(null);
        });

      return () => {
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]);

  const walletDetails = [
    {
      key: "Account",
      value: truncate(account),
    },
    { key: "Chain ID", value: chainId },
    {
      key: "Balance",
      value:
        balance === null ? "Error" : balance ? `Ξ${formatEther(balance)}` : "",
    },
  ];

  return (
    <Modal>
      <div className="flex items-center justify-between">
        <p className="font-semibold text-md">Wallet details</p>
        <button
          className="h-6 w-6 focus:outline-none focus:ring focus:ring-blue rounded-md"
          onClick={onClose}
        >
          &#x2715;
        </button>
      </div>

      {!active ? (
        <div>
          <p className="my-10 text-red-400">
            Wallet not connected. Please click the "Connect Now" button below.
          </p>

          <div className="flex space-x-2">
            <Button onClick={connect}>
              {loading ? <Spinner /> : "Connect"}
            </Button>
            <Button onClick={onClose} textColor="text-black bg-gray-300">
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col mt-6">
          <table>
            <thead className="text-philippineGray uppercase text-xs">
              <tr>
                <th className="text-left  px-10 py-4">key</th>
                <th className="text-right  px-10 py-4">value</th>
              </tr>
            </thead>
            <tbody>
              {walletDetails.map((item) => (
                <tr className="border-b border-gray-50" key={item.key}>
                  <td className="px-10 py-4">{item.key}</td>
                  <td className="px-10 py-4 text-right">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="font-medium self-center my-7 text-xs text-philippineGray">
            Wallet Details
          </p>

          <Button
            minHeight="min-h-[40px]"
            onClick={disconnect}
            bgColor="bg-red-500"
          >
            {loading ? <Spinner /> : "Disconnect"}
          </Button>
        </div>
      )}
    </Modal>
  );
};

export default WalletModal;
