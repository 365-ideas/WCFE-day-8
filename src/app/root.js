"use client";

import Header from "@/components/Header/Header";
import Loader from "@/components/Loader/Loader";
import { LoaderContext } from "@/providers/LoaderProvider/LoaderProvider";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";

export const Root = ({ children }) => {
  const { loaderFinished } = useContext(LoaderContext);

  return (
    <>
      {/* <AnimatePresence mode="wait">
        {!loaderFinished && <Loader />}
      </AnimatePresence> */}
      <AnimatePresence mode="wait">
        <Header />
        {children}
      </AnimatePresence>
    </>
  );
};
