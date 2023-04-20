export const DemoPage = ({
  title,
  disc = `This page is under construction, kindly click on "Dashboard" to navigate to the Home Page`,
}) => {
  return (
    <header className="flex flex-col space-y-12 items-start sm:space-y-0 sm:flex-row smm:items-center justify-between sticky top-0 lg:relative bg-white z-50 px-9 py-12 sm:px-[4.4rem] sm:py-[3rem] ">
      <div>
        <h1 className="text-[3rem] sm:text-[3.8rem] leading-[4.6rem] font-semibold tracking-[-0.02rem] line-clamp-1 sm:line-clamp-none">
          {title}
        </h1>
        <p className="text-primary text-[1.8rem] leading-[2rem] mt-5 line-clamp-1 sm:line-clamp-none">
          {disc}
        </p>
      </div>
    </header>
  );
};
