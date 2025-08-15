import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const formId = '1FAIpQLSfdZlpWTM7knG6N2601N3HKZsPis-RTc9pRDhayGYLiGq42qw';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.1086927678", name);
    formData.append("entry.890504600", email);
    formData.append("entry.1349704943", phone);
    formData.append("entry.62044194", message);

    await fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse`, {
      method: "POST",
      mode: "no-cors",
      body: formData
    });

    alert("Form submitted!");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <form className="max-w-3xl mx-auto grid gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Seu nome"
        className="p-3 rounded-lg text-black"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Seu e-mail"
        className="p-3 rounded-lg text-black"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Seu telefone"
        className="p-3 rounded-lg text-black"
        required
        onChange={(e) => setPhone(e.target.value)}
      />
      <textarea
        placeholder="Mensagem"
        rows="4"
        className="p-3 rounded-lg text-black"
        required
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-orange-400 hover:bg-orange-500 text-amber-50 font-semibold px-6 py-3 rounded-lg"
      >
        Enviar
      </button>
    </form>
  );
}

export default MyForm;
