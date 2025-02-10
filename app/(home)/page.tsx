import { Metadata } from 'next';
import { Herobanner } from '@/containers/home/herobanner-section';
import { Edenhealthbonheur } from '@/containers/home/edenhealth-bonheur';
import { Nosburger } from '@/containers/home/nos-burger';
import { Greenbaner } from '@/containers/home/greenbanner';
import { Nosbowl } from '@/containers/home/nos-bowl';
import { Edengourmand } from '@/containers/home/eden-gourmand';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function HomePage() {
  return <>
  <Herobanner/>
  <Edenhealthbonheur/>
  <Nosburger/>
  <Greenbaner/>
  <Nosbowl/>
  <Edengourmand/>
  </>;
}
