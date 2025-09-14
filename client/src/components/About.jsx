// About.jsx
// About section with a profile image, summary card, experience, education, and skills.
// Kept content close to the original for visual parity.

import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section title with small underline accent */}
        <h2 className="text-center text-3xl md:text-4xl font-display font-semibold mb-12 relative pb-4">
          About Me
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 block w-24 h-[3px] bg-primary" />
        </h2>

        <div className="flex flex-col gap-12 md:flex-row">
          {/* Profile image */}
          <div className="flex-1 flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg w-72 h-72">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=774&q=80"
                alt="Profile photo"
              />
            </div>
          </div>

          {/* Details card */}
          <div className="flex-1 grid gap-8">
            <div className="bg-card rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Hello! I'm Donnie</h3>
              <p className="text-[15px] text-foreground/80">
                I'm a passionate front-end developer with 2 years of experience building modern web applications.
                I specialize in creating responsive, accessible, and performant websites using the latest technologies.
                My approach combines clean code practices with creative problem-solving to deliver exceptional user experiences.
              </p>
            </div>

            {/* Experience and Education grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Experience */}
              <div>
                <h4 className="font-semibold mb-4"><i className="fas fa-briefcase text-primary mr-2" />Experience</h4>
                <div className="space-y-5">
                  <div>
                    <div className="font-medium">Senior Front-End Developer</div>
                    <div className="text-sm text-foreground/70">TechCorp Inc.</div>
                    <div className="text-xs text-foreground/60">2020 - Present</div>
                    <p className="text-[14px] mt-1 text-foreground/80">Leading the front-end team in developing modern web applications using React and Tailwind CSS.</p>
                  </div>
                  <div>
                    <div className="font-medium">Web Developer</div>
                    <div className="text-sm text-foreground/70">Digital Solutions LLC</div>
                    <div className="text-xs text-foreground/60">2018 - 2020</div>
                    <p className="text-[14px] mt-1 text-foreground/80">Developed responsive websites for clients in e-commerce and finance sectors.</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="font-semibold mb-4"><i className="fas fa-graduation-cap text-primary mr-2" />Education</h4>
                <div className="space-y-5">
                  <div>
                    <div className="font-medium">BSc Business Management</div>
                    <div className="text-sm text-foreground/70">Virginia State University</div>
                    <div className="text-xs text-foreground/60">2005 - 2010</div>
                  </div>
                  <div>
                    <div className="font-medium">Full Stack Web Developer Course</div>
                    <div className="text-sm text-foreground/70">Digital Career Institute (DCI)</div>
                    <div className="text-xs text-foreground/60">2023</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="font-semibold mb-4"><i className="fas fa-code text-primary mr-2" />Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['HTML5','CSS3','JavaScript','React','Tailwind CSS','Responsive Design','Git','UI/UX Design','Webpack','Node.js']
                  .map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-sm">{tag}</span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

