import { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userCreds, setUserCreds] = useState({
    username: '',
    password: '',
    email:'',
    mobile:''
  });

  return (
    <UserContext.Provider value={{ userCreds, setUserCreds }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

