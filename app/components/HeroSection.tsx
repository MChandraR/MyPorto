import Button from "./Button";
import SocialLinks from "./SocialLinks";
import Stats from "./Stats";
import Image from "next/image";
import {Person, City} from "../../public/images"

export default function HeroSection() {
  return (
    <section className="relative flex justify-items-start items-center min-h-screen px-12 pt-24 bg-gray-50 ">
        <Image
          src={City} // ganti dengan gambar kamu
          alt="Profile"
          width={1080}
          height={1080}
          className="rounded-lg absolute top-0 right-0 opacity-30 z-10 w-1/2 h-[100vh]"
        />

      {/* Left Content */}``
      <div className="w-max max-w-lg ">
        <h2 className="text-4xl font-bold text-gray-800 w-max">
          Hello, I am <br /> Muhammad Chandra Ramadhan
        </h2>
        <h3 className="text-3xl font-bold text-blue-600 mt-2">IOS Engineer and Machine Learning Engineer</h3>

        <div className="flex space-x-4 mt-6">
          <Button variant="primary">Contact With Me</Button>
          <Button variant="outline">My Portfolio</Button>
        </div>x

        <p className="mt-6 font-medium text-gray-700">Follow Me on :</p>
        <SocialLinks />

        <Stats />
      </div>

      {/* Right Content - Image */}
      <div className="relative pr-60 -scale-x-100 z-20">
        <Image
          src={Person} // ganti dengan gambar kamu
          alt="Profile"
          width={350}
          height={400}
          className="rounded-lg z-20"
        />
      </div>
    </section>
  );
}
