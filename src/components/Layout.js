
import TopicList from "./TopicList";
import Content from "./Content";

const Layout = (props) => {
    
    return <>
        <div className="layout">
            <TopicList topics={props.topics} appName={props.appName}/>
            <Content content={props.content}/>
        </div>
    </>
}

export default Layout;