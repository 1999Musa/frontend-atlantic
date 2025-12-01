import React from 'react';

// --- Leadership Section Component ---
const LeadershipSection = () => {
  return (
    <section className="w-full py-16 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Content */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Our <span className="text-[#ffab76]">Leadership</span> Team
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Behind every successful garment is a team of passionate professionals.
          </p>
        </div>

        {/* Image Container */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl">
            {/* The outer frame effect (gray border/padding with rounded corners) */}
            <div className="bg-transparent border-[6px] border-gray-400/50 p-1.5 rounded-2xl">
              <img 
                src="public/assets/images/about/random.png" 
                alt="Our Leadership Team" 
                className="w-full h-auto rounded-xl object-cover shadow-sm"
                onError={(e) => {
                  // Fallback if the local path doesn't load in this preview
                  e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
                  e.target.alt = "Team placeholder (local image not found)";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Honoring Section Component ---
const HonoringSection = () => {
  return (
    <section className="w-full py-20 bg-[#F5FAFF] font-sans">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Content */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-4">
            <span className="text-[#ffab76]">Honoring</span> the People<br />
            Behind the Craft
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            From precision cutting to community care — Arbella combines quality, safety, and ethics in every step.
          </p>
        </div>

        {/* Image Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
          
          {/* Column 1 (Left - Tall Image) */}
          <div className="h-full flex flex-col justify-center">
             <img 
              src="public/assets/images/about/honor4.png" 
              alt="Artisan with water vessel" 
              className="w-full h-[400px] md:h-[500px] object-cover border-[3px] border-[#ffab76] shadow-md"
              onError={(e) => {
                 e.target.src = "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
              }}
            />
          </div>

          {/* Column 2 (Middle - Stacked Images) */}
          <div className="flex flex-col gap-6">
            <img 
              src="public/assets/images/about/honor3.png" 
              alt="Woman in field" 
              className="w-full h-84 object-cover border-[3px] border-[#ffab76] shadow-md"
              onError={(e) => {
                 e.target.src = "https://images.unsplash.com/photo-1595450849929-1065a3d702f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
              }}
            />
            <img 
              src="public/assets/images/about/honor1.png" 
              alt="Man in traditional attire" 
              className="w-full h-84 object-cover border-[3px] border-[#ffab76] shadow-md"
              onError={(e) => {
                 e.target.src = "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
              }}
            />
          </div>

          {/* Column 3 (Right - Tall Image) */}
          <div className="h-full flex flex-col justify-center">
            <img 
              src="public/assets/images/about/honor2.png" 
              alt="Smiling artisan" 
              className="w-full h-[400px] md:h-[500px] object-cover border-[3px] border-[#ffab76] shadow-md"
              onError={(e) => {
                 e.target.src = "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
              }}
            />
          </div>

        </div>
      </div>
      
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LeadershipSection />
      <HonoringSection />
    </div>
  );
};

export default App;