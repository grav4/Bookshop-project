const setLocalStorage = (data) =>{
    const itemValue = storage.getItem(`${data.id}`);

    if(!loacalStorage.getItem(`${data.id}`)){
        localStorage.setItem(`${data.id}`,JSON.stringify(data));
}
};

const removeLoacalStorage = (target, key) =>{
    let item = document.querySelector(`[data-book-info = ${key}]`).dataset.bookid;
    loacalStorage.removeItem(item);
}
loacalStorage.clear;

export {setLocalStorage, removeLoacalStorage};


