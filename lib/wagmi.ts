import { http, createConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { coinbaseWallet, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  chains: [sepolia],
  connectors: [
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'demo',
    }),
    coinbaseWallet({ appName: 'Caspers Burger NFT' }),
  ],
  transports: {
    [sepolia.id]: http(),
  },
})
