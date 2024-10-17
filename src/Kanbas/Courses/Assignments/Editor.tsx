import React from "react";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments-editor" className="m-3">
      {assignments.filter((assign) => assign._id === aid)
        .map((assign: any) => (
          <div className="container" key={assign._id}>
            <form>
              <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input id="wd-name" type="text" className="form-control"
                  defaultValue={assign.title} />
              </div>

              <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">Description</label>
                <textarea id="wd-description" className="form-control"
                  defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify..."
                  rows={3}></textarea>
              </div>

              <div className="row mb-3">
                <label htmlFor="wd-points" className="col-sm-4 col-form-label text-end">Points</label>
                <div className="col-sm-8">
                  <input type="text" className="form-control" id="wd-points" defaultValue={assign.points} />
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="wd-group" className="col-sm-4 col-form-label text-end">Assignment Group</label>
                <div className="col-sm-8">
                  <select id="wd-group" className="form-select" defaultValue="ASSIGNMENTS">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="Group1">Group1</option>
                    <option value="Group2">Group2</option>
                    <option value="Group3">Group3</option>
                  </select>
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="wd-display-grade-as" className="col-sm-4 col-form-label text-end">Display Grade as</label>
                <div className="col-sm-8">
                  <select id="wd-display-grade-as" className="form-select" defaultValue="Percentage">
                    <option value="Percentage">Percentage</option>
                    <option value="Points">Points</option>
                  </select>
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="wd-submission-type" className="col-sm-4 col-form-label text-end">Submission Type</label>
                <div className="col-sm-8 border p-3">
                  <select id="wd-submission-type" className="form-select" defaultValue="Online">
                    <option value="Online">Online</option>
                    <option value="In-person">In-person</option>
                  </select>

                  <div className="mt-3 border p-3">
                    <label>Online Entry Options</label>
                    <div className="form-check">
                      <input type="checkbox" id="textEntry" className="form-check-input" />
                      <label htmlFor="textEntry" className="form-check-label">Text Entry</label>
                    </div>
                    <div className="form-check">
                      <input id="websiteURL" type="checkbox" className="form-check-input" />
                      <label htmlFor="websiteURL" className="form-check-label">Website URL</label>
                    </div>
                    <div className="form-check">
                      <input id="mediaRecordings" type="checkbox" className="form-check-input" />
                      <label htmlFor="mediaRecordings" className="form-check-label">Media Recordings</label>
                    </div>
                    <div className="form-check">
                      <input id="studentAnnotation" type="checkbox" className="form-check-input" />
                      <label htmlFor="studentAnnotation" className="form-check-label">Student Annotation</label>
                    </div>
                    <div className="form-check">
                      <input id="fileUploads" type="checkbox" className="form-check-input" />
                      <label htmlFor="fileUploads" className="form-check-label">File Uploads</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-4 col-form-label text-end">
                  Assign
                </div>
                <div className="col-6">
                  <div className="border rounded-top p-4" id="assignment-assign-box">
                    <div className="row mb-3">
                      <div>
                        <label htmlFor="assign-to" className="form-label">
                          <h6>Assign to</h6>
                        </label>
                        <input type="text" className="form-control" name="assign-to" id="assign-to" defaultValue="Everyone" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="due" className="form-label">
                        <h6>Due</h6>
                      </label>
                      <div className="input-group">
                        <input type="date" className="form-control" name="due" id="due" defaultValue={assign.endDate} />
                      </div>
                    </div>
                    <div className="row" id="available-from-until-container">
                      <div className="col">
                        <label htmlFor="available-from" className="form-label">
                          <h6>Available From</h6>
                        </label>
                        <div className="input-group">
                          <input type="date" className="form-control" name="available-from" id="available-from" defaultValue={assign.startDate} />
                        </div>
                      </div>
                      <div className="col">
                        <label htmlFor="available-until" className="form-label">
                          <h6>Until</h6>
                        </label>
                        <div className="input-group">
                          <input type="date" className="form-control" id="available-until" name="available-until" defaultValue={assign.endDate} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-flex flex-row" id="assignment-form-buttons-container">
                <div className="ms-auto">
                  <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                    <button className="btn btn-secondary me-1" type="button">
                      Cancel
                    </button>
                  </Link>
                  <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                    <button className="btn btn-danger me-1" type="button">
                      Save
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        ))}
    </div>
  );
}
