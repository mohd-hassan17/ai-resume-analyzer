import Navbar from "@/components/Navbar";
import ResumeCard from "@/components/ResumeCard";
import { resumes } from "@/constants";


export default function Home() {
  return (
  <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>No resumes found. Upload your first resume to get feedback.</h2>
      </div>

    {resumes.length >0 && 
    <div className="resumes-section">
      {resumes.map((resume) => (
        <ResumeCard key={resume.id} resume={resume}/>
      ))}
    </div>
    }
    </section>
  </main>
  );
}
