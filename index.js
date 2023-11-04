//AXIOS GET

// const apiUrl = "https://northwind.vercel.app/api/customers";

// axios.get(apiUrl)
// .then(response => {
//   const data = response.data;

//   const dataOnload = document.getElementById("dataOnload");

//   data.forEach(obje => {
//     const objeDiv = document.createElement("div");
//     objeDiv.innerHTML = `
//       <strong>Customer ID:</strong> ${obje.id}<br>
//       <strong>Company Name:</strong> ${obje.companyName}<br>
//       <strong>Contact Name:</strong> ${obje.contactName}<br>
//       <strong>Contact Title:</strong> ${obje.contactTitle}<br>
//       <hr>
//     `;
//     dataOnload.appendChild(objeDiv);
//   });
// })

//AXIOS DELETE


// const apiUrl = "https://northwind.vercel.app/api/customers";

// const deleteForm = document.getElementById("delete-form");
// const dataOnload = document.getElementById("dataOnload");

// deleteForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const customerID = document.getElementById("customerID").value;

//   axios.delete(apiUrl + `/${customerID}`)
//     .then(response => {
//       dataOnload.innerHTML = `Customer ID: ${customerID}  silindi.`;
//     })

// });


// Axios Update

// const apiUrl = "https://northwind.vercel.app/api/customers";

// const updateForm = document.getElementById("update-form");
// const dataOnload = document.getElementById("dataOnload");

// updateForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const customerID = document.getElementById("customerID").value;
//     const companyName = document.getElementById("companyName").value;
//     const contactName = document.getElementById("contactName").value;

//     axios.put(apiUrl + `/${customerID}`, {
//         companyName: companyName,
//         contactName: contactName
//     })
//         .then(response => {
//             dataOnload.innerHTML = `Customer ID: ${customerID} başarıyla güncellendi.`;
//         })

// });


// FECH GET


// const apiUrl = "https://northwind.vercel.app/api/customers";
// const dataOnload = document.getElementById("dataOnload");

// fetch(apiUrl)
// .then(response => response.json())
// .then(data => {
//   data.forEach(obje => {
//     const objeDiv = document.createElement("div");
//     objeDiv.innerHTML = `
//       <strong>Customer ID:</strong> ${obje.id}<br>
//       <strong>Company Name:</strong> ${obje.companyName}<br>
//       <strong>Contact Name:</strong> ${obje.contactName}<br>
//       <strong>Contact Title:</strong> ${obje.contactTitle}<br>
//       <hr>
//     `;
//     dataOnload.appendChild(objeDiv);
//   });
// })

//Fech delete


const deleteButton = document.getElementById("delete-button");
const customerID = document.getElementById("customerID");

function FetchDel(event) {
  event.preventDefault(); // Formun normal işlevselliğini engellemek için formun gönderilmesini engeller
  let url = `https://northwind.vercel.app/api/customers/${customerID.value}`;

  fetch(url, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      console.log("Başarıyla silindi");
    } else {
      console.error("Silinemedi");
    }
  });
}

deleteButton.addEventListener("click", FetchDel);