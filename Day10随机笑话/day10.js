const oneEI = document.getElementById('one')
const oneBtn = document.getElementById('oneBtn')

oneBtn.addEventListener('click',getone)

getone()

async function getone() {
  const config={
    headers:{
      Accept:'application/json',
    }
  }
  const res = await fetch('https://icanhazdadjoke.com', config)
  const data =await res.json()
  console.log('data',data);
  oneEI.innerHTML = data.joke
}