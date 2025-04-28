async function loadDataJodoh() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
}

function tampilkanHasil(hasil) {
    const hasilDiv = document.getElementById('hasilJodoh');
    hasilDiv.innerHTML = '';

    if (hasil.length === 0) {
        hasilDiv.innerHTML = '<p class="text-center text-danger">Tidak ada jodoh yang cocok.</p>';
        return;
    }

    hasil.forEach(person => {
        hasilDiv.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100 border-primary">
                    <div class="card-body">
                        <h5 class="card-title">${person.nama}</h5>
                        <p class="card-text">
                            <b>Jenis Kelamin:</b> ${person.jenisKelamin}<br>
                            <b>Tanggal Lahir:</b> ${person.tanggalLahir}<br>
                            <b>Zodiak:</b> ${person.zodiak}<br>
                            <b>Hobi:</b> ${person.hobi}<br>
                            <b>Telepon:</b> ${person.telepon}
                        </p>
                    </div>
                </div>
            </div>
        `;
    });
}
