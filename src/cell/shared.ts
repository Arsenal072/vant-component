export type SharedCellProps = {
  icon?: string;
  size?: string;
  border: boolean;
  center?: boolean;
  isLink?: boolean;
  required?: boolean;
  clickable?: boolean;
  cellClass?: any;
  titleStyle?: any;
  titleClass?: any;
  valueClass?: any;
  labelClass?: any;
  title?: string | number;
  value?: string | number;
  label?: string | number;
  arrowDirection?: 'up' | 'down' | 'left' | 'right';
  reverseColor: boolean;
  lessSpacing: boolean;
};

export const cellProps = {
  icon: String,
  size: String,
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  clickable: Boolean,
  cellClass: null as any,
  titleStyle: null as any,
  titleClass: null as any,
  valueClass: null as any,
  labelClass: null as any,
  title: [Number, String],
  value: [Number, String],
  label: [Number, String],
  arrowDirection: String,
  border: {
    type: Boolean,
    default: true
  },
  reverseColor: Boolean,
  lessSpacing: Boolean
};
