import FriendsCard from "../components/FriendsCard/FriendsCard";

const FriendsPage = async () => {
    const rest = await fetch("http://localhost:3000/data.json");
    const data = await rest.json();
    console.log(data);


    return (
        <div>
            <h3>Your Friends</h3>
            <div className="grid grid-cols-4 gap-8">

                {
                    data.map((friend, index) => <FriendsCard key={index} friend={friend}></FriendsCard>)
                }
            </div>
        </div>
    );
};

export default FriendsPage;