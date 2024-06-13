import Swal from 'sweetalert2'

export const AlertSuccess = () => {
  Swal.fire({
    title: 'Exito!',
    text: 'Correo enviado con exito',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  })
}


