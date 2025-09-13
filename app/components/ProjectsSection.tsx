"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Tutor Management & Analytics Platform",
    description:
      "Data-driven platform automating scheduling, invoicing, and performance reporting for 50+ tutors, cutting operational errors by 20% and saving 10+ hours of administrative work weekly.",
    buttonPrimary: "View Demo",
    buttonPrimaryLink: "https://educatchcharity-demo.netlify.app",
    buttonSecondary: "View GitHub",
    buttonSecondaryLink:
      "https://github.com/orlandoalexander/educatch/tree/main",
    image: "/educatch-cover.png",
    image2: "/educatch-cover2.png",
    logo: "/educatch-logo.png",
    position: "Software Developer",
    tags: [
      "React 18",
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
      "Interactive dashboard processing 5,000 records spanning 3 years of food aid voucher referrals across 100 parameters, delivering insights on regional demand, seasonal trends, and client return patterns to drive targeted aid allocation.",
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
    title: "ML Workflow & Simulation Studio",
    description:
      "Machine learning platform powering real-time detection of machine anomalies for BMW Group, ABB, and SIG. Features a drag-and-drop interface to build and simulate complex video and sensor analysis workflows. Contact for demo login.",
    buttonPrimary: "Watch Demo Video",
    video: "/visense-launch-video.mp4",
    image: "/visense-cover.png",
    image2: "/visense-cover2.png",
    logo: "/visense-logo.png",
    position: "Junior Software Engineer",
    tags: ["React", "Docker", "Material-UI", "AWS", "TensorFlow", "OpenCV"],
    category: ["Software Engineering"],
  },
  {
    title: "Resource Management Platform",
    description:
      "Responsive web portal for volunteer training, enabling organised data management and reducing training time by 30%. Client rated project deliverables 5/5, stating it 'exceeded expectations.'",
    buttonPrimary: "View Demo",
    buttonPrimaryLink: "https://everyfamily-demo.netlify.app",
    buttonSecondary: "View GitHub",
    buttonSecondaryLink:
      "https://github.com/orlandoalexander/everyFAMILY/tree/main",
    image: "/everyfamily-cover.png",
    image2: "/everyfamily-cover2.png",
    logo: "/everyfamily-logo.png",
    position: "Software Consultant",
    tags: [
      "React 19",
      "React Query",
      "Flask (Python)",
      "MySQL",
      "GCP",
      "Docker",
    ],
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
  {
    title: "Computer Vision Path Optimisation",
    description:
      "Computer vision system designed to automate and optimise the decoration of bakery goods. Decorating 6 buns in just 20 seconds (compared to the 3–5 minutes for a skilled baker) the system achieves up to 90% greater efficiency.",
    buttonPrimary: "View Project on GitHub",
    buttonPrimaryLink:
      "https://github.com/orlandoalexander/Computer-Vision-Project-Inovo-Robotics-Internship/tree/main",
    image: "/inovo-cover.png",
    image2: "/inovo-cover2.png",
    logo: "/inovo-logo.png",
    position: "Computer Vision Intern",
    tags: ["Python", "OpenCV", "rospy", "mlrose", "Canny edge detection"],
    category: ["Data Science"],
  },
  {
    title: "AI-Driven Video Doorbell & App",
    description:
      "AI-powered video doorbell and companion mobile app, awarded 97% for A Level Computer Science. Sends instant visitor notifications through app, recongises familiar faces using computer vision, and enables remote interaction with visitors.",
    buttonPrimary: "Download Report",
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
  {
    title: "IoT Environmental Data Logger",
    description:
      "Multi-sensor monitoring device designed for remote fieldwork, capturing 10,000+ data points weekly across 8 key data types. Built with Raspberry Pi, featuring offline logging and automated digital reporting for UN SDG climate reporting.",
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
    title: "Urban Hydroelectric Generator",
    description:
      "Flow-optimised high-rise wastewater energy generator with server-controlled microcontrollers, sensors, and custom 3D-printed components to maximise water head and turbine efficiency. Awarded 100% for novel energy solution.",
    buttonPrimary: "Download Report",
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
      "Letter published in the Times Educational Supplement, written in response to the cancellation of my GCSE exams due to COVID-19. I also wrote to my local MP, Mike Penning, and the then education secretary, Gavin Williamson, receiving an encouraging response from both.",
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
  const [activeVideo, setActiveVideo] = useState(null); // track video project
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeTab));

  return (
    <section className="py-10 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-gray-900"
        >
          Featured Projects
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            "All",
            "Software Engineering",
            "Data Science",
            "Research & Publications",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md font-medium transition text-sm sm:text-base ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              className="group relative bg-white rounded-xl overflow-hidden backdrop-blur-sm border border-gray-200 shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    project.image2 ? "group-hover:opacity-0" : ""
                  }`}
                />
                {project.image2 && (
                  <Image
                    src={project.image2}
                    alt={`${project.title} - alternate view`}
                    fill
                    className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent" />
                {project.logo && (
                  <div className="absolute bottom-2 left-2 w-10 h-10 md:w-16 md:h-16 rounded-full bg-white p-1 md:p-2 shadow-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={40}
                      height={40}
                      className="object-contain md:w-14 md:h-14"
                    />
                  </div>
                )}

                <div className="absolute bottom-3 right-2 bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded block">
                  {project.position}
                </div>
              </div>

              <div className="flex flex-col justify-between p-4 h-52 md:h-48">
                <div className="flex flex-wrap justify-between items-center mb-3 gap-2">
                  <h3 className="text-base md:text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        if (project.video) {
                          setActiveVideo(project); // show video popup
                        } else if (project.file) {
                          const link = document.createElement("a");
                          link.href = project.file;
                          link.download = project.file.split("/").pop(); // gets the filename
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        } else {
                          window.open(project.buttonPrimaryLink, "_blank");
                        }
                      }}
                      className="px-2 py-1 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200"
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
                        className="text-sm px-3 py-1 rounded-full bg-blue-50 text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
            <source src={activeVideo.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </section>
  );
}
