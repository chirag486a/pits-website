export default function NumberExpress() {
  return (
    <div className="relative bg-cover bg-number-express">
      <div className="absolute inset-0 bg-white opacity-90"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen gap-32 py-28">
        <div className="text-center text-primary-500">
          <p className="text-4xl">
            Number Express, <span className="text-secondary-500">Stories,</span>
            We should listen
          </p>
        </div>
        <div className="flex items-center justify-center gap-16">
          <div className="flex flex-col items-center justify-center gap-4 w-fit">
            <p className="text-5xl font-black text-primary-500">15+</p>
            <p className="text-2xl text-secondary-500">Service Center</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 w-fit">
            <p className="text-5xl font-black text-primary-500">750+</p>
            <p className="text-2xl text-secondary-500">Satisfied Clients</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 w-fit">
            <p className="text-5xl font-black text-primary-500">15+</p>
            <p className="text-2xl text-secondary-500">Team Members</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 w-fit">
            <p className="text-5xl font-black text-primary-500">20+</p>
            <p className="text-2xl text-secondary-500">Coorporate Partners</p>
          </div>
        </div>
      </div>
    </div>
  );
}
