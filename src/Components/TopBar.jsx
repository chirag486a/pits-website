import ArrowRight from "../assets/icons/arrow-left.svg?react";
export function TopBar() {
  return (
    <div className="flex items-center justify-center gap-4 p-2 bg-primary-500">
      <span className="text-base-200">
        If there is any thing you would like to query,
      </span>
      <button className="flex items-center justify-center gap-1 px-5 py-1 text-sm underline rounded-full underline-offset-2 bg-secondary-500">
        <span>Get in touch</span> <ArrowRight className="w-4" />
      </button>
    </div>
  );
}
