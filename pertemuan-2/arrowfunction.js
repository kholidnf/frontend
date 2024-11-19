const getAge = (age, name) =>{
    const year = 2022;
    const age2 = year -age;
    return `${name} + ${age2}`;
}
console.log(getAge(1997, "Kholid"));
console.log(getAge(2003, "Saifullah"));