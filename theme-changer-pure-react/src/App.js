import './App.css';
import { useTheme } from './ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
      <div className="App">
        <div className="App Container" >
          <h1>Current Theme: {theme}</h1>
          <button className="btn" onClick={toggleTheme}>Toggle Theme</button>
          <p>This is a simple theme changer using React Context API.</p>
          </div>
      </div>
  );
}

export default App;
