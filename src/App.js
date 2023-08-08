  import './App.css';
  import APICalling from './Components/APICalling';
  import Header from './Components/Header';
  import Dashboard from './Components/Dashboard';
  import { Route, Routes } from 'react-router-dom';
  import TransferCoins from './Components/TransferCoins';

  function App() {
    
    return (
      <div className="App">
        {/* <APICalling />  */}
        {/* <Dashboard />  */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<APICalling />} />
          <Route path="/transfer" element={<TransferCoins />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    );
  }

  export default App;
