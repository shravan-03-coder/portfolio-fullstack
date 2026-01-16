import FadeIn from "../components/animations/FadeIn";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submitForm = async (e) => {
    e.preventDefault();

   await fetch(`${https://shravans-portfolio.onrender.com}/api/contact`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});


    alert("Message Sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <FadeIn>
      <form onSubmit={submitForm} className="max-w-xl mx-auto space-y-4">
        <input className="w-full p-2" placeholder="Name"
          onChange={e=>setForm({...form,name:e.target.value})} />
        <input className="w-full p-2" placeholder="Email"
          onChange={e=>setForm({...form,email:e.target.value})} />
        <textarea className="w-full p-2" placeholder="Message"
          onChange={e=>setForm({...form,message:e.target.value})} />
        <button className="bg-blue-600 px-4 py-2 rounded">
          Send
        </button>
      </form>
    </FadeIn>
  );
}
