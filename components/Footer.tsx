import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-caspers-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 text-caspers-yellow">CASPERS BURGER</h3>
            <p className="text-gray-400 text-sm">
              Copenhagen-born burger joint. Now on blockchain.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/invest" className="text-gray-400 hover:text-caspers-yellow transition">Invest</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-caspers-yellow transition">Portfolio</Link></li>
              <li><Link href="/roadmap" className="text-gray-400 hover:text-caspers-yellow transition">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.caspersburger.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-caspers-yellow transition">Main Website</a></li>
              <li><a href="https://www.caspersburger.com/locations" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-caspers-yellow transition">Locations</a></li>
              <li><a href="https://www.caspersburger.com/menu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-caspers-yellow transition">Menu</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="text-gray-400 hover:text-caspers-yellow transition">Terms</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-caspers-yellow transition">Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Caspers Burger NFT. All rights reserved.</p>
          <p className="mt-2">Contract: 0xdf56...2E3C on Polygon Amoy Testnet</p>
        </div>
      </div>
    </footer>
  );
}
