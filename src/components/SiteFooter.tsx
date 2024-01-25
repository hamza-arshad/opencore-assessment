import Image from "next/image"

export default function SiteFooter () { 
    return ( 
        <div className="bg-[#294F74] px-4 py-8 laptop:px-16 laptop:py-20 desktop:p-[100px]">
            <div className="bg-white px-4 pt-4 laptop:pl-[72px] laptop:pr-[112px] laptop:pt-[100px] desktop:pr-[72px] border rounded-[16px] laptop:rounded-[32px] desktop:rounded-[48px]">
                <div className="flex flex-col laptop:flex-row justify-between">
                    <div>
                        <h1 className="text=[#1D2939] text-xl desktop:text-[32px] font-bold">
                            Say Hello!
                        </h1>
                        <a href="mailto:Atlaspremier@gmail.com" className="text-[#475467] text-xl desktop:text-[24px]">
                            Atlaspremier@gmail.com
                        </a>
                        <div className="flex flex-row mt-6 laptop:mt-[32px] space-x-4 justify-between">
                            <Image
                                src="/instagram-icon.svg"
                                alt="instagram"
                                width={53}
                                height={53}
                                priority
                            />
                            <Image
                                src="/facebook-icon.svg"
                                alt="facebook"
                                width={53}
                                height={53}
                                priority
                            />
                            <Image
                                src="/twitter-icon.svg"
                                alt="twitter"
                                width={53}
                                height={53}
                                priority
                            />
                            <Image
                                src="/linkedin-icon.svg"
                                alt="linkedin"
                                width={53}
                                height={53}
                                priority
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-[64px] justify-around mt-[64px] laptop:mt-0 desktop:gap-[85px] text-xl desktop:text-[24px]">
                        <div>
                            <a href="#" className="text-[#475467] mb-[17px] block">Home</a>
                            <a href="#" className="text-[#475467] mb-[17px] block">About us</a>
                            <a href="#" className="text-[#475467] mb-[17px] block">Work</a>
                        </div>
                        <div>
                            <a href="#" className="text-[#475467] mb-[17px] block">Services</a>
                            <a href="#" className="text-[#475467] mb-[17px] block">Contact us</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-center space-y-4 laptop:flex-row justify-between mt-[64px] desktop:mt-[85px] text-xl desktop:text-[24px] text-[#667085]">
                    <p>NewYorK, US</p>
                    <p>AtlasPremier. All Rights Reserved</p>
                </div>
                <div className="text-[#294F74] mt-[64px] text-[48px] laptop:text-[170px] laptop:mt-[124px] desktop:text-[201px] desktop:mt-[201px] font-extrabold text-center tablet:tracking-[-0.479px] laptop:tracking-[-1.7px] desktop:tracking-[-2px] leading-[25px] laptop:leading-[100px] desktop:leading-[110px]">
                    Atlas Premier 
                </div>
            </div>
        </div>
    )
}