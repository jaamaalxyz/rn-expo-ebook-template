
import { useState, useEffect } from 'react';
import { Appearance } from 'react-native';

export const useTheme = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme() || 'dark');

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme || 'dark');
    });
    return () => subscription.remove();
  }, []);

  return { theme, setTheme };
};
