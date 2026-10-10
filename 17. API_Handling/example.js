async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        users.forEach(user => {
            console.log(user.name);
        });

    } catch (error) {
        console.log("Error:", error.message);
    }
}

// getUsers();

// getUsers()
//    ↓
// fetch() → get data from API
//    ↓
// response.json() → convert JSON to JavaScript data
//    ↓
// users.forEach()
//    ↓
// print each user's name


// Leanne Graham
// Ervin Howell
// Clementine Bauch
// Patricia Lebsack
// ...


// One important improvement
// In a real application, also check whether the HTTP request succeeded:
// if (!response.ok) {
//     throw new Error("Failed to fetch users");
// }

// So the more robust version is:
async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        users.forEach(user => {
            console.log(user.name);
        });

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUsers();