import React from "react";

function Navbare() {
  const links = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Exp.", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <nav className="flex justify-center items-center flex-col py-10 gap-5">
      <div>LOGO</div>
      <div className="flex  gap-6">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.link}
            className=" underline underline-offset-8 hover:decoration-dashed"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbare;
