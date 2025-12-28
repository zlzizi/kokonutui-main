"use client";

import { PartyPopper, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ConfettiOutline } from "../icons/conffeti";

export default function HeaderProSmall() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="w-full bg-[#50C878] rounded-md">
            <div className="w-full px-4 py-1.5">
                <div className="flex items-center gap-2">
                    <Link
                        href="https://kokonutui.pro?utm_source=kokonutui.com&utm_medium=header"
                        target="_blank"
                        className="flex flex-1 items-center justify-center gap-2.5 md:gap-3 group transition-all duration-300 tracking-tighter"
                    >
                        {/* Desktop View */}
                        <span className="hidden md:flex items-center gap-3">
                            <ConfettiOutline className="w-5 h-5 text-white" />
                            <span className="text-white tracking-tighter text-sm">
                                Introducing{" "}
                                <span className="font-bold">Celzi Pro</span> -
                                70+ new components and templates to build
                                beautiful websites
                            </span>
                        </span>

                        {/* Mobile View */}
                        <span className="flex md:hidden items-center gap-2.5">
                            <PartyPopper className="w-5 h-5 text-white flex-shrink-0" />
                            <span className="text-white font-medium tracking-tight text-xs leading-tight">
                                Introducing Celzi Pro - 70+ new components and
                                templates to build beautiful websites
                            </span>
                        </span>
                    </Link>
                    <button
                        aria-label="Close banner"
                        className="flex h-7 w-7 items-center justify-center rounded-full text-white/90 transition hover:bg-white/10"
                        onClick={() => setIsVisible(false)}
                        type="button"
                    >
                        <X className="h-3.5 w-3.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
