import { motion } from "framer-motion";

const Cursor = ({ className }: { className: string }) => (
  <motion.span
    layoutId="cursor"
    animate={{ opacity: [0, 1] }}
    transition={{
      type: "tween",
      duration: 0.075,
      opacity: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "mirror",
      },
    }}
    className={`w-[2px] h-[2.25rem] absolute bg-primary-100 ${className}`}
  />
);

export default Cursor;
