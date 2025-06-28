
import { DarkTheme as NavDarkTheme, DefaultTheme as NavDefaultTheme } from '@react-navigation/native';

export const DarkTheme = {
  ...NavDarkTheme,
  colors: {
    ...NavDarkTheme.colors,
    background: '#0f172a',
    card: '#1e293b',
    text: '#f1f5f9',
    primary: '#a855f7',
  },
};

export const DefaultTheme = {
  ...NavDefaultTheme,
  colors: {
    ...NavDefaultTheme.colors,
    background: '#f1f5f9',
    card: '#ffffff',
    text: '#0f172a',
    primary: '#60a5fa',
  },
};
