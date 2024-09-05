import { getSelectedBookInfo } from './cartList';
import raitingStar from "../img/icons/Star.png";
import filledRatingStar from "../img/icons/Star-filled.png";

const renderBooksList = (data,clearNode) =>{
let containerNode = document.getElementById('list-books');
let buyButtons = null;

    if(clearNode){
        containerNode.innerHTML = '';
    }

    data.items.foreach(item =>{
        let thumbnailData = null;
        let bookId = item.id;

        let authorsNode = '';
        let titleNode = '';
        let ratingNode = '';
        let descriptionNode = '';
        let priceNdoe = '';
        let productHtml = '';

        if(item.volumeInfo.imageLinks){
            thumbnailData = item.volumeInfo.imageLinks.thumbnail;
        }

        if(item.volumeInfo.authors){
            let authorsListData = item.volumeInfo.authors;
            let output = '';

            authorsListData.foreach((item, index, arr) =>{
                if(index === arr.length - 1){
                    output += `${item}`;
                }
                else{
                    output += `${item},`;
                }
            });

            authorsNode = `<p class = "product__author" data-book-info = "author">${output}</p>`;
        }

        if(item.volumeInfo.title){
            let titleData = item.volumeInfo.title;
            titleNode = `<h1 class = "product__title" data-book-info = "title">${titleData}</h1>`
        }
        
        if(item.volumeInfo.description && item.volumeInfo.description.length > 90){
            let descriptionData = item.volumeInfo.description;
            let description = descriptionData.slice(0, 91) + '...';
            descriptionNode = `<p class = "product__description" data-book-info = "description">${description}</p>`;
        }
        else if(item.volumeInfo.description){
            let description = item.volumeInfo.description;
            descriptionNode = `<p class = "product__description" data-book-info = "description">${descriptionData}</p>`;
        }

        if(item.volumeInfo.averageRating){
            let ratingsCountData = item.volumeInfo.ratingsCount;
            ratingNode = `<div class = "product__rtaing">
                                <div class = "rating__stars">
                                    <img src = "${filledRatingStar}" alt = "icon" class = "star">
                                    <img src = "${filledRatingStar}" alt = "icon" class = "star">
                                    <img src = "${filledRatingStar}" alt = "icon" class = "star">
                                    <img src = "${ratingStar}" alt = "icon" class = "star">
                                    <img src = "${ratingStar}" alt = "icon" class = "star">
                                </div>
                                <span class = "review_num">${ratingsCountData}review</span>
                          </div>`
        }

        if(item.saleInfo.listPrice){
            let priceData = item.saleInfo.listPrice.amount;
            const currency = 100;
            let priceValue = Math.floor(priceData * 100 / currency) / 100;

            priceNdoe = `<div class = "product__price">
                              <span class = "price__currency">$</span><span class = "price__value" data-book-info = "price">${priceValue}</span>
                         </div>`
        }

        productHtml = `<div class = "product-lists__item list">
                            <img src = "${thumbnailData}" alt = "book" class = "product_img" data-book-info = "thumbnail">
                            <div class = "product__card">
                                 ${authorsNode}
                                 ${titleNode}
                                 ${ratingNode}
                                 ${descriptionNode}
                                 ${priceNdoe}
                                 <button class = "btn buy-button data-book-info = "id" data-bookid = ""${bookId}>Buy now</button>
                            </div>
                       </div>`

targetNode.insertAdjacentHTML('beforeend', productHtml);

buyButtons = document.getElementsByClassName('buy-button');

getSelectedBookInfo(buyButtons);
    });
}

export {renderBooksList};