import { Customersreview } from '@/containers/home/customers-reviews';
import { Edengourmand } from '@/containers/home/eden-gourmand';
import { Greenbaner } from '@/containers/home/greenbanner';
import { HerobannerReserve } from '@/containers/reserve-table/Herobanner-reserve';
import { Reservation } from '@/containers/reserve-table/reservation-tally';
import { REVIEWS } from '@/data/review';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RevervePage() {
  return <>
  <HerobannerReserve/>
  <Reservation/>
  <Greenbaner/>
  <Edengourmand/>
  <Customersreview/>
  </>;
}
