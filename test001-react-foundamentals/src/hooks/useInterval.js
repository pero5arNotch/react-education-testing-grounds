import { useEffect } from 'react';

export default function useInterval(cb, time) {
    useEffect(() => {
      const intervalId = setInterval(cb, time);

      return () => {
        clearInterval(intervalId);
        console.info('Interval cleared');
      };
    }, [cb, time]);
}