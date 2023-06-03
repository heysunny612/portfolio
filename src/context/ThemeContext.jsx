const { createContext, useState, useContext, useEffect } = require('react');

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
    updateTheme(!theme);
  };

  useEffect(() => {
    const isDarkMode = localStorage.theme === 'light';
    setTheme(isDarkMode);
    updateTheme(isDarkMode);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

const updateTheme = (darkMode) => {
  if (darkMode) {
    document.documentElement.classList = 'dark';
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList = 'light';
    localStorage.theme = 'light';
  }
};
