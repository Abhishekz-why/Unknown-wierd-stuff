const fileInput = document.getElementById('upload');

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const uint = new Uint8Array(event.target.result);
        let bytes = [];
        uint.forEach((byte) => {
            bytes.push(byte.toString(16));
        });
        const hex = bytes.join('').toUpperCase();
        console.log("File Header (Hex):", hex.slice(0, 8));
        
        // Example check for PNG
        if (hex.startsWith("89504E47")) {
            console.log("This is a valid PNG image.");
        }
    };

    reader.readAsArrayBuffer(file.slice(0, 4)); // Read only the first 4 bytes
});

