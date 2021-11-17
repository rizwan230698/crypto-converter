import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Spinner from "./Spinner";

const walletDetails = [
  { key: "Account", value: 989 },
  { key: "Chain ID", value: 98 },
  { key: "Balance", value: 10 },
];

export type WalletModalProps = {
  onClose?: () => void;
};

const WalletModal = ({ onClose }: WalletModalProps) => {
  const [connnected, setConnnected] = useState(false);
  const [loading, setLoading] = useState(false);

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

      {!connnected ? (
        <div>
          <p className="my-10 text-red-400">
            Wallet not connected. Please click the "Connect Now" button below.
          </p>

          <div className="flex space-x-2">
            <Button onClick={() => setConnnected(true)}>
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
              <th className="text-left  px-10 py-4">key</th>
              <th className="text-right  px-10 py-4">value</th>
            </thead>
            <tbody>
              {walletDetails.map((item) => (
                <tr className="border-b border-gray-50">
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
            onClick={() => setConnnected(false)}
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
