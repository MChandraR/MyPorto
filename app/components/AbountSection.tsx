import Image from "next/image";
import Button from "./Button";
import { Person } from "../../public/images";
import Link from "next/link";

const highlights = [
  { title: "Focus", value: "Software & AI Engineering" },
  { title: "Approach", value: "Innovative & Problem-solving" },
  { title: "Current", value: "Apple Academy & GSA 2025" },
];

const specialties = [
  "Swift, Python, C++ & Java",
  "Autonomous navigation & vision systems",
  "On-device machine learning & AI",
  "IoT & hardware-software control",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white/80 px-6 py-16 shadow-xl shadow-blue-100/30 backdrop-blur-lg md:px-12">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 translate-x-32 bg-gradient-to-bl from-blue-50 via-white to-blue-100 blur-3xl md:block" />

      <div className="relative z-10 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        {/* Content */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
            About
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-gray-900 md:text-4xl">
            I’m Muhammad Chandra Ramadhan—a Software Engineer focused on AI, autonomous systems, and building real-world solutions.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            I am an Informatics Engineering student at Universitas Maritim Raja Ali Haji. My experience ranges from developing smart systems using C++ and Swift, to building machine learning models in Python, and integrating hardware/software control. As an Apple Developer Academy Graduate (Cohort 2025) and Google Student Ambassador 2025, I thrive in fast-paced startup and research ecosystems.
          </p>

          <div className="mt-8 grid gap-4 rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 sm:grid-cols-3 sm:gap-6">
            {highlights.map(({ title, value }) => (
              <div key={title}>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  {title}
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-800">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-800">
                What I’m doubling down on
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {specialties.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <Link href="https://www.linkedin.com/in/mchandrar/">
                <Button variant="primary">Let’s Collaborate</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative mx-auto max-w-xs rounded-[2.5rem] border border-gray-100 bg-white p-5 shadow-2xl shadow-blue-200 md:max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-r from-blue-100 via-white to-blue-200 opacity-80 blur-2xl" />
          <Image
            src={Person}
            alt="Portrait of Muhammad Chandra Ramadhan"
            width={480}
            height={640}
            className="rounded-[2rem] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

