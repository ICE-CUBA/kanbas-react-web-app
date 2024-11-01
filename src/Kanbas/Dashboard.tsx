import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toggleShowAllCourses, enrollStudent, unenrollStudent } from "./Courses/Enrollments/reducer";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
    }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollmentState = useSelector((state: any) => state.enrollmentsReducer);
  const { enrollments, showAllCourses } = enrollmentState || { enrollments: [], showAllCourses: false };

  const handleCourseClick = (courseId: string) => {
    if (currentUser.role === "STUDENT") {
      const isEnrolled = enrollments.some(
        (enrollment: any) => 
          enrollment.user === currentUser._id && 
          enrollment.course === courseId
      );
      if (!isEnrolled) {
        return;
      }
    }
    navigate(`/Kanbas/Courses/${courseId}/Home`);
  };

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) => 
        enrollment.user === currentUser._id && 
        enrollment.course === courseId
    );
  };

  const handleEnrollment = (courseId: string) => {
    if (isEnrolled(courseId)) {
      dispatch(unenrollStudent({ userId: currentUser._id, courseId }));
    } else {
      dispatch(enrollStudent({ userId: currentUser._id, courseId }));
    }
  };

  const displayedCourses = showAllCourses || currentUser.role !== "STUDENT"
    ? courses 
    : courses.filter((course) => 
        enrollments.some(
          (enrollment: any) => 
            enrollment.user === currentUser._id && 
            enrollment.course === course._id
        )
      );

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser.role === "STUDENT" && (
          <button 
            className="btn btn-primary"
            style={{ 
              backgroundColor: '#0d6efd',
              borderColor: '#0d6efd',
              color: 'white',
              fontWeight: 'bold',
              padding: '8px 16px',
              borderRadius: '4px'
            }}
            onClick={() => dispatch(toggleShowAllCourses())}
          >
            {showAllCourses ? "Show Enrolled" : "Show All Courses"}
          </button>
        )}
      </div>
      <hr />

      {currentUser.role === "FACULTY" && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
              onClick={addNewCourse}>Add</button>
            <button className="btn btn-warning float-end me-2"
              onClick={updateCourse}>Update</button>
          </h5>
          <input value={course.name} className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <textarea value={course.description} className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </>
      )}

      <h2>Published Courses ({displayedCourses.length})</h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {displayedCourses.map((course) => (
          <div key={course._id} className="col">
            <div className="card h-100">
              <img src={`/images/${course.image}`} className="card-img-top" 
                   alt={course.name} style={{ height: "160px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text" style={{ 
                  height: "160px", 
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}>{course.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleCourseClick(course._id)}
                  >
                    View
                  </button>
                  {currentUser.role === "STUDENT" && (
                    <button 
                      className={`btn ${isEnrolled(course._id) ? 'btn-danger' : 'btn-success'}`}
                      onClick={() => handleEnrollment(course._id)}
                    >
                      {isEnrolled(course._id) ? 'Unenroll' : 'Enroll'}
                    </button>
                  )}
                  {currentUser.role === "FACULTY" && (
                    <div>
                      <button 
                        className="btn btn-warning me-2"
                        onClick={() => setCourse(course)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-danger"
                        onClick={() => deleteCourse(course._id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}