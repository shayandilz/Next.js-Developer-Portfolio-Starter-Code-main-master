import React from 'react';
import {CircularText} from "@/components/Icons";
import Link from "next/link";

const HireMe = () => {
    return (
        <div className={'fixed left-4 bottom-4 flex items-center justify-center'}>
            <div className={'flex items-center justify-center relative w-48 h-auto'}>
                <CircularText className={'fill-dark dark:fill-light animate-spin-slow'}/>
                <Link href={'/'} className={'absolute flex justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-solid border-transparent bg-dark dark:bg-white text-light dark:text-dark dark:hover:bg-dark dark:hover:text-light h-20 w-20 rounded-full hover:bg-white hover:text-dark hover:border-dark transition'}>
                    Hire me
                </Link>
            </div>
        </div>
    );
};

export default HireMe;