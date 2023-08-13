import HeroImg from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="relative w-full">
      <img
        src={HeroImg}
        alt=""
        className="absolute right-0 -z-10 h-screen w-full"
      />
      <div className="mx-auto flex h-screen max-w-screen-xl flex-col items-center justify-center px-3 md:items-start xl:px-0">
        <h1 className="text-center text-4xl font-semibold leading-normal text-cyan-950 md:text-start md:text-6xl">
          Diversified Services.
          <br /> Unvarying Quality.
        </h1>
        <p className="mt-8 w-2/3 rounded-md bg-gray-200/50 text-center leading-loose text-slate-500 md:bg-inherit md:text-start lg:w-2/5">
          We designed 100+ commercial & residential projects in UAS & across the
          globe. Providing Design & 3D Support to Architectural Firms Globally.
          Award-Winning Company.{" "}
          <span className="font-bold text-slate-700">17+ Years</span> Of
          Experience.
        </p>
        <a
          href=""
          className="mt-20 rounded-md bg-cyan-950 px-16 py-4 text-xl text-white hover:bg-opacity-75"
        >
          See Our Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
