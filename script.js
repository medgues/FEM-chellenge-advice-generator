document.addEventListener('DOMContentLoaded', ()=>{
  fetchAdvice()
})

const fetchAdvice = async () => {
  try {
    let res = await fetch('https://api.adviceslip.com/advice')
    let data = await res.json()
    const adviceId = document.getElementById('adviceId')
    adviceId.innerText = `advice #${data.slip.id}`
    const adviceTxt = document.getElementById('adviceTxt')
    adviceTxt.innerText = `${data.slip.advice}`
  } catch (error) {
    console.log(error)
  }
}

