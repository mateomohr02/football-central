const New = ({ title, subtitle, image }) => {
  return (
    <div className="bg-pf-grey h-96 w-full flex-col  justify-center items-center md:h-[440px] md:row-auto md:flex md:flex-row md:w-11/12 md:h-70 md:relative md:mt-10 md:top-0 md:mx-auto md:border-4 md:border-solid md:border-pf-white md:rounded-xl">
      <div className="w-72 flex justify-center items-center mx-auto md:w-[45%] md:bg-pf-dark-grey md:h-full md:flex md:flex-col md:justify-around md:rounded-l-lg">
        <h1 className="text-pf-white text-xl font-bold text-center md:text-2xl md:mt-8 md:px-7">
          {title}
        </h1>
        <h2 className="hidden md:block text-pf-white font-medium md:px-9 md:mb-16">
          {subtitle}
        </h2>
      </div>

      <img
        src={image}
        alt="news"
        className="max-h-56 md:min-h-full md:min-w-[55%] md:object-cover md:relative md:right-0 md:rounded-r-lg"
      />
    </div>
  );
};

export default New;
