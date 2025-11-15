import React, { useState, useEffect } from "react";
import { Wallet } from "lucide-react";

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not found. Please install MetaMask extension!");
      return;
    }

    try {
      setIsConnecting(true);

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        console.log("Connected wallet:", accounts[0]);
      } else {
        console.warn("No wallet accounts found.");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      alert("Failed to connect wallet. Check MetaMask and try again.");
    } finally {
      setIsConnecting(false);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts) => {
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        })
        .catch((err) => console.error("Error checking accounts:", err));

      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        } else {
          setWalletAddress("");
        }
      });

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  const disconnectWallet = () => {
    setWalletAddress("");
  };

  return (
    <div className="flex items-center">
      {walletAddress ? (
        <div className="flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium px-4 py-2 rounded-full shadow-md gap-2 transition-all hover:scale-105 hover:shadow-lg">
          <Wallet size={18} />
          <span>
            {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </span>
          <button
            onClick={disconnectWallet}
            className="ml-2 text-xs bg-white/20 text-white px-2 py-0.5 rounded-md hover:bg-white/30 transition"
            >
            Disconnect
            </button>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          disabled={isConnecting}
          className={`flex items-center gap-2 bg-white text-purple-700 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-purple-50 transition-all ${
            isConnecting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          <Wallet size={18} />
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </button>
      )}
    </div>
  );
};

export default WalletConnect;