import { motion } from "framer-motion";
import "./style.css";

export default function Animation() {
  const items = [];
  for (let i = 0; i < 64; i++) {
    items.push(
      <motion.div
        key={i}
        drag
        className="border flex justify-center items-center rounded border-sky-400 grid-item p-1 m-2 bg-slate-900 text-slate-100"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: i * 0.25 }}
      >
        {i}
      </motion.div>
    );
  }

  return <div className="grid">{items}</div>;
}
