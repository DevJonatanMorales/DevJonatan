import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AlertSuccess } from "../../utils/AlertSuccess";
import { AlertError } from "../../utils/AlertError";
export const Contact = () => {
  const [textBtn, setTextBtn] = useState("Enviar");
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    try {
      setTextBtn("Enviando...");
      emailjs
        .sendForm(
          import.meta.env.VITE_YOUR_SERVICE_ID,
          import.meta.env.VITE_YOUR_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setTextBtn("Enviar");
            AlertSuccess();
            reset();
            console.log("SUCCESS!");
          },
          (error) => {
            setTextBtn("Enviar");
            AlertError();
            reset();
            console.log("FAILED...", error);
          }
        );
    } catch (error) {
      AlertError();
      setTextBtn("Enviar");
    }
  };

  return (
    <section className="resume-section" id="Contact">
      <div className="resume-section-content">
        <h2 className="mb-5">Contactame</h2>

        <form
          className="p-3 border rounded shadow-sm"
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3">
            <label htmlFor="user_name" className="form-label lead">
              Nombre
            </label>
            <input
              className="form-control mb-1"
              {...register("user_name", { required: true })}
            />
            {errors.user_name && (
              <span className="text-danger">Por favor ingrese su nombre</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="user_email" className="form-label lead">
              Correo
            </label>
            <input
              className="form-control mb-1"
              {...register("user_email", {pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, required: true })}
            />
            {errors.user_email && (
              <span className="text-danger">
                Por favor ingrese su correo electronico que sea valido
              </span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label lead">
              Mensaje
            </label>
            <textarea
              className="form-control mb-1"
              {...register("message", { required: true })}
              rows="3"
            ></textarea>
            {errors.message && (
              <span className="text-danger">Por favor ingrese el mensaje</span>
            )}
          </div>
          <button className="btn btn-secondary w-100 btn-lg" type="submit">
            {textBtn}
          </button>
        </form>
      </div>
    </section>
  );
};
