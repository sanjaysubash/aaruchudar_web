'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Preethi Natarajan',
      role: 'Student',
      image: '/reviews/1000210446.jpeg',
      rating: 5,
      text: 'The online assessment was very useful to me. It helped me revise the topics and know where I need to improve. Thank you aaruchudar team 👍🏻 for conducting this assessment',
      date: 'March 2024'
    },
    {
      id: 2,
      name: 'Sriram. K. P',
      role: 'Professional',
      image: '/reviews/1000210449.jpeg',
      rating: 5,
      text: "These online assessments help me how to take clear decisions in group discussion, project, how clearly give explanation to team members and for which things give first priority (like two assignments) (today's question). ---Thank you team AARUCHUDAR ---",
      date: 'February 2024'
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      role: 'Entrepreneur',
      image: '/logo2.png',
      rating: 5,
      text: 'The Human intelligence Labs program transformed my approach to leadership. The clarity thinking workshop was particularly insightful and helped me make better strategic decisions for my business.',
      date: 'January 2024'
    },
    {
      id: 4,
      name: 'Ananya Sharma',
      role: 'Student',
      image: '/logo2.png',
      rating: 5,
      text: 'Career Intelligence course was a game-changer! It helped me identify my strengths and align them with my career goals. Highly recommend to all students.',
      date: 'December 2023'
    },
    {
      id: 5,
      name: 'Preethi N',
      role: 'KPR College of Arts Science and Research',
      image: '/logo2.png',
      rating: 5,
      text: 'Successfully completed the Aaruchudar Power BI Intelligence Dashboard Assessment with a perfect score! I\'m grateful to Aaruchudar and Aashika Nethaji Ma’am for creating such an innovative learning platform that blends data visualization with human intelligence analytics. This experience deepened my skills in data interpretation, clarity, and analytical reasoning—helping me connect technical knowledge with real-world applications. A meaningful step toward mastering Power BI and advancing human intelligence development.',
      date: 'December 2025'
    },
    {
      id: 6,
      name: 'Sivaharini K',
      role: 'KPR College of Arts Science and Research',
      image: '/logo2.png',
      rating: 5,
      text: 'Heartfelt thanks to Aashika Nethaji Ma’am, Founder of Aaruchudar, for organizing these insightful daily quizzes that encourage consistent learning and self-improvement. Each quiz sharpened my clarity of thought, logical reasoning, and decision-making skills. Every question challenged me to think clearly and make better decisions in real-life situations. This was a meaningful learning experience, and I look forward to more such sessions.',
      date: 'December 2025'
    },
    {
      id: 7,
      name: 'Tharanya Rajakanthan',
      role: 'KPR College of Arts Science and Research',
      image: '/logo2.png',
      rating: 5,
      text: 'Grateful to Aaruchudar for organizing such an engaging Brain Activity Test—honored to have scored an extraordinary performance. This assessment strengthened my clarity, reasoning abilities, and conceptual understanding through human intelligence insights.',
      date: 'December 2025'
    },
    {
      id: 8,
      name: 'Pavithra Anandakumar',
      role: 'KPR College of Arts Science and Research',
      image: '/logo2.png',
      rating: 5,
      text: 'Completed the Mind Lab Assessment with a perfect score, earning the Extraordinary Performer distinction! I am grateful to Aaruchudar and Aashika Nethaji Ma’am for pioneering human intelligence consulting and guiding me through this journey of growth and mental clarity. The Mind Lab framework deepened my clarity, focus, and reasoning skills.',
      date: 'December 2025'
    },
    {
      id: 9,
      name: 'Preethi N',
      role: 'Student',
      image: '/logo2.png',
      rating: 5,
      text: 'This certificate represents not just completion, but the consistency, dedication, and focus I’ve built over the past 30 days. I am grateful to Aaruchudar Human Intelligence for the continuous guidance and support throughout this program. Thank you for helping me grow with confidence and clarity. Looking forward to stepping into my next goals with a stronger mindset.',
      date: 'December 2025'
    },
    {
      id: 10,
      name: 'Tharanya Rajakanthan',
      role: 'Student',
      image: '/logo2.png',
      rating: 5,
      text: 'Being part of the 30 Days Quiz Challenge has been a truly enriching experience. Each day pushed me to think sharper, learn consistently, and challenge myself beyond my comfort zone. The structure, clarity, and dedication behind every quiz kept me motivated throughout the journey and strengthened my confidence and discipline.',
      date: 'December 2025'
    },
    {
      id: 11,
      name: 'Pavithra Anandakumar',
      role: 'Student',
      image: '/logo2.png',
      rating: 5,
      text: 'Thrilled to have successfully completed the 30 Days Test Program at Aaruchudar Human Intelligence and earned the ‘Quiz Grandmaster Champion’ title. This journey helped me develop professional skills, demonstrate consistency, and nurture a passion for learning. Thank you, Aashika Nethaji Ma’am, for your visionary leadership and inspiring growth.',
      date: 'December 2025'
    },
    {
      id: 12,
      name: 'Preethi N',
      role: 'Student',
      image: '/logo2.png',
      rating: 5,
      text: 'This certificate reminds me that consistency truly pays off. Honoured to be recognized as a Quiz Grandmaster Champion. Thank you Aaruchudar for inspiring my growth and supporting me throughout this journey.',
      date: 'December 2025'
    }
  ];

  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1 >= total ? 0 : c + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setCurrent((c) => (c - 1 < 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1 >= total ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="compact-section">
      <div className="compact-container">
        <div className="header-row">
          <h2 className="title">Success Stories</h2>
        </div>

        <div className="card-row">
          <button className="nav-btn" onClick={prev} aria-label="Previous">⟵</button>

          <div className="quote-card compact">
            <div className="quote-text">“{t.text.split('\n')[0]}”</div>
            <div className="quote-sub">{t.name} · <span className="org">{t.role}</span></div>
            <div className="quote-meta">{t.date}</div>
          </div>

          <button className="nav-btn" onClick={next} aria-label="Next">⟶</button>
        </div>

        <div className="dots">
          {testimonials.map((_, idx) => (
            <button key={idx} className={`dot${idx === current ? ' active' : ''}`} aria-label={`Go to ${idx + 1}`} onClick={() => setCurrent(idx)} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .compact-section {
          position: relative;
          overflow: hidden;
          padding: 36px 16px;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          color: #1f2937;
        }
        /* dotted grid pattern overlay */
        .compact-section:before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 1px 1px, rgba(148,163,184,0.15) 1px, transparent 1.5px);
          background-size: 20px 20px;
          pointer-events: none;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.18), rgba(0,0,0,0.06) 40%, rgba(0,0,0,0));
        }
        /* angled soft stripes */
        .compact-section:after {
          content: '';
          position: absolute;
          right: -40px;
          top: -60px;
          width: 360px;
          height: 360px;
          background:
            repeating-linear-gradient(45deg, rgba(99,102,241,0.08) 0 10px, rgba(99,102,241,0.0) 10px 20px);
          border-radius: 50%;
          filter: blur(12px);
          pointer-events: none;
        }

        .compact-container { max-width: 780px; margin: 0 auto; }
        .header-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
        .title { font-size: 18px; font-weight: 800; color: #0f172a; }

        .card-row { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 10px; }
        .nav-btn { width: 36px; height: 36px; border-radius: 10px; border: 1px solid #e2e8f0; background: #ffffff; color: #334155; cursor: pointer; box-shadow: 0 6px 18px rgba(2,8,23,.06); font-size: 18px; }
        .nav-btn:hover { background: #f1f5f9; }

        .quote-card.compact {
          position: relative;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 18px;
          min-height: auto;
          box-shadow: 0 10px 24px rgba(17,24,39,.06);
        }
        /* subtle corner highlight pattern inside card */
        .quote-card.compact:before {
          content: '';
          position: absolute;
          left: -60px;
          bottom: -60px;
          width: 200px;
          height: 200px;
          background:
            radial-gradient(closest-side, rgba(16,185,129,0.12), transparent 70%),
            radial-gradient(closest-side, rgba(124,58,237,0.10), transparent 80%);
          transform: rotate(20deg);
          filter: blur(8px);
          pointer-events: none;
        }

        .quote-text { font-size: 18px; line-height: 1.6; font-weight: 700; color: #0f172a; }
        .quote-sub { margin-top: 8px; font-size: 13px; color: #334155; }
        .quote-sub .org { color: #2563eb; font-weight: 700; }
        .quote-meta { margin-top: 4px; font-size: 12px; color: #64748b; }

        .dots { display: flex; gap: 6px; justify-content: center; margin-top: 12px; }
        .dot { width: 8px; height: 8px; border-radius: 50%; background: #cbd5e1; border: none; cursor: pointer; }
        .dot.active { background: #7c3aed; }

        @media (max-width: 640px) {
          .compact-container { max-width: 94vw; }
          .quote-text { font-size: 16px; }
        }
      `}</style>
    </section>
  );
}