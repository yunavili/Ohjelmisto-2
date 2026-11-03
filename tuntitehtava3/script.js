let nimet = [];

for (let i = 0; i < 5; i++) {
    let nimi = prompt(`Anna nimi ${i + 1}/5:`);
    if (nimi) {
      nimet.push(nimi);
    } else {
      nimet.push("Tuntematon");
    }
}
document.getElementById('koko-lista').textContent = nimet.join(', ');
document.getElementById('viimeinen-alkio').textContent = nimet[nimet.length - 1];
nimet.sort();
document.getElementById('eka-jarjestetty').textContent = nimet[0];
nimet.shift();
document.getElementById('lista-ilman-eka').textContent = nimet.join(', ');