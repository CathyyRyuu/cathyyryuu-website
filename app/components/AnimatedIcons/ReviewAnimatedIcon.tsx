import React from 'react';
import Lottie from 'lottie-react';
import reviewAnimation from "../../../public/lottie/Review.json";

export const ReviewAnimatedIcon = () => {
  return (
    <div className="w-6 h-6">
      <Lottie animationData={reviewAnimation} loop={true} autoplay={false} />
    </div>
  );
};
