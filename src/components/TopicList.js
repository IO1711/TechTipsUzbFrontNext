
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
    
    
    

    return <>
        <div className="sidebar">
        {props.topics && props.topics.map(topics => {
            return <TopicListItem key={topics.id} topicName={topics.topicName} appName={props.appName}/>
        })}
        </div>
    </>
}

export default TopicList;