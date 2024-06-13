import Swal from "sweetalert2";

export const AlertError = () => {
  Swal.fire({
    title: "Error!",
    text: "Error al enviar el correo, por favor intente de nuevo",
    icon: "error",
    confirmButtonText: "Aceptar",
  });
};
