export const CONTRACT_ADDRESS = "0xdf56ce7B5C76d935279F7Ab8Caf5c952e3262E3C" as const;

export const CONTRACT_ABI = [
  "function currentRound() view returns (uint256)",
  "function rounds(uint256) view returns (uint256 maxSupply, uint256 totalMinted, uint256 priceInWei, uint256 equityPercentage, bool active, uint256 goalInWei, uint256 totalRaised)",
  "function purchaseNFTs(uint256 amount) payable",
  "function balanceOf(address account, uint256 id) view returns (uint256)",
  "function getTotalUserBalance(address user) view returns (uint256)",
  "function getPendingDividends(address user) view returns (uint256)",
  "function claimDividends()",
  "function getPurchaseLimit(address user) view returns (uint256)",
  "function kycStatus(address) view returns (uint8)",
  "function getRestaurantCount() view returns (uint256)",
  "function restaurants(uint256) view returns (string name, string location, uint256 requiredFunding, uint256 fundingRaised, bool completed, uint256 openingDate)",
  "event NFTPurchased(address indexed buyer, uint256 indexed roundId, uint256 amount, uint256 totalCost)",
  "event DividendClaimed(address indexed user, uint256 amount)",
] as const;
