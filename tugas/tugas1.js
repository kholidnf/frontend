// Data for the employees
const employees = [
    { name: "Data 1", golongan: "A", status: "NIKAH" },
    { name: "Data 2", golongan: "B", status: "BELUM" },
    { name: "Data 3", golongan: "C", status: "NIKAH" },
    { name: "Data 4", golongan: "B", status: "NIKAH" },
    { name: "Data 5", golongan: "C", status: "BELUM" },
    { name: "Data 6", golongan: "B", status: "BELUM" },
    { name: "Data 7", golongan: "C", status: "NIKAH" },
    { name: "Data 8", golongan: "A", status: "BELUM" },
    { name: "Data 9", golongan: "A", status: "NIKAH" },
    { name: "Data 10", golongan: "A", status: "BELUM" }
];

// Define gaji pokok and tunjangan based on golongan
const gajiPokok = {
    "A": 10000000,
    "B": 8000000,
    "C": 5000000
};

const tunjangan = {
    "A": 2000000,
    "B": 1500000,
    "C": 1000000
};

// Function to calculate the total salary based on status
function calculateTotal(employee) {
    const gaji = gajiPokok[employee.golongan];
    const tunjanganValue = (employee.status === "NIKAH") ? tunjangan[employee.golongan] : 0;
    return gaji + tunjanganValue;
}

// Calculate the data and display results
employees.forEach(employee => {
    const gaji = gajiPokok[employee.golongan];
    const tunjanganValue = (employee.status === "NIKAH") ? tunjangan[employee.golongan] : 0;
    const total = calculateTotal(employee);

    console.log(`Name: ${employee.name}, Golongan: ${employee.golongan}, Status: ${employee.status}`);
    console.log(`Gaji Pokok: Rp. ${gaji}, Tunjangan: Rp. ${tunjanganValue}, Total: Rp. ${total}`);
});
