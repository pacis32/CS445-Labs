
window.onload= function (){
  getInfo();
  document.getElementById('refresh').onclick=getInfo;
}
async function getInfo(){
  const response= await fetch('https://randomuser.me/api/?results=5');
  const dataList= await response.json();
   displayEmp(dataList.results);
   
   }

   function displayEmp(data) {
    const empDiv = document.getElementById('employees');
    empDiv.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        let emp = data[i];
        let template = `
        <div class="col-2">
            <img src="${emp.picture.large}" />
        </div>
        <div class="col-2 text-end">
            <p class="fw-bold">${emp.name.first + " " + emp.name.last}</p>
            <p>Gender: ${emp.gender}</p>
            <p>${emp.email}</p>
        </div>
        <hr>
        `
        let div = document.createElement('div');
        div.innerHTML = template; 
        div.classList = 'row'; 
       
        empDiv.appendChild(div);
    }

    

}

