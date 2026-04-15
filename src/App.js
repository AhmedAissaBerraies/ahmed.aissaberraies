import React, { useState, useRef } from 'react';
import './App.css';
import { Mail, Phone, MapPin, Link, Briefcase, GraduationCap, Award, BookOpen, Globe, CheckCircle2, Camera, Shield, Mic, MessageCircle } from 'lucide-react';

const CV = () => {
  const [profileImg, setProfileImg] = useState(process.env.PUBLIC_URL + '/profile.jfif');
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const data = {
    contact: {
      name: "Ahmed Aissa Berraies",
      title: "PhD, PMP | Lead Multiphysics Simulation Specialist",
      address: "Chaussée d'Anvers 57, 1000 Brussels, Belgium",
      email: "ahmedaissaberraies19@gmail.com",
      phoneBE: "(+32) 0470717227",
      whatsapp: "(+39) 3661313127",
      linkedin: "in/ahmed-aissa-berraies",
      linkedinUrl: "https://linkedin.com/in/ahmed-aissa-berraies",
      workPermits: "Belgian, Italian, Dutch Work Permits",
    },
    summary: "PhD-level computational mechanics consultant and certified PMP with a proven track record of bridging advanced numerical research and industrial Multiphysics applications. Specializing in structural mechanics, CFD, and fluid-structure interaction (FSI). Combines deep technical proficiency in simulation tools with data science & AI to optimize product designs and extract commercial insights.",
    experience: [
      {
        role: "Lead Multiphysics Simulation Consultant",
        company: "Independent Consultant",
        location: "Brussels, Belgium",
        period: "01/2026 – Present",
        points: [
          "Accelerate R&D and product optimization by integrating HPC with advanced multi-physics simulations, including structural, CFD, and FSI. Strong foundation in machine learning, data science, and AI.",
          "Drive data-informed engineering solutions by deploying custom workflows to transform massive datasets from complex simulations and physical tests into actionable, commercial insights.",
          "Prioritize tasks, manage project scope, and align cross-functional stakeholder expectations to ensure seamless integration between computational research and business objectives."
        ]
      },
      {
        role: "Simulation Expert",
        company: "Université Catholique de Louvain",
        location: "Louvain-la-Neuve, Belgium",
        period: "01/2025 – 07/2026",
        points: [
          "Engineered a novel 3D-structured porous transport electrode (PTE) concept to optimize efficiency and performance in alkaline water electrolysis systems.",
          "Developed end-to-end computational workflows, translating X-ray micro-computed tomography images of foam electrodes into advanced CFD simulations to drive cell design iterations.",
          "Leveraged data science methodologies and Python scripting to systematically process X-ray tomography outputs, design, test, and validate the performance of new porous structures, extracting actionable engineering insights."
        ]
      },
      {
        role: "Engineering Research Scientist",
        company: "University of Pavia",
        location: "Pavia, Italy",
        period: "04/2022 – 03/2024",
        context: "Within PhD framework",
        points: [
          "Executed advanced computational fluid-structure interaction (FSI) simulations to conduct rigorous functional assessments of novel vascular prostheses.",
          "Evaluated the performance and viability of innovative vascular and orthopedic implants produced via cutting-edge additive manufacturing (3D printing) techniques."
        ]
      },
      {
        role: "Early-Stage Researcher",
        company: "ProTechTion Marie-Skłodowska Curie (Univ. of Pavia & TU Eindhoven)",
        location: "Pavia, Italy & Eindhoven, Netherlands",
        period: "12/2018 – 01/2022",
        context: "PhD Research",
        points: [
          "Partnered with an industrial manufacturer to deliver a robust design tool for microfluidic valve actuation control.",
          "Solved complex product development bottlenecks by deploying a full suite of computational Multiphysics methods, seamlessly integrating CFD, FSI, and nonlinear solid mechanics.",
          "Enhanced simulation accuracy and product reliability for commercial application through the advanced calibration of complex hyperelastic materials."
        ]
      },
      {
        role: "Mechanical Engineer / Piping and Pipeline",
        company: "Engineering Procurement and Project Management (EPPM)",
        location: "Tunis, Tunisia",
        period: "10/2017 – 10/2018",
        points: [
          "Executed piping and pipeline design for large-scale energy projects, ensuring compliance with international engineering standards (ASME, API).",
          "Developed detailed technical specifications and material take-offs to support procurement and construction phases."
        ]
      }
    ],
    skills: {
      engineering: ["CFD", "FSI", "CSM", "FEA", "CAD", "Multiphysics", "Design", "Modeling", "Numerical Methods", "Simulation", "Reverse Engineering"],
      programming: ["Python", "MATLAB", "ANSYS Suite", "Abaqus", "Comsol", "Solidworks", "LaTeX", "Linux", "HPC", "CAEsar II", "Microsoft Office 365"],
      data: ["Statistics", "Machine Learning", "AI", "Data Science", "Data Visualization", "Story telling"],
      management: ["Project Management", "Agile & Scrum", "Business Analysis", "Problem Solving", "Critical Thinking"]
    },
    certifications: [
      { title: "PMI Project Management Professional (PMP)", date: "09/2025 – Present", issuer: "PMI" },
      { title: "Professional in Business Analysis (PMI-PBA)", date: "2024", issuer: "PMI" },
      { title: "Professional Scrum Master I (PSM I)", date: "2024", issuer: "Scrum.org" },
      { title: "Professional Scrum Product Owner I (PSPO I)", date: "2024", issuer: "Scrum.org" }
    ],
    education: [
      {
        degree: "Doctor of Philosophy (PhD), Computational Mechanics",
        institution: "Eindhoven University of Technology & Università di Pavia",
        period: "12/2018 – 09/2025",
        details: "Thesis: \"Numerical methods for fluid-structure interaction in a pilot-operated valve.\" Focus: Partitioned fluid-structure-contact interaction, CFD, nonlinear solid mechanics."
      },
      {
        degree: "Mechanical Engineering Degree",
        institution: "National Engineering School of Monastir (ENIM), Tunisia",
        period: "09/2013 – 09/2017",
        details: ""
      },
      {
        degree: "Bachelor of Engineering (Mathematics & Physics)",
        institution: "Institut Préparatoire aux Études d'Ingénieurs de Tunis (IPEIT)",
        period: "09/2010 – 05/2013",
        details: ""
      }
    ],
    publications: [
      {
        year: "2025",
        title: "Numerical Analysis of Single-phase Electrolyte Transport Properties in 3D Porous Electrode Structures",
        journal: "Chemical Engineering Science",
        note: "Submitted"
      },
      {
        year: "2025",
        title: "On the Robustness of Dirichlet–Neumann Coupling Schemes for Fluid-Structure-Interaction Problems With Nearly-Closed Fluid Domains",
        journal: "Int. Journal for Numerical Methods in Engineering (Wiley)",
        note: ""
      },
      {
        year: "2024",
        title: "Numerical Investigation of Fluid–Structure Interaction in a Pilot-Operated Microfluidic Valve",
        journal: "Journal of Fluids and Structures (Elsevier)",
        note: ""
      },
      {
        year: "2019",
        title: "Short Fiber Reinforced Composites: Unbiased Full-Field Evaluation of Various Homogenization Methods in Elasticity",
        journal: "Composites Science and Technology (Elsevier)",
        note: "Co-author"
      }
    ],
    conferences: [
      "ADMOS 2019 — Alicante, Spain",
      "WCCM-ECCOMAS 2020 — Paris, France",
      "Ansys Simulation World 2020",
      "Sim-AM 2021 — Pavia, Italy",
      "HPC for Industry 4.0 — Milano, Italy"
    ],
    languages: [
      { lang: "Arabic", level: "Fluent", percent: 95 },
      { lang: "French", level: "Proficient (C1)", percent: 80 },
      { lang: "English", level: "Proficient (C1)", percent: 80 },
      { lang: "Italian", level: "Intermediate (B2)", percent: 60 },
      { lang: "Dutch", level: "Beginner (A1)", percent: 15 }
    ]
  };

  const skillCategories = [
    { key: 'engineering', label: 'Engineering & Simulation', className: 'engineering' },
    { key: 'programming', label: 'Programming & Tools', className: 'programming' },
    { key: 'data', label: 'Data Science & AI', className: 'data' },
    { key: 'management', label: 'Management', className: 'management' },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      {/* Floating Download Button */}
      <button 
        onClick={() => window.print()} 
        className="print-button print-hidden"
        title="Download CV as PDF"
      >
        <BookOpen style={{ width: 20, height: 20 }} />
        <span>Download PDF</span>
      </button>

      <div style={{ maxWidth: '900px', width: '100%' }}>
        <div className="cv-paper">

          {/* ===== HEADER ===== */}
          <div className="cv-header">
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>

              {/* Avatar */}
              <div
                className="avatar-container"
                onClick={() => fileInputRef.current.click()}
                title="Click to upload your photo"
              >
                {profileImg ? (
                  <img src={profileImg} alt={data.contact.name} />
                ) : (
                  <span className="avatar-initials">AB</span>
                )}
                <div className="avatar-overlay">
                  <Camera style={{ width: 28, height: 28, color: 'white', marginBottom: 4 }} />
                  <span style={{ fontSize: '0.7rem', color: 'white', fontWeight: 600 }}>Upload Photo</span>
                </div>
              </div>
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleImageChange}
              />

              {/* Name & Contact */}
              <div style={{ flex: 1 }}>
                <h1 style={{
                  fontSize: '2.75rem',
                  fontWeight: 900,
                  color: 'white',
                  lineHeight: 1.1,
                  marginBottom: '6px',
                  letterSpacing: '-0.03em'
                }}>
                  {data.contact.name}
                </h1>
                <h2 style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#5eead4',
                  marginBottom: '20px',
                  letterSpacing: '-0.01em'
                }}>
                  {data.contact.title}
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <MapPin style={{ width: 14, height: 14, color: '#5eead4' }} />
                    </div>
                    <span>{data.contact.address}</span>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Mail style={{ width: 14, height: 14, color: '#5eead4' }} />
                    </div>
                    <span>{data.contact.email}</span>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Phone style={{ width: 14, height: 14, color: '#5eead4' }} />
                    </div>
                    <span><span className="phone-label">BE</span> {data.contact.phoneBE}</span>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <MessageCircle style={{ width: 14, height: 14, color: '#25D366' }} />
                    </div>
                    <span><span className="whatsapp-label">WA</span> {data.contact.whatsapp}</span>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Link style={{ width: 14, height: 14, color: '#5eead4' }} />
                    </div>
                    <a href={data.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#7dd3fc', textDecoration: 'none' }}>
                      {data.contact.linkedin}
                    </a>
                  </div>
                  <div className="permit-badge">
                    <Shield style={{ width: 12, height: 12 }} />
                    {data.contact.workPermits}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== BODY ===== */}
          <div className="cv-body">

            {/* Summary */}
            <section style={{ marginBottom: '36px' }}>
              <div className="section-header">
                <div className="section-icon" style={{ background: 'linear-gradient(135deg, #ccfbf1, #cffafe)' }}>
                  <CheckCircle2 style={{ width: 20, height: 20, color: '#0d9488' }} />
                </div>
                <h3>Professional Summary</h3>
              </div>
              <div className="summary-block">
                <p style={{
                  color: '#334155',
                  lineHeight: 1.75,
                  textAlign: 'justify',
                  fontSize: '0.9375rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {data.summary}
                </p>
              </div>
            </section>

            {/* Experience — moved up */}
            <section style={{ marginBottom: '36px' }}>
              <div className="section-header">
                <div className="section-icon" style={{ background: 'linear-gradient(135deg, #ccfbf1, #cffafe)' }}>
                  <Briefcase style={{ width: 20, height: 20, color: '#0d9488' }} />
                </div>
                <h3>Professional Experience</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {data.experience.map((exp, i) => (
                  <div key={i} className="exp-item">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>
                        {exp.role}
                      </h4>
                      {exp.context && (
                        <span className="context-badge">{exp.context}</span>
                      )}
                    </div>
                    <p style={{ color: '#0d9488', fontWeight: 600, fontSize: '0.85rem', marginTop: '2px' }}>
                      {exp.company} <span style={{ color: '#64748b', fontWeight: 400 }}>| {exp.location}</span>
                    </p>
                    <p style={{ color: '#94a3b8', fontSize: '0.8rem', fontStyle: 'italic', marginBottom: '10px' }}>
                      {exp.period}
                    </p>
                    <ul className="exp-bullets" style={{
                      listStyleType: 'disc',
                      paddingLeft: '20px',
                      color: '#475569',
                      fontSize: '0.875rem'
                    }}>
                      {exp.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section style={{ marginBottom: '36px' }}>
              <div className="section-header">
                <div className="section-icon" style={{ background: 'linear-gradient(135deg, #dbeafe, #e0e7ff)' }}>
                  <CheckCircle2 style={{ width: 20, height: 20, color: '#3b82f6' }} />
                </div>
                <h3>Skills</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                {skillCategories.map((cat) => (
                  <div key={cat.key}>
                    <h4 style={{
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      color: '#475569',
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {cat.label}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {data.skills[cat.key].map((skill, i) => (
                        <span key={i} className={`skill-tag ${cat.className}`}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section style={{ marginBottom: '36px' }}>
              <div className="section-header">
                <div className="section-icon" style={{ background: 'linear-gradient(135deg, #fef3c7, #fde68a)' }}>
                  <Award style={{ width: 20, height: 20, color: '#d97706' }} />
                </div>
                <h3>Certifications</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {data.certifications.map((cert, i) => (
                  <div key={i} className="cert-card">
                    <h4 style={{ fontWeight: 700, color: '#1e293b', fontSize: '0.9rem', paddingLeft: '12px' }}>
                      {cert.title}
                    </h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '12px', marginTop: '4px' }}>
                      <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
                        {cert.date}
                      </p>
                      <span className="issuer-badge">{cert.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section style={{ marginBottom: '36px' }}>
              <div className="section-header">
                <div className="section-icon" style={{ background: 'linear-gradient(135deg, #e0e7ff, #ede9fe)' }}>
                  <GraduationCap style={{ width: 20, height: 20, color: '#6366f1' }} />
                </div>
                <h3>Education</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {data.education.map((edu, i) => (
                  <div key={i} className="edu-card">
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
                      {edu.degree}
                    </h4>
                    <p style={{ color: '#6366f1', fontWeight: 600, fontSize: '0.85rem', marginTop: '2px' }}>
                      {edu.institution}
                    </p>
                    <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '2px' }}>
                      {edu.period}
                    </p>
                    {edu.details && (
                      <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '8px', lineHeight: 1.6 }}>
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Publications */}
            <section style={{ marginBottom: '36px' }}>
              <div className="section-header">
                <div className="section-icon" style={{ background: 'linear-gradient(135deg, #fce7f3, #fce4ec)' }}>
                  <BookOpen style={{ width: 20, height: 20, color: '#db2777' }} />
                </div>
                <h3>Publications</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {data.publications.map((pub, i) => (
                  <div key={i} className="pub-item">
                    <div style={{ fontSize: '0.875rem' }}>
                      <span style={{ fontWeight: 700, color: '#0f172a' }}>{pub.year}</span>
                      <span style={{ color: '#475569' }}> — {pub.title}</span>
                      {pub.note && (
                        <span className="pub-note">{pub.note}</span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#0d9488', fontStyle: 'italic', marginTop: '2px' }}>
                      {pub.journal}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Conferences */}
            <section style={{ marginBottom: '36px' }}>
              <div className="section-header">
                <div className="section-icon" style={{ background: 'linear-gradient(135deg, #fef3c7, #fff7ed)' }}>
                  <Mic style={{ width: 20, height: 20, color: '#ea580c' }} />
                </div>
                <h3>Conferences</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {data.conferences.map((conf, i) => (
                  <span key={i} className="conference-tag">
                    {conf}
                  </span>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section style={{ marginBottom: '8px' }}>
              <div className="section-header">
                <div className="section-icon" style={{ background: 'linear-gradient(135deg, #d1fae5, #cffafe)' }}>
                  <Globe style={{ width: 20, height: 20, color: '#059669' }} />
                </div>
                <h3>Languages</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}>
                {data.languages.map((lang, i) => (
                  <div key={i} className="lang-card">
                    <h4 style={{ fontWeight: 700, color: '#0f172a', fontSize: '1rem', marginBottom: '4px' }}>
                      {lang.lang}
                    </h4>
                    <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '10px' }}>
                      {lang.level}
                    </p>
                    <div style={{
                      width: '100%',
                      height: '6px',
                      borderRadius: '3px',
                      background: '#e2e8f0',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${lang.percent}%`,
                        height: '100%',
                        borderRadius: '3px',
                        background: 'linear-gradient(90deg, #0d9488, #0ea5e9)',
                        transition: 'width 1s ease'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;