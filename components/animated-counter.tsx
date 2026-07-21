import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1800;
    const incrementTime = 20;

    const increment =
      value / (duration / incrementTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () =>
      clearInterval(timer);
  }, [value]);

  return (
    <motion.span
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      className="tabular-nums"
    >
      {count}
      {suffix}
    </motion.span>
  );
}