import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation - Lime Green like Caspers */}
      <nav className="fixed top-0 w-full bg-[#B4F44E] z-50 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex gap-8 items-center text-black font-bold text-sm uppercase">
            <Link href="#invest" className="hover:opacity-60 transition">Invest</Link>
            <Link href="#video" className="hover:opacity-60 transition">Video</Link>
            <Link href="#about" className="hover:opacity-60 transition">About</Link>
            <Link href="#roadmap" className="hover:opacity-60 transition">Roadmap</Link>
            <a href="https://www.caspersburger.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition">
              Main Site
            </a>
          </div>
          <ConnectButton />
        </div>
      </nav>

      {/* Hero Section - Purple Background like Caspers */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <Image 
              src="/images/caspers-hero.webp"
              alt="Caspers Burgers"
              width={1200}
              height={600}
              className="mx-auto rounded-3xl shadow-2xl"
              priority
            />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-[#B4F44E] rounded-full text-black font-bold text-sm">
              🍔 NOW LIVE ON BLOCKCHAIN
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
              OWN A PIECE OF<br/>
              <span className="text-[#B4F44E]">CASPER'S BURGER</span>
            </h1>
            
            <p className="text-2xl text-white/90 mb-12 font-semibold">
              Copenhagen's burger legend goes Web3
            </p>
            
            <div className="flex gap-6 justify-center flex-wrap">
              <Link href="/invest" className="bg-black hover:bg-gray-900 text-white font-bold py-5 px-12 rounded-full text-lg transition-all shadow-xl hover:scale-105 uppercase">
                Invest Now
              </Link>
              <Link href="#video" className="bg-[#B4F44E] text-black hover:opacity-90 font-bold py-5 px-12 rounded-full text-lg transition-all shadow-xl hover:scale-105 uppercase">
                Watch Video
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Smash Burgers Section - Lime Green */}
      <section className="py-24 bg-[#B4F44E]">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl md:text-7xl font-black text-black text-center mb-8 tracking-tight">
            Smash burgers worth the wait.
          </h2>
          <p className="text-2xl text-black/80 text-center max-w-4xl mx-auto leading-relaxed">
            Casper's is a Copenhagen-born burger joint obsessed with flavour and grease. We make proper smashed burgers with crisp edges, soft buns, and sauces – all from our own recipes for a taste you won't find anywhere else.
          </p>
        </div>
      </section>

      {/* Stats Section - White */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div>
              <div className="text-7xl font-black text-black mb-2">3</div>
              <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">Current Locations</div>
            </div>
            <div>
              <div className="text-7xl font-black text-black mb-2">€2.5M</div>
              <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">Valuation</div>
            </div>
            <div>
              <div className="text-7xl font-black text-black mb-2">€4</div>
              <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">Per NFT</div>
            </div>
            <div>
              <div className="text-7xl font-black text-black mb-2">15</div>
              <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">New Restaurants</div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section - Purple */}
      <section id="video" className="py-24 bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
              See Casper's in Action
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Watch how we make Copenhagen's best burgers
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/hAqrmKrwhUQ"
                title="Caspers Burger Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Drømme Made It Section - Lime Green */}
      <section id="about" className="py-24 bg-[#B4F44E]">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-black text-black mb-20 text-center leading-tight tracking-tight">
              Drømme made it
            </h2>
            <p className="text-3xl text-black text-center mb-16 font-bold">
              The burger he built. The taste you'll crave.
            </p>
            
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/casper-person.webp"
                  alt="Casper Drømme - Founder"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <div className="text-xl text-black space-y-6 leading-relaxed">
                  <p className="font-semibold">
                    We make proper smashed burgers with crisp edges, soft buns, and sauces – all from our own recipes for a taste you won't find anywhere else.
                  </p>
                  
                  <p className="font-semibold">
                    Now we're taking it to the next level with blockchain technology. Own real equity in Casper's Burger and help us expand across Europe.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-10 shadow-lg">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-3xl font-black mb-4 text-black">The Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Raise €1M to open our next restaurant. Then repeat. 15 new locations by 2026.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-10 shadow-lg">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-3xl font-black mb-4 text-black">The Vision</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Bring Copenhagen's best burgers to every major city in Europe through community ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Casper's Special - Purple */}
      <section className="py-24 bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
              What makes Casper's special?
            </h2>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto">
              Years of eating. Months of testing. Two perfect burgers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
              <div className="text-6xl mb-6">🍔</div>
              <h3 className="text-3xl font-black mb-4 text-white">Custom Buns</h3>
              <p className="text-white/90 text-lg">
                Developed from scratch with our bakery for the perfect balance of softness, structure and flavour.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
              <div className="text-6xl mb-6">🥫</div>
              <h3 className="text-3xl font-black mb-4 text-white">Signature Sauces</h3>
              <p className="text-white/90 text-lg">
                Every dressing is made from our own recipes. No pre-made shortcuts.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
              <div className="text-6xl mb-6">🥩</div>
              <h3 className="text-3xl font-black mb-4 text-white">Casper's Beef Blend</h3>
              <p className="text-white/90 text-lg">
                Crafted for the ideal smash – rich flavour, perfect crust, juicy centre.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
              <div className="text-6xl mb-6">🍗</div>
              <h3 className="text-3xl font-black mb-4 text-white">Proper Chicken</h3>
              <p className="text-white/90 text-lg">
                Whole thighs, brined, breaded, and fried in-house for real texture and taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section - Lime Green */}
      <section id="invest" className="py-24 bg-[#B4F44E]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-6 text-black tracking-tight">
              Start Investing Today
            </h2>
            <p className="text-xl text-black/80">
              Own 25% of Casper's Burger • Real equity • Real dividends
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-black mb-8 text-black">Round 1 Details</h3>
                <div className="space-y-6 text-lg">
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="text-gray-600 font-medium">Total NFTs:</span>
                    <span className="font-black text-black">250,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="text-gray-600 font-medium">Price per NFT:</span>
                    <span className="font-black text-black">€4</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="text-gray-600 font-medium">Equity:</span>
                    <span className="font-black text-black">25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Goal:</span>
                    <span className="font-black text-black">€1,000,000</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-black mb-8 text-black">What You Get</h3>
                <ul className="space-y-5 text-lg">
                  <li className="flex items-start gap-4">
                    <span className="text-[#8B5CF6] text-3xl font-bold">✓</span>
                    <span className="text-gray-700">Real equity ownership</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#8B5CF6] text-3xl font-bold">✓</span>
                    <span className="text-gray-700">Quarterly dividends</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#8B5CF6] text-3xl font-bold">✓</span>
                    <span className="text-gray-700">Vote on new locations</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#8B5CF6] text-3xl font-bold">✓</span>
                    <span className="text-gray-700">Exclusive member perks</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link href="/invest" className="inline-block bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold py-6 px-20 rounded-full text-xl transition-all shadow-xl hover:scale-105 uppercase">
                Buy NFTs Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section - White */}
      <section id="roadmap" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-6 text-black tracking-tight">
              2026 Expansion Roadmap
            </h2>
            <p className="text-xl text-gray-700">
              15 new restaurants across Europe
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {[
              { milestone: "€1M Raised", location: "Stockholm, Sweden", status: "In Progress" },
              { milestone: "€2M Raised", location: "Oslo, Norway", status: "Upcoming" },
              { milestone: "€3M Raised", location: "Amsterdam, Netherlands", status: "Upcoming" },
              { milestone: "€4M Raised", location: "Berlin, Germany", status: "Upcoming" },
              { milestone: "€5M Raised", location: "London, UK", status: "Upcoming" },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-r from-[#B4F44E] to-[#9FE02E] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-black/60 mb-2 uppercase tracking-widest">{item.status}</div>
                    <h3 className="text-2xl font-black text-black mb-1">{item.milestone}</h3>
                    <p className="text-lg text-black/80">📍 {item.location}</p>
                  </div>
                  <div>
                    {item.status === "In Progress" ? (
                      <span className="px-8 py-3 bg-[#8B5CF6] text-white font-bold rounded-full uppercase text-sm shadow-lg">Active</span>
                    ) : (
                      <span className="px-8 py-3 bg-gray-300 text-gray-600 font-bold rounded-full uppercase text-sm">Locked</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Purple */}
      <section className="py-24 bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl md:text-7xl font-black mb-8 text-white tracking-tight">
            Ready to Build the Future?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90">
            Join thousands of burger lovers owning Casper's Burger on blockchain
          </p>
          <Link href="/invest" className="inline-block bg-[#B4F44E] hover:opacity-90 text-black font-bold py-6 px-20 rounded-full text-xl transition-all shadow-xl hover:scale-105 uppercase">
            Invest Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
