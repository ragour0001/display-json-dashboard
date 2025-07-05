"use client";
import * as React from "react";
import { useState } from "react";
import { useNotification } from "@/hooks/useNotification"; // Assuming you have a notification hook

function ContactFormHeader() {
  return (
    <div className="min-w-60 w-[480px] max-md:max-w-full">
      <header className="w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <h2 className="text-5xl font-bold tracking-tight leading-[64px] text-neutral-800 max-md:text-4xl">
            Let's Talk{" "}
            <span style={{ color: "rgba(108,92,231,1)" }}>Wellness</span>
          </h2>
          <h2 className="mt-2.5 text-2xl font-semibold leading-9 text-neutral-800 max-md:max-w-full">
            "Asking for mental health support is not a sign of weakness, but a
            step towards healing and strength."
          </h2>
        </div>
        <p className="mt-3.5 text-base leading-7 text-neutral-700 max-md:max-w-full">
          Looking to bring corporate stress management workshops to your team?
          Need personalized therapy or mental health apps for tracking anxiety
          and mood? Whether you're a company, an HR leader, or an individual
          seeking change — we're here to guide your wellness journey.
          <br />
          <br />
          From burnout prevention to one-on-one therapy, our expert team is
          ready to help you build resilience and emotional clarity, and
          provide 24/7 mental health support at work and in life.
          <br />
        </p>
      </header>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/9e73087dae79b6c5f1617412b3a114f2c2e2615d?placeholderIfAbsent=true"
        alt="Wellness illustration"
        className="object-contain mt-6 max-w-full aspect-[0.83] w-[480px]"
      />
    </div>
  );
}

