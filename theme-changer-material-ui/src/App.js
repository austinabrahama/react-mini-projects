import './App.css';
import { useState } from 'react';
import Body from './Body';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');
  
  const toggleTheme = () =>  {
      setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeObj = currentTheme === 'light' ? lightTheme : darkTheme;

  return (     
    <ThemeProvider theme={themeObj}>
      <CssBaseline />
      <div className="App">
        <div className='buttonContainer'>
          <div className="button" onClick={toggleTheme}>Change Theme</div>
        </div>
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;
