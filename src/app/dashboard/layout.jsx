import Link from "next/link";
export const metadata = {
    title: 'Dashboard',
    description: '...',
}
const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    {children}
                    <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><Link href={"/"}>Home page</Link></li>
                        <li><Link href={"/about"}>About page</Link></li>
                        <li><Link href={"/users"}>Users page</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;