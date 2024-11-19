const req = {
    body: {
        name: "Kholid",
        age: 21,
        major: "Graphic Designer",
    },
};

const name = req.body.name;
const age= req.body.age;
const major= req.body.major;

console.log(name, age, major);
