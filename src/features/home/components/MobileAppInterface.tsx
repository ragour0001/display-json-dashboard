import React from 'react';
import { motion } from 'framer-motion';

export const MobileAppInterface: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.section 
      className="w-[361px] max-w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="flex relative flex-col px-5 pt-16 pb-10 w-full aspect-[0.485] max-md:px-5"
        whileHover={{
          scale: 1.02,
          rotateY: 5,
          transition: { type: "spring", stiffness: 300, damping: 30 }
        }}
      >
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/fd41ec9952ab19e14e392e4b68476a1dc46994a6?placeholderIfAbsent=true" 
          className="object-cover absolute inset-0 size-full" 
          alt="Background" 
        />
        <motion.article 
          className="relative px-2.5 pt-3 pb-12 bg-white rounded-[47px] overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100, damping: 15 }}
        >
          <motion.img 
            src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/d02c5259f4ba313b9d42735e5c4a5b82d729f266?placeholderIfAbsent=true" 
            className="object-contain max-w-full aspect-[2.8] w-[126px]" 
            alt="Logo" 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <motion.div className="mt-4" variants={itemVariants}>
            <motion.h3 
              className="py-3 max-w-full text-2xl font-semibold tracking-tight leading-none text-slate-800 w-[223px] max-md:pr-5"
              whileHover={{ color: "rgba(108,92,231,1)" }}
              transition={{ duration: 0.3 }}
            >
              My Care
            </motion.h3>
            <p className="mt-1.5 text-sm tracking-normal leading-none text-indigo-500">
              Find the right support to guide your journey.
            </p>
          </motion.div>
          <motion.div className="mt-12 max-md:mt-10" variants={itemVariants}>
            <motion.section className="py-0.5 w-full" variants={itemVariants}>
              <motion.div 
                className="flex gap-2 items-center w-full text-sm font-medium leading-none text-slate-800"
                variants={itemVariants}
              >
                <div className="flex gap-1.5 items-center self-stretch my-auto">
                  <motion.span 
                    className="flex shrink-0 self-stretch my-auto bg-blue-500 rounded-full h-[9px] w-[9px]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <span className="self-stretch my-auto">Today (2)</span>
                </div>
                <div className="flex-1 shrink self-stretch my-auto h-0 border border-dashed basis-0 border-slate-200 w-[167px]" />
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/3d786ca48712118ac0ec35565d5e85c447d0b808?placeholderIfAbsent=true" 
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" 
                  alt="Calendar icon" 
                />
              </motion.div>
              <motion.div 
                className="flex gap-2.5 mt-1.5"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex flex-col items-center text-sm font-medium leading-none whitespace-nowrap">
                  <div className="w-8">
                    <span className="text-blue-500">NOV</span>
                    <motion.div 
                      className="px-2.5 w-full h-8 text-white bg-blue-500 rounded-full flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 5px 15px rgba(59,130,246,0.4)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      25
                    </motion.div>
                  </div>
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/5a53f886b2d5ecd649ad00184de125cf0a555c6f?placeholderIfAbsent=true" 
                    className="object-contain mt-2 w-0" 
                    alt="" 
                  />
                </div>
                <motion.div 
                  className="flex overflow-hidden flex-col items-start self-start p-3 mt-5 rounded-xl border border-solid bg-slate-50 border-slate-200"
                  whileHover={{ 
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                    y: -2
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex gap-7 justify-between items-center self-stretch w-full font-medium h-[26px]">
                    <time className="self-stretch my-auto text-lg text-slate-800">10:00 - 10:30 AM</time>
                    <motion.button 
                      className="gap-2.5 self-stretch px-2.5 py-3 my-auto text-sm text-white bg-sky-400 rounded-lg"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgb(14,165,233)",
                        boxShadow: "0 5px 15px rgba(56,189,248,0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      Join Now
                    </motion.button>
                  </div>
                  <p className="mt-2.5 text-base font-medium text-slate-500">30 min session</p>
                  <motion.div 
                    className="flex gap-2.5 items-center mt-2.5 max-w-full text-sm w-[199px]"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.img 
                      src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/c66e6229c096be275b0c812e8eac95722c3ff1bd?placeholderIfAbsent=true" 
                      className="object-contain shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square" 
                      alt="Therapist avatar"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                    <div className="self-stretch my-auto w-[171px]">
                      <span className="text-slate-500">Therapist</span>
                      <p className="font-medium text-slate-800">Mridhula Sharma</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.section>
            <motion.section className="mt-7 w-full" variants={itemVariants}>
              <motion.div 
                className="flex gap-2.5 items-center max-w-full text-sm w-[271px]"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.img 
                  src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/b8b1f0219bebcfb6d933bef239fae4b79059dcc2?placeholderIfAbsent=true" 
                  className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" 
                  alt="Therapist avatar"
                  whileHover={{ rotate: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <div className="self-stretch my-auto w-[171px]">
                  <span className="text-slate-500">Therapist</span>
                  <p className="font-medium text-slate-800">Riya Agarwal</p>
                </div>
              </motion.div>
              <motion.div 
                className="mt-6 w-full text-sm font-medium rounded-none max-w-[282px]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex gap-5 justify-between px-2 py-1.5 rounded-lg">
                  <div className="flex gap-1.5 text-slate-500">
                    <motion.img 
                      src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/1b84442ae043decb78b67787fe29293cfff928fb?placeholderIfAbsent=true" 
                      className="object-contain shrink-0 w-5 aspect-square" 
                      alt="Session icon"
                      animate={{ rotate: [0, 360] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    />
                    <span>2 of 5 sessions booked.</span>
                  </div>
                  <motion.button 
                    className="text-cyan-600"
                    whileHover={{ 
                      scale: 1.05,
                      color: "rgb(8,145,178)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    Schedule Next
                  </motion.button>
                </div>
              </motion.div>
            </motion.section>
            <motion.div 
              className="flex overflow-hidden flex-col justify-center px-3 py-2 mt-7 w-full rounded-xl border border-solid border-slate-200"
              variants={itemVariants}
              whileHover={{ 
                borderColor: "rgba(108,92,231,0.3)",
                boxShadow: "0 5px 15px rgba(108,92,231,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-2.5 items-start py-1 w-full">
                <motion.img 
                  src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/c3a22e57ad61568693d2372f3d8921a9f15bd5dd?placeholderIfAbsent=true" 
                  className="object-contain shrink-0 w-5 aspect-square" 
                  alt="Confirmation icon"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <div className="flex flex-col justify-center w-[233px]">
                  <h4 className="text-sm font-medium text-slate-800">Your booking is confirmed.</h4>
                  <p className="text-xs leading-4 text-slate-500">
                    Your request has been accepted by the Therapist.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.article>
      </motion.div>
    </motion.section>
  );
};

export default MobileAppInterface; 