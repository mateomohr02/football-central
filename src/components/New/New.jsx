const New = ({ title, subtitle, image }) => {
  return (
    <div className="bg-pf-grey h-96 w-full flex-col  justify-center items-center md:h-[440px] md:row-auto md:flex md:flex-row md:w-11/12 md:h-70 md:relative md:mt-10 md:top-0 md:mx-auto md:border-4 md:border-solid md:border-pf-white">
      <div className="w-72 flex justify-center items-center mx-auto md:w-[40%] md:bg-pf-dark-grey md:h-full md:flex md:flex-col md:justify-around">
        <h1 className="text-pf-white text-xl font-bold text-center md:text-2xl md:mt-8 md:px-7">
          {title}
        </h1>
        <h2 className="hidden md:block text-pf-white font-medium md:px-9 md:mb-16">
          {subtitle}
        </h2>
      </div>
      <div className="w-full px-4  md:h-full md:w-[60%] md:flex md:flex-row md:justify-center md:items-center">
        <img
          src={image}
          alt="news"
          className="max-h-56 md:max-h-full md:min-w-full md:object-cover md:relative md:right-0"
        />
      </div>
    </div>
  );
};

export default New;
