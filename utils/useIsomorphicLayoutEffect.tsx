import { useLayoutEffect, useEffect } from 'react';
import { isServer } from './isServer';

const useIsomorphicLayoutEffect =
  isServer ? useEffect : useLayoutEffect;

export default useIsomorphicLayoutEffect;
