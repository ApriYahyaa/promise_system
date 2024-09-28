const myPromise = new Promise(function(resolve,reject) {
    let nama = "apriyahya"; // jika succses itu false maka reject atau ingkar
                          // jika succes itu true maka resolv atau tepat

    if(nama === "apriyahya") { 
        resolve() 
    } else {
        reject() 
    }
});

myPromise
    .then(function(result) {
        console.log("Nama Saya Benar"); // jika berhasil
    })
    .catch(function(reject){
        console.log("Nama Saya Tidak Benar !"); // ambil nilai dari reject nya yaitu gagal
    })
    .finally(function(){
        console.log("System Promise Itu Telah Selesai Membaca Variable Nama")
    })
    //  promise adalah sebuah kelas untuk asingkronus agar berjalan berbarengan 