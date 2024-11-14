let formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()

    const nombres = document.getElementById('nombres').value;
    const correo = document.getElementById('correo').value;
    const correoconfir = document.getElementById('correoconfir').value;
    const password = document.getElementById('password').value;
    const confirpassword = document.getElementById('confirpassword').value;

    if (nombres==="" || correo==="" || password==="" ) {
        alert("Debes completar los datos");
        return;
        
    }if (correo !== correoconfir || password !==confirpassword) {
        alert (" El correo o la contraseña no coinciden");
        return;
        
    }else{
        alert("Datos Enviados corrrectamente");
    }
    const datosUsuarios = {
        nombres : nombres,
        correo : correo,
        password : '***********'
    }
    localStorage.setItem('datosUsuarios', JSON.stringify(datosUsuarios));
    alert('Enviando datos');
    window.location.href= 'datosusers.html';
})