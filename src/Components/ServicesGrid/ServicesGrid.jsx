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
import { LanguageContext } from "../../Context/LanguageContext";

// الكارت
const ServiceCard = ({ title, subtitle, description, Icon }) => {
  return (
    <div
      className="group bg-gradient-to-r from-[#1a4547]/20 to-[#0B8B92]/20  
                 text-white p-6 rounded-lg shadow-md transition-all duration-500 
                 cursor-pointer flex flex-col justify-between"
    >
      {/* النصوص */}
      <div>
        <h3 className="text-[24px] font-bold mb-1">{title}</h3>
        <p className="text-[14px] font-medium mb-4">{subtitle}</p>
        <p
          className="text-[14px] font-medium leading-relaxed border-b pb-10 text-[#878787] 
                      group-hover:text-white group-hover:border-[#878787]"
        >
          {description}
        </p>
      </div>

      {/* الأيقونة */}
      <div className="mt-4 flex justify-end">
        <Icon className="text-[32px] transition-transform duration-500 group-hover:rotate-y-180 group-hover:text-[#00F2FF]" />
      </div>
    </div>
  );
};

export default function ServicesGrid() {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  return (
    <>
      {/* الصف الأول */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-6 text-left my-8"
      >   
        <ServiceCard
          title={
            isArabic
              ? "حملات الإعلانات على وسائل التواصل الاجتماعي"
              : "Social Media Ad Campaigns"
          }
          subtitle={
            isArabic
              ? "(فيسبوك، إنستجرام، تيك توك، إكس، سناب شات)"
              : "(Facebook, Instagram, TikTok, X, Snapchat)"
          }
          description={
            isArabic
              ? "نطلق ونحسّن حملات الإعلانات على أهم المنصات الاجتماعية، مستهدفين الجمهور المناسب بالرسالة الصحيحة لزيادة الزيارات والمشاركة والتحويلات."
              : "We launch and optimize ad campaigns on top social platforms, targeting the right audience with the right message to drive traffic, engagement, and conversions."
          }
          Icon={FaBullseye}
        />
        <ServiceCard
          title={
            isArabic
              ? "خطة التسويق الاستراتيجية"
              : "Strategic Marketing Plan"
          }
          subtitle={
            isArabic
              ? "(تحليل المنافسين + خريطة طريق تسويقية)"
              : "(Competitor Analysis + Marketing Roadmap)"
          }
          description={
            isArabic
              ? "نحلل المنافسين وموقعك في السوق لتحديد الفرص، ثم نصمم استراتيجيات رقمية وتقليدية مخصصة لتحقيق أهداف عملك."
              : "We analyze competitors and market position to find opportunities, then craft tailored digital and offline strategies to achieve your business goals."
          }
          Icon={FaChartBar}
        />
        <ServiceCard
          title={isArabic ? "الإنتاج الإعلامي والاستوديو" : "Studio & Media Production"}
          subtitle=""
          description={
            isArabic
              ? "نُنتج صورًا وفيديوهات احترافية ومحتوى بصري مخصص للمنصات الرقمية، مما يساعد علامتك التجارية على التميز من خلال سرد بصري قوي وزيادة التفاعل عبر جميع القنوات."
              : "We produce professional photos, videos, edits, and branded visual content tailored for digital platforms—helping your business stand out with strong visual storytelling and maximizing engagement across all channels."
          }
          Icon={FaFilm}
        />
      </motion.div>

      {/* الصف الثاني */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-6 text-left my-8"
      >
        <ServiceCard
          title={isArabic ? "الشراء الإعلامي" : "Media Buying"}
          subtitle={isArabic ? "إدارة ذكية لميزانية الإعلانات" : "Smart Ad Budget Management"}
          description={
            isArabic
              ? "ندير ميزانيتك الإعلانية بكفاءة، ونختار أفضل المنصات والمواقع لتحقيق أقصى عائد من خلال الشراء الذكي والتحسين المستمر."
              : "We manage your ad budget efficiently, choosing the best platforms and placements to maximize ROI through smart buying and ongoing optimization."
          }
          Icon={FaChartLine}
        />
        <ServiceCard
          title={isArabic ? "الحملات التسويقية" : "Marketing Campaign"}
          subtitle={
            isArabic
              ? "(ريلز – منشورات – مكالمات – صفحات تفاعلية)"
              : "(Reels – Social Posts – Calls – Engagement Pages)"
          }
          description={
            isArabic
              ? "نحول خطتك التسويقية إلى محتوى عالي الأداء: ريلز جذابة، منشورات احترافية، مكالمات موجهة للتحويل، وصفحات تفاعلية تحقق نتائج حقيقية."
              : "We turn your marketing plan into high-performing content: engaging Reels, professional posts, conversion-focused calls, and interactive engagement pages that drive real results."
          }
          Icon={FaThumbsUp}
        />
        <ServiceCard
          title={isArabic ? "التسويق غير الإلكتروني" : "Offline Marketing"}
          subtitle={
            isArabic ? "(رعايات – معارض – لافتات خارجية)" : "(Sponsorships – Exhibitions – Outdoor Banners)"
          }
          description={
            isArabic
              ? "نربط علامتك التجارية بجمهورك الواقعي من خلال التسويق الميداني — مثل الفعاليات والمعارض واللافتات الخارجية لتعزيز الوعي والثقة."
              : "We connect your brand with real audiences through offline marketing—events, trade shows, and outdoor banners that boost visibility and trust."
          }
          Icon={FaClone}
        />
      </motion.div>

      {/* الصف الثالث */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-6 text-left my-8"
      >
        <ServiceCard
          title={isArabic ? "حلول إدارة علاقات العملاء (CRM)" : "CRM Solutions"}
          subtitle={isArabic ? "إدارة تواصل العملاء" : "Customer Relationship Management"}
          description={
            isArabic
              ? "نصمم وندير أنظمة CRM تساعدك على تحسين التواصل، وتعزيز تجربة العملاء، وزيادة المبيعات المتكررة عبر الأتمتة والتحليل الذكي."
              : "We build and manage CRM systems that streamline communication, enhance customer experience, and boost repeat business through automation and data-driven strategies."
          }
          Icon={FaHandshake}
        />
        <ServiceCard
          title={isArabic ? "تطوير المواقع الإلكترونية" : "Web Development"}
          subtitle={
            isArabic ? "(مواقع متجاوبة وسريعة التحميل)" : "(Responsive, Fast & SEO-Optimized Websites)"
          }
          description={
            isArabic
              ? "نُنشئ مواقع متجاوبة وسهلة الاستخدام تعكس هوية علامتك التجارية وأهدافك — مُحسّنة لتجربة المستخدم، السرعة، والأداء باستخدام أحدث التقنيات."
              : "We build responsive, user-friendly websites that reflect your brand identity and goals—optimized for UX/UI, mobile, speed, and SEO with the latest technologies."
          }
          Icon={FaLaptop}
        />
        <ServiceCard
          title={isArabic ? "تطوير المتاجر الإلكترونية" : "E-Commerce Development"}
          subtitle=""
          description={
            isArabic
              ? "نُنشئ متاجر إلكترونية عالية الأداء بدمج الدفع والشحن والتحسين لمحركات البحث — لتجربة تسوق سلسة تزيد المبيعات وتنمي علامتك التجارية عبر الإنترنت."
              : "We build high-performing online stores with seamless payments, shipping integration, and full SEO to maximize conversions and boost sales—delivering a smooth shopping experience that grows your brand online."
          }
          Icon={FaMobileAlt}
        />
      </motion.div>

      {/* الزرار */}
      <div className="flex justify-center my-12">
        <div className="md:flex items-center space-x-4">
          <Link to="/request">
            <button className="bg-[#086368] flex items-center gap-x-2 cursor-pointer px-6 py-2 rounded-xl hover:bg-[#005F6B]">
              {isArabic ? "تواصل معنا" : "Let’s connect"}{" "}
              <FiChevronRight  className={`mt-[1px] ${language === "ar" ? "rotate-180" : ""}`} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
