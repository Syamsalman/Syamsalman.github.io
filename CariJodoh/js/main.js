document.getElementById('tanggalLahir').addEventListener('change', function() {
    const zodiak = getZodiak(this.value);
    document.getElementById('zodiak').value = zodiak;
});

document.getElementById('cariJodohForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const jenisKelamin = document.getElementById('jenisKelamin').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const zodiak = document.getElementById('zodiak').value;
    const hobi = document.getElementById('hobi').value.trim();
    const telepon = document.getElementById('telepon').value.trim();

    if (!nama || !jenisKelamin || !tanggalLahir || !zodiak || !hobi || !telepon) {
        alert('Semua field wajib diisi!');
        return;
    }

    const panjangNama = nama.length;
    const indexZodiak = panjangNama % 12;
    const zodiakList = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
    const targetZodiak = zodiakList[indexZodiak];

    const dataJodoh = await loadDataJodoh();

    const hasil = dataJodoh.filter(person => 
        person.jenisKelamin !== jenisKelamin && 
        person.zodiak === targetZodiak
    );

    tampilkanHasil(hasil);
});
