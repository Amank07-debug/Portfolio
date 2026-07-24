import { useContext } from 'react';
import { ScrollContext } from '@/providers/ScrollProvider';

export function useScroll() {
  return useContext(ScrollContext);
}
