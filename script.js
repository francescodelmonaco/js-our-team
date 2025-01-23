// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// add members from object
const container = document.querySelector(".container");

function addMember() {
  for (let i = 0; i < teamMembers.length; i++) {
    let element = teamMembers[i];
    container.innerHTML += `
      <div class="card">
        <figure>
          <img height="100%" src="${element.img}" alt="">
        </figure>

        <div class="user-info">
          <h5><strong>${element.name}</strong></h5>
          <span>${element.role}</span>
          <span class="mail">${element.email}</span>
        </div>
      </div>
    `
  }
};

addMember();

// add members with form
const btn = document.getElementById("btn");

btn.addEventListener("click", function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const email = document.getElementById('email').value;
  const img = document.getElementById('img').value;

  teamMembers.push(
    {
      name,
      role,
      email,
      img,
    }
  )

  console.log(teamMembers);

  container.innerHTML += `
      <div class="card">
        <figure>
          <img height="100%" src="${img}" alt="">
        </figure>

        <div class="user-info">
          <h5><strong>${name}</strong></h5>
          <span>${role}</span>
          <span class="mail">${email}</span>
        </div>
      </div>
    `
})