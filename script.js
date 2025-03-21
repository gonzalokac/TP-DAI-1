function validarFormulario() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let confirmarContraseña = document.getElementById("confirmarContraseña").value;
    let email = document.getElementById("email").value;

    let errorUsuario = document.getElementById("errorUsuario");
    let errorContraseña = document.getElementById("errorContraseña");
    let errorConfirmarContraseña = document.getElementById("errorConfirmarContraseña");
    let errorEmail = document.getElementById("errorEmail");

    let BienUsuario= document.getElementById("BienUsuario");
    let BienContraseña = document.getElementById("BienContraseña");
    let BienConfirmarContraseña = document.getElementById("BienConfirmarContraseña");
    let BienEmail = document.getElementById("BienEmail");
    const pop=document.getElementById("pop");

    errorUsuario.textContent = "";
    errorContraseña.textContent = "";
    errorConfirmarContraseña.textContent = "";
    errorEmail.textContent = "";
   
    BienConfirmarContraseña.textContent = "";
    BienContraseña.textContent = "";
    BienEmail.textContent = "";
    BienConfirmarContraseña.textContent = "";
  

    let valido = true;

    if (usuario.length < 3) {
        errorUsuario.textContent = "El nombre de usuario debe tener al menos 3 caracteres.";
        valido = false;
    } else{

        BienUsuario.textContent="el nombre del usuario está bien"
    }

    let Contraseña = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!Contraseña.test(contraseña)) {
        errorContraseña.textContent = "La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número.";
        valido = false;
    } else{

        BienContraseña.textContent="La Contraseña está bien"
    }

    if (contraseña !== confirmarContraseña) {
        errorConfirmarContraseña.textContent = "Las contraseñas no coinciden.";
        valido = false;
    }  else{

        BienConfirmarContraseña.textContent="Las Contraseñas están iguales :)"
    }

    let Email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!Email.test(email)) {
        errorEmail.textContent = "Por favor, ingrese un email válido.";
        valido = false;
    }  else{

        BienEmail.textContent="El Email está bien"
    }

    if (valido) {
   
        pop.classList.add("show");
        document.getElementById("registroForm").reset();

        setTimeout(() => {
            window.location.href = "thankyou.html";
        }, 2000);

        return false; 
    }

    return false;
}

document.querySelector("#mostrarContraseña").onclick = () => {
    let contraseña = document.querySelector("#contraseña");
    let confirmarContraseña = document.querySelector("#confirmarContraseña");

    if(contraseña.getAttribute("type") == "password"){
        contraseña.setAttribute("type", "text");
        confirmarContraseña.setAttribute("type", "text");
    } else {
        contraseña.setAttribute("type", "password");
        confirmarContraseña.setAttribute("type", "password");
    }
}