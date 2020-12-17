const outerWrapper = document.createElement('div')
const innerWrapper = document.createElement('div')
const closeButton = document.createElement('img')

function createModal(){
    createCloseModalButton()
    createModalTitle() 
    createModalBody()
    createModalFooter()
    outerWrapper.appendChild(innerWrapper)
    innerWrapper.classList.add('innerWrapper')
    innerWrapper.style.animation=" smoothModal 2s"
    outerWrapper.classList.add('outerWrapper')
    document.body.appendChild(outerWrapper)
    createCloseModalActionClose()
}

function createModalFooter(){
    const footerWrapper = document.createElement('div')
    const button = document.createElement('button')

    button.innerHTML="Got IT"

    innerWrapper.appendChild(footerWrapper)
    footerWrapper.appendChild(button)

}

function createModalBody(){
    const articleWrapper = document.createElement('div')
    const articleParagraph = document.createElement('p')

    articleParagraph.innerHTML=`
        Lorem Ipsum is simply dummy
        text of the printing and 
        typesetting industry. 
        Lorem Ipsum has been 
        the industry's standard 
        dummy text ever since the 
        1500s, when an unknown printer 
        took a galley of type and scrambled 
        it to make a type specimen book.`

    innerWrapper.appendChild(articleWrapper)
    articleWrapper.appendChild(articleParagraph)
    
}

function createModalTitle(){
    const headerWrapper = document.createElement('div')
    const headerTitle = document.createElement('h1')
    console.dir(headerTitle)
    headerTitle.innerHTML="Lorem Ipsum"

    innerWrapper.appendChild(headerWrapper)
    headerWrapper.appendChild(headerTitle)
}

function createCloseModalButton(){
    closeButton.src="./img/close-icon.svg"
    closeButton.classList.add('closeIcon')
    closeButton.style.width="50px"
    closeButton.id="close"
    innerWrapper.appendChild(closeButton)
}

function createCloseModalActionClose(){
    const close = document.getElementById('close')
    close.addEventListener('click' , function(){
        outerWrapper.remove()
        innerWrapper.innerHTML=''
    })

}