"use client";
import Fuse from "fuse.js";

let fuse = null;
let initPromise = null;



const preloadTopics = async () => {
    if(fuse) return;

    if(!initPromise){
    
    initPromise = ( async () => {    
    try {
        
        const res = await fetch("https://uztechtips.onrender.com/api/v1/getAllTopics");
        const topics = await res.json();

        fuse = new Fuse(topics, {
            keys:["appName", "topicName"],
            threshold:0.3
        });

        console.log("Search index ready: " + topics.length + " topics");

    } catch(e) {
        console.error("Failed to preload topics ", e);
    } finally {
        initPromise = null;
    }

    })();
    }
    await initPromise;
}

const search = (query) => {
    if(!fuse) return [];
    return fuse.search(query).map(r => r.item);
}

export {preloadTopics, search};