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
    document.getElementsByTagName('body')
}