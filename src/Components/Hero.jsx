import PropTypes from "prop-types";

import ArrowRight from "../assets/icons/arrow-left.svg?react";
import FinTechEchoSystemLogo from "../assets/img/products/Fin-Tech-Echo-System-Logo.png";
import LekkAstraLogo from "../assets/img/products/LekhAstraLogo.png";
import FinAstraLogo from "../assets/img/products/FinAstraLogo.png";
import FinSmartLogo from "../assets/img/products/FinSmartLogo.png";
import { useState } from "react";
import { HeroPageButton } from "./HeroPageBtn";

const HeroDetails = [
  {
    mainText: (
      <span>
        <span className="text-6xl text-secondary-500">All</span> in one <br />
        business solution
      </span>
    ),
    productLogo: FinTechEchoSystemLogo,
    productLogoName: `FIN-TECH ECOSYSTEM`,
    description: `A complete fin-tech ecosystem services from one door system that makes nonstop delivery to the clients. It opens up a gamut of opportunities to all cooperative, members and coop shops.`,
  },
  {
    mainText: (
      <span>
        Product For the <br />
        <span className="text-secondary-500">Financial Solution</span>
      </span>
    ),
    productLogo: FinAstraLogo,
    productLogoName: `A COMPLETE COOP BANKING SOFTWARE`,
    description: `(FIN+अस्त्र) FinAstra software has been designed and developed after long research on the problems of financial management of the cooperative in the context of Nepal.`,
  },
  {
    mainText: (
      <span>
        Specially Built for
        <br />
        <span className="text-secondary-500">Department Store</span>
      </span>
    ),
    productLogo: LekkAstraLogo,
    productLogoName: `SOFTWARE FOR CHAIN STORE`,
    description: `लेखा+ अस्त्र - लेखास्त्र which means the divine weapon of book keeping along with stock management. it is an Inventory Management System (IMS) for all type of retailers and chain stores`,
  },
  {
    mainText: (
      <span>
        <span className="text-secondary-500">Mobile Banking</span> App
      </span>
    ),
    productLogo: FinSmartLogo,
    productLogoName: `Finance with Mobile App`,
    description: `Extension of the cooperative banking solutions beyond the office boundaries and members can access their bank accounts, fund transfer, pay bills, and more from the convenience of their`,
  },
];

function HeroLeft({ page = 0 }) {
  return (
    <div className="flex flex-col w-full gap-6 py-12">
      <p className="h-48 text-4xl text-primary-500">
        {HeroDetails[page].mainText}
      </p>
      <button className="flex items-center gap-4 px-12 py-4 rounded-lg w-fit bg-primary-500 text-base-50">
        <span>Request For Demo </span>
        <ArrowRight className="w-4" />
      </button>
    </div>
  );
}
HeroLeft.propTypes = {
  page: PropTypes.number,
};
function HeroRight({ page = 0 }) {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full overflow-hidden h-72 max-h-96">
        <img
          src={HeroDetails[page].productLogo}
          alt={HeroDetails[page].productLogoName + " Logo"}
          className="object-contain w-full max-h-96"
        />
      </div>
      <div className="h-20 text-3xl text-center text-primary-500">
        {HeroDetails[page].productLogoName}
      </div>
      <div className="h-24 text-center">{HeroDetails[page].description}</div>
    </div>
  );
}
HeroRight.propTypes = {
  page: PropTypes.number,
};

function PageBtnContainer({ currentPage, setCurrentPage }) {
  const pageBtns = [];
  for (let i = 0; i < 4; i++) {
    pageBtns.push(
      <HeroPageButton
        active={currentPage === i}
        id={i}
        key={i}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  return pageBtns;
}

export function Hero() {
  const [currentPage, setCurrentPage] = useState(0);
  setTimeout(() => {
    if (currentPage >= 0 && currentPage < 3) {
      setCurrentPage(currentPage + 1);
    } else setCurrentPage(0);
  }, 8000);

  return (
    <div className="flex px-40 pt-8">
      <div className="w-1/2">
        <HeroLeft page={currentPage} />
      </div>
      <div className="flex flex-col w-1/2 gap-8">
        <HeroRight page={currentPage} />
        <div className="flex items-center justify-center w-full h-10 gap-6">
          <PageBtnContainer
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
