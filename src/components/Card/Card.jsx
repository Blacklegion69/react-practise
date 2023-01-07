import "./style.css";
import { motion } from "framer-motion";
import Data from "./Data.json";
import { HiArrowUpOnSquareStack } from "react-icons/hi2";
import { MdStarRate, MdOutlineAccountTree } from "react-icons/md";

const Card = () => {
  const items = Data.map((value, index) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.3, x: 10, y: 10, z: 10 }}
        whileInView={{ opacity: 1, scale: 1, x: 1, y: 1, z: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
        key={value.id}
        className="max-w-46 box-wraper relative border border-slate-900 bg-slate-100 flex-col flex justify-center items-center m-2 p-5 rounded"
      >
        <div className="image p-2 rounded bg-white-100 border-orange-900 border">
          <img
            src={value.image}
            class="w-34 h-34 md:rounde rounded mx-auto"
            alt="nothing found"
            width="384"
            height="512"
          />
        </div>
        <div className="w-full flex justify-center items-center text-left font-bold rounded m-2 p-2 bg-slate-300 relative ">
          <HiArrowUpOnSquareStack className="text-3xl text-slate-900 m-5" />
          {value.title}
        </div>
        <div className="w-full text-left font-200 rounded m-2 p-2 bg-slate-200 relative ">
          {value.description}
        </div>
        <div className="w-full text-left font-bold rounded m-2 p-2 bg-slate-400 relative ">
          Price: {value.price} $
        </div>
        <div className="w-full text-left flex justify-center items-center font-200 rounded m-2 p-2 bg-slate-500 relative ">
          <div className="w-1/2 flex justify-center items-center font-bold bg-slate-100 rounded p-2 m-2 text-center">
            <MdStarRate className="text-3xl text-orange-600" />
            Rate: {value.rating.rate}
          </div>
          <div className="w-1/2 flex justify-center items-center font-bold bg-slate-100 rounded p-2 m-2 text-center">
            <MdOutlineAccountTree className="text-3xl text-orange-600" />
            Count: {value.rating.count}
          </div>
        </div>
      </motion.div>
    );
  });
  return <div className="container w-screen">{items}</div>;
};

export default Card;
