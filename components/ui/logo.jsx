import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-[32px] font-bold logo tracking-tighter inline">
        <span className="text-[#28EB3B]">Farm</span>GearX
      </h1>
    </Link>
  );
}
