import { PaletteOptions } from '@mui/material';

// FIXME: update colors
export const RelativeColors = {
  gray000: '#FFFFFF',
  gray050: '#FAFAFA',
  gray100: '#B4BCCB',
  gray200: '#93A0A9',
  gray300: '#939AA9',
  gray400: '#6E778C',
  gray500: '#485671',
  gray600: '#383F4E',
  gray700: '#1A202A',
  gray800: '#131921',
  gray900: '#000000',

  blue000: '#E9EFFF',
  blue050: '#CBD5EC',
  blue100: '#ABBFEE',
  blue200: '#6675F6',
  blue300: '#321DF7',
  blue400: '#1900FF',
  blue500: '#4200FF',
  blue600: '#2E3AA1',
  blue700: '#05159F',
  blue800: '#161E65',
  blue900: '#000747',

  skyblue000: '#DFFFFF',
  skyblue050: '#D2FFFE',
  skyblue100: '#C6FFFE',
  skyblue200: '#BBFFFE',
  skyblue300: '#AFFDFC',
  skyblue400: '#7BF9F8',
  skyblue500: '#55F3F2',
  skyblue600: '#3DE4E3',
  skyblue700: '#19D2D1',
  skyblue800: '#00B0AF',
  skyblue900: '#006868',

  red500: '#FA4D56',
  orange500: '#F87B08',
  green500: '#32DF8C',
  pink500: '',
};

export const SemanticColors = {
  background: {
    default: RelativeColors.gray900,
  },
  border: {
    default: RelativeColors.gray000,
    subdued: RelativeColors.gray200,
    critical: RelativeColors.red500,
    warning: RelativeColors.orange500,
    success: RelativeColors.green500,
  },
  surface: {
    primary: {
      default: RelativeColors.gray800,
      subdued: RelativeColors.gray600,
    },
    secondary: {
      default: RelativeColors.gray700,
    },
  },
  text: {
    primary: {
      default: RelativeColors.gray050,
      subdued: RelativeColors.gray300,
    },
    secondary: {
      subdued: RelativeColors.blue050,
    },
    highlight: {
      default: RelativeColors.blue500,
      subdued: RelativeColors.skyblue200,
    },
    critical: RelativeColors.red500,
    warning: RelativeColors.orange500,
    negative: RelativeColors.gray800,
  },
  icon: {
    primary: {
      default: RelativeColors.gray050,
      subdued: RelativeColors.blue050,
    },
    highlight: {
      default: RelativeColors.skyblue400,
      subdued: RelativeColors.skyblue200,
    },
    critical: RelativeColors.red500,
    success: RelativeColors.green500,
    negative: RelativeColors.gray800,
  },
  action: {
    primary: {
      default: RelativeColors.skyblue400,
      disabled: RelativeColors.gray400,
    },
    secondary: {
      default: RelativeColors.skyblue200,
    },
    neutral: {
      default: RelativeColors.gray300,
    },
  },
};

// FIXME: update after further usage
export const palette: PaletteOptions = {
  background: {
    default: SemanticColors.background.default,
  },
  text: {
    primary: SemanticColors.text.primary.default,
    secondary: SemanticColors.text.secondary.subdued,
  },
  error: {
    main: SemanticColors.text.critical,
  },
  warning: {
    main: SemanticColors.text.warning,
  },
  success: {
    main: SemanticColors.icon.success,
  },
};
