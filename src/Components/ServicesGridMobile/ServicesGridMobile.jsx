import React from "react";
import {
  FaBullseye,
  FaChartBar,
  FaFilm,
  FaChartLine,
  FaThumbsUp,
  FaClone,
} from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

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
          title="Social Media Ad Campaigns"
          subtitle="(Facebook, Instagram, TikTok, X, Snapchat)"
          description="We launch and optimize ad campaigns on top social platforms, targeting the right audience with the right message to drive traffic, engagement, and conversions."
          Icon={FaBullseye}
          full
        />

        {/* باقي الكروت 8 */}
        <ServiceCard
          title="Strategic Marketing Plan"
          subtitle=""
          description="We analyze competitors and market position to find opportunities, then craft tailored digital and offline strategies to achieve your business goals."
          Icon={FaChartBar}
        />
        <ServiceCard
          title="Studio & Media Production"
          subtitle=""
          description="We produce professional photos, videos, edits, and branded visual content tailored for digital platforms—helping your business stand out."
          Icon={FaFilm}
        />
        <ServiceCard
          title="Media Buying"
          subtitle="Smart Ad Budget Management"
          description="We manage your ad budget efficiently, choosing the best platforms and placements to maximize ROI."
          Icon={FaChartLine}
        />
        
        <ServiceCard
          title="Offline Marketing"
          subtitle="(Sponsorships – Exhibitions – Outdoor Banners)"
          description="We connect your brand with real audiences through offline marketing."
          Icon={FaClone}
        />
        <ServiceCard
          title="Marketing Campaign"
          subtitle=""
          description="We turn your marketing plan into high-performing content that drives real results."
          Icon={FaThumbsUp}
        />
        <ServiceCard
          title="Brand Identity"
          subtitle=""
          description="We build unique brand identities that make your business stand out."
          Icon={FaClone}
        />
        <ServiceCard
          title="Content Strategy"
          subtitle=""
          description="We plan your content to engage the right audience consistently."
          Icon={FaClone}
        />
        <ServiceCard
          title="Influencer Marketing"
          subtitle=""
          description="We connect you with influencers who align with your brand."
          Icon={FaClone}
        />
      </motion.div>

      {/* الزرار */}
      <div className="flex justify-center my-8">
         <Link to={"/request"}>
        <button className="bg-[#0f9ba3] flex items-center gap-x-2 cursor-pointer px-6 py-2 rounded-xl hover:bg-cyan-600">
          let’s connect <FiChevronRight className="mt-[1px]" />
        </button>
         </Link>
      </div>
    </div>
  );
}
