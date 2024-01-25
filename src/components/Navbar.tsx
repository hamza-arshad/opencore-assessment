import Image from "next/image";
interface Props {
    imageUrl: string;
}

export default function Navbar ({imageUrl}: Props) {
    return (
        <div className="relative w-[140px] laptop:w-[176px] px-6 py-4 laptop:px-5 laptop:py-6 space-x-5 justify-center flex border rounded-[500px] border-[#D0D5DD] bg-[#FCFCFD] mx-auto top-[43px] laptop:top-[54px]">
            <Image
                src={imageUrl}
                alt="Navbar Icon"
                className="w-6 h-6 laptop:w-10 laptop:h-10"
                width={40}
                height={40}
                priority
            />
            <div className="border border-[#D0D5DD]">
            </div>
             <Image
                src="/menu-icon.svg"
                alt="Menu Icon"
                className="w-6 h-6 laptop:w-10 laptop:h-10"
                width={41}
                height={36}
                priority
            />
        </div>
    )
}   