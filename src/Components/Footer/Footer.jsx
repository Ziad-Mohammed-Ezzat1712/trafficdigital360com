import React, { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import bgFooter from "../../assets/Images/bgFooter.webp";
import bgAbout from "../../../public/aboutbg.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSnapchat,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "/public/logo.webp";

export default function Footer() {
  const { language } = useContext(LanguageContext);

  const t = {
    en: {
      about:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      company: "Company",
      help: "Help",
      social: "Social",
      subscribeTitle: "Subscribe to Newsletter",
      emailPlaceholder: "Enter your email",
      subscribeBtn: "Subscribe",
      privacy: "Privacy Policy",
      home: "Home",
      aboutPage: "About",
      services: "Services",
      portfolio: "Portfolio",
      request: "Contact us",
      facebook:"Facebook",
      instagram:"Instagram",
      twitter:"Twitter",
      snapchat:"Snapchat",
      linkedin:"Linkedin",
    },
    ar: {
      about:
        "أميت مينيم موليـت نون ديسيرونت أولامكو، است سيت أليكا دولور دو أميت سينت. فيليت أوفيسيا كونسِكوات دويس إينيم فيليت موليـت.",
      company: "الشركة",
      help: "المساعدة",
      social: "التواصل الاجتماعي",
      subscribeTitle: "اشترك في النشرة البريدية",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      subscribeBtn: "اشترك",
      privacy: "سياسة الخصوصية",
      home: "الرئيسية",
      aboutPage: "من نحن",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      request: "اطلب عرض السعر",
       facebook:"فيس بوك",
       instagram:"انستجرام ",
       twitter:" تويتر",
       snapchat:" سناب شات",
       linkedin:" لينكدان",
    },
  };

  const text = t[language];

  return (
    <>
      {/* ================= Desktop Footer ================= */}
      <section
        className="relative md:block hidden  mx-auto bg-black text-white py-36 px-6 "
        style={{
          backgroundImage: `url(${bgAbout})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          {/* الشمال (لوجو + نص + سوشيال) */}
          <div className="space-y-6">
            <img src={logo} alt="Logo" className="h-12" />
            <p className="text-white text-[16px] text-sm leading-relaxed">
              {text.about}
            </p>
            <div className="flex items-center gap-4 text-xl">
              <a
                href="https://x.com/Traffic360eg"
                className="hover:text-[#1DA1F2]"
                target="_blank"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578198429753"
                className="hover:text-[#1877F2]"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/traffic360_digitalhub/"
                className="hover:text-pink-500"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.snapchat.com/add/traffic_digital?share_id=FaDHGIo1iKQ&locale=ar-EG"
                className="hover:text-[#efeb0f] flex gap-1 items-center"
                target="_blank"
              >
                <FaSnapchat />
              </a>
              <a
                href="https://www.linkedin.com/in/traffic-the-digital-hub-8560b636b/"
                className="hover:text-[#1693d6] flex gap-1 items-center"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[13px] uppercase text-[#A1A1AA] font-semibold mb-6">
              {text.company}
            </h3>
            <ul className="space-y-4 text-white text-[16px]">
              <li>
                <a href="/">{text.home}</a>
              </li>
              <li>
                <a href="/about">{text.aboutPage}</a>
              </li>
              <li>
                <a href="/services">{text.services}</a>
              </li>
              <li>
                <a href="/portfolio">{text.portfolio}</a>
              </li>
              <li>
                <a href="/request">{text.request}</a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-[13px] uppercase text-[#A1A1AA] font-semibold mb-6">
              {text.help}
            </h3>
            <ul className="space-y-4 text-white text-[16px]">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61578198429753"
                  className="hover:text-[#1877F2] flex gap-1 items-center"
                  target="_blank"
                >
                  <FaFacebookF />
                  {text.facebook}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/traffic360_digitalhub/"
                  className="hover:text-pink-500 flex gap-1 items-center"
                  target="_blank"
                >
                  <FaInstagram /> {text.instagram}
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Traffic360eg"
                  className="hover:text-[#1DA1F2] flex gap-1 items-center"
                  target="_blank"
                >
                  <FaTwitter /> {text.twitter}
                </a>
              </li>
              <li>
                <a
                  href="https://www.snapchat.com/add/traffic_digital?share_id=FaDHGIo1iKQ&locale=ar-EG"
                  className="hover:text-[#efeb0f] flex gap-1 items-center"
                  target="_blank"
                >
                  <FaSnapchat /> {text.snapchat}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/traffic-the-digital-hub-8560b636b/"
                  className="hover:text-[#1693d6] flex gap-1 items-center"
                  target="_blank"
                >
                  <FaLinkedinIn /> {text.linkedin}
                </a>
              </li>
              <li>
                <a href="#">{text.privacy}</a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-[13px] uppercase text-[#A1A1AA] font-semibold mb-6">
              {text.subscribeTitle}
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder={text.emailPlaceholder}
                className="w-full px-6 py-3 rounded-lg bg-white text-black focus:outline-none"
              />
              <button
                type="submit"
                className="w-32 cursor-pointer bg-[#008c96] hover:bg-[#005F6B] text-white px-4 py-3 rounded-lg transition"
              >
                {text.subscribeBtn}
              </button>
            </form>
          </div>
        </div>
       
      </section>

      {/* ================= Mobile Footer ================= */}
      <section className="relative md:hidden max-w-[1500px] mx-auto bg-gradient-to-b from-[#000000] via-[#043a3d] to-[#061318] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          {/* الشمال (لوجو + نص + سوشيال) */}
          <div className="space-y-6">
            <img src={logo} alt="Logo" className="h-12" />
            <p className="text-white text-[16px] text-sm leading-relaxed">
              {text.about}
            </p>
            <div className="flex items-center gap-4 text-xl">
              <a
                href="https://x.com/Traffic360eg"
                className="hover:text-[#1DA1F2]"
                target="_blank"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578198429753"
                className="hover:text-[#1877F2]"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/traffic360_digitalhub/"
                className="hover:text-pink-500"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.snapchat.com/add/traffic_digital?share_id=FaDHGIo1iKQ&locale=ar-EG"
                className="hover:text-[#efeb0f] flex gap-1 items-center"
                target="_blank"
              >
                <FaSnapchat />
              </a>
              <a
                href="https://www.linkedin.com/in/traffic-the-digital-hub-8560b636b/"
                className="hover:text-[#1693d6] flex gap-1 items-center"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[13px] uppercase text-[#A1A1AA] font-semibold mb-6">
              {text.company}
            </h3>
            <ul className="space-y-4 text-white text-[16px]">
              <li>
                <a href="/">{text.home}</a>
              </li>
              <li>
                <a href="/about">{text.aboutPage}</a>
              </li>
              <li>
                <a href="/services">{text.services}</a>
              </li>
              <li>
                <a href="/portfolio">{text.portfolio}</a>
              </li>
              <li>
                <a href="/request">{text.request}</a>
              </li>
            </ul>
          </div>

          {/* Help / Social */}
          <div>
            <h3 className="text-[13px] uppercase text-[#A1A1AA] font-semibold mb-6">
              {text.social}
            </h3>
            <ul className="space-y-4 text-white text-[16px]">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61578198429753"
                  className="hover:text-[#1877F2] flex gap-1 items-center"
                  target="_blank"
                >
                  <FaFacebookF /> {text.facebook}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/traffic360_digitalhub/"
                  className="hover:text-pink-500 flex gap-1 items-center"
                  target="_blank"
                >
                  <FaInstagram /> {text.instagram}
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Traffic360eg"
                  className="hover:text-[#1DA1F2] flex gap-1 items-center"
                  target="_blank"
                >
                  <FaTwitter /> {text.twitter}
                </a>
              </li>
              <li>
                <a
                  href="https://www.snapchat.com/add/traffic_digital?share_id=FaDHGIo1iKQ&locale=ar-EG"
                  className="hover:text-[#efeb0f] flex gap-1 items-center"
                  target="_blank"
                >
                  <FaSnapchat /> {text.snapchat}
                </a>
              </li>
               <li>
                <a
                  href="https://www.linkedin.com/in/traffic-the-digital-hub-8560b636b/"
                  className="hover:text-[#1693d6] flex gap-1 items-center"
                  target="_blank"
                >
                  <FaLinkedinIn /> {text.linkedin}
                </a>
              </li>
              <li>
                <a href="#">{text.privacy}</a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-[13px] uppercase text-[#A1A1AA] font-semibold mb-6">
              {text.subscribeTitle}
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder={text.emailPlaceholder}
                className="w-full px-6 py-3 rounded-lg bg-white text-black focus:outline-none"
              />
              <button
                type="submit"
                className="w-32 cursor-pointer bg-[#008c96] hover:bg-[#005F6B] text-white px-4 py-3 rounded-lg transition"
              >
                {text.subscribeBtn}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
