import Image from "next/image";
import Header from "./components/Header";
import Link from "next/link";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <section className="z-[9000000] flex items-center ga flex-col justify-around  bg-background h-screen md:px-20">
        <Image
          src="/assets/svg/CircleRight.svg"
          className="w-[40%] opacity-40 z-[10] absolute right-0 top-0 "
          alt="background right"
          width={100}
          height={100}
        />

        <div className=" grid grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5 ">
            <h1 className="text-5xl">
              Save time by building fast with Boldo Template{" "}
            </h1>
            <p>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="flex gap-4 items-center">
              <Link
                href="/template"
                className="px-6 py-2 font-bold bg-button text-background rounded-full"
              >
                Buy template
              </Link>
              <Link
                href="/template"
                className="px-6 py-2 font-bold border-2 border-white text-white rounded-full"
              >
                Explore
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-5 items-stretch justify-stretch">
            <div className="col-start-1 col-end-3">
              <Image
                src="/assets/svg/item1.svg"
                className=""
                alt="background right"
                width={1000}
                height={1000}
              />
            </div>
            <div className="bg-[#3B5166] w-[82%] p-4 rounded-xl">
              <Image
                src="/assets/svg/item2.svg"
                className=""
                alt="background right"
                width={1000}
                height={1000}
              />
            </div>
            <div className="">
              <Image
                src="/assets/svg/item3.svg"
                className=""
                alt="background right"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
        <Slider />
      </section>

      <section className="text-black bg-white md:px-20">
        <p className="text-center font-bold">Our Services</p>
        <h2 className="text-center font-bold">Handshake infographic mass market crowdfunding iteration.</h2>
        <div>
          <div>
            <Image
              src="/assets/svg/cool1.svg"
              className=""
              alt="background right"
              width={100}
              height={100}
            />
            <h4>Cool Feature title</h4>
            <p>Learning curve network effects return on investment.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
