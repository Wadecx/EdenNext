import { Metadata } from 'next';
import { Herobanner } from '@/containers/home/herobanner-section';
import { Edenhealthbonheur } from '@/containers/home/edenhealth-bonheur';
import { Nosburger } from '@/containers/home/nos-burger';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function HomePage() {
  return <>
  <Herobanner/>
  <Edenhealthbonheur/>
  <Nosburger/>
  </>;
}
