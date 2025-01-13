import LocationImage from "../../assets/img/Location.png";

export default function LocationSection() {
  return (
    <div className="h-screen gap-24 py-16 bg-[#efefef] flex flex-col">
      <div>
        <h2 className="text-3xl text-center uppercase">Visit Us From</h2>
      </div>
      <div className="flex px-48">
        <div className="flex flex-col w-1/2 gap-4 px-4 border-l-2 h-fit border-primary-200">
          <h3 className="text-2xl">Production and Distribution Hubs</h3>
          <ul className="px-8 space-y-1 font-semibold uppercase">
            <li>Kathmandu</li>
            <li>Birtamod</li>
            <li>Itahari</li>
            <li>Ilam</li>
            <li>Chitwan</li>
            <li>Surkhet</li>
            <li>Butwal</li>
          </ul>
        </div>
        <div className="w-1/2">
          <img src={LocationImage} alt="PITS Location"  />
        </div>
      </div>
    </div>
  );
}
