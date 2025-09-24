import React from "react";
import { FaBullseye, FaChartBar, FaFilm, FaChartLine, FaThumbsUp, FaClone } from "react-icons/fa";

const ServiceCard = ({ title, subtitle, description, Icon }) => {
  return (
    <div
      className="group   bg-gradient-to-r from-[#1a4547]/20 to-[#0B8B92]/20  text-white p-6 rounded-lg shadow-md transition-all duration-500 
                   cursor-pointer flex flex-col justify-between "
    >
      {/* النصوص */}
      <div className="">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm font-semibold mb-4 ">{subtitle}</p>
        <p className="text-md  leading-relaxed border-b pb-10 text-[#878787]  group-hover:text-white group-hover:border-[#878787]">{description}</p>
      </div>

      {/* الأيقونة */}
      <div className="mt-4 flex justify-end">
        <Icon
          className="text-2xl transition-transform duration-500 group-hover:rotate-y-180"
        />
      </div>
    </div>
  );
};

export default function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6 text-left">
      <ServiceCard
        title="Social Media Ad Campaigns"
        subtitle="(Facebook, Instagram, TikTok, X, Snapchat)"
        description="We launch and optimize ad campaigns on top social platforms, targeting the right audience with the right message to drive traffic, engagement, and conversions."
        Icon={FaBullseye}
      />
      <ServiceCard
        title="Strategic Marketing Plan"
        subtitle="(Competitor Analysis + Marketing Roadmap)"
        description="We analyze competitors and market position to find opportunities, then craft tailored digital and offline strategies to achieve your business goals."
        Icon={FaChartBar}
      />
      <ServiceCard
        title="Studio & Media Production"
        subtitle=""
        description="We produce professional photos, videos, edits, and branded visual content tailored for digital platforms—helping your business stand out with strong visual storytelling and maximizing engagement across all channels."
        Icon={FaFilm}
      />
      <ServiceCard
        title="Media Buying"
        subtitle="Smart Ad Budget Management"
        description="We manage your ad budget efficiently, choosing the best platforms and placements to maximize ROI through smart buying and ongoing optimization."
        Icon={FaChartLine}
      />
      <ServiceCard
        title="Marketing Campaign"
        subtitle="(Reels – Social Posts – Calls – Engagement Pages)"
        description="We turn your marketing plan into high-performing content: engaging Reels, professional posts, conversion-focused calls, and interactive engagement pages that drive real results."
        Icon={FaThumbsUp}
      />
      <ServiceCard
        title="Offline Marketing"
        subtitle="(Sponsorships – Exhibitions – Outdoor Banners)"
        description="We connect your brand with real audiences through offline marketing—events, trade shows, and outdoor banners that boost visibility and trust."
        Icon={FaClone}
      />
      <ServiceCard
        title="Offline Marketing"
        subtitle="(Sponsorships – Exhibitions – Outdoor Banners)"
        description="We connect your brand with real audiences through offline marketing—events, trade shows, and outdoor banners that boost visibility and trust."
        Icon={FaClone}
      />
      <ServiceCard
        title="Offline Marketing"
        subtitle="(Sponsorships – Exhibitions – Outdoor Banners)"
        description="We connect your brand with real audiences through offline marketing—events, trade shows, and outdoor banners that boost visibility and trust."
        Icon={FaClone}
      />
      <ServiceCard
        title="Offline Marketing"
        subtitle="(Sponsorships – Exhibitions – Outdoor Banners)"
        description="We connect your brand with real audiences through offline marketing—events, trade shows, and outdoor banners that boost visibility and trust."
        Icon={FaClone}
      />
    </div>
  );
}
