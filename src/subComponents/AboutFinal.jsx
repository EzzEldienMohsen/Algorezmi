import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonModule } from '../assets';
const AboutFinal = () => {
    const [selectedButton, setSelectedButton] = React.useState('a');
    const [module, setModule] = React.useState(buttonModule[0].module);
  return (
    <div className="flex flex-col justify-center items-center px-4 py-4 mt-2 test">
      <h1 className="mb-6 font-Nunito font-bold tracking-wider text-xl md:text-2xl lg:text-3xl text-white">
        Testimonials
      </h1>
      <div className="flex justify-between items-center w-[80vw]">
        {buttonModule.map((button) => {
          return (
            <motion.button
              key={button.id}
              id={button.id}
              className="avatar"
              onClick={() => {
                setSelectedButton(button.id);
                setModule(button.module);
              }}
            >
              <div
                className={`rounded-full w-20 md:w-32 lg:w-44 border-8 ${
                  button.id === selectedButton
                    ? 'border-[#052c65]'
                    : 'border-slate-300'
                } `}
              >
                <img src={button.image} alt="image" />
              </div>
            </motion.button>
          );
        })}
      </div>
      <div className=" bg-white border-[#0C71C3] border-2  my-4 rounded-md px-6 py-8 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={module ? module.id : 'empty'}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center items-center"
          >
            <p className="text-black mb-6 text-md lmd:text-lg lg:text-xl font-Nunito font-light tracking-normal">
              {module.text}
            </p>
            <h1 className="text-[#0C71C3] font-Nunito font-extrabold tracking-wide text-xl md:text-2xl lg:text-3xl shadow-lg mb-3">
              {module.name}
            </h1>
            <h1 className="font-Nunito font-semibold tracking-normal text-black text-lg md:text-xl lg:text-2xl">{module.position}</h1>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutFinal;
