"use client";

import { createContext, useState } from "react";

export const LoaderContext = createContext({
  loaderFinished: false,
  setLoaderFinished: () => {},
});

export const LoaderProvider = ({ children }) => {
  // const [loaderFinished, setLoaderFinished] = useState(true);
  const [loaderFinished, setLoaderFinished] = useState(false);

  return (
    <LoaderContext.Provider value={{ loaderFinished, setLoaderFinished }}>
      {children}
    </LoaderContext.Provider>
  );
};
