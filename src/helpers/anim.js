import { ease } from "./ease";

export const anim = (variants) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
  };
};

export const pagePresence =  {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
}

export const SearchAnimPresence = {
  wrapper: {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.5,
      },
    },
  },
  bg: {
    initial: {
      filter: "blur(0vw)",
      opacity: 1,
      scale: 1,
    },
    animate: {
      filter: "blur(3vw)",
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: ease.inOutQuint,
      },
    },
    exit: {
      scale: 1,
      filter: "blur(0vw)",
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: ease.inOutQuint,
      },
    },
  },
  links: {
    top: {
      initial: {
        opacity: 1,
        y: "50%",
        filter: "blur(1vw)",
      },
      animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0vw)",
        transition: {
          duration: 0.5,
          ease: ease.inOutQuint,
        },
      },
      exit: {
        opacity: 1,
        y: "50%",
        filter: "blur(1vw)",
        transition: {
          duration: 0.5,
          ease: ease.inOutQuint,
        },
      },
    },
    bottom: {
      initial: { opacity: 1, y: "-50%", filter: "blur(1vw)" },
      animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0vw)",
        transition: {
          duration: 0.5,
          ease: ease.inOutQuint,
        },
      },
      exit: {
        opacity: 1,
        y: "-50%",
        filter: "blur(1vw)",
        transition: {
          duration: 0.5,
          ease: ease.inOutQuint,
        },
      },
    },
  },
  cross: {
    initial: { opacity: 0, rotate: 12, filter: "blur(1vw)" },
    animate: {
      opacity: 1,
      rotate: 0,
      filter: "blur(0vw)",
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: ease.inOutQuint,
      },
    },
    exit: {
      opacity: 0,
      rotate: 0,
      filter: "blur(1vw)",
      transition: {
        duration: 0.5,
        ease: ease.inOutQuint,
      },
    },
  }
};
