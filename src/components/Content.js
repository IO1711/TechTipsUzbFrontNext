import TextDisplay from "./displayContent/TextDisplay";
import ImageDisplay from "./displayContent/ImageDisplay";

const Content = (props) => {
    const displayMap = {
        TEXT : (content) => <TextDisplay content={content}/>,
        IMAGE : (imageName) => <ImageDisplay imageName={imageName}/>
    }

    return <>
        <div className="content">
            {props.content && props.content.map(element => {
                return (<div className="display-content" key={element.orderNumber}>{displayMap[element.dataType]?.(element.data.content)}</div>);
            })}
        </div>
    </>
}

export default Content;