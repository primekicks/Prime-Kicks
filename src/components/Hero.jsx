const Hero = () => {
  return (
    <div className="relative h-[400px] w-full bg-[url('https://images.pexels.com/photos/5117638/pexels-photo-5117638.jpeg')] bg-cover bg-center">
      <div class="custom-shape-divider-bottom-1739966328 overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="flex w-full justify-center">
        <h1 className="relative mt-[220px] text-white text-3xl tracking-wide">
          Men's Shoes
        </h1>
        <button className="bg-black w-[150px] h-[50px] tracking-wider absolute mt-[365px] text-white rounded-lg shadow-xl ">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
