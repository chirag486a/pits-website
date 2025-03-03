import CustomerLogo1 from "../../assets/img/CustomerLogo/CustomerLogo1.png";
import CustomerLogo2 from "../../assets/img/CustomerLogo/CustomerLogo2.png";
import CustomerLogo3 from "../../assets/img/CustomerLogo/CustomerLogo3.png";
import CustomerLogo4 from "../../assets/img/CustomerLogo/CustomerLogo4.png";
import CustomerLogo5 from "../../assets/img/CustomerLogo/CustomerLogo5.png";
import CustomerLogo6 from "../../assets/img/CustomerLogo/CustomerLogo6.png";
import CustomerLogo7 from "../../assets/img/CustomerLogo/CustomerLogo7.png";

import PropTypes from "prop-types";

export default function OurCustomer({ className }) {
  return (
    <div className={className}>
      <div>
        <div className="flex flex-col gap-12 mt-12">
          <p className="text-4xl font-black text-center text-primary-500">
            Our Clients
          </p>
          <div className="flex items-center justify-center gap-16 overflow-hidden">
            <img src={CustomerLogo1} alt="" />
            <img src={CustomerLogo2} alt="" />
            <img src={CustomerLogo3} alt="" />
            <img src={CustomerLogo4} alt="" />
            <img src={CustomerLogo5} alt="" />
            <img src={CustomerLogo6} alt="" />
            <img src={CustomerLogo7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

OurCustomer.propTypes = {
  className: PropTypes.string,
};
