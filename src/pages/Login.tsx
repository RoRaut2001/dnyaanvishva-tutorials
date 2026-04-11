import { useState } from "react";
import { User, Lock, GraduationCap, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import loginBg from "@/assets/login-bg.jpg";
import logo from "@/assets/dtlogo.png";

const Login = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would go here
  };

  return (
    <div className="min-h-screen flex">
      {/* Left - Form */}
      <div className="flex-1 flex flex-col justify-between p-8 md:p-12 lg:p-16">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-10">
            <img src={logo} alt="Dnyaanvishva" className="h-20" />
          </Link>

          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">Welcome Back</h1>
            <p className="text-muted-foreground mb-10">
              Continue your journey of academic excellence. Sign in to your student dashboard.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Student ID or Username</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder="Enter your ID"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-input bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold text-foreground">Password</label>
                  <button type="button" className="text-sm text-secondary hover:text-secondary/80 font-medium">Forgot Password?</button>
                </div>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-input bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="rounded accent-primary" />
                <span className="text-sm text-muted-foreground">Remember this device</span>
              </label>

              <button
                type="submit"
                className="w-full gradient-bg text-primary-foreground py-4 rounded-xl font-bold text-lg shadow-primary hover:opacity-90 transition-opacity"
              >
                Login to Portal
              </button>

              <p className="text-center text-sm text-muted-foreground">
                New student?{" "}
                <Link to="/admissions" className="text-secondary font-medium hover:underline">Apply Now</Link>
              </p>
            </form>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} DNYAANVISHVA TUTORIALS
        </p>
      </div>

      {/* Right - Visual */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        <img src={loginBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 flex flex-col justify-center p-16 text-primary-foreground">
          <span className="inline-block px-4 py-1.5 bg-primary-foreground/20 rounded-full text-sm font-medium mb-8 w-fit">
            ACADEMIC EXCELLENCE
          </span>
          <h2 className="text-4xl xl:text-5xl font-extrabold leading-tight mb-10">
            Curating Your<br /><span className="text-secondary">Future</span> One<br />Lesson at a<br />Time.
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Target size={20} className="text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold">Curated Curriculum</h4>
                <p className="text-primary-foreground/70 text-sm">Access premium journals, research papers, and meticulously designed tutorials from world-class faculty.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users size={20} className="text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold">Vibrant Alumni Network</h4>
                <p className="text-primary-foreground/70 text-sm">Join a community of thousands of successful professionals across the globe.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            <div className="bg-foreground/40 backdrop-blur rounded-xl px-6 py-4">
              <div className="text-3xl font-extrabold">98%</div>
              <div className="text-xs text-primary-foreground/60 uppercase tracking-wider">SUCCESS RATE</div>
            </div>
            <div className="bg-foreground/40 backdrop-blur rounded-xl px-6 py-4">
              <div className="text-3xl font-extrabold">150+</div>
              <div className="text-xs text-primary-foreground/60 uppercase tracking-wider">COURSES</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
