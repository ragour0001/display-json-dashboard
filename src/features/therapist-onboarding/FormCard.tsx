import React from "react";

interface FormCardProps {
  title: string;
  children: React.ReactNode;
}

const FormCard: React.FC<FormCardProps> = ({ title, children }) => (
  <div
    className="
      bg-[#F7F1FA] border border-[#E6DEF9] rounded-2xl shadow-xl
      flex flex-col items-stretch p-0
      transition-all duration-200 hover:shadow-2xl hover:scale-[1.012]
      w-[98vw] max-w-[710px]
      min-h-[630px] md:min-h-[670px]
      mx-auto
      animate-fade-in
    "
  >
    <h2 className="text-[#161D1D] text-center text-[32px] font-bold leading-[39px] mb-4 tracking-tight animate-fade-in pt-9 px-7">
      {title}
    </h2>
    <div className="px-7 pb-4 w-full flex flex-col gap-3">{children}</div>
  </div>
);

export default FormCard;
