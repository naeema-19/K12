/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Skills.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import MarqueeCards from "../Components/MarqueeCards";
import SectionTitle from "../Components/SectionTitle";
import PartnersCards from "../Components/PartnersCards";

const Partners = () => {
  return (
    <div id="partners" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="PARTNERS" subtitle="OUR" />
        </div>
        <div className="xl:border-l-2 xl:border-r-2 xl:border-primary-400 h-80">
          <div className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
            <MarqueeCards direction="left">
              <PartnersCards />
            </MarqueeCards>
          </div>
          {/*<div className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
            <MarqueeCards direction="right">
              <PartnersCards />
            </MarqueeCards>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Partners;
