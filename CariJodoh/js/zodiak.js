function getZodiak(tanggal) {
    const date = new Date(tanggal);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    const zodiakList = [
        ["Capricorn", 20], ["Aquarius", 19], ["Pisces", 20],
        ["Aries", 20], ["Taurus", 21], ["Gemini", 21],
        ["Cancer", 23], ["Leo", 23], ["Virgo", 23],
        ["Libra", 23], ["Scorpio", 23], ["Sagittarius", 22], ["Capricorn", 31]
    ];

    return (day < zodiakList[month - 1][1]) ? zodiakList[month - 1][0] : zodiakList[month][0];
}
