export { Icon } from './Icon';
export type { IconProps } from './Icon';
export type { IconStyle, NormalIconEntry, SvgElement, StyledIconEntry } from './iconRegistry';
export { normalIcons, colorIcons, circleIcons, miniIcons } from './iconRegistry';

// Convenience: list of all icon names per category
import { normalIcons, colorIcons, circleIcons, miniIcons } from './iconRegistry';

export const normalIconNames = Object.keys(normalIcons);
export const colorIconNames = Object.keys(colorIcons);
export const circleIconNames = Object.keys(circleIcons);
export const miniIconNames = Object.keys(miniIcons);

// Backward compatibility
export const iconNames = normalIconNames;
