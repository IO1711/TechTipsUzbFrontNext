import Main from "@/components/Main";
import Layout from "@/components/Layout";

export async function getAllApps() {
    const response = await fetch("https://uztechtips.onrender.com/api/v1/getApps");
    return await response.json();
}

export async function getServerSideProps(context) {
    const {appName, topicName} = context.params;

    const apps = await getAllApps();

    const topicsResponse = await fetch("https://uztechtips.onrender.com/api/v1/getAppTopics", {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({
            appName
        })
    });

    const topics = await topicsResponse.json();

    const contentResponse = await fetch("https://uztechtips.onrender.com/api/v1/getTopicContent", {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({
            app : {
                appName
            },
            topic : {
                topicName
            }
        })
    });

    const content = await contentResponse.json();

    return {
        props : {
            apps,
            topics,
            content,
            appName
        }
    }
}

const TopicContent = ({appName, apps, topics, content}) => {
    console.log("Topics: " + topics);
    return <>
        <Main apps={apps}>
            <Layout topics={topics} content={content} appName={appName}/>
        </Main>
    </>
}

export default TopicContent;