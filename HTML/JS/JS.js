loginBtn= document.getElementById("login-btn")
userEl= document.getElementById("user-el")
passEl= document.getElementById("pass-el")
passP= document.getElementById("pass-p")
userP= document.getElementById("user-p")
loginBtn.addEventListener("click", function(){
	user=userEl.value
	pass=passEl.value
    passP.innerText=pass
    userP.innerText=user
})