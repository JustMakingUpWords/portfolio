import React, { useState } from "react";
import { motion } from "framer-motion";

type ToolTipProps = {
  text: String;
  children: React.ReactNode;
};

export default function Tooltip({ text, children }: ToolTipProps) {
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bg-white -translate-x-[40%] text-[1rem] mt-2">
          {text}
        </motion.div>
      )}
    </div>
  );
}
