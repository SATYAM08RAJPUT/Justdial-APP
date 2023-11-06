class Main{
  constructor(data){
    this.data = data
  }
  renderMain(){
    const add = `
    <div class = "addtitle">
    <h2>Find Out Your Current Location</h2>
    <h3>Search anything & anywhere</h3>
    </div>
    <div class ="additem">
    <input type ="text" placeholder ="I am looking for...">
    <input type ="text" placeholder ="Location">
    <button class = "serchbtn">Search</button>
    </div>`
    const html = maiData.map((itm) => {
      return `
      <div class = 'subheader'>
     <h2> ${itm.title}</h2>
     <div> ${itm.home}</div>
     <div> ${itm.map}</div>
     <div> ${itm.about}</div>
     <div> ${itm.page}</div>
      </div>`
    }).join("")
    document.getElementById('mainid').innerHTML = html + add
  }
  // async init(){
  //   const datafectch = await dataService.getData('/package.json')
  //   console.log(datafectch)
  // }
}
const maiData = [
  {
    title: "Local",
    home: "HomePage",
    map: "Map Example",
    cate: "Categories",
    about: "About",
    page: "Page"
  }
]
const maninew = new Main(maiData)
maninew.renderMain()

var move =[];
fetch('./dummy.json')
    .then((response) => response.json())
    .then((data) =>{
      move = data;
      console.log(move)
      console.log(data)
      reanderdata(move)
});

function reanderdata(data){
  const tpl = data.jobs.map((itm) => {
      return `<div class = "set">
     <span class ="idtitle"> ${itm.id}.:-${itm.title}
     </span>
     <img src ="${itm.img}" class="renderimg">
     </div>`
  }).join("")
  document.getElementById('renderjobs').innerHTML = tpl
}
