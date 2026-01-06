//"use client";

import React from "react";
import Head from "next/head";


const WaitlistPage = () => {
  return (
    <>
      <Head>
        <title>Waitlist</title>
      </Head>
      <div className="mt-20 fixed w-full">
        <div className="aspect-video w-full">
            <iframe
                style={{ width: "100%" }}
                height="569"
                //src="https://findmyrideai.created.app/"
                src="https://4e423e46-fa04-43e7-b643-2bf131e2bbd6.created.app"
                title="Waiting List Landing Page"
                frameBorder="0"
            />
        </div>
      </div>
    </>
  )
};
export default WaitlistPage;
