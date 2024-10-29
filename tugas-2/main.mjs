import { index, store, destroy } from "./controller.mjs";

const main = () => {
    console.log("Daftar  user: ", index()); 

    store({ nama: 'Dina', umur: 23, alamat: 'Surabaya' });
    console.log("\n Setelah menambahkan user: \n", index()); 

    destroy(1);
    console.log("Data setelah dihapus berdasarkan index: \n", index()); 
}

main();