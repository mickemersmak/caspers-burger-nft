'use client';

import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/lib/contract';

export default function InvestPage() {
  const { address, isConnected } = useAccount();
  const [nftAmount, setNftAmount] = useState(1);
  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });
  const pricePerNFT = 0.01;
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
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">🍔 Investera i Caspers Burger</h1>
          <p className="text-xl text-gray-600">Köp ditt NFT och bli delägare!</p>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-orange-400">
          {!isConnected ? (
            <div className="text-center py-12">
              <p className="text-2xl text-gray-600 mb-6">Anslut din plånbok för att investera</p>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">Antal NFT:er</label>
                <div className="flex items-center gap-4">
                  <button onClick={() => setNftAmount(Math.max(1, nftAmount - 1))} className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-2xl font-bold">-</button>
                  <input type="number" min="1" max="10" value={nftAmount} onChange={(e) => setNftAmount(Math.max(1, parseInt(e.target.value) || 1))} className="w-24 text-center text-3xl font-bold border-2 border-gray-300 rounded-lg py-2" />
                  <button onClick={() => setNftAmount(Math.min(10, nftAmount + 1))} className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-2xl font-bold">+</button>
                </div>
              </div>
              <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-200">
                <div className="flex justify-between text-2xl font-bold">
                  <span>Totalt:</span>
                  <span className="text-orange-600">{totalCost} ETH</span>
                </div>
              </div>
              <button onClick={handleMint} disabled={isPending || isConfirming} className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-2xl font-bold py-6 rounded-2xl shadow-lg transition-all transform hover:scale-105 disabled:opacity-50">
                {isPending ? '⏳ Bekräftar...' : isConfirming ? '⏳ Mintar...' : isSuccess ? '✅ Klart!' : `🍔 Köp ${nftAmount} NFT för ${totalCost} ETH`}
              </button>
              {isSuccess && (
                <div className="bg-green-100 border-2 border-green-400 rounded-2xl p-6 text-center">
                  <p className="text-2xl font-bold text-green-800">🎉 Grattis! Du äger nu {nftAmount} NFT!</p>
                  <a href={`https://sepolia.etherscan.io/tx/${hash}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 inline-block">
                    Se transaktion
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
