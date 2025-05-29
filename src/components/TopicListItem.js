import Link from "next/link";

const TopicListItem = (props) => {

    

    return <>
        
        <Link href={`/${props.appName}/${props.topicName}`} className="sidebar-item">
            {props.topicName}
        </Link>
        
    </>
}

export default TopicListItem;