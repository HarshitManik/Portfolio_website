interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<void> {
  // Get EmailJS configuration from environment variables
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || process.env.EMAILJS_SERVICE_ID || "default_service";
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID || "default_template";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || process.env.EMAILJS_PUBLIC_KEY || "default_key";

  // Load EmailJS dynamically
  const emailjs = await import("@emailjs/browser");
  
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject || "Contact Form Submission",
    message: data.message,
    to_name: "Harshit Manik",
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email");
  }
}
