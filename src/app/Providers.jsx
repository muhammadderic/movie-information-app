'use client';

import { ThemeProvider, useTheme } from 'next-themes';

const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <ThemedContainer>
        {children}
      </ThemedContainer>
    </ThemeProvider>
  );
}

const ThemedContainer = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen select-none transition-colors duration-300 
      ${theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'}`}>
      {children}
    </div>
  );
}

export default Providers;
