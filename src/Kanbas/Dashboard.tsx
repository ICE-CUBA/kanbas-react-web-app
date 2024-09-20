import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
            <img src="/images/python.jpg" width={200} />
            <div>
              <h5>CS5678 Python for Data Science</h5>
              <p className="wd-dashboard-course-title">Data Science and AI</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/9101/Home">
            <img src="/images/ai.jpg" width={200} />
            <div>
              <h5>CS9101 Artificial Intelligence</h5>
              <p className="wd-dashboard-course-title">AI and Machine Learning</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1112/Home">
            <img src="/images/cloud.jpg" width={200} />
            <div>
              <h5>CS1112 Cloud Computing</h5>
              <p className="wd-dashboard-course-title">AWS and Azure Essentials</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1314/Home">
            <img src="/images/blockchain.jpg" width={200} />
            <div>
              <h5>CS1314 Blockchain Basics</h5>
              <p className="wd-dashboard-course-title">Decentralized Applications</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1516/Home">
            <img src="/images/devops.jpg" width={200} />
            <div>
              <h5>CS1516 DevOps Essentials</h5>
              <p className="wd-dashboard-course-title">CI/CD and Automation</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1718/Home">
            <img src="/images/cybersecurity.jpg" width={200} />
            <div>
              <h5>CS1718 Cybersecurity 101</h5>
              <p className="wd-dashboard-course-title">Introduction to Security</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}