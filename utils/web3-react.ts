import Web3 from "web3";

export const getLibrary = (provider: any) => {
  return new Web3(provider);
};
