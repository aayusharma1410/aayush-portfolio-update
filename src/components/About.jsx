import React from 'react';

function About() {
  return (
    <div className="page-container">
      <div className="about-header"> {/* Container for heading and photo */}
        <h1>About Me</h1>
        <div className="profile-container">
         <img src="https://i.ibb.co/TMm9mBz3/Whats-App-Image-2025-02-07-at-11-23-25-AM.jpg" alt="Aayush Sharma" className="profile-photo" />

        </div>
      </div>
      <p>Hello! I’m Aayush Sharma, a B.Tech student at Rajasthan Technical University, passionate about software development, problem-solving, and innovation. Ever since I wrote my first line of code, I’ve been fascinated by the power of technology to create meaningful solutions. With a strong foundation in HTML, CSS, Java, JavaScript, TypeScript, C++, C, Python, SQL, and MongoDB, I love building efficient and scalable applications that solve real-world problems.</p>
			<p>My journey as a developer has been fueled by my curiosity to explore new technologies and improve my skills continuously. Whether it's designing responsive web applications, optimizing backend systems, or working with databases, I always strive to write clean, maintainable, and efficient code. I believe that software development is not just about coding but about understanding problems, brainstorming solutions, and working collaboratively to bring ideas to life.</p>
			<p>Apart from my technical expertise, I take pride in my teamwork, leadership, communication, and team-building skills. I enjoy working in collaborative environments where I can contribute, learn, and grow while helping my team achieve collective success. I strongly believe that great projects are built by great teams, and I am always eager to take on challenges that allow me to work with diverse individuals and develop innovative solutions.</p>
			<p>This portfolio is a glimpse into my projects, skills, and experiences as a growing software engineer. I am always excited about new opportunities to learn, collaborate, and contribute to impactful projects. If you’re looking for a dedicated and enthusiastic developer, let’s connect and create something incredible together! </p>

      {/* ... (rest of your About section content) ... */}
    </div>
  );
}

export default About;
