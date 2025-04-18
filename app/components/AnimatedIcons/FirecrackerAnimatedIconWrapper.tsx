'use client';
import dynamic from 'next/dynamic';

const FirecrackerAnimatedIcon = dynamic(
  () => import('./FirecrackerAnimatedIcon').then(mod => mod.FirecrackerAnimatedIcon),
  { ssr: false }
);

export default FirecrackerAnimatedIcon;
