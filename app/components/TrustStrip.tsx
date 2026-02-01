"use client";

import { motion } from "framer-motion";

const logos = ["AWS", "ECS", "EKS", "Lambda", "RDS", "CloudTrail"];

export default function TrustStrip() {
  return (
    <div className="mt-10">
      <div className="text-xs font-semibold tracking-widest text-white/40">TRUSTED BY TEAMS ON</div>

      <motion.div
        className="mt-4 flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {logos.map((x) => (
          <span
            key={x}
            className="rounded-full border border-white/15 bg-white/0 px-3 py-1 text-xs text-white/70"
          >
            {x}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
