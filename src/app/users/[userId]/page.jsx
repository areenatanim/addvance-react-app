
const UserDetailsPage = async ({ params }) => {
    const { userId } = await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await res.json();

    return (
        <div>
            <h2>this is user details page</h2>
            <p>user id: {user.id}</p>
            <h3>user name: {user.name}</h3>
            <p>user email : {user.email}</p>
        </div>
    );
};

export default UserDetailsPage;