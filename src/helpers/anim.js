import { ease } from "./ease";

export const anim = (variants) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
  };
};

export const LoaderAnim = {
  wrapper: {
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 1,
        duration: .5,
      }
    }
  },
  logo: {
    initial: {
      opacity: 0,
      filter: "blur(1vw)",
    },
    animate: {
      opacity: 1,
      filter: "blur(0vw)",
      transition: {
        duration: .5
      }
    },
    exit: {
      opacity: 1,
    }
  }
}