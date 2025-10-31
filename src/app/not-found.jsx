import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="">
      <div className="container mx-auto  px-5 max-w-screen-sm flex mt-[150px] flex-col-reverse items-center justify-center gap-5 sm:flex-row">
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
      </div>
    </div>
  );
}
