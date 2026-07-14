import Image from "next/image";
import Button from "./Button";
import { Person } from "../../public/images";
import Link from "next/link";

const highlights = [
  { title: "Research & Systems", value: "Computer Vision & IoT" },
  { title: "Applied AI / ML", value: "PyTorch & CoreML models" },
  { title: "Next-gen Apps", value: "Swift, Python, & C++ Control" },
];

const techStack = [
  "Swift / SwiftUI",
  "Python (PyTorch / Flask)",
  "C++ (Arduino / ROS)",
  "Java",
  "IoT & Microcontrollers",
  "Computer Vision & GPS Navigation",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden rounded-2xl border border-zinc-200/50 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-md px-6 py-16 transition-all duration-300 md:px-12">
      <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-indigo-400/5 dark:bg-indigo-500/5 blur-3xl" />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Content */}
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl">
              Engineering autonomous systems & data-informed solutions.
            </h2>
          </div>

          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 transition-colors">
            I am a Software and Machine Learning Engineer currently studying Informatics Engineering 
            at Universitas Maritim Raja Ali Haji. Active as a Google Student Ambassador 2025 and 
            an Apple Developer Academy Graduate (Cohort 2025), I love developing real-world, 
            intelligent systems from autonomous boat controllers to server-side AI applications.
          </p>

          {/* Highlights Grid */}
          <div className="grid gap-4 rounded-xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/20 p-6 sm:grid-cols-3 transition-colors">
            {highlights.map(({ title, value }) => (
              <div key={title} className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {title}
                </p>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 transition-colors">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack List */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-[0.1em] transition-colors">
              Core Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-200/50 dark:border-zinc-800/80 bg-zinc-100/55 dark:bg-zinc-900/40 px-3.5 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Link href="https://www.linkedin.com/in/mchandrar/" target="_blank" rel="noreferrer">
              <Button variant="primary">Let’s Collaborate</Button>
            </Link>
          </div>
        </div>

        {/* Profile Image (Sleek Grayscale Hover Effect) */}
        <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-xl dark:opacity-10" />
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3 shadow-2xl transition-all duration-300">
            <div className="overflow-hidden rounded-xl grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src={Person}
                alt="Muhammad Chandra Ramadhan"
                width={480}
                height={640}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
