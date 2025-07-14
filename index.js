import fetchData from './src/no1.js';
import getDataFromServer from './src/no2.js';
import usersort from './src/no3.js';
import divideAndSort from './src/no4.js';
import { editdata, deletedata, listdata, adddata } from './src/no5.js';
import readline from 'readline';

function processData(data, error) {
    try {
        if (error) throw error;
        console.log('Data dari server:', data);
    } catch (error) {
        console.log('Terjadi error saat pengambilan data:', error);
    }
}

async function task1() {
    console.log('\n=== TASK 1 ===');

    await fetchData(false)
        .then((result) => {
            console.log('then-catch result:', result);
        })
        .catch((error) => {
            console.log('then-catch result:', error);
        });

    try {
        const result = await fetchData(true);
        console.log('async/await result:', result);
    } catch (error) {
        console.log('async/await result:', error);
    }
}

async function task2() {
    console.log('\n=== TASK 2 ===');
    await new Promise((resolve) => {
        getDataFromServer(true, (data, error) => {
            processData(data, error);
            resolve();
        });
    });

    await new Promise((resolve) => {
        getDataFromServer(false, (data, error) => {
            processData(data, error);
            resolve();
        });
    });
}

async function task3() {
    console.log('\n=== TASK 3 ===');
     await usersort()
}

function task4() {
    console.log('\n=== TASK 4 ===');
    const result = divideAndSort(1432425032432);
    console.log('Hasil divideAndSort:', result);
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log('\n=== MENU ===');
    console.log('1. Task 1 (fetchData)');
    console.log('2. Task 2 (getDataFromServer)');
    console.log('3. Task 3 (usersort)');
    console.log('4. Task 4 (divideAndSort)');
    console.log('5. Task 5 (CRUD data)');
    console.log('6. Keluar');

    rl.question('Pilih menu: ', handlemenu);
}

function handlemenu(pilihan) {
    switch (pilihan) {
        case '1':
            task1().then(() => menu());
            break;
        case '2':
            task2().then(() => menu());
            break;
        case '3':
            task3().then(() => menu());
            break;
        case '4':
            task4();
            menu();
            break;
        case '5':
            crudMenu();
            break;
        case '6':
            console.log('Keluar dari program');
            rl.close();
            break;
        default:
            console.log('Pilihan tidak valid');
            menu();
    }
}

function crudMenu() {
    console.log('\n=== CRUD DATA ===');
    console.log('a. Lihat data');
    console.log('b. Tambah data');
    console.log('c. Ubah data');
    console.log('d. Hapus data');
    console.log('e. Kembali ke menu utama');

    rl.question('Pilih operasi CRUD: ', (pilih) => {
        switch (pilih) {
            case 'a':
                listdata();
                crudMenu();
                break;
            case 'b':
                rl.question('Masukkan nama: ', (name) => {
                    adddata(name);
                    crudMenu();
                });
                break;
            case 'c':
                rl.question('Masukkan id: ', (id) => {
                    rl.question('Masukkan nama baru: ', (newnama) => {
                        editdata(id, newnama);
                        crudMenu();
                    });
                });
                break;
            case 'd':
                rl.question('Masukkan id yang mau dihapus: ', (id) => {
                    deletedata(id);
                    crudMenu();
                });
                break;
            case 'e':
                menu();
                break;
            default:
                console.log('Pilihan tidak valid');
                crudMenu();
        }
    });
}

menu();
