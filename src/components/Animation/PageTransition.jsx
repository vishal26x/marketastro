import { motion } from "framer-motion";
import "./PageTransition.scss"
const animation = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
  
};

export const PageTransition = ({ children }) => {
  return (
    <motion.div
    className="page-transition"
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration: 1}}
    >
      {children}
    </motion.div>
  );
};
