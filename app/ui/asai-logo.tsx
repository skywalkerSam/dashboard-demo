import Image from "next/image";

export default function AcmeLogo() {
  return (
    <a
      href="https://github.com/asaiinc"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={"/asai-logo.png"}
        alt="ASAI Inc."
        height={200}
        width={200}
      ></Image>
    </a>
  );
}
