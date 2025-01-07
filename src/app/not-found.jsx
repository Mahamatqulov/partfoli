import Image from "next/image";
import NotFoundImage from "/public/404.png";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="">
      <div className="container mx-auto px-5 max-w-screen-sm flex flex-col-reverse items-center gap-5 sm:flex-row justify-between">
        <div>
          <h2 className="text-5xl mb-2 animate-slide-top">404</h2>
          <p className="mb-3 animate-slide-top delay-300">
            Bunday sahifa mavjud emas edi. Tez orada qo'shilib qolsa ajab emas.
          </p>
          <Link
            className={`${buttonVariants({
              variant: "default",
            })} animate-slide-top delay-600`}
            href="/"
          >
            Bosh sahifaga qaytish
          </Link>
        </div>
        <Image
          className="w-[150px] object-cover animate-slide-top sm:delay-900"
          src={NotFoundImage}
          width={150}
          height={150}
          alt="404"
        />
      </div>
    </div>
  );
}
