import Image from "next/image";
import Button from "./Button";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-12 py-24 bg-gray-50 rounded-2xl mt-16">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <Image
          src="/profile2.png" // ganti dengan foto kamu
          alt="Profile"
          width={400}
          height={450}
          className="rounded-2xl object-cover"
        />
      </div>

      {/* Right - Text */}
      <div className="md:w-1/2 mt-10 md:mt-0 md:pl-12">
        <h4 className="text-blue-600 font-semibold">About Me</h4>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Hi, my name is Mohamed El Sayed.
        </h2>

        <p className="text-gray-600 mt-4 leading-relaxed">
          I am a UI/UX Designer and a graduate of the Faculty of Computers and
          Information, Information Systems Department.
        </p>
        <p className="text-gray-600 mt-2 leading-relaxed">
          My background in information systems gives me a strong understanding
          of both technology and user needs, allowing me to design digital
          experiences that are practical, efficient, and user-friendly.
        </p>

        <div className="flex space-x-4 mt-6">
          <Button variant="primary">My Projects</Button>
          <Button variant="outline">Check My CV</Button>
        </div>
      </div>
    </section>
  );
}
