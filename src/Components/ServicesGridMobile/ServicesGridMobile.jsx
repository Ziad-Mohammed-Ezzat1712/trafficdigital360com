import React, { useContext } from "react";
import {
  FaBullseye,
  FaChartBar,
  FaFilm,
  FaChartLine,
  FaThumbsUp,
  FaClone,
  FaLaptop,
  FaMobileAlt,
  FaHandshake,
} from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext"; // ✅ استدعاء الكونتكست

// كارت الخدمة
const ServiceCard = ({ title, subtitle, description, Icon, full }) => {
  return (
    <div
      className={`group bg-gradient-to-r from-[#1a4547]/20 to-[#0B8B92]/20  
        text-white p-5 rounded-lg shadow-md transition-all duration-500 
        cursor-pointer flex flex-col justify-between 
        ${full ? "col-span-2" : ""}`}
    >
      {/* النصوص */}
      <div>
        <h3 className="text-[12px] text-left font-bold mb-1">{title}</h3>
        <p className="text-[13px] text-left font-medium mb-3">{subtitle}</p>
        <p
          className="text-[12px] text-left font-medium leading-relaxed pb-6 text-[#878787] 
          group-hover:text-white "
        >
          {description}
        </p>
      </div>

      {/* الأيقونة */}
      <div className="mt-3 flex justify-end border-t border-[#878787] py-1">
        <Icon className="text-[28px] transition-transform duration-500 group-hover:rotate-y-180 group-hover:text-[#00F2FF]" />
      </div>
    </div>
  );
};

