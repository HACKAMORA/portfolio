import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import { education, technicalSkills, volunteering, softSkills, languages } from '../constants/index.js';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ayman.elfarme@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I'm AYMAN EL FARME</p>
              <p className="grid-subtext">
                Engineering student in Cybersecurity & Digital Trust, passionate about IT security, CTFs,
                and web development, looking for an internship to put my technical skills into practice.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">Languages & Frameworks: {technicalSkills.languagesFrameworks.join(", ")}</p>
              <p className="grid-subtext">Tools: {technicalSkills.tools.join(", ")}</p>
              <p className="grid-subtext">Methodologies: {technicalSkills.methodologies.join(", ")}</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 33.5731, lng: -7.5898, text: 'Casablanca, Morocco', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I'm very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Morocco and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Education</p>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="grid-subtext text-white font-semibold">{edu.title}</p>
                  <p className="grid-subtext">{edu.school}</p>
                  <p className="grid-subtext text-gray-400">{edu.duration}</p>
                  <p className="grid-subtext">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <p className="grid-headtext">Volunteering</p>
            {volunteering.map((vol, index) => (
              <div key={index} className="mb-4">
                <p className="grid-subtext text-white font-semibold">{vol.role}</p>
                <p className="grid-subtext">{vol.organization} - {vol.duration}</p>
                {vol.description && <p className="grid-subtext">{vol.description}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <p className="grid-headtext">Soft Skills</p>
            <ul className="list-disc list-inside grid-subtext">
              {softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <p className="grid-headtext">Languages</p>
            <ul className="list-disc list-inside grid-subtext">
              {languages.map((lang, index) => (
                <li key={index}>{lang.name}: {lang.level}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">ayman.elfarme@gmail.com</p>
              </div>
              <p className="grid-subtext text-center">Phone: +212 714600907</p>
              <p className="grid-subtext text-center">
                LinkedIn: <a href="https://www.linkedin.com/in/ayman-el-farme" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">@AYMAN EL FARME</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
