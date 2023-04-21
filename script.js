//your JS code here. If required.
const images = [
    { url: 'https://picsum.photos/id/1/200/300' },
    { url: 'https://picsum.photos/id/2/200/300' },
    { url: 'https://picsum.photos/id/3/200/300' },
    { url: 'https://picsum.photos/id/4/200/300' },
    { url: 'https://picsum.photos/id/5/200/300' },
    { url: 'https://picsum.photos/id/6/200/300' },
    { url: 'https://picsum.photos/id/7/200/300' },
    { url: 'https://picsum.photos/id/8/200/300' },
    { url: 'https://picsum.photos/id/9/200/300' },
    { url: 'https://picsum.photos/id/10/200/300' },
  ];
  
  const output = document.querySelector("#output");
const downloadBtn = document.querySelector("#download-images-button");

async function downloadPic() {
  try {
    for (const image of images) {
      const img = await new Promise((resolve, reject) => {
        const imgElement = new Image();
        imgElement.onload = () => resolve(imgElement);
        imgElement.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
        imgElement.src = image.url;
      });
      output.appendChild(img);
    }
  } catch (error) {
    console.error(error);
  }
}

downloadBtn.addEventListener("click", downloadPic);
