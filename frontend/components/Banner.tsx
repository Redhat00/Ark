'use client';

const Marquee = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full bg-[#1a1a1a] overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="flex items-center px-8 text-white text-lg font-semibold">
            <span className="mr-2">✦</span> Ark Collections
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;