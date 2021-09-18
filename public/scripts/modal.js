export default function Modal(){
    const mWrapper = document.querySelector('.modal-wrapper')

    const cancelbutton = document.querySelector('.button.cancel')
    cancelbutton.addEventListener('click', close)
    
    function open(){
        mWrapper.classList.add("active")
    }
    function close(){
        mWrapper.classList.remove("active")
    }
    
    return{
        open,
        close
    }
}
