
const image = ['https://images.unsplash.com/photo-1506260408121-e353d10b87c7?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1482784160316-6eb046863ece?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1445510491599-c391e8046a68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1442508748335-fde9c3f58fd9?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1431631927486-6603c868ce5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];


const flexBox = document.getElementById('flex-box')
const box = document.getElementById('box')
const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')
const numOfImage = document.getElementById('num-of-image')
const dotContainer = document.getElementById('dot-container')
// const caption =document.getElementById('caption')


const n = image.length;


const continerWidth = 30;
const flexBoxWidth = n * continerWidth;
flexBox.style.width = flexBoxWidth;


for (let i = 0; i < n; i++) {

    const newimg = document.createElement('img');
    newimg.src = image[i]
    newimg.classList.add('image-style')
    flexBox.appendChild(newimg);


    const dotDiv = document.createElement('div')
    dotDiv.classList.add('dot')
    dotContainer.appendChild(dotDiv);

    dotDiv.addEventListener('click', (event) => {
        const index = [...dotContainer.children].indexOf(event.target)
        showImg(index)
    })


}

let countPos = 0;
leftBtn.addEventListener('click', () => {
    if (countPos > 0) {
        showImg(countPos - 1)

    }
    else {
        showImg(n - 1);

    }
    numOfImage.innerHTML = (countPos + 1) + '/5';

})

rightBtn.addEventListener('click', () => {

    if (countPos < n - 1) {
        showImg(countPos + 1);
    }
    else {
        showImg(0)

    }
    numOfImage.innerHTML = (countPos + 1) + '/5';

})


function showImg(position) {



    const prevDot = dotContainer.children[countPos]
    prevDot.classList.remove('active')

    countPos = position

    const currDot = dotContainer.children[countPos]
    currDot.classList.add('active')

    const translateXDistance = -countPos * continerWidth;
    flexBox.style.transform = `translateX(${translateXDistance}vw)`

}




