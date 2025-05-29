import Layout from "@/components/Layout";
import Main from "@/components/Main";

export async function getAllApps() {
    const response = await fetch("https://uztechtips.onrender.com/api/v1/getApps");
    return await response.json();
}

export async function getStaticProps(context) {
    const { appName } = context.params;
    

    const response = await fetch("https://uztechtips.onrender.com/api/v1/getAppTopics", {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({
            appName : appName
        })
    });

    const topics = await response.json();

    const apps = await getAllApps();

    return {
        props : {
            topics,
            apps,
            appName
        },
        revalidate : 3600
    };
}

export async function getStaticPaths() {
    
    const apps = await getAllApps();

    const paths = apps.map(app => {
        return ({params : {appName : app.appName}})
    });

    return {
        paths,
        fallback: "blocking"
    };
}

const AppPage = (props) => {

    return <>
        <Main apps={props.apps}>
        <Layout topics={props.topics} appName={props.appName}/>
        </Main>
    </>
}

export default AppPage;