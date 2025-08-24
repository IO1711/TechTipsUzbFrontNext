import Link from "next/link";
import { useState } from "react";
import { search } from "./searchIndex";
import SearchResults from "./SearchResults";
import Input from "./Input";
import Image from "next/image";

const Header = () => {

    const [results, setResults] = useState([]);

    const handleSearchChange = (event) => {
        console.log(search(event.target.value));
        setResults(search(event.target.value));
    }

    return <>
        <div className="header"> 
            <div className="header-child"><Link href={"/"}><Image 
                                                            src="/panda_E_white_transparent_trimmed.png" 
                                                            alt="site_logo"
                                                            width={400}
                                                            height={400}
                                                            className=""/></Link></div>
            <div className="header-big-child">
            <Input type="search" onChange={handleSearchChange} className="search-input"/>
            <SearchResults results={results} handleResults={setResults}></SearchResults>
      </div>
      
            <div className="header-child"><Link href={"https://techtipsuzbcreator.netlify.app"} target="_blank" rel="noopener noreferrer">O'zingiz qo'llanma yaratmoqchimisiz? Bu yerga bosing.</Link></div>
        </div>
    </>
}

export default Header;