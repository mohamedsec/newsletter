const btn = document.getElementById('btn')
const email = document.getElementById('email')
const msg = document.getElementById('msg')
const success = document.getElementById('success')
const form = document.getElementById('form')
const btnsucced = document.getElementById('btnins')

btn.addEventListener('click',(event)=>{
    const e = email.value;
    function validE(e) {
        const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return patt.test(e);
      }
      
      
      if (validE(e)) {
        event.preventDefault()
        form.style.display = "none"
        success.style.display = "block"
        console.log("Valid email address");
        

      } else {
        event.preventDefault()
      
        email.style.border = '1px solid red'
        msg.style.display = "block"
        console.log("Invalid email address");
      }
})
btnsucced.addEventListener('click', (event)=>{
  console.log('iam here')
  event.preventDefault()
success.style.display = "none"
form.style.display = "flex"
email.value ='';
})