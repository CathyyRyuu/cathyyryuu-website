'use client';
import dynamic from 'next/dynamic';

const MaintenanceAnimatedIcon = dynamic(
  () => import('./MaintenanceAnimatedIcon').then(mod => mod.MaintenanceAnimatedIcon),
  { ssr: false }
);

export default MaintenanceAnimatedIcon;