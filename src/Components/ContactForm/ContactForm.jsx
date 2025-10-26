import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgForm from "../../assets/Images/bgForm.PNG";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { LanguageContext } from "../../context/LanguageContext";

export default function ContactForm() {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  const [openCategory, setOpenCategory] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  // form states
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // errors
  const [errors, setErrors] = useState({});

  // success box
  const [successMessage, setSuccessMessage] = useState("");

  // التصنيفات والخيارات
  const categories = {
    "Business Consultant": [
      "Market Research & Analysis",
      "Business Strategy Development",
      "Brand Positioning",
      "Feasibility Studies",
      "Competitor Analysis",
      "Growth & Expansion Planning",
      "Financial Planning Support",
      "Business Model Innovation",
    ],
    "Digital Marketing": [
      "Social Media Marketing",
      "Content Marketing (Blogs, Articles, Copy writing)",
      "SEO (Search Engine Optimization)",
      "SEM (Search Engine Marketing – Google Ads)",
      "Email Marketing",
      "Influencer Marketing",
      "Online Reputation Management",
      "E-commerce Marketing",
      "Analytics & Performance Tracking",
      "Email Marketing",
    ],
    "Media Production": [
      "Photography (Product, Lifestyle, Corporate)",
      "Videography",
      "Motion Graphics",
      "Animation (2D/3D)",
      "Podcast Production",
      "Voice-over & Dubbing",
      "Post-production (Editing, Color Grading, Sound Design)",
      "Creative Direction",
    ],
    "Web Development": [
      "Website Design (UI/UX)",
      "Website Development (Front-end & Back-end)",
      "E-commerce Platforms",
      "Web Applications",
      "Landing Pages for Campaigns",
      "Website Maintenance & Support",
      "Hosting & Domain Services",
    ],
    "App Development": [
      "iOS App Development",
      "Android App Development",
      "Cross-platform Apps (Flutter, React Native)",
      "UI/UX Design for Apps",
      "App Testing & QA",
      "App Maintenance & Updates",
      "Integration with APIs & Databases",
      "App Store Optimization (ASO)",
    ],
  };

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSelectAll = (categoryOptions) => {
    const allSelected = categoryOptions.every((opt) =>
      selectedOptions.includes(opt)
    );
    if (allSelected) {
      setSelectedOptions(
        selectedOptions.filter((opt) => !categoryOptions.includes(opt))
      );
    } else {
      const newSelections = categoryOptions.filter(
        (opt) => !selectedOptions.includes(opt)
      );
      setSelectedOptions([...selectedOptions, ...newSelections]);
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email.trim()) newErrors.email = isArabic ? "الرجاء إدخال البريد الإلكتروني" : "Please enter your Email";
    if (!name.trim()) newErrors.name = isArabic ? "الرجاء إدخال الاسم" : "Please enter your Name";
    if (!telephone.trim()) newErrors.telephone = isArabic ? "الرجاء إدخال رقم الهاتف" : "Please enter your Phone Number";
    if (selectedOptions.length === 0) newErrors.needs = isArabic ? "الرجاء اختيار احتياج واحد على الأقل" : "Please select at least one need";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({ email, name, telephone, company, message, needs: selectedOptions });
      setSuccessMessage(isArabic ? "تم إرسال الطلب" : "Request Done");
      setTimeout(() => setSuccessMessage(""), 5000);

      setEmail("");
      setName("");
      setTelephone("");
      setCompany("");
      setMessage("");
      setSelectedOptions([]);
    }
  };

  return (
    <div
      className="rounded-2xl overflow-y-scroll md:overflow-y-hidden flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-12"
      style={{
        backgroundImage: `url(${bgForm})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full">
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className=" w-[25%] mx-auto mb-6 px-6 py-3 bg-[#055054] text-white text-center font-medium rounded-lg shadow-lg"
            >
              {successMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <form className="w-full bg-transparent p-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6 mb-6">
            <div className="md:flex justify-between space-y-8 md:space-y-0 gap-6 mb-8">
              <div className="md:w-1/3">
                <input
                  type="email"
                  placeholder={isArabic ? "البريد الإلكتروني" : "Email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none"
                />
                {errors.email && <p className="text-[#A3A3A3] text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="md:w-1/3">
                <input
                  type="text"
                  placeholder={isArabic ? "الاسم" : "Name"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none"
                />
                {errors.name && <p className="text-[#A3A3A3] text-sm mt-1">{errors.name}</p>}
              </div>
            </div>

            <div className="md:flex justify-between space-y-8 md:space-y-0 gap-6 mb-10">
              <div className="md:w-1/3">
                <input
                  type="tel"
                  placeholder={isArabic ? "رقم الهاتف" : "Telephone"}
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none"
                />
                {errors.telephone && <p className="text-[#A3A3A3] text-sm mt-1">{errors.telephone}</p>}
              </div>
              <input
                type="text"
                placeholder={isArabic ? "اسم الشركة" : "Company Name"}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="md:w-1/3 w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none"
              />
            </div>
          </div>

          {/* Needs Dropdown */}
          <div className="flex justify-center relative mb-20">
            <div className="w-full md:w-1/3 relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex justify-between items-center px-4 py-3 rounded-lg border border-gray-300 text-black bg-white focus:outline-none"
              >
                <span className="bg-white text-black">{isArabic ? "متطلبات" : "Requirements"}</span>
                <span className="ml-2 bg-white text-black text-xl">
                  {dropdownOpen ? (
                    <ArrowForwardIosIcon className="rotate-90 transform duration-700"  />
                  ) : (
                    <ArrowForwardIosIcon  />
                  )}
                </span>
              </button>
              {errors.needs && <p className="text-[#A3A3A3] text-sm mt-1">{errors.needs}</p>}

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    className="absolute text-black w-full mt-2 bg-white border rounded-lg shadow-lg z-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                  >
                    {Object.keys(categories).map((category) => (
                      <motion.div key={category} className="relative group" variants={itemVariants}>
                        <motion.button
                          type="button"
                          className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center ${openCategory === category ? "text-black font-semibold" : "text-gray-700"}`}
                          onClick={() => setOpenCategory(openCategory === category ? null : category)}
                          variants={itemVariants}
                        >
                          {category}
                          <span>
                            <ArrowForwardIosIcon className={`mt-[1px] ${language === "ar" ? "rotate-180" : ""}`} />
                          </span>
                        </motion.button>

                        <AnimatePresence>
                          {openCategory === category && (
                            <motion.div
                              initial={{ opacity: 0, x: 30 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 30 }}
                              transition={{ duration: 0.3 }}
                              className="relative md:absolute top-0 md:left-full ml-1 bg-white border rounded-lg shadow-lg w-64 p-3 z-50"
                            >
                              <motion.label className="flex items-center space-x-2 mb-3 font-semibold" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.2 }}>
                                <input
                                  type="checkbox"
                                  checked={categories[category].every((opt) => selectedOptions.includes(opt))}
                                  onChange={() => handleSelectAll(categories[category])}
                                  className="form-checkbox accent-[#8B8B8B]"
                                />
                                <span>{isArabic ? "تحديد الكل" : "Select All"}</span>
                              </motion.label>

                              {categories[category].map((option) => (
                                <motion.label key={option} className="flex items-center text-gray-700 space-x-2 mb-2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.2 }}>
                                  <input
                                    type="checkbox"
                                    checked={selectedOptions.includes(option)}
                                    onChange={() => handleOptionChange(option)}
                                    className="form-checkbox accent-[#8B8B8B]"
                                  />
                                  <span>{option}</span>
                                </motion.label>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Message */}
          <div className="flex justify-center mb-6">
            <textarea
              placeholder={isArabic ? "الرسالة" : "Message"}
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none"
            ></textarea>
          </div>

          {/* Send Button */}
          <div className="flex justify-center gap-3">
            <button type="submit" className="bg-[#086368] flex gap-2 text-white px-8 cursor-pointer py-2 rounded-lg hover:bg-[#005F6B] transition">
              <span className="text-[16px]">{isArabic ? "إرسال" : "Send"}</span>
              <div className="text-md mt-">
                <ArrowForwardIosIcon fontSize="small" className={`mt-[1px] ${language === "ar" ? "rotate-180" : ""}`} />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
