import users from "./data.mjs";
const index = () => {
    console.log("Index of get All User");
    users.forEach(function(user){
        console.log(user);
    });
};

const store = (user) => {
    users.push (user);
}
export {index, store};