import logo from './logo.svg';
import './App.css';
import Main from './component/Main';
import Navbar from './component/Navbar';
import Body from './component/Body';
import Details from './component/Details';

function App() {
  return (
    <>
      <Navbar/>
      <Main/>
      <Details/>
      <Body/>
    </>

  );
}

export default App;
