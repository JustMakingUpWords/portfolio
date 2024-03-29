import React, { useState } from "react";
import { motion } from "framer-motion";

type ToolTipProps = {
  text: string;
  transX: string;
  transY?: number;
  children: React.ReactNode;
};

export default function Tooltip({ text, transX, transY = 0, children }: ToolTipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        setIsVisible(false);
      }}
      className="">
      {children}
      {isVisible && (
        <motion.div
          initial={{
            opacity: 0,
            y: -10 + transY,
            x: `${transX}`,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            y: 0 + transY,
            x: `${transX}`,
            scale: 1
          }}
          transition={{ duration: 0.2 }}
          className="absolute bg-white text-[1rem] mt-[0.35rem] text-black rounded-lg px-2">
          {text}
        </motion.div>
      )}
    </div>
  );
}
