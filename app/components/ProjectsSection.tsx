"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Sprout - Agentic AI Personal Tutor",
    description:
      "AI learning platform that builds a personalised 3D knowledge graph and adaptive learning pathways from a student’s learning history, allowing exploration of connections between concepts using natural hand gestures.",
    buttonPrimary: "Watch Demo Video",
    buttonSecondary: "View Devpost",
    buttonSecondaryLink: "https://devpost.com/software/sprout-ydop7w?_gl=1*1lap4ag*_ga*MzAzNTc1ODM0LjE3NzA1Njg3NjI",
    video: "/hackeurope-demo-video.mp4",
    image: "/hackeurope-cover.jpeg",
    image2: "/hackeurope-cover2.jpeg",
    logo: "/hackeurope-logo.png",
    logoFill: true,
    position: "HackEurope 2026 Hackathon",
    tags: [
      "agentsdk",
      "ElevenLabs",
      "Claude",
      "OpenCV",
      "Next.js",
      "Python"
    ],
    category: ["Software Engineering", "Data Science"],
  },
  {
    title: "Zero-Fee Crypto Marketplace",
    description:
      "Web-based blockchain marketplace enabling zero-fee cross-border payments between small businesses and factories. Built on Plasma using USDT, with embedded Privy wallets and smart contract escrow for automated settlement.",
    buttonPrimary: "Watch Demo Video",
    buttonSecondary: "View GitHub",
    buttonSecondaryLink: "https://github.com/orlandoalexander/ethoxford-2026",
    video: "/eth-oxford-demo-video.mp4",
    image: "/eth-oxford-cover.jpg",
    image2: "/eth-oxford-cover2.jpg",
    logo: "/eth-oxford-logo.jpeg",
    logoFill: true,
    position: "ETHOxford 2026 Hackathon",
    tags: ["Plasma", "Flare Network", "Privy", "wagmi", "USDT", "Smart Contracts"],
    category: ["Software Engineering"],
  },
  {
    title: "ML Workflow & Simulation Studio",
    description:
      "Machine learning platform with drag-and-drop canvas to create video analysis workflows in under 5 mins. Deployed for Fortune Global 500 clients such as BMW and ABB for real-time detection of manufacturing anomalies.",
    buttonPrimary: "Watch Demo Video",
    video: "/visense-launch-video.mp4",
    image: "/visense-cover.png",
    image2: "/visense-cover2.png",
    logo: "/visense-logo.png",
    position: "Junior Software & ML Engineer",
    tags: ["React", "Axios", "Docker", "Material-UI", "AWS", "Nivo", "OpenCV"],
    category: ["Software Engineering"],
  },
  {
    title: "Tutor Management & Analytics Platform",
    description:
      "Data-driven platform for tutoring agency, automating scheduling, invoicing, and attendance analytics for 50+ students, saving 10 hours of administrative work weekly and significantly reducing operational errors.",
    buttonPrimary: "View Demo",
    buttonPrimaryLink: "https://educatchcharity-demo.netlify.app",
    buttonSecondary: "View GitHub",
    buttonSecondaryLink:
      "https://github.com/orlandoalexander/educatch/tree/main",
    image: "/educatch-cover.png",
    image2: "/educatch-cover2.png",
    logo: "/educatch-logo.png",
    position: "Full-Stack Software Engineer",
    tags: [
      "React",
      "React Query",
      "Flask (Python)",
      "MySQL",
      "GCP",
      "Docker",
    ],
    category: ["Software Engineering"],
  },
  {
    title: "Food Aid Insights Dashboard",
    description:
      "Interactive data visualisation dashboard processing 5,000 food aid voucher referrals across 100 fields, delivering 3 years of insights on regional demand, seasonal trends, and client return patterns to enable targeted aid allocation.",
    buttonPrimary: "Watch Demo Video",
    buttonSecondary: "View GitHub",
    buttonSecondaryLink: "https://github.com/jaslynlzy/CF_Final",
    video: "/cirencester-foodbank-demo-video.mp4",
    image: "/cirencester-foodbank-cover.png",
    image2: "/cirencester-foodbank-cover2.png",
    logo: "/cirencester-foodbank-logo.png",
    position: "Data Science Consultant",
    tags: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Streamlit (Python)",
    ],
    category: ["Data Science"],
  },
  {
    title: "Resource Management Platform",
    description:
      "Modern web app for volunteer training, improving data management and reducing onboarding time by 30%. Scalable solution rated 5/5 by client for 'exceeding expectations'.",
    buttonPrimary: "View Demo",
    buttonPrimaryLink: "https://everyfamily-demo.netlify.app",
    buttonSecondary: "View GitHub",
    buttonSecondaryLink:
      "https://github.com/orlandoalexander/everyFAMILY/tree/main",
    image: "/everyfamily-cover.png",
    image2: "/everyfamily-cover2.png",
    logo: "/everyfamily-logo.png",
    position: "Software Consultant",
    tags: ["React", "React Query", "HTML", "CSS", "Flask (Python)", "MySQL"],
    category: ["Software Engineering"],
  },
  {
    title: "AI-Powered Fashion Assistant",
    description:
      "Trained 9 CNN classifiers on 40,000 fashion images, achieving 70–95% accuracy identifying items of clothing. Integrated with ASOS API and KNN similarity model to recommend personalised outfits.",
    buttonPrimary: "Watch Demo Video",
    buttonSecondary: "View GitHub",
    buttonSecondaryLink:
      "https://github.com/orlandoalexander/Moda-Personal-Assistant/blob/master",
    video: "/le-wagon-demo-video.mp4",
    image: "/le-wagon-cover.png",
    image2: "/le-wagon-cover2.png",
    logo: "/le-wagon-logo.png",
    position: "Data Science Bootcamp",
    tags: [
      "TensorFlow",
      "Keras",
      "ResNet-50",
      "SciPy",
      "NumPy",
      "Streamlit (Python)",
    ],
    category: ["Data Science"],
  },
  // {
  //   title: "AI Customer Support Chatbot",
  //   description:
  //     "Letter published in the Times Educational Supplement, written in response to the cancellation of my GCSE exams due to COVID-19. I also wrote to my local MP, Mike Penning, and the then education secretary, Gavin Williamson, receiving encouraging responses from both.",
  //   buttonPrimary: "Read Article",
  //   buttonPrimaryLink:
  //     "https://www.tes.com/magazine/archive/dear-madam-letters-editor-10420",
  //   image: "/tes-cover.png",
  //   logo: "/tes-logo.png",
  //   position: "Correspondent",
  //   tags: [],
  //   category: ["Data Science", "Software Engineering"],
  // },
  {
    title: "Computer Vision Path Optimisation",
    description:
      "Computer vision system to automate pastry decoration, achieving 90% higher efficiency than manual methods. Implemented Canny edge detection, Hough transformations, and clustering algorithms for path optimisation.",
    buttonPrimary: "View Project on GitHub",
    buttonPrimaryLink:
      "https://github.com/orlandoalexander/Computer-Vision-Project-Inovo-Robotics-Internship/tree/main",
    image: "/inovo-cover.png",
    image2: "/inovo-cover2.png",
    logo: "/inovo-logo.png",
    position: "Computer Vision Engineer Intern",
    tags: ["Python", "OpenCV", "rospy", "mlrose"],
    category: ["Data Science"],
  },
  {
    title: "AI Video Doorbell & App",
    description:
      "AI-powered video doorbell and companion mobile app, awarded 97% for A Level Computer Science. Sends instant visitor notifications to mobile app, recongises familiar faces using computer vision, and enables remote interaction with guests.",
    buttonPrimary: "Read Report",
    file: "/orlando-alexander-nea-report.pdf",
    buttonSecondary: "View GitHub",
    buttonSecondaryLink:
      "https://github.com/orlandoalexander/Computer-Science-A-Level-NEA/tree/main",
    image: "/nea-cover.png",
    image2: "/nea-cover2.png",
    logo: "/berkhamsted-logo.png",
    position: "A Level Project",
    tags: [
      "OpenCV",
      "face_recognition (dlib)",
      "MQTT",
      "Flask (Python)",
      "Kivy (Python)",
    ],
    category: [
      "Research & Publications",
      "Software Engineering",
      "Data Science",
    ],
  },
  // {
  //   title: "Data Pipeline for Disease Analysis",
  //   description:
  //     "End-to-end data pipeline for Piura, Peru, integrating five years of weather, dengue incidence, census, and expenditure data into a single clean dataset, valued at $15,000 by the client. Enabled predictive analysis of dengue outbreaks and policy insights by standardising, cleaning, and merging multi-source public health and environmental data.",
  //   buttonPrimary: "View Project on Github",
  //   buttonPrimaryLink:
  //     "https://github.com/gr21038/180DCBristol-EcoSwell/blob/main",
  //   image: "/ecoswell-cover.png",
  //   logo: "/180dc-logo.png",
  //   position: "Data Science Advisor",
  //   tags: ["Raspberry Pi 4", "Enviro+ Sensor Board", "Python", "Cron Job"],
  //   category: ["Data Science"],
  // },
  {
    title: "IoT Environmental Data Logger",
    description:
      "Integrated monitoring system designed for remote fieldwork, capturing 10,000+ data points weekly across 8 key data types. Built on Raspberry Pi, with offline logging for automated reporting on UN SDG goals in remote conditions.",
    buttonPrimary: "View Project on Github",
    buttonPrimaryLink:
      "https://github.com/orlandoalexander/RaspberryPi-Multi-Sensor",
    image: "/ecoswell-cover.png",
    logo: "/ecoswell-logo.png",
    position: "Renewable Energy Intern",
    tags: ["Raspberry Pi 4", "Enviro+ Sensor Board", "Python", "Cron Job"],
    category: ["Data Science"],
  },
  {
    title: "Renewable Energy Data Analysis in Python",
    description:
      "Awarded 85% for university coursework analysing 20 years of renewable energy trends across the world. Examined regional growth, disparities in energy transition, and correlation between GDP and fossil fuel reliance.",
    buttonPrimary: "Read Paper",
    buttonPrimaryLink: "/orlando-alexander-renewable-energy-paper.pdf",
    image: "/renewable-energy-paper-cover.png",
    logo: "/bristol-logo.png",
    position: "BSc Data Science Student",
    tags: ["Python", "Pandas", "Numpy", "Matplotlib", "LaTeX"],
    category: ["Research & Publications"],
  },
  {
    title: "Urban Hydroelectric Generator",
    description:
      "Flow-optimised hydroelectric energy generator with server-controlled microcontrollers and custom 3D-printed components to maximise wastewater head and turbine efficiency. Awarded 100% in EPQ for novel solution.",
    buttonPrimary: "Read Report",
    file: "/orlando-alexander-epq-report.pdf",
    buttonSecondary: "View GitHub",
    buttonSecondaryLink:
      "https://github.com/orlandoalexander/EPQ-Hydroelectric-Generator-for-High-Rise-Buildings/tree/main",
    image: "/epq-cover.png",
    image2: "/epq-cover2.png",
    logo: "/berkhamsted-logo.png",
    position: "Extended Project Qualification Artefact",
    tags: ["Python", "MQTT", "RPi", "Raspberry Pi 4", "Pelton turbine"],
    category: ["Research & Publications"],
  },
  {
    title: "'School/Learning and the Brain'",
    description:
      "Research article written for Research at Berkhamsted Issue 5 on the future of AI and the impact of ChatGPT on education. In the article I explore the 'black box problem', how we legislate AI and advocate for AI literacy in the curriculum.",
    buttonPrimary: "Read Article",
    buttonPrimaryLink:
      "https://issuu.com/bsg1541/docs/research_publication_issue_5/21",
    image: "/berkhamsted-article-cover.png",
    logo: "/berkhamsted-logo.png",
    position: "Head Boy",
    tags: ["AI", "ChatGPT", "Education"],
    category: ["Research & Publications"],
  },
  {
    title: "'GCSEs won’t prepare me for the real world'",
    description:
      "Letter published in the Times Educational Supplement, written in response to the cancellation of my GCSE exams due to COVID-19. I also wrote to my local MP, Mike Penning, and the then education secretary, Gavin Williamson, receiving encouraging responses from both.",
    buttonPrimary: "Read Article",
    buttonPrimaryLink:
      "https://www.tes.com/magazine/archive/dear-madam-letters-editor-10420",
    image: "/tes-cover.png",
    logo: "/tes-logo.png",
    position: "Correspondent",
    tags: [],
    category: ["Research & Publications"],
  },
];

