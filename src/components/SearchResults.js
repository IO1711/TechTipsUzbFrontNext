import Link from "next/link";


const SearchResults = ({results, handleResults}) => {
    
    if(!results.length) return null;

    const handleResultClick = () => {
        handleResults([]);
    }

    return <>
        <div className="search-results">
            {
                results.map((item, i) => {
                    
                    const href = `/${item.appName}/${item.topicName}`;

                    return   (
                
                    <div key={i} className="search-result-row"><Link href={href} onClick={handleResultClick}>
                        {item.appName + " -> " + item.topicName}
                    </Link></div>
                
                )}
                )
            }
        </div>
    </>
}

export default SearchResults;