import ScreenStatusHandler from './components/ScreenStatusHandler';
import GlobalProvider from './context/GlobalContext';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="w-full">
      <GlobalProvider>
        <ScreenStatusHandler />
        <HomePage />
      </GlobalProvider>
    </div>
  );
}

export default App;