export default function ServicesGridMobile() {
  const { language } = useContext(LanguageContext); // ✅ استخدام اللغة

  return (
    <div className="md:hidden block px-4 my-10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 gap-4"
      >
        {/* الكارت الأول بعرض كامل */}
        <ServiceCard
          title={
            language === "en"
              ? "Social Media Ad Campaigns"
              : "حملات إعلانات السوشيال ميديا"
          }
          subtitle={
            language === "en"
              ? "(Facebook, Instagram, TikTok, X, Snapchat)"
              : "(فيسبوك، إنستجرام، تيك توك، إكس، سناب شات)"
          }
          description={
            language === "en"
              ? "We launch and optimize ad campaigns on top social platforms, targeting the right audience with the right message to drive traffic, engagement, and conversions."
              : "نُطلق ونُحسن حملات الإعلانات على أفضل منصات التواصل، مستهدفين الجمهور المناسب بالرسالة الصحيحة لزيادة التفاعل والتحويلات."
          }
          Icon={FaBullseye}
          full
        />

        <ServiceCard
          title={
            language === "en"
              ? "Strategic Marketing Plan"
              : "خطة تسويق إستراتيجية"
          }
          subtitle={
            language === "en"
              ? "(Competitor Analysis + Marketing Roadmap)"
              : "(تحليل المنافسين + خارطة طريق تسويقية)"
          }
          description={
            language === "en"
              ? "We analyze competitors and market position to find opportunities, then craft tailored digital and offline strategies to achieve your business goals."
              : "نحلل المنافسين ووضع السوق لتحديد الفرص، ثم نضع استراتيجيات رقمية وغير رقمية مخصصة لتحقيق أهداف عملك."
          }
          Icon={FaChartBar}
        />

        <ServiceCard
          title={
            language === "en"
              ? "Studio & Media Production"
              : "الاستوديو والإنتاج الإعلامي"
          }
          description={
            language === "en"
              ? "We produce professional photos, videos, edits, and branded visual content tailored for digital platforms—helping your business stand out with strong visual storytelling and maximizing engagement across all channels."
              : "ننتج صورًا وفيديوهات احترافية ومحتوى بصري مميز للمنصات الرقمية، يساعد على تميز علامتك التجارية وزيادة التفاعل عبر جميع القنوات."
          }
          Icon={FaFilm}
        />

        <ServiceCard
          title={language === "en" ? "Media Buying" : "شراء الإعلانات"}
          subtitle={
            language === "en"
              ? "Smart Ad Budget Management"
              : "إدارة ذكية لميزانية الإعلانات"
          }
          description={
            language === "en"
              ? "We manage your ad budget efficiently, choosing the best platforms and placements to maximize ROI through smart buying and ongoing optimization."
              : "ندير ميزانية إعلاناتك بكفاءة، نختار المنصات والمواقع الأفضل لتحقيق أعلى عائد استثمار من خلال شراء ذكي وتحسين مستمر."
          }
          Icon={FaChartLine}
        />

        <ServiceCard
          title={language === "en" ? "Marketing Campaign" : "حملات تسويقية"}
          subtitle={
            language === "en"
              ? "(Reels – Social Posts – Calls – Engagement Pages)"
              : "(ريلز – منشورات – مكالمات – صفحات تفاعل)"
          }
          description={
            language === "en"
              ? "We turn your marketing plan into high-performing content: engaging Reels, professional posts, conversion-focused calls, and interactive engagement pages that drive real results."
              : "نحول خطتك التسويقية إلى محتوى فعّال: ريلز جذابة، منشورات احترافية، مكالمات موجهة للتحويل، وصفحات تفاعلية تحقق نتائج حقيقية."
          }
          Icon={FaThumbsUp}
        />

        <ServiceCard
          title={language === "en" ? "Offline Marketing" : "التسويق التقليدي"}
          subtitle={
            language === "en"
              ? "(Sponsorships – Exhibitions – Outdoor Banners)"
              : "(رعايات – معارض – لافتات خارجية)"
          }
          description={
            language === "en"
              ? "We connect your brand with real audiences through offline marketing—events, trade shows, and outdoor banners that boost visibility and trust."
              : "نربط علامتك التجارية بالجمهور الواقعي من خلال التسويق التقليدي — الفعاليات والمعارض والإعلانات الخارجية التي تعزز الظهور والثقة."
          }
          Icon={FaClone}
        />

        <ServiceCard
          title={language === "en" ? "CRM Solutions" : "حلول إدارة العملاء"}
          subtitle={
            language === "en"
              ? "Customer Relationship Management"
              : "إدارة علاقات العملاء"
          }
          description={
            language === "en"
              ? "We build and manage CRM systems that streamline communication, enhance customer experience, and boost repeat business through automation and data-driven strategies."
              : "نُنشئ وندير أنظمة CRM لتبسيط التواصل، وتحسين تجربة العملاء، وزيادة ولائهم من خلال الأتمتة والاستراتيجيات المعتمدة على البيانات."
          }
          Icon={FaHandshake}
        />

        <ServiceCard
          title={language === "en" ? "Web Development" : "تطوير المواقع"}
          subtitle={
            language === "en"
              ? "(UX/UI – SEO – Responsive)"
              : "(تجربة المستخدم – تحسين محركات البحث – تصميم متجاوب)"
          }
          description={
            language === "en"
              ? "We build responsive, user-friendly websites that reflect your brand identity and goals—optimized for UX/UI, mobile, speed, and SEO with the latest technologies."
              : "نصمم مواقع إلكترونية متجاوبة وسهلة الاستخدام تعكس هوية علامتك التجارية، محسّنة لتجربة المستخدم والسرعة وتحسين محركات البحث بأحدث التقنيات."
          }
          Icon={FaLaptop}
        />

        <ServiceCard
          title={
            language === "en"
              ? "E-Commerce Development"
              : "تطوير المتاجر الإلكترونية"
          }
          description={
            language === "en"
              ? "We build high-performing online stores with seamless payments, shipping integration, and full SEO to maximize conversions and boost sales—delivering a smooth shopping experience that grows your brand online."
              : "نُنشئ متاجر إلكترونية عالية الأداء مع تكامل للدفع والشحن وتحسين شامل لمحركات البحث، لتقديم تجربة شراء سلسة تُنمّي علامتك التجارية."
          }
          Icon={FaMobileAlt}
        />
      </motion.div>

      {/* الزرار */}
      <div className="flex justify-center my-8">
        <Link to={"/request"}>
          <button className="bg-[#086368] flex items-center gap-x-2 cursor-pointer px-6 py-2 rounded-xl hover:bg-[#005F6B]">
            {language === "en" ? "let’s connect" : "تواصل معنا"}{" "}
            <FiChevronRight className="mt-[1px]" />
          </button>
        </Link>
      </div>
    </div>
  );
}
