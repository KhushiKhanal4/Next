"use client"
import {useState, useEffect} from 'react';

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }   
                const data: User[] = await response.json();
                setUsers(data);
            } catch (error) {
                setError("Failed to fetch users");
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className='m-2 text-brown-500 text-lg'>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}