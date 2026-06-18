import Image from "next/image";
export const metadata = {
    title: 'My About section',
    description: '...',
}
const About = () => {
    return (
        <div>
            <h2 className="font-bold text-7xl">this is about page</h2>
            <Image
                height="400"
                width="400"
                src="/car.png"
                alt="car pic"></Image>
            <Image
                height="400"
                width="400"
                src="/happy.jpg"
                alt="happy pic"

            ></Image>
        </div>
    );
};

export default About;