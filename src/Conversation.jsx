import React, { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

export default function Conversation() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.target;
    const formData = new FormData(form);

    // Web3Forms
    formData.append("access_key", "a162b2fa-1067-478d-80df-8a959dd21d20");

    // Professional email subject
    formData.append(
      "subject",
      `New Enquiry — ${formData.get("name")} | Limitless Fitness`,
    );

    // Name displayed on the notification
    formData.append("from_name", "Limitless Fitness Website");

    // The visitor's email becomes Reply-To
    formData.append("replyto", formData.get("email"));

    // Spam protection
    formData.append("botcheck", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="conversation-page">
      {/* BACK TO HOME */}
      <a href="/" className="conversation-back">
        <ArrowLeft size={17} />
        Back to home
      </a>

      <div className="conversation-inner">
        {/* HEADER */}
        <div className="conversation-header">
          <div className="conversation-brand">
            <img src="/logo.png" alt="Limitless Fitness" />
          </div>

          <p className="eyebrow">
            START A CONVERSATION <span />
          </p>

          <h1>
            Let's build
            <br />
            something <em>stronger.</em>
          </h1>

          <p className="conversation-text">
            Have a question about membership, personal coaching, or training?
            Tell us a little about yourself and our team will get back to you.
          </p>
        </div>

        {/* FORM */}
        <form className="conversation-form" onSubmit={handleSubmit}>
          {/* NAME + EMAIL */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">YOUR NAME</label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          {/* PHONE */}
          <div className="form-group">
            <label htmlFor="phone">PHONE NUMBER</label>

            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
            />
          </div>

          {/* INTEREST */}
          <div className="form-group">
            <label htmlFor="interest">I'M INTERESTED IN</label>

            <select id="interest" name="interest" defaultValue="" required>
              <option value="" disabled>
                Select an option
              </option>

              <option value="Membership">Membership</option>

              <option value="Personal Training">Personal Training</option>

              <option value="Group Training">Group Training</option>

              <option value="Gym Tour">Gym Tour</option>

              <option value="Something Else">Something Else</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div className="form-group">
            <label htmlFor="message">YOUR MESSAGE</label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell us what you're looking for..."
              rows="6"
              required
            />
          </div>

          {/* SPAM HONEYPOT */}
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          {/* SUBMIT */}
          <div className="form-submit">
            <button type="submit" className="button" disabled={loading}>
              {loading ? "Sending..." : "Send enquiry"}

              {!loading && <ArrowRight size={17} />}
            </button>

            <p className="form-note">
              We usually respond within 1 business day.
            </p>
          </div>

          {/* SUCCESS */}
          {status === "success" && (
            <div className="form-message success">
              <CheckCircle size={20} />

              <div>
                <strong>Enquiry sent successfully.</strong>

                <p>
                  Thank you for reaching out to Limitless Fitness. We'll be in
                  touch soon.
                </p>
              </div>
            </div>
          )}

          {/* ERROR */}
          {status === "error" && (
            <div className="form-message error">
              <AlertCircle size={20} />

              <div>
                <strong>Something went wrong.</strong>

                <p>Please try again or contact us directly.</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