export default function ProjectsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeTab));

  return (
    <section className="py-4 px-8">
      <div className="max-w-[82rem] mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-center text-gray-900"
        >
          Featured Projects
        </motion.h2>
        <div className="flex justify-center mb-10">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {[
              "All",
              "Software Engineering",
              "Data Science",
              "Research & Publications",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${activeTab === tab
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeTab}-${project.title}`}
                initial={{ opacity: 0.4, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: (index % 2) * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={index < 4}
                    className="object-cover"
                  />
                  {project.image2 && (
                    <Image
                      src={project.image2}
                      alt={`${project.title} - alternate view`}
                      fill
                      loading="eager"
                      className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
                  {project.logo && (
                    <div
                      className={`absolute bottom-3 left-3 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-md flex items-center justify-center overflow-hidden ${project.logoFill ? "" : "bg-white p-3"
                        }`}
                    >
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        fill
                        className={`object-contain ${project.logoFill ? "" : "p-1"}`}
                      />
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {project.position}
                  </div>
                </div>

                <div className="flex flex-col justify-between p-4 h-56 md:h-52">
                  <div className="flex flex-wrap justify-between items-center mb-3 gap-2">
                    <h3 className="text-base md:text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          if (project.video) {
                            setActiveVideo(project.video); // show video popup
                          } else if (project.file) {
                            const link = document.createElement("a");
                            link.href = project.file;
                            link.download =
                              project.file.split("/").pop() || "download";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          } else {
                            window.open(project.buttonPrimaryLink, "_blank");
                          }
                        }}
                        className="px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                      >
                        {project.buttonPrimary}
                      </button>
                      {project.buttonSecondary && (
                        <button
                          onClick={() =>
                            window.open(project.buttonSecondaryLink, "_blank")
                          }
                          className="px-2 py-1 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
                        >
                          {project.buttonSecondary}
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="overflow-y-auto">
                    <p className="text-sm md:text-base text-gray-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-md bg-gray-100 text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 md:p-8"
          onClick={() => setActiveVideo(null)} // close when clicking outside
        >
          <video
            controls
            autoPlay
            className="w-full max-w-3xl h-auto max-h-[80vh] object-contain rounded-md shadow-lg"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking on video
          >
            <source src={activeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </section>
  );
}
