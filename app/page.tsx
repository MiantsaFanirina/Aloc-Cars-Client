import Link from "next/link";
import Image from "next/image";

export default function Home() {
      return (
          <div className={'w-full px-[72px] xl:px-[216px] pt-[36px] flex flex-col gap-[144px] mb-[144px]'}>

              {/* HERO SECTION */}

              <div className={'w-full flex flex-col gap-6 md:gap-0 md:flex-row'}>
                  <div className={'w-full md:w-1/2 flex items-center md:pr-[72px]'}>
                      <div className={'flex flex-col items-center text-center md:text-start md:items-start gap-[20px]'}>
                          <h1 className={'font-semibold text-[52px]'}>
                              Experience Luxury on Wheels in Switzerland
                          </h1>
                          <p className={'font-regular'}>
                              Indulge in our exclusive fleet of high-end sports and prestige cars. Whether for a special
                              occasion or a stylish getaway, we ensure an unforgettable driving experience.
                          </p>
                          <div className={'flex gap-2'}>
                              <Link href={'/download'}
                                    className={'font-bold bg-black text-white px-4 py-2'}>
                                  Download our APP now
                              </Link>
                          </div>
                      </div>
                  </div>
                  <div className={'w-full md:w-1/2 aspect-square bg-[#D9D9D9]'}></div>
              </div>

              {/*  HOW IT WORKS?  */}
              <div className={'w-full flex flex-col gap-[72px]'}>

                  {/* TOP TEXT */}
                  <div className={'w-full flex flex-col text-center md:text-start gap-4 md:gap-0 md:flex-row'}>
                      <div className={'w-full md:w-1/2 md:pr-[72px]'}>
                          <h2 className={'font-semibold text-[30px]'}>
                              Effortless Luxury: Your Guide to Renting Cars and Limousines in Switzerland
                          </h2>
                      </div>

                      <div className={'w-full md:w-1/2'}>
                          <p>
                              Experience the ultimate convenience with our seamless rental process. Whether you need a
                              high-performance sports car or a luxurious limousine, we have you covered.
                              Enjoy a stress-free journey from the moment you book to the moment you drive away.
                          </p>
                      </div>

                  </div>

                  {/*  STEPS  */}
                  <div className={'w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-[72px]'}>

                      {/* STEP */}
                      <div className={'flex flex-col min-w-[384px] max-w-[384px] gap-4 text-center'}>
                          <Image
                              src={'/home/choose.svg'}
                              alt={'choose illustration'}
                              width={100}
                              height={100}
                              className={'w-full h-[216px] object-center object-contain'}
                          />
                          <div className={'flex flex-col gap-2 pt-[5px]'}>
                              <h3 className={'font-bold'}>
                                  Choose Your Dream Car or Limousine for Your Journey
                              </h3>
                              <p>
                                  Select from our exclusive fleet of luxury vehicles.
                              </p>
                          </div>
                      </div>

                      {/* STEP */}
                      <div className={'flex flex-col min-w-[384px] max-w-[384px] gap-4 text-center'}>
                          <Image
                              src={'/home/custom.svg'}
                              alt={'customization illustration'}
                              width={100}
                              height={100}
                              className={'w-full h-[216px] object-center object-contain'}
                          />
                          <div className={'flex flex-col gap-2 pt-[5px]'}>
                              <h3 className={'font-bold'}>
                                  Customize Your Rental Experience with Our Premium Services
                              </h3>
                              <p>
                                  Add options like a personal driver or VIP concierge services.
                              </p>
                          </div>
                      </div>

                      {/* STEP */}
                      <div className={'flex flex-col min-w-[384px] max-w-[384px] gap-4 text-center'}>
                          <Image
                              src={'/home/drive.svg'}
                              alt={'drive illustration'}
                              width={100}
                              height={100}
                              className={'w-full h-[216px] object-center object-contain'}
                          />
                          <div className={'flex flex-col gap-2 pt-[5px]'}>
                              <h3 className={'font-bold'}>
                                  Enjoy a Luxurious Ride Tailored to Your Needs
                              </h3>
                              <p>
                                  Select from our exclusive fleet of luxury vehicles.
                              </p>
                          </div>
                      </div>

                  </div>

              </div>

              {/*  DISCOVER  */}
              <div className={'w-full flex flex-col gap-[72px]'}>
                  <h2 className={'font-semibold text-center md:text-start text-[30px]'}>
                      Discover our hire vehicles
                  </h2>


                  {/* LINKS */}
                  <div className={'w-full flex flex-col md:flex-row gap-y-[72px] items-center justify-between flex-wrap'}>

                      {/* LINK */}
                      <div className={'w-[384px] h-[230px] bg-secondary overflow-hidden group relative cursor-pointer'}>
                          <Image
                              src={'/home/aloc-cars-location-budget.jpg'}
                              width={1000}
                              height={1000}
                              alt={'budget cars'}
                              className={'w-full h-full absolute top-0 left-0 object-center object-cover group-hover:scale-110 transition-all'}

                          />
                          <div
                              className={`
                                w-full h-full absolute top-0 left-0 bg-black/25 backdrop-blur-sm
                                opacity-0 group-hover:opacity-100 transition-all
                                flex
                                justify-center
                                items-center
                              `}
                          >
                              <h1 className={`
                                text-white font-bold uppercase text-[20px]
                                opacity-0
                                translate-y-[72px]
                                group-hover:-translate-y-[0]
                                group-hover:opacity-100
                                transition-all
                                delay-150
                              `}>
                                  BUDGET / LOW-COST HIRE
                              </h1>
                          </div>
                      </div>
                      {/* LINK */}
                      <div className={'w-[384px] h-[230px] bg-secondary overflow-hidden group relative cursor-pointer'}>
                          <Image
                              src={'/home/aloc-cars-location-tourisme.jpg'}
                              width={1000}
                              height={1000}
                              alt={'budget cars'}
                              className={'w-full h-full absolute top-0 left-0 object-center object-cover group-hover:scale-110 transition-all'}

                          />
                          <div
                              className={`
                                w-full h-full absolute top-0 left-0 bg-black/25 backdrop-blur-sm
                                opacity-0 group-hover:opacity-100 transition-all
                                flex
                                justify-center
                                items-center
                              `}
                          >
                              <h1 className={`
                                text-white font-bold uppercase text-[20px]
                                opacity-0
                                translate-y-[72px]
                                group-hover:-translate-y-[0]
                                group-hover:opacity-100
                                transition-all
                                delay-150
                              `}>


                                  STANDARD / COMPACT HIRE

                              </h1>
                          </div>
                      </div>
                      {/* LINK */}
                      <div className={'w-[384px] h-[230px] bg-secondary overflow-hidden group relative cursor-pointer'}>
                          <Image
                              src={'/home/aloc-cars-location-utilitaires.jpg'}
                              width={1000}
                              height={1000}
                              alt={'budget cars'}
                              className={'w-full h-full absolute top-0 left-0 object-center object-cover group-hover:scale-110 transition-all'}

                          />
                          <div
                              className={`
                                w-full h-full absolute top-0 left-0 bg-black/25 backdrop-blur-sm
                                opacity-0 group-hover:opacity-100 transition-all
                                flex
                                justify-center
                                items-center
                              `}
                          >
                              <h1 className={`
                                text-white font-bold uppercase text-[20px]
                                opacity-0
                                translate-y-[72px]
                                group-hover:-translate-y-[0]
                                group-hover:opacity-100
                                transition-all
                                delay-150
                              `}>
                                  UTILITIES HIRE (2.5 – 20 m3)
                              </h1>
                          </div>
                      </div>
                      {/* LINK */}
                      <div className={'w-[384px] h-[230px] bg-secondary overflow-hidden group relative cursor-pointer'}>
                          <Image
                              src={'/home/aloc-cars-location-prestige.jpg'}
                              width={1000}
                              height={1000}
                              alt={'budget cars'}
                              className={'w-full h-full absolute top-0 left-0 object-center object-cover group-hover:scale-110 transition-all'}

                          />
                          <div
                              className={`
                                w-full h-full absolute top-0 left-0 bg-black/25 backdrop-blur-sm
                                opacity-0 group-hover:opacity-100 transition-all
                                flex
                                justify-center
                                items-center
                              `}
                          >
                              <h1 className={`
                                text-white font-bold uppercase text-[20px]
                                opacity-0
                                translate-y-[72px]
                                group-hover:-translate-y-[0]
                                group-hover:opacity-100
                                transition-all
                                delay-150
                              `}>
                                  PRESTIGE / GT SPORT HIRE
                              </h1>
                          </div>
                      </div>
                      {/* LINK */}
                      <div className={'w-[384px] h-[230px] bg-secondary overflow-hidden group relative cursor-pointer'}>
                          <Image
                              src={'/home/aloc-cars-location-4x4.jpg'}
                              width={1000}
                              height={1000}
                              alt={'budget cars'}
                              className={'w-full h-full absolute top-0 left-0 object-center object-cover group-hover:scale-110 transition-all'}

                          />
                          <div
                              className={`
                                w-full h-full absolute top-0 left-0 bg-black/25 backdrop-blur-sm
                                opacity-0 group-hover:opacity-100 transition-all
                                flex
                                justify-center
                                items-center
                              `}
                          >
                              <h1 className={`
                                text-white font-bold uppercase text-[20px]
                                opacity-0
                                translate-y-[72px]
                                group-hover:-translate-y-[0]
                                group-hover:opacity-100
                                transition-all
                                delay-150
                              `}>
                                  4X4 / SUV HIRE
                              </h1>
                          </div>
                      </div>
                      {/* LINK */}
                      <div className={'w-[384px] h-[230px] bg-secondary overflow-hidden group relative cursor-pointer'}>
                          <Image
                              src={'/home/aloc-cars-location-minibus.jpg'}
                              width={1000}
                              height={1000}
                              alt={'budget cars'}
                              className={'w-full h-full absolute top-0 left-0 object-center object-cover group-hover:scale-110 transition-all'}

                          />
                          <div
                              className={`
                                w-full h-full absolute top-0 left-0 bg-black/25 backdrop-blur-sm
                                opacity-0 group-hover:opacity-100 transition-all
                                flex
                                justify-center
                                items-center
                              `}
                          >
                              <h1 className={`
                                text-white font-bold uppercase text-[20px]
                                opacity-0
                                translate-y-[72px]
                                group-hover:-translate-y-[0]
                                group-hover:opacity-100
                                transition-all
                                delay-150
                              `}>
                                  MINIBUS HIRE (7 – 14 SEATED)
                              </h1>
                          </div>
                      </div>

                  </div>

              </div>
          </div>
      );
}
