import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TagContainer = ({ tagsList, setTagsList }) => {
  const handleDelete = (id) => {
    let updateFilter = tagsList?.filter((e) => e.id !== id);
    setTagsList(updateFilter);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="px-10 rounded-lg mx-auto absolute top-[-70px] h-[140px] inset-0 w-[90%]  md:w-[60%] lg:w-[90%]   bg-white shadow-xl flex  justify-between items-center "
      >
        <div className="flex flex-wrap gap-5">
          {tagsList?.map((element) => (
            <div
              key={element.id}
              className="rounded-lg bg-lightCyan flex  justify-center items-center "
            >
              <p className="p-2 text-darkCyan font-bold">{element.name}</p>
              <button
                onClick={() => handleDelete(element.id)}
                className="bg-darkCyan rounded-r-lg  w-[40px] text-white hover:bg-black h-full p-2"
              >
                <X />
              </button>
            </div>
          ))}
        </div>
        <h1
          onClick={() => setTagsList([])}
          className="font-bold hover:underline hover:text-darkCyan text-gray-500"
        >
          Clear
        </h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default TagContainer;
