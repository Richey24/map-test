import { SidebarRoute } from "./type";
import dashboardIcon from "../../assets/dashboard.svg"
import inventoryIcon from "../../assets/inventory.svg"
import procurementIcon from "../../assets/procurement.svg"
import financeIcon from "../../assets/finance.svg"
import communicateIcon from "../../assets/communicate.svg"
import calenderIcon from "../../assets/calendar.svg"
import contractIcon from "../../assets/contract.svg"
import supportIcon from "../../assets/support.svg"
import settingIcon from "../../assets/setting.svg"

export const sidebarRoutes: SidebarRoute[] = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: dashboardIcon,
    },
    {
        path: "/inventory",
        name: "Inventory",
        icon: inventoryIcon,
    },
    {
        path: "/procurement",
        name: "Procurement",
        icon: procurementIcon,
        children: [
            {
                path: "/quote",
                name: "Quote"
            },
            {
                path: "/orders",
                name: "Orders"
            },
        ]
    },
    {
        path: "/finance",
        name: "Finance",
        icon: financeIcon,
    },
    {
        path: "/communication",
        name: "Communication",
        icon: communicateIcon,
        count: 10
    },
    {
        path: "/calender",
        name: "Calender",
        icon: calenderIcon,
        count: 10
    },
    {
        path: "/contract",
        name: "Contract",
        icon: contractIcon,
    },
]

export const sidebarFooterRoutes: SidebarRoute[] =[
    {
        path: "/support",
        name: "Support",
        icon: supportIcon,
    },
    {
        path: "/settings",
        name: "Settings",
        icon: settingIcon,
    },
]