const fetchData = (status) => {
    return new Promise((resolve, reject)=>{
        if(status){
            setTimeout(()=>{
                resolve("Data berhasil disimpan");
            },3000);
        }else{
            reject("Gagal mengambil data");
        }
    });
};
//  1. Promise:
//    - Promise adalah objek di JavaScript yang merepresentasikan operasi asynchronous.
//    - Promise memiliki 3 keadaan: pending, fulfilled (berhasil), dan rejected (gagal).
//    

// 2. then-catch:
//    - then digunakan untuk menangani kondisi ketika Promise berhasil (fulfilled).
//    - catch digunakan untuk menangani kondisi ketika Promise gagal (rejected).

// 3. async/await:
//    - async adalah keyword untuk mendefinisikan fungsi asynchronous.
//    - await digunakan untuk menunggu hasil Promise tanpa perlu menggunakan then.
//    - await harus digunakan di dalam fungsi yang dideklarasikan dengan async.

// 4. try-catch:
//    - try digunakan untuk mengeksekusi blok kode yang mungkin menyebabkan error.
//    - catch digunakan untuk menangkap error, termasuk error dari Promise yang gagal saat digunakan dengan await.

export default fetchData;
