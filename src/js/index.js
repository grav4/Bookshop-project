import '../scss/base.scss'
import {renderBooksList} from './renderBookList'
import {setCartIcon} from './cartList'

const loadButton = document.getElementById('btn-load');
const key = "AIzaSyCZ766YDGPLq7UMuOu7VMuxXs61TSlDRvc";
const bookUrl = "https://www.googleapis.com/books/v1/volumes";
const categories = document.querySelectorAll('.item');
const requestParam = {
    category: 'Architecture',
    startIndex: '0',
    maxResult: '6',
    langRestrict: 'en'
};

const selectCategory = (category) =>{
    let currentCategoryNode = document.querySelector('.item active-link');
    let newCategoryNode = category;

    currentCategoryNode.classList.remove('item active-link');
    newCategoryNode.classList.add('item active-link');
};


const getRequestParam = (resetStartIndex) =>{
    let currentCategoryNode = document.querySelector('.item active-link');
    let currentCategoryName = currentCategoryNode.dataset.category;

    requestParam.category = currentCategoryName;

    if(resetStartIndex === true){
        requestParam.startIndex = 0;
    }

    return requestParam
};
                    

const useRequest = (url, getParam, callback, clearNode) =>{
    let link = `${bookUrl}?q="subject:${requestParam.category}"&printType=books&${key}&startIndex=${requestParam.startIndex}$maxResult=${requestParam.maxResult}$langRestrict=${requestParam.langRestrict}`;
                    
    fetch(link)
        .then((response) => { return response.json(); })
        .then()
        .then((data) => {
            callback(data,clearNode);
            })
            .catch(() => { console.log('error') });
};

categories.forEach(category => category.addEventListener('click', (event)=>{
    event.preventDefault();

    const getParam = requestParam(true);

    useRequest(url, getParam, renderBookList, true);
}));

loadButton.addEventListener('click', ()=>{
    const getParam = requestParam();

    requestParam.startIndex += 6;
    useRequest(url, getParam, renderBookList, false);
});

setCartIcon(localStorage.length);
useRequest(url, getParam, renderBookList, false);


                    

    




