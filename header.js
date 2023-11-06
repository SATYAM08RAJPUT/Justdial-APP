class Header{
    constructor(data){
        this.data = data
    }
    renderData(){
        const tpl  = headerData.map((item) => {
            return `<div class = "head">
            <img src ="${item.logo}" class = "img">
            <button class ="logobtn">${item.buy}</button>
            </div>`
        }).join('')
        document.getElementById('headerid').innerHTML = tpl
    }
}

const headerData = [
    {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNclcazjBRoxeHiWkovYXdBr1Ugl7xBZc4vEEfFBeyopycgT0hiEpqigHWPex07QrDTdU&usqp=CAU",
        buy: "Buy now",
        location: "LOCATION FIND"
    }
]
const headercall = new Header(headerData)
headercall.renderData()
