// https://medium.com/swlh/persisting-state-on-react-apps-726c310f35ed
// https://designcode.io/react-hooks-handbook-uselocalstorage-hook
import { useEffect, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import useLocalStorage from '../../hooks/useLocalStorage.js';

export default function useColorScheme() {
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
  );

  const [isDark, setIsDark] = useLocalStorage('theme', 'dark');
  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark],
  );

  useEffect(() => {
    if (value) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [value]);

  return {
    isDark: value,
    setIsDark,
  };
}
