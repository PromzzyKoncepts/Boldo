"use client"
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const Slider = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    // Duplicate the logos for infinite scroll
    const logos = logosRef.current;
    const clonedLogos = logos.cloneNode(true);
    clonedLogos.setAttribute('aria-hidden', 'true');
    logos.parentElement.appendChild(clonedLogos);
  }, []);

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <Image src="/assets/svg/Logo.svg" alt="Logo 1" width={100} height={100} />
        </li>
        <li>
          <Image src="/assets/svg/Logo1.svg" alt="Logo 2" width={100} height={100} />
        </li>
        <li>
          <Image src="/assets/svg/Logo.svg" alt="Logo 3" width={100} height={100} />
        </li>
        <li>
          <Image src="/assets/svg/Logo1.svg" alt="Logo 4" width={100} height={100} />
        </li>
        <li>
          <Image src="/assets/svg/Logo.svg" alt="Logo 5" width={100} height={100} />
        </li>
        <li>
          <Image src="/assets/svg/Logo1.svg" alt="Logo 6" width={100} height={100} />
        </li>
      </ul>
    </div>
  );
};

export default Slider;
