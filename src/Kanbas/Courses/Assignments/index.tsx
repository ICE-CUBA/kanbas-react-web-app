import { FaPlus } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentButtons from "./assignmentButton";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsGripVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";


export default function Assignments() {
  return (
    <div id="wd-assignments" className="text-nowrap">
      <div className="d-flex flex-row mb-3 gap-3">
        <input id="wd-search-assignment" placeholder="text"
          className="form-control float-start" value="🔍 Search....">
        </input>
        <button id="wd-view-progress-btn" className="btn btn-sm btn-white me-1 rounded-0">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group</button>
        <button id="wd-collapse-all-btn" className="btn btn-sm btn-danger me-1 rounded-0">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment</button>
      </div>

      <ul id="wd-assignments-title" className="mt-2 list-group rounded-0 w-100">
        <li className="list-group-item p-3 d-flex align-items-center justify-content-between bg-light" style={{ backgroundColor: '#f0f0f0' }}>
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <AiOutlineCaretDown className="me-2" />
            <h3 className="mb-0">ASSIGNMENT</h3>
          </div>
          <div className="ms-auto">
            <AssignmentButtons />
          </div>
        </li>

        <li className="list-group-item d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <FaRegEdit size={30} className="me-3 text-success" />
          <div className="flex-grow-1">
            <a className="wd-assignment-link stretched-link" href="#/Kanbas/Courses/1234/Assignments/123">
              A1
            </a>
            <p className="mb-0">
              <span className="text-danger">Multiple Modules</span> |
              <span className="fw-bold">Not available Until</span> |
              <span>May 6 at 12:00am</span> |<br />
              <span>Due May 13 at 11:59pm | 100 pts</span>
            </p>
          </div>
          <LessonControlButtons />
        </li>

        <li className="list-group-item d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <FaRegEdit size={30} className="me-3 text-success" />
          <div className="flex-grow-1">
            <a className="wd-assignment-link stretched-link" href="#/Kanbas/Courses/1234/Assignments/123">
              A2
            </a>
            <p className="mb-0">
              <span className="text-danger">Multiple Modules</span> |
              <span className="fw-bold">Not available Until</span> |
              <span>May 13 at 12:00am</span> |<br />
              <span>Due May 20 at 11:59pm | 100 pts</span>
            </p>
          </div>
          <LessonControlButtons />
        </li>

        <li className="list-group-item d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <FaRegEdit size={30} className="me-3 text-success" />
          <div className="flex-grow-1">
            <a className="wd-assignment-link stretched-link" href="#/Kanbas/Courses/1234/Assignments/123">
              A3
            </a>
            <p className="mb-0">
              <span className="text-danger">Multiple Modules</span> |
              <span className="fw-bold">Not available Until</span> |
              <span>May 20 at 12:00am</span> |<br />
              <span>Due May 27 at 11:59pm | 100 pts</span>
            </p>
          </div>
          <LessonControlButtons />
        </li>
      </ul>

    </div>
  );
}