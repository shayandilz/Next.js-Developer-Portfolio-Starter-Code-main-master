import React from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import {GithubIcon} from "@/components/Icons";
import Project1 from '../../public/images/projects/agency-website-cover-image.jpg'
import {motion} from "framer-motion";

const FramerImage = motion(Image)
const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article
            className={'w-full flex items-center justify-between rounded-3xl dark:text-light rounded-br-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative'}>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark  dark:bg-light rounded-br-3xl'/>
            <Link className={'w-1/2 cursor-pointer overflow-hidden rounded-lg'} href={link} target={'_blank'}>
                <FramerImage
                    src={img}
                    title={title}
                    alt={title}
                    className={'w-full h-auto'}
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className={'w-1/2 flex flex-col items-start justify-between pl-6'}>
                <span className={'text-primary font-medium text-xl'}>{type}</span>
                <Link className={'hover:underline underline-offset-2'} href={link} target={'_blank'}>
                    <h2 className={'my-2 w-full text-left text-4xl font-bold'}>{title}</h2>
                </Link>
                <p className={'font-medium my-2 text-dark dark:text-light'}>{summary}</p>
                <div className={'mt-2 flex items-center'}>
                    <Link className={'w-10'} href={github} target={'_blank'}><GithubIcon/></Link>
                    <Link className={'ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'} href={link}
                          target={'_blank'}>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}
const Project = ({title, type, img, link, github}) => {
    return (
        <article
            className={'w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light dark:text-light bg-light dark:bg-dark p-6 relative'}>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'/>
            <Link className={'w-full cursor-pointer overflow-hidden rounded-lg'} href={link} target={'_blank'}>
                <FramerImage
                    src={img}
                    title={title}
                    alt={title}
                    className={'w-full h-auto'}
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}
                />
            </Link>
            <div className={'w-full flex flex-col items-start justify-between mt-4'}>
                <span className={'text-primary font-medium text-xl'}>{type}</span>
                <Link className={'hover:underline underline-offset-2'} href={link} target={'_blank'}>
                    <h2 className={'my-2 w-full text-left text-3xl font-bold'}>{title}</h2>
                </Link>
                <div className={'w-full mt-2 flex items-center justify-between'}>
                    <Link className={' text-lg font-semibold underline'} href={link}
                          target={'_blank'}>Visit Project</Link>
                    <Link className={'w-8'} href={github} target={'_blank'}><GithubIcon/></Link>

                </div>
            </div>
        </article>
    )
}
const Projects = () => {
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta name='description' content='description'/>
            </Head>
            <main className={'w-full mb-16 flex flex-col items-center justify-center'}>
                <Layout className={'pt-16'}>
                    <AnimatedText className={'mb-16'} text='Projects'/>
                    <div className="grid grid-cols-12 gap-16 gap-y-16">
                        <div className="col-span-12">
                            <FeaturedProject
                                title={'Macan Website'}
                                img={Project1}
                                type={'Wordpress'}
                                link={'/'}
                                summary={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis cupiditate deleniti dolore eius, error minus nostrum optio perspiciatis porro quos rerum tempora voluptate? Assumenda cum minus temporibus vel voluptatibus. '}
                                github={'/'}
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title={'Macan Website'}
                                img={Project1}
                                type={'Wordpress'}
                                link={'/'}
                                github={'/'}
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title={'Macan Website'}
                                img={Project1}
                                type={'Wordpress'}
                                link={'/'}
                                github={'/'}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;