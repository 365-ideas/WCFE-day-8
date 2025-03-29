import React, { useContext } from "react";
import { LogoSmall } from "../Logo/Logo";

import "./Loader.scss";
import { motion } from "framer-motion";
import { anim, LoaderAnim } from "@/helpers/anim";
import { LoaderContext } from "@/providers/LoaderProvider/LoaderProvider";

export default function Loader() {
  const { setLoaderFinished } = useContext(LoaderContext);
  return (
    <motion.div {...anim(LoaderAnim.wrapper)} className="loader">
      <LogoSmall
        {...anim(LoaderAnim.logo)}
        className="logo"
        onAnimationComplete={() => setLoaderFinished(true)}
      />
    </motion.div>
  );
}
