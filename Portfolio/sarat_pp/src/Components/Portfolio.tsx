import Gh from "../assets/Gamehub.png";
import retail from "../assets/retail.jpeg";
import inv from "../assets/inv coupon.png";
import nflx from "../assets/smp.png";
import reactWeather from "../assets/reactWeather.jpg";
import ser from "../assets/ser.png"

const PortFolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ser,
      href:'https://github.com/sharathshanmukh/Speech-Emotion-Recognition',
      name: "Speech Emotion Recognition"

    },
    {
      id: 2,
      name: "Game hub website clone",
      src:Gh,
      href:"https://game-hub-one-inky.vercel.app/"
    },
    {
      id: 3,
      name: "In Vehicle coupon recommendation ",
      src:inv,
      href:"https://github.com/sharathshanmukh/In-Vehicle-coupon-recommendation"
    },
    {
      id: 4,
      src: retail,
      name:"Retail Store Order Analysis - Tableau",
      href:"https://public.tableau.com/app/profile/shanmukha.sarat.ponugupati/viz/proj_16509367073770/Story1?publish=yes",
    },
    {
      id: 5,
      src: nflx,
      name:"Stock Data and Portfolio Analysis ",
      href:"",
    },
    {
      id: 6,
      src: reactWeather,
      name:" Weather App clone- React",
      href:" "
    },

  ];

  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-start w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid xs:grid-cols-2  sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-8">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"> */}

          {portfolios.map(({ id, src ,href,name}) => (
            <div key={id} className=" shadow-gray-600 max-w-md mx-auto overflow-auto rounded-lg shadow-md">
            {/* <div key={id} className="portfolio-item overflow-hidden shadow-lg rounded-lg"> */}
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full object-cover object-center h-48"
              />
              <div className="flex  justify-start flex-shrink-0">

                <button className="w px-6 py-3 m-4 duration-200 hover:scale-105 "  onClick={() => window.open(href, '_blank')}>
                  {name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortFolio;