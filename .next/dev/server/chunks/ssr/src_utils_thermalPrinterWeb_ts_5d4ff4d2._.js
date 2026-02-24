module.exports = [
"[project]/src/utils/thermalPrinterWeb.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "printWeb",
    ()=>printWeb
]);
let selectedPort = null;
async function printWeb(data) {
    if (!('serial' in navigator)) {
        return {
            success: false,
            message: 'Web Serial API not supported.'
        };
    }
    try {
        const ports = await navigator.serial.getPorts();
        const port = ports.length ? ports[0] : await navigator.serial.requestPort();
        if (!port.readable || !port.writable) await port.open({
            baudRate: 9600
        });
        const writer = port.writable.getWriter();
        const encoder = new TextEncoder();
        await writer.write(encoder.encode(data + '\n\n\n'));
        writer.releaseLock();
        selectedPort = port;
        return {
            success: true,
            message: 'Web print sent successfully.'
        };
    } catch (err) {
        return {
            success: false,
            message: `Web print failed: ${err?.message || err}`
        };
    }
}
}),
];

//# sourceMappingURL=src_utils_thermalPrinterWeb_ts_5d4ff4d2._.js.map