import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  }

  return (
    <section className="page-section">
      <div className="container contact-grid">
        <div>
          <SectionTitle
            eyebrow="GET IN TOUCH"
            title="Let's build something great together."
            text="Have a project, a job opportunity or just want to talk about full stack development? Send me a message and I'll get back to you."
          />

          <div className="contact-details">
            <p><strong>Email:</strong> robaaed.afred@gmail.com</p>
            <p><strong>Location:</strong> Bangladesh</p>
            <p><strong>Availability:</strong> Open to full-time and freelance work</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button
            className="button primary"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="success-message">
              Thanks! Your message was sent. I'll reply soon.
            </p>
          )}

          {status === "error" && (
            <p className="error-message">{errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;