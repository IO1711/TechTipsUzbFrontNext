import Link from "next/link";

/*<Link className="menu-item" to={`/${appName}`}> </Link>*/

const MenuItem = (props) => {
    const appName = props.appName;
    return (
        
        <Link href={`/${appName}/`} className="menu-item">{appName}</Link>
        
    )
}

export default MenuItem;