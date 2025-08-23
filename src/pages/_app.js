import { useEffect } from "react";
import Router from "next/router";
import nProgress from "nprogress";
import 'nprogress/nprogress.css'
import "@/styles/App.css";
import { preloadTopics } from "@/components/searchIndex";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleStart = (url) => {
      console.log("STart: ", url);
      nProgress.start();
    };
    const handleStop = (url) => {
      console.log("Stop: ", url);
      nProgress.done();
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleStop);
    Router.events.on("routeChangeError", handleStop);

    preloadTopics().catch(console.error);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleStop);
      Router.events.off("routeChangeError", handleStop);
    }
  }, []);

  return (
    
    <Component {...pageProps} />
    
  );
}
