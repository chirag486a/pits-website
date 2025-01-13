import PitsLogo from "../assets/img/pits_logo.png";
import ISO2009 from "../assets/img/iso-2009.png"
import ISO27001 from "../assets/img/iso-27001.png"

export function Navbar() {
  return (
    <div className="flex items-center justify-between px-24 py-3">
      <div className="relative">
        <a href="/" id="logo">
          <img src={PitsLogo} alt="Pratham IT Logo" className="h-16" />
        </a>
        <div className="absolute bottom-0 flex -right-5">
          <div>
            <img src={ISO2009} alt="iso logo" className="h-5" />
          </div>
          <div>
            <img src={ISO27001} alt="iso logo" className="h-5" />
          </div>
        </div>
      </div>
      <ul className="flex gap-24 uppercase nav-container text-primary-500">
        <li className="font-bold under"><a href="">home</a></li>
        <li><a href="">resource</a></li>
        <li><a href="">career</a></li>
        <li><a href="">blog</a></li>
        <li><a href="">notices</a></li>
      </ul>
    </div>
  );
}
