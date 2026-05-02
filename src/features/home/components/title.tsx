interface TitleProps {
  title: string;
  heading: string;
  text: React.ReactNode;
}

export const Title = ({ title, heading, text }: TitleProps) => {
  return (
    <div className="text-center mb-16">
      <span className="text-[#FF5722] font-medium text-sm md:text-lg  tracking-wider">
        {title}
      </span>
      <h2 className=" text-3xl md:text-5xl font-bold text-slate-900 mt-6 md:mt-4 mb-6">
        {heading}
      </h2>
      <p className="max-w-2xl mx-auto text-slate-500 sm:text-[16px] md:text-[16px] text-sm leading-relaxed">
       {text}
      </p>
    </div>
  );
};
