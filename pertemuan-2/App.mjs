import index from "./controller.mjs";

const main = () => {

    const user = {nama: "Budi", umur: 30};
    index();
    store(user);
    index();
}

main();