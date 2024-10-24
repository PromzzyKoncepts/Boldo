import Image from "next/image";
import Link from "next/link";


const Section3 = () => {
  return (
    <section className="text-black bg-white md:px-20 py-16 grid grid-cols-2 gap-10 place-content-center items-center">
        <div className="relative">
          <div  data-aos="fade-down" ><Image
            src="/assets/svg/person.svg"
            className="w-2/3 mx-auto"
            alt="background right"
            width={300}
            height={300}
          /></div>
          <div ><Image
            src="/assets/svg/chart.svg"
            className="absolute right-[20%] -bottom-[20%]"
            alt="background right"
            width={250}
            height={250}
          /></div>
        </div>
        <div className="flex flex-col gap-8 items-start">
          <h2 data-aos="fade-up"  className="text-4xl w-[80%] font-medium">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <div className="flex flex-col gap-3 items-start">
          <div  data-aos="fade-left"  className="flex gap-5 items-center">
              <Image
                src="/assets/png/tick.png"
                className="w-8"
                alt="background right"
                width={500}
                height={500}
              />
              <p>We connect our customers with the best.</p>
            </div>
            
            <div data-aos="fade-right"  className="flex gap-5 items-center">
              <Image
                src="/assets/png/tick.png"
                className="w-8"
                alt="background right"
                width={500}
                height={500}
              />
              <p>Advisor success customer launch party.</p>
            </div>
            <div data-aos="fade-up"  className="flex gap-5 items-center">
              <Image
                src="/assets/png/tick.png"
                className="w-8"
                alt="background right"
                width={500}
                height={500}
              />
              <p>Business-to-consumer long tail.</p>
            </div>
            
          </div>
            <Link  data-aos="fade-up"  href="/start" className="bg-background px-8 py-2 text-white rounded-full">Start</Link>
        </div>
      </section>
  )
}

export default Section3
