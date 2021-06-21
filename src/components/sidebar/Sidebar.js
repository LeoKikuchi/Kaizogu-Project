import './Sidebar.css';
import logo from '../../assets/Logo.jpg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? 'sidebar-responsive' : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt= "logo" />
                    <h1>Kikuchi Tripulante</h1>
                </div>

                <i 
                onClick={() => closeSidebar()}
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"                
                ></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <a href="#">Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className="sidebar__link">
                    <i className="fa fa-list-ul"></i>
                    <a href="#">Listagem de Piratas</a>                    
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-bullseye"></i>
                    <a href="#">Missões</a>                    
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-user-friends"></i>
                    <a href="#">Aliados</a>                    
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-skull-crossbones"></i>
                    <a href="#">Perdas</a>                    
                </div>

                <div className="sidebar__link">
                    <i className="fa fa-ship"></i>
                    <a href="#">Listagem de Navios</a>                    
                </div>
                <h2>Administrativo</h2>
                <div className="sidebar__link ">
                    <i className="fa fa-cogs"></i>
                    <a href="#">Configurações</a>                    
                </div>                                                
                <div className="sidebar__link">
                    <i className="fa fa-star"></i>
                    <a href="#">Vitorias</a>                    
                </div>                
                <div className="sidebar__link">
                    <i className="fa fa-file-text"></i>
                    <a href="#">Codigo de privacidade</a>                    
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Logout</a>                    
                </div>                                       
            </div>
        </div>
    )
}

export default Sidebar;