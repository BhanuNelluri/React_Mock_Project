import './Sidebar.css';

export default function Sidebar({ setIsOpen=false }) {


    return (
        <div className="Sidebar">
            <div className="SidebarMenu">
                <div className="SidebarItem">
                    <a onClick={() => setIsOpen(false)} className="SidebarLinks" href='/'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >Information</a>
                </div>
                <div className="SidebarItem">
                    <a onClick={() => setIsOpen(false)} className="SidebarLinks" href='/teams'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >Teams</a>
                </div>
                <div className="SidebarItem">
                    <a onClick={() => setIsOpen(false)} className="SidebarLinks" href='/about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >About</a>
                </div>
            </div>
        </div>
    )
}
