import { useState, createContext } from 'react';
import ScreenStatus from './ScreenStatus';

interface State {
  voucher?: string | null;
  screenStatus?: ScreenStatus;
  errorMessage?: string | null;
}

interface GlobalState extends State {
  setGlobalState: React.Dispatch<React.SetStateAction<State>>;
}

export const GlobalContext = createContext<GlobalState>({
  setGlobalState: () => {},
  screenStatus: ScreenStatus.idle,
  errorMessage: null
});

export default function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [globalState, setGlobalState] = useState<State>({
    screenStatus: ScreenStatus.idle,
    errorMessage: null
  });

  return (
    <GlobalContext.Provider value={{ ...globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
}
