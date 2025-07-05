import React from 'react';

interface PageBackgroundProps {
  children: React.ReactNode;
  backgroundImage?: string;
}

const PageBackground: React.FC<PageBackgroundProps> = ({ 
  children, 
  backgroundImage = 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop'
}) => {
  return (
    <div className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center w-full min-h-[80vh] pb-24">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;