const form = document.querySelector("form");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const sexo = document.querySelector('input[name="sexo"]:checked').value;

  if (!nombre.value.trim() || !apellidos.value.trim() || !email.value.trim() || !telefono.value.trim() || !mensaje.value.trim() || !document.querySelector('input[name="sexo"]:checked')) {
    alert("Por favor, completa todos los campos antes de enviar.");
  } else {
    alert(`Los datos que se envian son:\n\nNombre:${nombre.value}\nApellidos:${apellidos.value}\nEmail:${email.value}\nTelefono:${telefono.value}\nSexo:${sexo}\nMensaje:${mensaje.value}\n`);
    // form.submit();
    form.reset();
  }
});
