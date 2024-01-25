/* eslint-disable react/jsx-no-comment-textnodes */
interface Props {
    imageUrl: string;
    showBgImage?: boolean
}
import Image from "next/image";
export default function BlogCard ({imageUrl, showBgImage}: Props) { 
    return (
        <div className="mt-[71px] bg-white p-2 border rounded-[32px] shadow-lg">
            <div className="flex flex-col laptop:flex-row items-center bg-[#F8F8F8] rounded-[32px]">
                <div className="w-full relative">
                    {
                        (showBgImage) && <img
                            src="/union.svg"
                            alt="Union"
                            className="absolute object-none h-[30%] rounded-tr-[32px] rounded-tl-[32px] laptop:rounded-tr-[0px]"
                            fill
                            priority
                        />
                    }
                    <img
                        className="max-h-[441px] desktop:max-h-[588px] border rounded-t-[32px] laptop:rounded-l-[32px] laptop:rounded-tr-[0px]"
                        src={imageUrl}
                        alt="Blog Media"
                    />
                    {
                        (showBgImage) && <img
                            src="/union.svg"
                            alt="Union"
                            className="absolute object-none rotate-180 bottom-0 h-[30%] rounded-tr-[32px]"
                            fill
                            priority
                        />
                    }
                </div>
                <div
                    className="mt-8 p-4
                    laptop:mx-[68px] laptop:mt-0
                    desktop:ml-[91px] desktop:mr-[65px] desktop:p-0"
                >
                    <div className="flex flex-row text-sm items-center desktop:text-[20px] gap-[21px]">
                        <span>FREELANCING 101</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.75633" cy="4.23167" r="4.00633" fill="#475467"/>
                            </svg>
                        </span>
                        <span>Joseph Patrick</span>
                    </div>
                    <h2
                        className="tablet:text-[32px] tablet:mt-4 tablet:mb-10
                        laptop:text-[40px] laptop:mt-[20px] laptop:mb-24 
                        desktop:text-[56px] desktop:mt-[26px] desktop:mb-[129px]"
                    >
                        07 Ways to get Consistent Clients from Social Media
                    </h2>
                    <div className="text-sm desktop:text-[20px] flex flex-row items-center gap-[21px]">
                        <span>15 Min Read</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <circle cx="4.75633" cy="4.23167" r="4.00633" fill="#475467"/>
                            </svg>
                        </span>
                        <span>23 - 05 -2023</span>
                    </div>
                </div>
            </div>
        </div>
    )
}