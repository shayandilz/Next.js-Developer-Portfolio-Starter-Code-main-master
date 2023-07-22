import React, {useEffect, useRef} from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import {useInView, useMotionValue, useSpring} from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if (isInView){
            motionValue.set(value)
        }
    },[isInView, motionValue, value])
    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])
    return <span ref={ref}></span>

}


const About = () => {
    return (
        <>
            <Head>
                <title>About us</title>
                <meta name='description' content='description'/>
            </Head>
            <main className={'w-full flex flex-col justify-center items-center dark:text-light'}>
                <Layout className={'pt-16'}>
                    <AnimatedText text='My About page' />
                    <div className={'grid w-full grid-cols-8 gap-16 py-2'}>
                        <div className={'col-span-3 flex flex-col justify-start items-start'}>
                            <h2 className={'mb-4 text-lg font-bold uppercase'}>Bio</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid aperiam blanditiis consequatur consequuntur eos esse, ex explicabo fugit, illum iste iusto laborum molestias nesciunt omnis quas quasi, saepe tempore.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eveniet facilis iste laboriosam molestias nobis nulla odit officiis repellat veniam. Blanditiis cumque delectus eius ipsam iusto praesentium, quisquam totam veritatis.
                            </p>
                        </div>
                        <div className="col-span-2 flex flex-col gap-16 justify-between items start">
                            <div className={'flex flex-col'}>
                                <span className={'text-6xl font-bold'}>
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className={'text-xl'}>
                                    Projects
                                </h2>
                            </div>
                            <div className={'flex flex-col'}>
                                <span className={'text-6xl font-bold'}>
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className={'text-xl'}>
                                    Projects
                                </h2>
                            </div>
                            <div className={'flex flex-col'}>
                                <span className={'text-6xl font-bold'}>
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className={'text-xl'}>
                                    Projects
                                </h2>
                            </div>
                        </div>
                    </div>
                    {/*<Skills />*/}
                    <Experience />
                </Layout>
            </main>
        </>
    );
};

export default About;