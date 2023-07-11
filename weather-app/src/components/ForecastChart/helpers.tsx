import { XAxisProps } from 'recharts';

import * as colors from '../../constants/colors';

export const formatTimeTick: XAxisProps['tickFormatter'] = (value: string) => value.substring(value.length - 8, value.length - 3);

export const renderDateTick: XAxisProps['tick'] = (tickProps: unknown) => {
  const { x, y, payload: { value, offset } } = tickProps as { x: number; y: number; payload: { value: string; offset: number; } };
  const hour = value.substring(value.length - 8, value.length - 6);

  if (hour === '12') {
    const date = value.substring(0, 10);
    return <text x={x} y={y} textAnchor="middle">{date}</text>;
  }
  if (hour === '00') {
    const pathX = x + offset;
    return <path d={`M${pathX},${y + offset}v${-35 - offset}`} stroke={colors.WARNING} />;
  }
  return null as unknown as React.ReactElement;
};
