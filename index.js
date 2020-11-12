let count =0

const increase = () =>{
    count+=1
    console.log(count)
    element.innerText = count
}

const decrease = () =>{
    count-=1
    console.log(count)
    element.innerText = count
}

const reset = () => {
    count=0
    element.innerHTML = "<mark>"+count+"</mark>";
}

const element = document.getElementById('count')
console.log(element)


const selectTheme = (theme) => {
    const body = document.getElementsByTagName('body')[0]
    body.className = theme
    const main = document.getElementsByTagName('main')[0]
    main.className = theme

    const buttons = document.getElementsByTagName("button")
    for(let i=0;i<buttons.length;i++){
        buttons[i].className = theme
    }


}

