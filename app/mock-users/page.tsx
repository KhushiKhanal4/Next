import { revalidatePath } from "next/cache";    

type MockUser = {

    id: number;
    name: string;
};

export default async function MockUsers() {
    const res = await fetch("https://68d7da4f2144ea3f6da69e14.mockapi.io/users");
    const users = await res.json();

    async function addUser(formData: FormData) {
        "use server"
        const name = formData.get("name");
        const res = await fetch("https://68d7da4f2144ea3f6da69e14.mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name }),
        });
        const newUser = await res.json();
        revalidatePath("/mock-users");
        console.log(newUser);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <form action={addUser} className="flex flex-col items-center mb-4">
                <input type="text" name="name" required className="border  p-2 m-2 rounded-md" placeholder="Enter Name" />
                <button type="submit" className="bg-blue-500 text-white p-2 m-2 rounded">Add User</button>
            </form>
            <div className="p-4 bg-gray-100 rounded-lg shadow-md m-4">
                {users.map((user: MockUser) => (
                    <div key={user.id}
                        className='m-2 text-blue-500 text-lg'>
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
