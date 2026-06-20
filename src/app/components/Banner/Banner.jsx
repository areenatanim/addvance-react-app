import Image from "next/image";
const Banner = () => {
    return (
        <div className="hero bg-[#ffff] min-h-[80%] ">
            <div className="hero-content text-center">
                <div className="mt-28">
                    <h1 className="text-4xl font-bold">
                        Friends to keep close in your life
                    </h1>
                    <p className="py-6 text-[#65758B]">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture
                        <br />
                        the
                        relationships that matter most.
                    </p>
                    <button className="btn btn-primary bg-[#244D3F]">
                        <Image
                            src="/plus.png"
                            alt="plus icon"
                            height="20"
                            width="10"
                        ></Image>
                        Add a Friend</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;