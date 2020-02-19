function addClickCount() {
    let count = 0;
    document.addEventListener('click', function () {
        count++;
    });
    return {
        getCount:function(){
            return count;
        }
    }
}

document.mycount = addClickCount();