import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/profile-img.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
        <Image
          src={profileImg}
          alt="Kidus Zewde"
          className="w-full h-auto rounded-full"
        />
      </div>
      <spam className="font-bold text-xl">Kidus Zewde</spam>
    </Link>
  );
};

export default Logo;
