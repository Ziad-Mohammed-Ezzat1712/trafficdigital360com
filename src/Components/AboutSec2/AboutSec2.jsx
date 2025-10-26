import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // ✅ استدعاء الكونتكست

export default function AboutSec2() {
  const { language } = useContext(LanguageContext); // ✅ استخدام اللغة

  // ✅ النصوص باللغتين
  const subtitle =
    language === "en"
      ? "Welcome to Traffic 360 – Where Brands Accelerate"
      : "مرحبًا بكم في ترافيك 360 – حيث تتسارع العلامات التجارية";

  const title =
    language === "en"
      ? "We don’t just follow trends\nwe create momentum"
      : "نحن لا نتبع الاتجاهات فقط\nبل نصنع الزخم";

  const leftText =
    language === "en"
      ? "Founded in 2023, but powered by a team with over 7 years of solid experience in the marketing industry, we've quickly become one of the most talked-about names in the market — and for good reason."
      : "تأسست الشركة في عام 2023، ولكنها مدعومة بفريق يمتلك أكثر من 7 سنوات من الخبرة الراسخة في مجال التسويق، مما جعلنا بسرعة من أكثر الأسماء التي يتحدث عنها السوق — ولأسباب وجيهة.";

  const rightText =
    language === "en"
      ? "From the heart of Cairo, we've delivered impactful campaigns for clients across Egypt, Saudi Arabia, Dubai, and the UAE, building a reputation for excellence, speed, and creativity. Whether you're a startup looking to break into the market or an established brand aiming for the next level — Traffic 360 is your full-circle marketing partner."
      : "من قلب القاهرة، قدمنا حملات مؤثرة لعملاء في مصر، السعودية، دبي، والإمارات، وبنينا سمعة قائمة على التميز والسرعة والإبداع. سواء كنت شركة ناشئة تبحث عن الانطلاق في السوق أو علامة تجارية راسخة تطمح للمستوى التالي — فإن ترافيك 360 هي شريكك التسويقي الشامل.";

  return (
    <>
      {/* ================= Desktop AboutSec2 ================= */}
      <section className="hidden md:block bg-black container mx-auto text-white py-20">
        <div className="max-w-8xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* LEFT COLUMN */}
            <div className="space-y-8">
              <p className="text-[#1BD1DB] font-bold text-[28px]">{subtitle}</p>

              <h1 className="text-white font-extrabold text-[49px] leading-tight tracking-tight">
                {title.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <p className="text-[#AAAAAA] max-w-3xl text-[24px]">{leftText}</p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="pt-6 md:pt-12">
              <p className="text-[#AAAAAA] max-w-2xl text-[24px] leading-relaxed">
                {rightText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Mobile AboutSec2 ================= */}
      <section className="md:hidden block bg-black container mx-auto text-white py-20">
        <div className="max-w-8xl mx-auto px-2">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-[#1BD1DB] text-center font-bold text-[16px]">
                {subtitle}
              </p>

              <h1 className="text-white text-center font-extrabold text-[14px] leading-tight tracking-tight">
                {language === "en"
                  ? "We don’t just follow trends we create momentum"
                  : "نحن لا نتبع الاتجاهات فقط، بل نصنع الزخم"}
              </h1>

              <p className="text-[#AAAAAA] text-center max-w-2xl text-[14px]">
                {language === "en"
                  ? "From the heart of Cairo, we've delivered impactful campaigns for clients across Egypt, Saudi Arabia, Dubai, and the UAE, building a reputation for excellence, speed, and creativity. Whether you're a startup looking to break into the market or an established brand aiming for the next level — Traffic 360 is your full-circle marketing partner."
                  : "من قلب القاهرة، قدمنا حملات مؤثرة لعملاء في مصر، السعودية، دبي، والإمارات، وبنينا سمعة قائمة على التميز والسرعة والإبداع. سواء كنت شركة ناشئة تبحث عن الانطلاق في السوق أو علامة تجارية راسخة تطمح للمستوى التالي — فإن ترافيك 360 هي شريكك التسويقي الشامل."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
