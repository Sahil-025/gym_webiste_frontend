import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Conversation() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    const form = e.target;
    const formData = new FormData(form);

    // Replace this with your actual Web3Forms access key
    formData.append(
      "access_key",
      "a162b2fa-1067-478d-80df-8a959dd21d20"
    );

    formData.append(
      "subject",
      "New Enquiry - Limitless Fitness"
    );

    formData.append(
      "from_name",
      "Limitless Fitness Website"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus(
          "Thank you! Your enquiry has been sent successfully."
        );
        form.reset();
      } else {
        setStatus(
          "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error(error);
      setStatus(
        "Unable to send your enquiry. Please try again."
      );
    }
  };

  return (
    <div className="conversation-page">

      <a href="/" className="conversation-back">
        <ArrowLeft size={17} />
        Back to home
      </a>

      <div className="conversation-inner">

        <p className="eyebrow">
          START A CONVERSATION <span />
        </p>

        <h1>
          Let's build
          <br />
          something <em>stronger.</em>
        </h1>

        <p className="conversation-text">
          Have a question about membership, personal coaching, or
          training? Tell us a little about yourself and we'll get
          back to you.
        </p>

        <form
          className="conversation-form"
          onSubmit={handleSubmit}
        >

          <div className="form-row">

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />

          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
          />

          <select
            name="interest"
            defaultValue=""
            required
          >
            <option value="" disabled>
              What are you interested in?
            </option>

            <option value="Membership">
              Membership
            </option>

            <option value="Personal Training">
              Personal Training
            </option>

            <option value="Group Training">
              Group Training
            </option>

            <option value="Something else">
              Something else
            </option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us what you're looking for..."
            rows="5"
            required
          />

          <button
            type="submit"
            className="button"
            disabled={status === "Sending..."}
          >
            {status === "Sending..."
              ? "Sending..."
              : "Send enquiry"}

            {status !== "Sending..." && (
              <ArrowRight size={17} />
            )}
          </button>

          {status && (
            <p className="form-status">
              {status}
            </p>
          )}

        </form>

      </div>

    </div>
  );
}