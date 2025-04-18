'use client';
import dynamic from 'next/dynamic';

const ReviewAnimatedIcon = dynamic(
  () => import('./ReviewAnimatedIcon').then(mod => mod.ReviewAnimatedIcon),
  { ssr: false }
);

export default ReviewAnimatedIcon;