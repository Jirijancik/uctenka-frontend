import { createContext, useContext, useState } from 'react';

export type Session = {
  isAuthenticated?: boolean;
  redirectPath: string;
};

const getToken = () => sessionStorage.getItem('token');

export const initialSession: Session = {
  redirectPath: '/login',
  isAuthenticated: Boolean(getToken()),
};

export const SessionContext = createContext<[Session, (session: Session) => void]>([initialSession, () => {}]);
export const useSessionContext = (): [Session, (session: Session) => void] => useContext(SessionContext);

export const SessionContextProvider: React.FC<{ children: Element | React.ReactNode }> = ({ children }) => {
  const [sessionState, setSessionState] = useState(initialSession);
  const defaultSessionContext: [Session, typeof setSessionState] = [sessionState, setSessionState];

  return <SessionContext.Provider value={defaultSessionContext}>{children}</SessionContext.Provider>;
};
