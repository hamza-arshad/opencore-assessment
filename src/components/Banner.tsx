import Image from "next/image";

export default function Banner () { 
    return (
        <div className="bg-[#2F5478] border rounded-[24px]">
            <div className="h-[155px] relative">
                <Image
                    src="/banner-union.svg"
                    className="rounded-t-[24px] object-cover"
                    alt="Union"
                    fill
                    priority
                />
            </div>
            <div className="px-6 laptop:pl-[150px] flex flex-col laptop:flex-row justify-between">
                <div className="max-w-[295px] laptop:max-w-[550px] desktop:max-w-[760px]">
                    <h1 className="text-white text-[40px] laptop:text-[64px] desktop:text-[96px] leading-[1.2] mb-[20px]">
                        Transforming your <span className="font-bold">Ideas into reality</span>
                    </h1>
                    <p className="text-[#EAECF0] text-base laptop:text-xl desktop:text-[24px]">
                        Let's build something extraordinary together to  captivate your audience.
                    </p>
                </div>
                <div className="mt-16 self-center laptop:mt-0 laptop:pr-[95px]">
                    <div
                        className="border border-[#EDF2F5] flex items-center justify-center rounded-[50%]
                        h-[250px] w-[250px]
                        desktop:h-[404px] desktop:w-[404px]"
                    >
                        <p className="m-auto text-[#EDF2F5] text-[32px]">
                            Let’s Work <br/> Together!
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-[155px] rotate-180 relative">
                <Image
                    src="/banner-union.svg"
                    className="rounded-t-[24px] object-cover"
                    alt="Union"
                    fill
                    priority
                />
            </div>
        </div>
    )
}