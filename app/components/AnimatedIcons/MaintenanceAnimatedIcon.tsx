import React from 'react';
import Lottie from 'lottie-react';
import maintenanceAnimation from "../../../public/lottie/Maintenance.json";

export const MaintenanceAnimatedIcon = () => {
  return (
    <div className="w-6 h-6">
      <Lottie animationData={maintenanceAnimation} loop={true} />
    </div>
  );
};