function FormField({
  label,
  value,
  onChange,
  required = false,
  className = "",
  fieldClassName = "",
  placeholder = "",
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
  fieldClassName?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className={className}>
      <label className="font-medium leading-snug text-neutral-800">
        <span style={{ fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif" }}>
          {label}
          {required && (
            <span style={{
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              color: "rgba(255,0,0,1)"
            }}>
              *
            </span>
          )}
        </span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`flex gap-2.5 mt-3 w-full bg-white rounded-lg border border-solid border-[color:var(--Border,#E2E2E2)] min-h-[60px] px-6 max-md:max-w-full max-md:px-4 ${fieldClassName}`}
        required={required}
      />
    </div>
  );
}

function DropdownField({
  label,
  value,
  onChange,
  required = false,
  placeholder = "",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  const options = [
    { value: "organization", label: "I represent an organization" },
    { value: "individual", label: "I am an individual" },
    { value: "provider", label: "I am a care provider" },
    { value: "other", label: "Other" },
  ];

  return (
    <div>
      <label className="font-medium leading-snug text-neutral-800">
        <span style={{ fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif" }}>
          {label}
          {required && (
            <span style={{
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              color: "rgba(255,0,0,1)"
            }}>
              *
            </span>
          )}
        </span>
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex gap-2.5 mt-3 w-full bg-white rounded-lg border border-solid border-[color:var(--Border,#E2E2E2)] min-h-[60px] px-6 max-md:max-w-full max-md:px-4"
        required={required}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

function PhoneField({ value, onChange }: { value: string; onChange: (value: string) => void; }) {
  return (
    <div className="mt-8 w-full max-md:max-w-full">
      <label className="font-medium leading-snug text-neutral-800">
        <span style={{ fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif" }}>
          Phone{" "}
        </span>
        <span style={{
          fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
          color: "rgba(255,0,0,1)"
        }}>
          *
        </span>
      </label>
      <div className="flex gap-3 items-start mt-3 w-full leading-none text-black max-md:max-w-full max-md:gap-2">
        <div className="flex overflow-hidden gap-2.5 items-center py-5 pr-3 pl-4 bg-white rounded-lg border border-solid border-[color:var(--Border,#E2E2E2)] min-h-[60px] w-[120px] max-md:w-[100px] flex-shrink-0">
          <span className="self-stretch my-auto text-sm max-md:text-xs">India</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/5b039ee752bc065585d071ef3a709b7d38ed34a4?placeholderIfAbsent=true"
            alt="Country selector"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square max-md:w-3"
          />
        </div>
        <input
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex flex-1 gap-2.5 bg-white rounded-lg border border-solid border-[color:var(--Border,#E2E2E2)] h-[60px] min-w-0 px-6 max-md:px-4"
          required
        />
      </div>
    </div>
  );
}

function RecaptchaSection() {
  return (
    <div className="flex items-stretch self-start mt-6 max-md:mt-4 gap-0 w-full max-w-[450px] max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/f78fa68965118172463bea659482124d56252316?placeholderIfAbsent=true"
        alt="reCAPTCHA logo"
        className="object-contain shrink-0 h-[97px] w-[113px] max-md:h-[80px] max-md:w-[95px]"
      />
      <aside className="flex flex-col justify-center items-start px-4 py-3 text-white bg-blue-500 flex-1 h-[97px] max-md:px-3 max-md:py-2 max-md:h-[80px]">
        <div className="w-full">
          <p className="text-sm leading-tight text-white max-md:text-xs">
            protected by <span style={{ fontWeight: 500 }}>reCAPTCHA</span>
          </p>
          <nav className="mt-1.5 text-sm tracking-tight leading-tight max-md:text-xs max-md:mt-1">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Privacy</a> - <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Terms</a>
          </nav>
        </div>
      </aside>
    </div>
  );
}

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="gap-2.5 self-stretch px-8 py-5 mt-14 max-w-full text-3xl font-semibold leading-none whitespace-nowrap text-white bg-indigo-500 min-h-[68px] rounded-[99px] w-[638px] max-md:px-5 max-md:mt-6 max-md:text-2xl max-md:w-full hover:bg-indigo-600 transition-colors duration-200 disabled:bg-indigo-300"
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  );
}

function ContactFormFields() {
  const [formData, setFormData] = useState({
    whoAmI: "",
    name: "",
    email: "",
    organization: "",
    phone: "",
    state: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const notification = useNotification();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.refillhealth.com/api/v1/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": "*/*",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        notification.success("Form submitted successfully!");
        // Reset form
        setFormData({
          whoAmI: "",
          name: "",
          email: "",
          organization: "",
          phone: "",
          state: "",
        });
      } else {
        const errorData = await response.json();
        notification.error(`Submission failed: ${errorData.message || "Please try again."}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      notification.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center px-6 py-8 bg-violet-100 rounded-xl min-w-60 w-[686px] max-md:px-4 max-md:w-full max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <form onSubmit={handleSubmit} className="w-full text-base min-h-[699px] max-md:max-w-full max-md:min-h-auto">
          <fieldset className="w-full max-md:max-w-full">
            <DropdownField
              label="Tell us who you are"
              placeholder="I am.."
              value={formData.whoAmI}
              onChange={(value) => handleInputChange("whoAmI", value)}
              required
            />

            <div className="flex gap-8 items-start mt-8 w-full font-medium leading-snug text-neutral-800 max-md:max-w-full max-md:gap-4">
              <FormField
                label="Name"
                value={formData.name}
                onChange={(value) => handleInputChange("name", value)}
                required
                className="flex-1 shrink w-full basis-0 min-w-60 max-md:max-w-full max-md:min-w-0"
              />
            </div>

            <FormField
              label="Email"
              value={formData.email}
              onChange={(value) => handleInputChange("email", value)}
              required
              type="email"
              className="mt-8 w-full font-medium leading-snug text-neutral-800 max-md:max-w-full"
            />

            <FormField
              label="Organization"
              value={formData.organization}
              onChange={(value) => handleInputChange("organization", value)}
              required
              className="mt-8 w-full font-medium leading-snug text-neutral-800 max-md:max-w-full"
            />

            <PhoneField 
              value={formData.phone}
              onChange={(value) => handleInputChange("phone", value)}
            />

            <FormField
              label="State"
              value={formData.state}
              onChange={(value) => handleInputChange("state", value)}
              required
              className="mt-8 w-full font-medium leading-snug text-neutral-800 max-md:max-w-full"
              fieldClassName="rounded-xl"
            />
          </fieldset>

          <div className="flex flex-col mt-14 w-full text-white max-md:mt-6 max-md:max-w-full">
            <RecaptchaSection />
            <SubmitButton isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </div>
  );
}

export function WellnessContactForm() {
  return (
    <section className="flex flex-wrap gap-10 justify-center items-start py-24">
      <ContactFormHeader />
      <ContactFormFields />
    </section>
  );
}

export default WellnessContactForm; 