import bgDesktopImage from "./assets/images/pattern-background-desktop.svg";
import bgMobileImage from "./assets/images/pattern-background-mobile.svg";
import heroImage from "./assets/images/illustration-hero.svg";
import iconMusic from "./assets/images/icon-music.svg";
function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-50 relative">
      <picture className="w-full top-0 z-0 absolute left-0">
        <source media="(min-width: 768px)" srcSet={bgDesktopImage} />
        <img src={bgMobileImage} alt="" className="w-full" />
      </picture>
      <div className="container w-[90%] sm:w-[80%] md:w-[400px] bg-white rounded-2xl z-1">
        <img src={heroImage} alt="Hero image" className="rounded-t-2xl" />
        <div className="flex items-center justify-between flex-col py-10 px-8 text-center space-y-6">
          <h1 className="text-2xl font-extrabold text-blue-950">
            Order summary
          </h1>
          <p className="text-gray-600 font-semibold">
            You can now listen to millions of songs, audiobooks and podcasts on
            any device anywhere you like!
          </p>
          <div className="flex w-full items-center bg-blue-50 p-5 rounded-2xl">
            <img src={iconMusic} alt="" className="mr-4" />
            <div className="flex-1 text-left">
              <p className="font-extrabold text-blue-950">Annual plan</p>
              <p className="font-extrabold text-gray-600">$59.99/year</p>
            </div>
            <p className="text-blue-700 underline font-semibold  hover:text-accent hover:no-underline active-state">
              Change
            </p>
          </div>
          <button className="p-5 bg-blue-700 text-white font-extrabold w-full rounded-2xl shadow-xl/20 shadow-blue-400  hover:scale-[1.02] active-state hover:bg-accent">
            Proceed to Payment
          </button>
          <button className="w-full font-extrabold text-gray-600 hover:text-black  active-state">
            Cancel order
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
