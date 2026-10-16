import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Conversation() {
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
          Have a question about membership, personal coaching, or training?
          Tell us a little about yourself and we'll get back to you.
        </p>

        <form className="conversation-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="Your name"
              required
            />

            <input
              type="email"
              placeholder="Your email"
              required
            />
          </div>

          <input
            type="tel"
            placeholder="Phone number"
          />

          <select defaultValue="">
            <option value="" disabled>
              What are you interested in?
            </option>
            <option value="membership">Membership</option>
            <option value="personal-training">Personal Training</option>
            <option value="group-training">Group Training</option>
            <option value="other">Something else</option>
          </select>

          <textarea
            placeholder="Tell us what you're looking for..."
            rows="5"
          />

          <button type="submit" className="button">
            Send enquiry <ArrowRight size={17} />
          </button>
        </form>
      </div>
    </div>
  );
}