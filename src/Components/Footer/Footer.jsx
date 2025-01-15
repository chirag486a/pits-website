import FooterMap from "../../assets/img/FooterMap.png";

import PropTypes from "prop-types";

export default function Footer({ className }) {
  return (
    <div className={className}>
      <div className="flex flex-col h-full bg-footer">
        <div className="flex justify-center pt-12 pb-12 gap-96">
          <div className="space-y-2 text-primary-500">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div>
              <div>
                <h4 className="font-semibold">Head Office</h4>
                <div className="italic">
                  <p>Kathmandu 15 Dallu, Safai Marg</p>
                  <p>Bagmati Province</p>
                  <p>01-5384393, 9801057193</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Corporate Office</h4>
                <div className="italic">
                  <p>Birtamod Jhapa</p>
                  <p>023-535597, 023-530541</p>
                  <p className="underline underline-offset-2">
                    info@prathamit.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={FooterMap} alt="Locations of pits" />
          </div>
        </div>
        <p className="flex items-end justify-center flex-1 text-sm text-center align-text-bottom opacity-75 text-primary-500">
          © 2025 Pratham IT System Pvt. Ltd. Designated to Mr. Chirag Bimali
        </p>
      </div>
    </div>
  );
}
Footer.propTypes = {
  className: PropTypes.string,
};
