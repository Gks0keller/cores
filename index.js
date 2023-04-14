function mudarCor(){
    let h1=' '
    h1=document.querySelector('div>h1')
    const coresSimples=['white','black','blue','red','green'
    ,'yellow','brown','pink','grey','purple']
    
    let cor=Math.floor(Math.random() * coresSimples.length)
    console.log(cor)
    console.log(coresSimples[cor])
    
    document.body.style.backgroundColor=coresSimples[cor]

    h1.innerText="Color: "+coresSimples[cor];
}
function hex(){
    const botao=document.querySelector('button') 
    console.log(botao) 
        botao.setAttribute("onclick","mudarCorHex()");
}
function mudarCorHex(){
    const h1=document.querySelector('div>h1')

    let hex='0123456789abcdef'
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random() * 16)]
    }
    h1.innerText="Color: "+color
    document.body.style.backgroundColor=color
}
function simple(){
    const botao=document.querySelector('button') 
    console.log(botao) 
        botao.setAttribute("onclick","mudarCor()");
}