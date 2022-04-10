import { ethers } from "ethers";
import React from "react";
import { useEffect, useState, useLayoutEffect } from "react";
import Modal from "./Modal";
import QuestionModal from "./QuestionModal";

export default function MetaMask() {
  const [connected, setConnected] = useState(true);
  const [address, setAddress] = useState("");
  const [metaMaskInstalled, setMetaMaskInstalled] = useState(true);
  const [showQuestionsModal, setShowQuestionsModal] = useState(false);
  const [showConnectedInformation, setShowConnectedInformation] =
    useState(false);
  const [connecting, setConnecting] = useState(false);
  const [connectionMethod, setConnectionMethod] = useState("");
  const SaveLocalStorageWallet = (address) => {
    setConnectionMethod("Local Storage");
    localStorage.setItem("address", address);
    setAddress(address);
    setConnected(true);
    setShowQuestionsModal(false);
  };
  useEffect(() => {
    const OnWindowLoaded = async () => {
      console.log(localStorage.getItem("address"));
      let savedWallet = localStorage.getItem("address");
      if (savedWallet) {
        console.log("yep1");
        SaveLocalStorageWallet(savedWallet);
        return;
      }
      if (typeof window.ethereum !== "undefined") {
        FindConnectedWallets();
      } else {
        setConnected(false);
        setMetaMaskInstalled(false);
      }
    };
    OnWindowLoaded();
  }, []);
  const FindConnectedWallets = async () => {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    const address = await provider.listAccounts();
    ConnectMetamaskAddress(address);
  };
  const ConnectMetamaskAddress = (address) => {
    if (address.length == 0) {
      setConnected(false);
      return;
    }
    setAddress(address[0]);
    setConnected(true);
    setConnectionMethod("MetaMask");
  };
  const ConnectWallet = async () => {
    setConnecting(true);
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((address) => {
        ConnectMetamaskAddress(address);
      })
      .catch((f) => {
        setConnecting(false);
      })
      .finally(() => {
        setConnecting(false);
      });
  };
  const HideQuestionsModal = () => {
    setShowQuestionsModal(false);
  };
  const HideConnectedInformationModal = () => {
    setShowConnectedInformation(false);
  };
  const DisconnectWallet = () => {
    if (connectionMethod == "MetaMask") {
      window.open(
        "https://metamask.zendesk.com/hc/en-us/articles/360059535551-Disconnect-wallet-from-a-dapp"
      );
      return;
    }
    localStorage.setItem("address", "");
    setShowConnectedInformation(false);
    setShowQuestionsModal(false);
    setConnected(false);
  };
  if (connecting) {
    return <span className="text-success">Connecting...</span>;
  }
  if (!metaMaskInstalled) {
    return (
      <>
        <div className="d-inline-block mx-2">
          <button
            type="button"
            className="btn btn-sm text-white outline-primary btn-success"
            onClick={() => {
              setShowQuestionsModal(true);
            }}
          >
            Why connect?
          </button>
        </div>
        {showQuestionsModal && (
          <QuestionModal
            HideQuestionsModal={HideQuestionsModal}
            SaveLocalStorageWallet={SaveLocalStorageWallet}
          />
        )}
      </>
    );
  }
  if (!connected) {
    return (
      <>
        <div className="d-inline-block mx-2">
          <button
            className={`btn btn-sm text-white outline-primary btn-success`}
            onClick={() => ConnectWallet()}
          >
            Connect 🦊
          </button>
        </div>
        <div className="d-inline-block mx-2">
          <button
            type="button"
            className="btn btn-sm text-white outline-primary btn-success"
            onClick={() => {
              setShowQuestionsModal(true);
            }}
          >
            Why connect?
          </button>
        </div>
        {showQuestionsModal ? (
          <QuestionModal
            HideQuestionsModal={HideQuestionsModal}
            SaveLocalStorageWallet={SaveLocalStorageWallet}
          />
        ) : (
          ""
        )}
      </>
    );
  }

  return (
    <>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => setShowConnectedInformation(true)}
      >
        {`${address.substring(0, 6)}`}
      </button>
      {showConnectedInformation && (
        <Modal
          Title={address}
          closeModalFunction={HideConnectedInformationModal}
        >
          <p>
            {`This site stores no data on servers. The wallet connection is
            personal and will only be used to query the DeFikingdoms API.`}
          </p>
          <p>{`You're currently connected through ${connectionMethod}`}.</p>
          <p className="text-center">
            <button
              className="btn btn-sm btn-danger"
              onClick={DisconnectWallet}
            >
              Disconnect
            </button>
          </p>
        </Modal>
      )}
    </>
  );
}
