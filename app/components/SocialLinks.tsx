import {links} from "../data/links";

export default function SocialLinks() {

  return (
    <div className="flex space-x-3 mt-4">
      {links.map((link, i) => (
        <a key={i} href={link.href} className="text-blue-600 text-2xl hover:text-blue-800">
          {<link.icon/>}
        </a>
      ))}
    </div>
  );
}
