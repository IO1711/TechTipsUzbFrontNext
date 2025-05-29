
import MenuItem from "./MenuItem.js";



const Menu = (props) => {
    /*const [allApps, setAllApps] = useState([]);
    const { get, loading } = useFetch("https://uztechtips.onrender.com/api/v1/");

    useEffect(() => {get("getApps").then(data => setAllApps(data));},[]);*/

    return <>
        <div className="menu-bar">
        {props.apps && props.apps.map(app => <MenuItem key={app.id} appName={app.appName}/>)}
        </div>
    </>
}

export default Menu;