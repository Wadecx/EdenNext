import { HerobannerReserve } from '@/containers/reserve-table/Herobanner-reserve';
import { Reservation } from '@/containers/reserve-table/reservation-tally';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RevervePage() {
  return <>
  <HerobannerReserve/>
  <Reservation/>
  </>;
}
