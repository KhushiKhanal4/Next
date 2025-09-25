
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default async function UsersServer() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return (
        <ul>
            {users.map((user: User) => (
                <li key={user.id} className='m-2 text-brown-500 text-lg'>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>
    );
}