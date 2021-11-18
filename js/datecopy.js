const  acertarData = () => {
  const paragrafoDeData = document.getElementById("date")
  const data = new Date()
  const year =  data.getFullYear()
  paragrafoDeData.innerHTML = `Copyright ©${year} TODOS OS DIREITOS RESERVADOS`
}

  acertarData();



