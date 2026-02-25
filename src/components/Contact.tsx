import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_d9wo7j2",
        "template_1jjlo6h",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "idyKgZmMCD6EWRYdc",
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "10px",
    border: "1px solid rgba(0,255,255,0.2)",
    backgroundColor: "rgba(0,255,255,0.04)",
    color: "#fff",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block",
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.85rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "8px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#02010a",
        color: "#fff",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 32px",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 800,
          textTransform: "uppercase",
          textAlign: "center",
          letterSpacing: "0.08em",
          margin: "0 0 60px 0",
          background: "linear-gradient(135deg, #ffffff 40%, #00ffff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Me contacter
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "640px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div>
          <label style={labelStyle}>Nom</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Votre nom"
            style={inputStyle}
            onFocus={(e) =>
              (e.target.style.borderColor = "rgba(0,255,255,0.6)")
            }
            onBlur={(e) => (e.target.style.borderColor = "rgba(0,255,255,0.2)")}
          />
        </div>

        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="votre@email.com"
            style={inputStyle}
            onFocus={(e) =>
              (e.target.style.borderColor = "rgba(0,255,255,0.6)")
            }
            onBlur={(e) => (e.target.style.borderColor = "rgba(0,255,255,0.2)")}
          />
        </div>

        <div>
          <label style={labelStyle}>Sujet</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            placeholder="Sujet de votre message"
            style={inputStyle}
            onFocus={(e) =>
              (e.target.style.borderColor = "rgba(0,255,255,0.6)")
            }
            onBlur={(e) => (e.target.style.borderColor = "rgba(0,255,255,0.2)")}
          />
        </div>

        <div>
          <label style={labelStyle}>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Votre message..."
            rows={6}
            style={{ ...inputStyle, resize: "vertical" }}
            onFocus={(e) =>
              (e.target.style.borderColor = "rgba(0,255,255,0.6)")
            }
            onBlur={(e) => (e.target.style.borderColor = "rgba(0,255,255,0.2)")}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            padding: "16px 40px",
            borderRadius: "12px",
            border: "1px solid rgba(0,255,255,0.3)",
            backgroundColor: "rgba(0,255,255,0.12)",
            color: "#00ffff",
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: status === "sending" ? "not-allowed" : "pointer",
            transition: "all 0.2s ease",
            alignSelf: "center",
            minWidth: "200px",
          }}
          onMouseEnter={(e) => {
            if (status !== "sending")
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "rgba(0,255,255,0.25)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor =
              "rgba(0,255,255,0.12)";
          }}
        >
          {status === "sending" ? "Envoi en cours..." : "Envoyer"}
        </button>

        {status === "success" && (
          <p style={{ textAlign: "center", color: "#00ffff", margin: 0 }}>
            ✓ Message envoyé avec succès !
          </p>
        )}
        {status === "error" && (
          <p style={{ textAlign: "center", color: "#ff6b6b", margin: 0 }}>
            ✗ Une erreur est survenue. Réessaie plus tard.
          </p>
        )}
      </form>
    </div>
  );
}
