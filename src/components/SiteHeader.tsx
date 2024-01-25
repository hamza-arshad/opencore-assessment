import Image from "next/image";
import Navbar from "./Navbar";
import BlogcCard from "./BlogCard";

export default function SiteHeader () {
    return  (
        <>
            <div className="h-[121px] laptop:h-[155px] relative">
                <Image
                    src="/union.svg"
                    alt="Union"
                    className="object-cover"
                    fill
                    priority
                />
                <Navbar imageUrl="/navbar-icon.svg" />
            </div>
        </>
    )
}