// pages/index.tsx
import React, { useState } from "react";

const BankAccount = ({
  accountNumber,
  bankName,
  ownerName,
}: {
  accountNumber: string;
  bankName: string;
  ownerName: string;
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center">
      <div>
        <p className="text-lg font-semibold">{bankName}</p>
        <p className="text-gray-700">{accountNumber}</p>
        <p className="text-gray-500 text-sm">{ownerName}</p>
      </div>
      <button
        onClick={copyToClipboard}
        className="bg-pink-500 text-white px-3 py-1 rounded-lg hover:bg-pink-600 transition"
      >
        {copied ? "✅ Disalin" : "📋 Salin"}
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-white p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-6">
          🎁 Gift via Bank Transfer
        </h1>

        <div className="space-y-4">
          <BankAccount
            accountNumber="1234567"
            bankName="Bank Indonesia"
            ownerName="a/n Pria"
          />
          <BankAccount
            accountNumber="7654321"
            bankName="Bank Nasional"
            ownerName="a/n Wanita"
          />
        </div>
      </div>
    </div>
  );
}
