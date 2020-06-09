/**
 * Common Switch Props
 */

export type SharedSwitchProps = {
  size: string;
  value?: any;
  loading?: boolean;
  disabled?: boolean;
  activeValue: any;
  inactiveValue: any;
  activeColor?: string;
  inactiveColor?: string;
};

export const switchProps = {
  size: {
    type: String,
    default: '25px'
  },
  value: null as any,
  loading: Boolean,
  disabled: Boolean,
  activeColor: String,
  inactiveColor: String,
  activeValue: {
    type: null as any,
    default: true
  },
  inactiveValue: {
    type: null as any,
    default: false
  }
};
