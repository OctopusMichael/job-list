import React from "react";
import { validate } from "../utilities/validations";
import { motion } from "framer-motion";

const Card = ({ e, setTagsList, tagsList }) => {
  const handleClick = (etiqueta) => {
    let newEtiqueta = {
      id: Date.now(),
      name: etiqueta,
    };

    if (validate(tagsList, etiqueta)) {
      setTagsList([...tagsList]);
    } else {
      setTagsList([...tagsList, newEtiqueta]);
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className=" cursor-pointer px-10 border-l-4  border-l-white hover:border-l-4  hover:border-l-darkCyan  mx-auto  w-[90%]  md:w-[60%] lg:w-[90%] h-auto bg-white relative mt-[50px] shadow-2xl rounded-lg "
    >
      <img
        className="absolute  top-[-25px] left-10 h-[50px] md:invisible rounded-full "
        src={e.logo}
        alt="name logo"
      />
      <div className="flex flex-col lg:flex-row justify-between items-center  gap-[20px] pt-8  pb-5  ">
        <div className=" flex gap-6 w-full items-center">
          <img
            className=" hidden md:block   h-[80px] rounded-full "
            src={e.logo}
            alt="name logo"
          />
          <div className=" flex flex-col gap-3">
            <div className="flex gap-5 items-center">
              <h1 className="font-bold text-darkCyan">{e.company}</h1>

              {e.new && (
                <span className=" px-2  py-1  rounded-3xl bg-darkCyan text-white font-bold">
                  NEW!
                </span>
              )}
              {e.featured && (
                <span className="   px-2 py-1 rounded-3xl bg-black text-white font-bold">
                  FEATURED
                </span>
              )}
            </div>
            <div>
              <h1 className=" cursor-pointer hover:text-darkCyan font-bold">
                {e.position}
              </h1>
            </div>
            <div className="flex gap-4 text-gray-500 items-center">
              <p>{e.postedAt}</p>
              <div className="w-[5px] h-[5px] rounded-full bg-gray-500" />
              <p>{e.contract}</p>
              <div className="w-[5px] h-[5px] rounded-full bg-gray-500" />
              <p>{e.location}</p>
            </div>
          </div>
        </div>

        <hr className="  bg-gray-500" />

        {/*   //? ******************************
        //? Etiquetas  para filtar *******
        //? ****************************** */}
        <div className=" w-full flex   flex-wrap  lg:justify-end  md:flex-row gap-4 ">
          <span
            onClick={() => handleClick(e.role)}
            className=" hover:bg-darkCyan hover:text-white bg-lightCyan text-darkCyan font-bold p-2 rounded-lg  cursor-pointer"
          >
            {e.role}
          </span>
          <span
            onClick={() => handleClick(e.level)}
            className="bg-lightCyan hover:bg-darkCyan hover:text-white text-darkCyan font-bold p-2 rounded-lg  cursor-pointer "
          >
            {e.level}
          </span>

          {e.tools.map((t) => (
            <span
              onClick={() => handleClick(t)}
              key={t}
              className="bg-lightCyan hover:bg-darkCyan hover:text-white  text-darkCyan font-bold p-2 rounded-lg cursor-pointer  "
            >
              {t}
            </span>
          ))}
          {e.languages.map((l) => (
            <span
              onClick={() => handleClick(l)}
              key={l}
              className="bg-lightCyan hover:bg-darkCyan hover:text-white text-darkCyan font-bold p-2 rounded-lg cursor-pointer "
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
