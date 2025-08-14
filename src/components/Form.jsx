import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.123456789", name);   // substitua pelo ID real do campo
    formData.append("entry.987654321", email);  // substitua pelo ID real do campo

    await fetch("https://docs.google.com/forms/d/e/FORM_ID/formResponse", {
      method: "POST",
      mode: "no-cors",  // importante para evitar erro de CORS
      body: formData
    });

    alert("Form submitted!");
    setName("");
    setEmail("");
  };

  return (
    <form className="max-w-3xl mx-auto grid gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Seu nome"
        className="p-3 rounded-lg text-black"
        required
      />
      <input
        type="email"
        placeholder="Seu e-mail"
        className="p-3 rounded-lg text-black"
        required
      />
      <input
        type="tel"
        placeholder="Seu telefone"
        className="p-3 rounded-lg text-black"
        required
      />
      <textarea
        placeholder="Mensagem"
        rows="4"
        className="p-3 rounded-lg text-black"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg"
      >
        Enviar
      </button>
    </form>
  );
}

export default MyForm;
