import { Metadata } from 'next';
import { Selection } from '@/containers/menu/selection';
import { Filtres } from '@/containers/menu/filtres';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function MenuPage() {
  return <>
    <Selection/>
    <Filtres/>
  </>;
}
