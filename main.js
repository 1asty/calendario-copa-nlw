function createGame(player1, hour, player2) {
return `
  <li>
  <img src="./assets/logo_${player1}.svg" alt="logo_${player1}" />

  <strong>${hour}</strong>

  <img src="./assets/logo_${player2}.svg" alt="logo logo_${player2}" />
</li>
`





}

let delay = -0.5;
function createCard(date, day, games) {
  delay = delay + 0.5;
  return `
   <div id="card1" style="animation-delay: ${delay}s">
          <h2> ${date} <span> ${day} </span></h2>

          <ul>

          ${games}
            
          </ul>
        </div>


`
}

document.querySelector("#app").innerHTML = `
<header>
        <img src="./assets/logo.svg" alt="logo" />
      </header>

      <main id="cards">
      ${createCard("21 / 11", "segunda", createGame('brasil', '08:00', 'camaroes') +
      createGame('hungria', '13:00', 'argentina') + 
      createGame('colombia', '20:00', 'japao')
      )}

      ${createCard("24 / 11", "quinta", createGame('argentina', '09:00', 'brasil') +
      createGame('colombia', '14:00', 'japao') + 
      createGame('portugal', '21:00', 'hungria')

      )}
       ${createCard("25 / 11", "sexta", createGame('alemanha', '11:00', 'holanda') +
      createGame('franca', '16:00', 'belgica') + 
      createGame('uruguai', '23:00', 'camaroes')

      )}
      ${createCard("28 / 11", "segunda", createGame('hungria', '09:00', 'japao') +
      createGame('colombia', '14:00', 'argentina') + 
      createGame('brasil', '20:00', 'portugal')

      )}

     </main>
      `
