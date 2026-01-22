import { motion } from "framer-motion";
import { Send } from "lucide-react";
const ContactSection = () => {
  const accessKey = import.meta.env.VITE_ACCESS_KEY;
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      formData.append("access_key", accessKey);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        e.target.reset();
        alert("Message sent successfully!");
      } else {
        alert("There was an error sending your message.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id='Contact' className="relative z-10 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Get In <span className="text-indigo-400">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base max-w-md mx-auto"
          >
            Have a project in mind or just want to say hi? Feel free to drop a
            message!
          </motion.p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-gray-300 text-sm font-medium ml-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Subham Chakraborty"
                  name="name"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-300 text-sm font-medium ml-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="example@mail.com"
                  name="email"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-300 text-sm font-medium ml-2">
                How can I help?
              </label>
              <textarea
                required
                rows="5"
                placeholder="Tell me about your project..."
                name="description"
                className="bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600 resize-none"
              />
            </div>

            <motion.div
              className="flex justify-center md:justify-end mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                className="group flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-indigo-500/20"
              >
                Send Message
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
