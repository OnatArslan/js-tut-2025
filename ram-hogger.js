// ram-hogger.js
// ram-hogger-40gb.js
const gigabytes = 40;
const chunkSize = 1024 * 1024 * 1024; // 1 GB
const bufferArray = [];

console.log(`Allocating and filling ${gigabytes} GB RAM...`);

for (let i = 0; i < gigabytes; i++) {
  const buffer = Buffer.alloc(chunkSize, 1); // 1 ile doldur → RAM "kullanılmış" olur
  bufferArray.push(buffer);
  console.log(`Filled ${i + 1} GB`);
}

console.log('✅ 40 GB FULLY OCCUPIED. Take your screenshot now.');
setInterval(() => {}, 1000); // Sürekli RAM’de tut
