// main.mjs
import users from "./data.mjs";

// Function to list all users
const index = () => {
    return users;
}

// Function to add a new user
const store = (user) => {
    users.push(user);
}

// Function to remove a user by index
const destroy = (index) => {
    if (index >= 0 && index < users.length) {
        users.splice(index, 1);
    } else {
        console.log("Invalid index");
    }
}

export { index, store, destroy };
