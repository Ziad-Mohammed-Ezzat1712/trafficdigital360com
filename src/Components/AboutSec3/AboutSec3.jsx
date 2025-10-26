import React, { useContext } from "react";
import { FaEye, FaTrophy, FaBullseye } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

export default function AboutSec3() {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  return (
    <>
      {/* ================= Desktop AboutSec3 ================= */}
      <section className="bg-black text-white py-16 px-4 text-center hidden md:block">
        <h1 className="text-[60px] font-bold mb-12 flex justify-center items-center gap-4">
          {isArabic ? "نؤمن في 3 كلمات:" : "believe in 3 words:"}
          <span className="relative h-[80px] overflow-hidden space-y-4 text-cyan-400 w-[300px] inline-block">
            <div className="animate-loop-words flex flex-col">
              <div className="h-[70px] flex items-center">
                {isArabic ? "الجودة" : "Quality"}
              </div>
              <div className="h-[70px] flex items-center">
                {isArabic ? "المرونة" : "Flexibility"}
              </div>
              <div className="h-[70px] flex items-center">
                {isArabic ? "الإبداع" : "Creativity"}
              </div>
              {/* التكرار متعمد */}
              <div className="h-[70px] flex items-center">
                {isArabic ? "الجودة" : "Quality"}
              </div>
              <div className="h-[70px] flex items-center">
                {isArabic ? "المرونة" : "Flexibility"}
              </div>
              <div className="h-[70px] flex items-center">
                {isArabic ? "الإبداع" : "Creativity"}
              </div>
              <div className="h-[70px] flex items-center">
                {isArabic ? "الجودة" : "Quality"}
              </div>
              <div className="h-[70px] flex items-center">
                {isArabic ? "المرونة" : "Flexibility"}
              </div>
              <div className="h-[70px] flex items-center">
                {isArabic ? "الإبداع" : "Creativity"}
              </div>
            </div>
          </span>
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white text-black rounded-lg p-6 flex-1 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_2px_20px_10px_rgba(32,218,228,0.5)] h-[400px] hover:h-[450px] overflow-hidden">
            <div className="flex justify-center items-center text-white text-3xl mb-4">
              <FaEye className="bg-[#20DAE4] w-14 h-14 p-3 rounded-full" />
            </div>
            <h2 className="text-cyan-400 text-[40px] font-semibold mb-3">
              {isArabic ? "رؤيتنا" : "Our Vision"}
            </h2>
            <p className="text-[20px] leading-relaxed">
              {isArabic
                ? "أن نكون واحدة من الشركات الرائدة في تطوير الأعمال عبر الإنترنت في منطقة الشرق الأوسط وأفريقيا، من خلال تقديم حلول شاملة بجودة عالية لعملائنا، وتوفير مسارات مهنية مميزة لموظفينا، وتحقيق أرباح لمساهمينا."
                : "To be one of the leading online business development companies in the MEA region offering state of the art quality turnkey solutions to our customers, developed careers to our employees and profits for our shareholders."}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-black rounded-lg p-6 flex-1 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_2px_20px_5px_rgba(32,218,228,0.5)] h-[400px] hover:h-[450px] overflow-hidden">
            <div className="flex justify-center items-center text-white text-3xl mb-4">
              <FaTrophy className="bg-[#20DAE4] w-14 h-14 p-3 rounded-full" />
            </div>
            <h2 className="text-cyan-400 text-[40px] font-semibold mb-3">
              {isArabic ? "الأهداف الرئيسية" : "Main Objectives"}
            </h2>
            <p className="text-[20px] leading-relaxed">
              {isArabic
                ? "العمل على تحقيق أكبر حصة من الجمهور الإلكتروني في الشرق الأوسط، والنمو المربح من خلال الابتكار والجودة والالتزام، وتقديم أعلى قيمة للعملاء والموردين والموظفين والمساهمين."
                : "To secure the largest online audience share in the Middle East, achieve profitable growth through innovation, quality and commitment, and deliver the highest value to customers, suppliers, employees and shareholders."}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-black rounded-lg p-6 flex-1 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_2px_20px_5px_rgba(32,218,228,0.5)] h-[400px] hover:h-[450px] overflow-hidden">
            <div className="flex justify-center items-center text-white text-3xl mb-4">
              <FaBullseye className="bg-[#20DAE4] w-14 h-14 p-3 rounded-full" />
            </div>
            <h2 className="text-cyan-400 text-[40px] font-semibold mb-3">
              {isArabic ? "مهمتنا" : "Our Missions"}
            </h2>
            <p className="text-[20px] leading-relaxed">
              {isArabic
                ? "تمكين الأفراد والشركات من خلال حلول تطوير أعمال عبر الإنترنت شاملة وقابلة للتوسع، يقدمها مستشارون محترفون يتمتعون بفهم عميق وواقعي لاحتياجات العملاء."
                : "To empower people and businesses with online business development solutions that are turnkey and scalable through professional knowledgeable consultants with deep and better understanding of our customers need."}
            </p>
          </div>
        </div>
      </section>

      {/* ================= Mobile AboutSec3 ================= */}
      <section className="text-white py-8 px-4 items-center text-center md:hidden block bg-gradient-to-b from-[#000000] via-[#033032] to-[#000000]">
        <h1 className="text-[24px] font-bold mb-8 text-center flex justify-between items-center gap-0 ml-4">
          {isArabic ? "نؤمن في 3 كلمات:" : "believe in 3 words:"}
          <span className="relative h-[60px] overflow-hidden space-y-4 text-cyan-400 w-[150px] inline-block">
            <div className="animate-loop-words flex flex-col">
              <div className="h-[70px] flex items-center">
                {isArabic ? "الجودة" : "Quality"}
              </div>
              <div className="h-[70px] flex items-center">
                {isArabic ? "المرونة" : "Flexibility"}
              </div>
              <div className="h-[70px] flex items-center">
                {isArabic ? "الإبداع" : "Creativity"}
              </div>
              {/* التكرار */}
              <div className="h-[70px] flex items-center">
                {isArabic ? "الجودة" : "Quality"}
              </div>
              <div className="h-[70px] flex items-center">
                {isArabic ? "المرونة" : "Flexibility"}
              </div>
              <div className="h-[70px] flex items-center">
                {isArabic ? "الإبداع" : "Creativity"}
              </div>
              <div className="h-[70px] flex items-center">
                {isArabic ? "الجودة" : "Quality"}
              </div>
              <div className="h-[70px] flex items-center">
                {isArabic ? "المرونة" : "Flexibility"}
              </div>
              <div className="h-[70px] flex items-center">
                {isArabic ? "الإبداع" : "Creativity"}
              </div>
            </div>
          </span>
        </h1>

        <div className="flex flex-col justify-center items-stretch gap-6 max-w-7xl mx-auto">
          {/* نفس الكروت بالترجمة */}
          <div className="bg-white text-black rounded-lg p-6 flex-1 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_2px_20px_10px_rgba(32,218,228,0.5)] h-[400px] hover:h-[450px] overflow-hidden">
            <div className="flex justify-center items-center text-white text-3xl mb-4">
              <FaEye className="bg-[#20DAE4] w-14 h-14 p-3 rounded-full" />
            </div>
            <h2 className="text-cyan-400 text-[40px] font-semibold mb-3">
              {isArabic ? "رؤيتنا" : "Our Vision"}
            </h2>
            <p className="text-[20px] leading-relaxed">
              {isArabic
                ? "أن نكون واحدة من الشركات الرائدة في تطوير الأعمال عبر الإنترنت في منطقة الشرق الأوسط وأفريقيا، من خلال تقديم حلول شاملة بجودة عالية لعملائنا، وتوفير مسارات مهنية مميزة لموظفينا، وتحقيق أرباح لمساهمينا."
                : "To be one of the leading online business development companies in the MEA region offering state of the art quality turnkey solutions to our customers, developed careers to our employees and profits for our shareholders."}
            </p>
          </div>

          <div className="bg-white text-black rounded-lg p-6 flex-1 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_2px_20px_5px_rgba(32,218,228,0.5)] h-[400px] hover:h-[450px] overflow-hidden">
            <div className="flex justify-center items-center text-white text-3xl mb-4">
              <FaTrophy className="bg-[#20DAE4] w-14 h-14 p-3 rounded-full" />
            </div>
            <h2 className="text-cyan-400 text-[40px] font-semibold mb-3">
              {isArabic ? "الأهداف الرئيسية" : "Main Objectives"}
            </h2>
            <p className="text-[20px] leading-relaxed">
              {isArabic
                ? "العمل على تحقيق أكبر حصة من الجمهور الإلكتروني في الشرق الأوسط، والنمو المربح من خلال الابتكار والجودة والالتزام، وتقديم أعلى قيمة للعملاء والموردين والموظفين والمساهمين."
                : "To secure the largest online audience share in the Middle East, achieve profitable growth through innovation, quality and commitment, and deliver the highest value to customers, suppliers, employees and shareholders."}
            </p>
          </div>

          <div className="bg-white text-black rounded-lg p-6 flex-1 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_2px_20px_5px_rgba(32,218,228,0.5)] h-[400px] hover:h-[450px] overflow-hidden">
            <div className="flex justify-center items-center text-white text-3xl mb-4">
              <FaBullseye className="bg-[#20DAE4] w-14 h-14 p-3 rounded-full" />
            </div>
            <h2 className="text-cyan-400 text-[40px] font-semibold mb-3">
              {isArabic ? "مهمتنا" : "Our Missions"}
            </h2>
            <p className="text-[20px] leading-relaxed">
              {isArabic
                ? "تمكين الأفراد والشركات من خلال حلول تطوير أعمال عبر الإنترنت شاملة وقابلة للتوسع، يقدمها مستشارون محترفون يتمتعون بفهم عميق وواقعي لاحتياجات العملاء."
                : "To empower people and businesses with online business development solutions that are turnkey and scalable through professional knowledgeable consultants with deep and better understanding of our customers need."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
