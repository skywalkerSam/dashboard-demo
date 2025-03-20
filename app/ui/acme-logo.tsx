import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { ubuntu } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${ubuntu.className} flex flex-row items-center leading-none bg-transparent`}
    >
      <GlobeAltIcon className="h-9 w-9 rotate-[15deg]" />
      <p className="text-2xl ">Starboy Inc.</p>
    </div>
  );
}
