const major = [
 '<iframe width="560" height="315" src="https://www.youtube.com/embed/84gfqGXxpDE?si=9ZtUjZtwfp_aWjfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
 '<iframe width="560" height="315" src="https://www.youtube.com/embed/SgTq2JzhRi4?si=mUTkzdMGJC35M28S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
 '<iframe width="560" height="315" src="https://www.youtube.com/embed/gcfRIrxl0Rw?si=qrrHBJVmYZoIyJL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
 '<iframe width="560" height="315" src="https://www.youtube.com/embed/gvgFhc3znTk?si=SQeJd9YW1K54lOb9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
 '<iframe width="560" height="315" src="https://www.youtube.com/embed/e66mCMLj7yI?si=-2FHwOiKMzLH_3Gh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
 '<iframe width="560" height="315" src="https://www.youtube.com/embed/gmvJK05arjo?si=zapYs9emdPNe5c2p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
 '<iframe width="560" height="315" src="https://www.youtube.com/embed/yYaYj7B3S2A?si=UHMMfdOTCxSJ1lr5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
 '<iframe width="560" height="315" src="https://www.youtube.com/embed/0cG-y9hjmn8?si=7yIWgaWtD5EmiR7q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
 '<iframe width="560" height="315" src="https://www.youtube.com/embed/sR5vOoqYnQY?si=Czvu7rQi9R4HxQfk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
 '<iframe width="560" height="315" src="https://www.youtube.com/embed/Hs6Np_H5yOk?si=pStUafutmnpYm10u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
 '<iframe width="560" height="315" src="https://www.youtube.com/embed/_xUDgVV9qmo?si=eNAgF-8nAfhAkOvd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
 '<iframe width="560" height="315" src="https://www.youtube.com/embed/5lmrTaApMYI?si=pCKdX80MFGtLrnDu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
];

const minor =[
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
]

function randomNumber(){
   return Math.floor(Math.random() * 12);
}
const btn1 = document.getElementById('btn1')
const box = document.getElementById('video')

btn1.addEventListener('click',()=>{
    const randomIndex = randomNumber();

    // Clear the box content

    // Append the video
    box.innerHTML = major[randomIndex];
})