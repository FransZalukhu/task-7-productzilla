import React, { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="w-full px-4 py-16" style={{ backgroundColor: "#F3F3E0" }}>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ color: "#133E87" }}
        >
          Send Me a Message
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 mb-2"
              style={{ color: "#133E87" }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ borderColor: "#CBDCEB" }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 mb-2"
              style={{ color: "#133E87" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ borderColor: "#CBDCEB" }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 mb-2"
              style={{ color: "#133E87" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ borderColor: "#CBDCEB" }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md transition duration-300 bg-[#F96E2A] text-white border-2 border-[#F96E2A] hover:bg-transparent hover:text-[#F96E2A] hover:border-[#F96E2A]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
