export type SidebarRoute = {
    path: string,
    name: string,
    icon: string,
    count?: number,
    children?: Array<Pick<SidebarRoute, "path" | "name">>
}