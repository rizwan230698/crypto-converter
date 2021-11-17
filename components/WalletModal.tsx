import Button from "./Button";
import Modal from "./Modal";

export type WalletModalProps = {
  onClose?: () => void;
};

const WalletModal = ({ onClose }: WalletModalProps) => {
  return (
    <Modal>
      <div className="flex items-center justify-between mb-10">
        <p className="font-semibold text-md">Wallet details</p>
        <button
          className="h-6 w-6 focus:outline-none focus:ring focus:ring-blue rounded-md"
          onClick={onClose}
        >
          &#x2715;
        </button>
      </div>

      <p className="mb-10 text-red-400">
        Wallet not connected. Please click the "Connect Now" button below.
      </p>

      <div className="flex space-x-2">
        <Button>Connect</Button>
        <Button onClick={onClose} textColor="text-black bg-gray-300">
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default WalletModal;
