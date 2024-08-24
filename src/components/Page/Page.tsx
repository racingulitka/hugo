import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Inter } from "next/font/google";
import MobileHeader from '../MobileHeader/MobileHeader';
import Header from '../Header/Header';
import { Page as PageType } from "@/components/Header/Header.config";
import Footer from '../Footer/Footer';

const inter = Inter({ subsets: ["latin"] });

export default function PageWrapper({
    children,
    isMobile,
    pageType,
}: {
    children: React.ReactNode,
    isMobile: boolean,
    pageType:PageType,
}) {
    return (
        <>
            <Head>
                <title>Vehicles</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                {
                    isMobile ?
                        <MobileHeader /> :
                        <Header page={pageType} />
                }
                {children}
                <Footer />
            </main>
        </>
    )
}