// import { GlobeAltIcon } from '@heroicons/react/24/outline';
// import { ubuntu } from '@/app/ui/fonts';
import Image from "next/image";

export default function AcmeLogo() {
  return (
    <Image
      src={"/asai-logo.png"}
      alt="ASAI Inc. Logo"
      height={200}
      width={200}
    ></Image>
  );
}
