let test = document.getElementById('root');


function createRow(data) {
  let string = '';
  data.map((row, i) => {
    string += (
      `<div>
        <span>${row[0]} 🦍</span>
        <span>${row[1]} 🤡</span>
        <span>${row[2]}</span>
      </div>`
    )
  })
  // for(let row in data) {
  //   console.log(row[1])
  //   stringsss += (
  //     `<div>
  //       <p>${row[0]}</p>
  //     </div>`
  //   )
    test.innerHTML = string
}

fetch('http://localhost:3000/data')
.then(resp => resp.json())
.then(data => createRow(data))
