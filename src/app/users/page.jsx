import Link from "next/link";

const UsersPage = async () => {
    const rest = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await rest.json();
    console.log(users);

    return (
        <div>
            <h2>this is users data site</h2>
            <div className="grid grid-cols-3 gap-3.5 mx-5">
                {
                    users.map(user => <div key={user.id}
                        className="card bg-primary text-primary-content ">
                        <div className="card-body">
                            <h2 className="card-title">{user.name} {user.id} !!</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <Link href={`/users/${user.id}`}>
                                    <button className="btn">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UsersPage;