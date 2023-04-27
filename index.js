let url = "https://api.nasa.gov/planetary/apod?api_key=aKug0ziZs8se61vUmlXcD3dd2o8Jc72rwUnO9sye";
// fetch(url).then(res=>res.json()).then(data=>console.log(data));




fetch(url)
.then(res=>res.json())
.then(data=>{
    const nasaImg = document.querySelector('#nasa-img');
    const explanation = document.querySelector('#explanation');
    const title = document.querySelector('#title');
    const date = document.querySelector('#date');

    nasaImg.src = data.url;
    explanation.textContent = data.explanation;
    title.textContent = data.title;
    date.textContent = data.date;
});

