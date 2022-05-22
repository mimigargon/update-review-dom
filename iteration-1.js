const myUl = document.createElement('ul');
document.body.appendChild(myUl);

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
for (const country of countries) {
    const myLi = document.createElement('li');
    myUl.appendChild(myLi);
    myLi.innerText = country;
    
}


const myP = document.querySelector('.fn-remove-me');
myP.remove();


const myDiv = document.querySelector('[data-function="printHere"]');
const newUl = document.createElement('ul');
myDiv.appendChild(newUl);

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
for(car of cars) {
    const newLi = document.createElement('li');
    newUl.appendChild(newLi);
    newLi.innerText = car;

}


const ul = document.createElement('ul');
    document.body.appendChild(ul);


const places = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];


for(const place of places) {
    const li = document.createElement('li');
    ul.appendChild (li);
    const divs = document.createElement('div');
    li.appendChild(divs);
    const h4 = document.createElement('h4');
    divs.appendChild(h4);
    const image = document.createElement('img');
    divs.appendChild(image);
    h4.innerText = place.title;
    image.src = place.imgUrl;
}






    


