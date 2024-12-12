import React, { useState } from 'react'
import "./Sidebar.css"
import logo from "../../assets/logo .png"
import downIcon from "../../assets/down.svg"
import upIcon from "../../assets/arrowup.svg"
import logoutIcon from "../../assets/logout.svg"
import avatarIcon from "../../assets/avatar.png"
import { sidebarFooterRoutes, sidebarRoutes } from './data'
import { SidebarRoute } from './type'

const Sidebar: React.FC = () => {
    const [activeRoute, setActiveRoute] = useState("/quote")

    const isActiveRoute = (route: SidebarRoute) => {
        return activeRoute === route.path || route.children?.find((child) => child.path === activeRoute)
    }

    const handleRouteClick = (route: SidebarRoute) => {
        setActiveRoute(() => isActiveRoute(route) ? "" : route.path)
    }

    return (
        <div className='sidebarDiv'>
            <div>
                <img src={logo} alt='' />
                {
                    sidebarRoutes?.map((route) => (
                        <div className={isActiveRoute(route) ? 'activeRoute routeDiv' : 'routeDiv'} key={route?.name}>
                            <div onClick={() => handleRouteClick(route)} className='routeMainDiv'><p><img src={route?.icon} alt="" /> {route?.name}</p> {route?.children && <img src={isActiveRoute(route)? upIcon : downIcon} alt="" />}{route?.count && <h6>{route?.count}</h6>}</div>
                            {
                                route?.children?.map((child) => (
                                    <div onClick={() => handleRouteClick(child as SidebarRoute)} className={activeRoute === child?.path ? "activeChildRoute routeChildDiv" : 'routeChildDiv'} key={child.name}><p>{child.name}</p></div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div className='sidebarFooterDiv'>
                {
                    sidebarFooterRoutes?.map((route) => (
                        <div className={isActiveRoute(route) ? 'activeRoute routeDiv' : 'routeDiv'} key={route?.name}>
                            <div onClick={() => handleRouteClick(route)} className='routeMainDiv'><p><img src={route?.icon} alt="" /> {route?.name}</p> {route?.children && <img src={downIcon} alt="" />}{route?.count && <p>{route?.count}</p>}</div>
                            {
                                route?.children?.map((child) => (
                                    <div onClick={() => handleRouteClick(child as SidebarRoute)} className={activeRoute === child?.path ? "activeChildRoute routeChildDiv" : 'routeChildDiv'} key={child.name}>{child.name}</div>
                                ))
                            }
                        </div>
                    ))
                }
                <div className='routeAvatarDiv'>
                    <div>
                        <img src={avatarIcon} alt="" />
                        <div>
                            <h5>Mark Benson</h5>
                            <p>markbenson@coremed.com</p>
                        </div>
                    </div>
                    <img src={logoutIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar