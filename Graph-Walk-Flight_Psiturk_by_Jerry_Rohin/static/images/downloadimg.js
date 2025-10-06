// === MAIN ===
// const zip = new JSZip();
// let completed = 0;

// imageFiles.forEach((filename, i) => {
// const img = new Image();
// img.crossOrigin = 'anonymous';
// img.src = filename;

// img.onload = function() {
//     const targetWidth = 550;
//     const targetHeight = 550;
//     const topPadding = 200;
  
//     // Resize canvas to hold label + resized image
//     const canvas = document.createElement('canvas');
//     canvas.width = targetWidth;
//     canvas.height = targetHeight + topPadding;
  
//     const ctx = canvas.getContext('2d');
  
//     // Fill background
//     ctx.fillStyle = 'white';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
  
//     // Draw label text
//     ctx.font = '70px Arial';
//     ctx.fillStyle = 'black';
//     ctx.textAlign = 'center';
//     ctx.fillText(labels[i], canvas.width / 2, 130);
  
//     // Draw image resized to 350×350 below the text
//     ctx.drawImage(img, 0, topPadding, targetWidth, targetHeight);
  
//     // Convert to base64
//     const base64 = canvas.toDataURL('image/png');
//     generated_stimuli.push({
//       stimulus: base64,
//       label: labels[i],
//       filename: filename
//     });
  
//     completed++;
//     if (completed === imageFiles.length) {
//       console.log("All images formatted and loaded!");
//     }
//   };
// });
// console.log("test")

