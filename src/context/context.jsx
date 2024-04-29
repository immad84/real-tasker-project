import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const useAppContext = () => useContext(Context);

const ContextProvider = ({ children }) => {
  // form fields

  //
  const [showContactForm, setShowContactForm] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const showSidebar = () => {
    setIsToggle(true);
  };

  const hideSidebar = () => {
    setIsToggle(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Context.Provider
      value={{
        isToggle,
        setIsToggle,
        showSidebar,
        hideSidebar,
        showContactForm,
        setShowContactForm,
        handleSubmit,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
