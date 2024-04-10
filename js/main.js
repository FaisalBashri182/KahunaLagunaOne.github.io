 const mntoggle = document.querySelector('.menu-toggle input');
 const nav = document.querySelector('nav ul');
 function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

mntoggle.addEventListener('click',function(){
    nav.classList.toggle('menushow');
})

function addItems(kat,jud,pub,up){//fungsi untuk menambahkan item kedalam tabel
  var table = document.getElementsByTagName('table')[0]//mengambil tabel yang ada di html
  var newRow = table.insertRow(1)//menambahkan item kedalam tabel pada baris kedua

  var cel1 = newRow.insertCell(0)//menambahkan cel pertama (kategori) pada satu baris
  var cel2 = newRow.insertCell(1)//menambahkan cel kedua (judul) pada satu baris
  var cel3 = newRow.insertCell(2)//menambahkan cel ketiga (waktu publikasi) pada satu baris
  var cel4 = newRow.insertCell(3)//menambahkan cel keempat (waktu update) pada satu baris

  cel1.innerHTML = kat//mengubah nilai cel
  cel2.innerHTML = jud//mengubah nilai cel
  cel3.innerHTML = pub//mengubah nilai cel
  cel4.innerHTML = up//mengubah nilai cel
}

function fetchJSONData(){//fungsi untuk membaca file json
  fetch("./dataBerita.json")//mengarahkan path ke file yang dituju
  .then((res)=>{
    if (!res){
      throw new Error 
        ('HTTP error! Status: ${res.status}')
    }
    return res.json()//membaca file json
  })
  .then((data)=>{
    let i = 0
    for (i in data){
      //mengambil data-data yang ada di file json dan di masukkan kedalam tabel dengan fungsi addItem
      addItems(data[i]['kategori'],data[i]['judul'],data[i]['waktu'],data[i]['update'])
    }
  })
.catch((error)=>
console.error("Unable to fetch data:",error))
}
fetchJSONData()//menjalankan semuanya