
import Header from "./Header"
import Menu from "./Menu"

const Main = ({children, apps}) => {
   
    return <>
        <div className="theme-graphite">
            <Header/>
            <Menu apps={apps}/>
            {children}
        </div>
    </>
}

export default Main;