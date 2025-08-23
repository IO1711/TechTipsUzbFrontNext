"use client";

import { useEffect } from "react";
import { preloadTopics } from "./searchIndex";

export default function SearchProvider({children}){
    useEffect(() => {
        preloadTopics().catch(console.error);
    },[]);

    return <>{children}</>
}