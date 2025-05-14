import Link from "next/link";

// components/ThreeCards.js


export default function ThreeCards() {
    const cards = [
      {
        title: "PST Filing Service – Canada Wide Bookkeeping & Taxes",
        desc: "Stay compliant and stress-free with our professional PST Filing Services across Canada. At Canada Wide Bookkeeping & Taxes, we handle your Provincial Sales Tax (PST) filings accurately and on time—so you can focus on growing your business.",
        icon: "",
        link:'/pst-filing'
      },
      {
        title: "HST Filing Service – Canada Wide Bookkeeping & Taxes",
        desc: "At Canada Wide Bookkeeping & Taxes, we simplify Harmonized Sales Tax (HST) filing for small businesses, freelancers, and corporations across Canada. Our experienced professionals ensure your returns are accurate, timely, and fully compliant with CRA regulations",
        icon: "",
        link:"/hst-filing"
      },
      {
        title: "WCB Filing Services Canada-Wide",
        desc: "At Canada Wide Bookkeeping & Taxes, we specialize in hassle-free WCB (Workers’ Compensation Board) filing services across all Canadian provinces. Whether you're a small business or a growing enterprise, we ensure your filings are accurate, compliant, and submitted on time.",
        icon: "",
        link:'/wcb-filling'
      },
    ];
  
    return (
      <div className="bg-white lg:px-30 p-4 md  py-12 flex items-center justify-center">
        <div className="w-full grid gap-8 md:grid-cols-3  ">
          {cards.map((card, index) => (
         <Link href={card.link}>   <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  