'use client';

import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/lib/contract';

export default function InvestPage() {
  const { address, isConnected } = useAccount();
  const [amount, setAmount] = useState('');
  const [nftAmount, setNftAmount] = useState(1);

  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const pricePerNFT = 0.01; // 0.01 ETH per NFT
  const totalCost = (nftAmount * pricePerNFT).toFixed(4);

  const handleMint = async () => {
    if (!isConnected || nftAmount < 1) return;

    try {
      writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'mint',
        args: [BigInt(nftAmount)],
        value: parseEther(totalCost),
      });
    } catch (error) {
      console.error('Minting error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍔 Investera i Caspers Burger
          </h1>
          <p className="text-xl text-gray-600">
            Köp ditt NFT och bli delägare i framtidens burgervärld!
          </p>
        </div>

        {/* Investment Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-orange-400">
          {!isConnected ? (
            <div className="text-center py-12">
              <p className="text-2xl text-gray-600 mb-6">
                Anslut din plånbok för att investera
              </p>
              <p className="text-gray-500">
                Använd "Connect Wallet" knappen i headern
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* NFT Amount Selector */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Antal NFT:er du vill köpa
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setNftAmount(Math.max(1, nftAmount - 1))}
                    className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-2xl font-bold transition"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={nftAmount}
                    onChange={(e) => setNftAmount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-24 text-center text-3xl font-bold border-2 border-gray-300 rounded-lg py-2"
                  />
                  <button
                    onClick={() => setNftAmount(Math.min(10, nftAmount + 1))}
                    className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-2xl font-bold transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-200">
                <div className="space-y-3">
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-600">Pris per NFT:</span>
                    <span className="font-semibold">{pricePerNFT} ETH</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-600">Antal:</span>
                    <span className="font-semibold">{nftAmount} st</span>
                  </div>
                  <div className="border-t-2 border-amber-300 pt-3">
                    <div className="flex justify-between text-2xl font-bold">
                      <span>Totalt:</span>
                      <span className="text-orange-600">{totalCost} ETH</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-6 border-2 border-orange-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  🎁 Dina fördelar som NFT-ägare:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ Ägarandel i Caspers Burger</li>
                  <li>✅ Årlig utdelning från vinsten</li>
                  <li>✅ Exklusiva rabatter på burgare</li>
                  <li>✅ Rösträtt i företagets beslut</li>
                  <li>✅ VIP-tillgång till nya restauranger</li>
                </ul>
              </div>

              {/* Mint Button */}
              <button
                onClick={handleMint}
                disabled={isPending || isConfirming || nftAmount < 1}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-2xl font-bold py-6 rounded-2xl shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isPending ? '⏳ Bekräftar i plånbok...' : 
                 isConfirming ? '⏳ Mintar ditt NFT...' :
                 isSuccess ? '✅ NFT Mintat!' :
                 `🍔 Köp ${nftAmount} NFT för ${totalCost} ETH`}
              </button>

              {/* Success Message */}
              {isSuccess && (
                <div className="bg-green-100 border-2 border-green-400 rounded-2xl p-6 text-center">
                  <p className="text-2xl font-bold text-green-800 mb-2">
                    🎉 Grattis!
                  </p>
                  <p className="text-green-700">
                    Du har nu {nftAmount} Caspers Burger NFT!
                  </p>
                  
                    href={`https://sepolia.etherscan.io/tx/${hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline mt-2 inline-block"
                  >
                    Se transaktion på Etherscan →
                  </a>
                </div>
              )}

              {/* Connected Address */}
              <div className="text-center text-sm text-gray-500">
                Ansluten: {address?.slice(0, 6)}...{address?.slice(-4)}
              </div>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            💡 <strong>OBS:</strong> Detta är på Sepolia testnet. Använd test-ETH för att testa!
          </p>
        </div>
      </div>
    </div>
  );
}
