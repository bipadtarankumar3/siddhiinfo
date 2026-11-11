"use client";

import { motion, useReducedMotion } from "framer-motion";

/*
  Subtle scroll reveal: content slides up a little when it enters the viewport.
  Opacity is never animated from 0, so content is always visible — even before
  JavaScript loads or for search engines. Disabled with prefers-reduced-motion.
*/
export default function Reveal({ children, delay = 0, as = "div", className = "", ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  if (reduce) return <Tag className={className} {...rest}>{children}</Tag>;
  return (
    <Tag
      className={className}
      initial={{ y: 18 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0.7, 0.2, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
