import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        fontSize: "2em",
        color: "#888888",
      }}
    >
      <motion.div
        initial={{
          x: 1000,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        W
      </motion.div>
      <motion.div
        initial={{
          x: 1000,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        e
      </motion.div>
      <motion.div
        initial={{
          x: 1000,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        l
      </motion.div>
      <motion.div
        initial={{
          x: 1000,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.9,
        }}
      >
        c
      </motion.div>
      <motion.div
        initial={{
          x: 1000,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 1.1,
        }}
      >
        o
      </motion.div>
      <motion.div
        initial={{
          x: 1000,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 1.3,
        }}
      >
        m
      </motion.div>
      <motion.div
        initial={{
          x: 1000,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        e
      </motion.div>
    </div>
  );
};

export default LandingPage;
