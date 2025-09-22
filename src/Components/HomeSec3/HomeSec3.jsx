import { motion } from "framer-motion";
import { FiSmile, FiAward, FiMonitor } from "react-icons/fi"; // أيقونات استروك
export default function HomeSec3() {

  const stats = [
    {
      icon: <FiSmile size={60} strokeWidth={1.5} />,
      number: "30+",
      text: "Satisfied clients around the worldwide.",
    },
    {
      icon: <FiAward size={60} strokeWidth={1.5} />,
      number: "150+",
      text: "Good award wining digital media agency",
    },
    {
      icon: <FiMonitor size={60} strokeWidth={1.5} />,
      number: "28+",
      text: "successful projects completed in one year",
    },
  ];
  return (
    <>
    <section className="h-auto my-15 grid md:grid-cols-2 text-white relative  container mx-auto">
      {/* Left Side */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }} 
        className="flex flex-col justify-center  font-bold px-8 md:px-32 space-y-6 bg-cover bg-center"
      >
        <h1 className="text-5xl ">We are Creative</h1>
        <h1 className="text-5xl ">bold digital agency</h1>
        <h1 className="text-5xl">
  based in{" "}
  <span
    className="bg-[url('/src/assets/bg.png')] bg-cover bg-center rounded-full  "
  >
    Egypt
  </span>
</h1>

      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative"
      >
       <div className="flex items-center space-x-6 bg-black text-white p-6 rounded-lg">
  {/* الدائرة */}
  <div className="w-48 h-48 bg-[#0F9BA3] rounded-full flex items-center justify-center">
    <span className="text-7xl font-bold">3+</span>
  </div>

  {/* النصوص */}
  <div className="max-w-sm">
    <h3 className="text-xl font-semibold">years of experience</h3>
    <p className="text-gray-300 text-[20px] mt-2 leading-relaxed">
      we are dedicated to providing outstanding digital and design services
      meet the functional and aesthetics.
    </p>
  </div>
</div>

      </motion.div>


    </section>

     <section className="bg-black text-white max-w-5xl mx-auto py-16">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 ">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col  space-y-3"
          >
            <div className="text-white flex  gap-x-3 justify-start">
  {stat.icon} 
  <h3 className="text-xl font-semibold">{stat.number}</h3>
</div>

           
            <p className="text-gray-300 max-w-md text-[20px]">{stat.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </>
  );
}
