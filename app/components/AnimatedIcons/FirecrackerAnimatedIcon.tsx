import React from 'react';
import Lottie from 'lottie-react';
import firecrackerAnimation from "../../../public/lottie/Firecracker.json";

export const FirecrackerAnimatedIcon = () => {
  return (
    <div className="w-6 h-6">
      <Lottie animationData={firecrackerAnimation} loop={true} />
    </div>
  );
};
