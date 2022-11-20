import { createContext, useState } from "react";

export interface IDisabledContext {
  disabled: boolean;
  setDisabled: Function;
}

const defaultDisabled = {
  disabled: false,
  setDisabled: () => {},
};

export const DisabledContext = createContext<IDisabledContext>(defaultDisabled);
const Disabled = ({ children }: any) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <DisabledContext.Provider value={{ disabled, setDisabled }}>
      {children}
    </DisabledContext.Provider>
  );
};

export default Disabled;
