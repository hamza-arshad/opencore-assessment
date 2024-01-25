
interface Props {
    imageUrl: string;
}
export default function BlogCardSM ({imageUrl}: Props) { 
    return (
        <div className="max-w-[540px] mt-[71px] bg-white p-2 border rounded-[32px] shadow-lg">
            <div className="flex flex-col pt-12 pb-7 laptop:pt-10 laptop:pb-8 desktop:pt-[70px] desktop:pb-11 items-center bg-[#F8F8F8] rounded-t-[32px]">
                <img
                    className="h-[214px] desktop:h-[284px]"
                    src={imageUrl}
                    alt="Blog Media"
                />
            </div>
            <div className="mt-[43px] mb-[32px] mx-[32px]">
                <div className="text-sm desktop:text-[20px] flex flex-row items-center gap-[21px]">
                    <span>FREELANCING 101</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                            <circle cx="4.75633" cy="4.23167" r="4.00633" fill="#475467"/>
                        </svg>
                    </span>
                    <span>Joseph Patrick</span>
                </div>
                <h2 className="text-[24px] laptop:text-[32px] mb-6 mt-3 desktop:text-[40px] desktop:mb-[32px] desktop:mt-[16px] leading-[53px]">
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
    )
}