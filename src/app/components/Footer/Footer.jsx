import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer mt-32 footer-horizontal footer-center bg-[#244D3F] text-primary-content p-10">
            <aside>
                <Image
                    src="/logo-xl.png"
                    alt="logo"
                    width="412"
                    height="61"
                >
                </Image>
                <p className="font-light text-xs mt-3">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

            </aside>
            <nav>
                <h3 className="font-bold">Social Links</h3>
                <div className="grid grid-flow-col gap-4">
                    <div><Image
                        src="/instagram.png"
                        alt="instagram icon"
                        width="20"
                        height="20"
                    ></Image></div>
                    <div><Image
                        src="/facebook.png"
                        alt="facebook icon"
                        width="20"
                        height="20"
                    ></Image></div>
                    <div><Image
                        src="/twitter.png"
                        alt="twitter icon"
                        width="20"
                        height="20"
                    ></Image></div>
                </div>
            </nav>


            <div>
                <div className="divider w-11/12"></div>

                <footer className="footer sm:footer-horizontal   items-center p-2 ">
                    <div>
                        <aside className="grid-flow-col items-center">

                            <p> © {new Date().getFullYear()} KeenKeeper. All right reserved</p>
                        </aside>
                    </div>

                    <nav className="grid-flow-col gap-4 md:place-self-center lg:justify-self-end ml-64">
                        <div><a>Privacy Policy</a></div>
                        <div><a>Terms of Service</a></div>
                        <div><a>Cookies</a></div>

                    </nav>
                </footer>
            </div>
        </footer>
    );
};

export default Footer;