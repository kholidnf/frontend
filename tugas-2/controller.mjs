// main.mjs
import users from "./data.mjs";

const index = () => {
    return users;
}


const store = (user) => {
    users.push(user);
}

const destroy = (index) => {
    if (index >= 0 && index < users.length) {
        users.splice(index, 1);
    } else {
        console.log("Invalid index");
    }
}

export { index, store, destroy };
