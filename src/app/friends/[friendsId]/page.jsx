import ErrorPage from "@/app/not-found";

const FriendsDetails = async ({ params }) => {
    const { friendsId } = await params;
    console.log(friendsId);

    const res = await fetch(`http://localhost:3000/data.json`);
    const friends = await res.json();


    const friend = friends.find((f) => f.id === Number(friendsId)
    );
    console.log(friend);

    if (!friend) {
        return <ErrorPage></ErrorPage>;
    }

    return (
        <div>
            <h1>{friend.name}</h1>
            <p>{friend.bio}</p>
        </div>
    );
};

export default FriendsDetails;