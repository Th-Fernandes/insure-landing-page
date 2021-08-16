var isOpenned = false;

const modal = {
    open() {
        if(isOpenned == false) {
            document.querySelector('.modal-options').classList.add('open');
            document.querySelector('body').style.overflow = "hidden";
            
            isOpenned = true;
        } else {
            document.querySelector('.modal-options').classList.remove('open');
            document.querySelector('body').style.overflow = "visible";
            isOpenned = false
        }
    }
}