import './App.css';
import theme from './theme';
import Main from './components/Main';

import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter as Router} from "react-router-dom";



function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <div className="App">
          <Main />
      </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
