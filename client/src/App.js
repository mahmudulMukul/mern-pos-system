import { Box } from '@mui/material';
import './App.css';
import Content from './components/Content/Content';
import SideBar from './components/Sidebar/SideBar';
import {appWrapper} from './styles/styles'

function App() {
  return (
    <div className="App">
      <Box sx={appWrapper}>
        <SideBar/>
        <Content/>
      </Box>
    </div>
  );
}

export default App;
