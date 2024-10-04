import React from "react";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="m-3">
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="wd-name" className="form-label">Assignment Name</label>
            <input id="wd-name" type="text" className="form-control"
              defaultValue="A1 - ENV + HTML"/>
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
              <input type="text" className="form-control" id="wd-points" defaultValue="100" />
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
                  <input type="checkbox" id="textEntry" className="form-check-input"/>
                  <label htmlFor="textEntry" className="form-check-label">Text Entry</label>
                </div>
                <div className="form-check">
                  <input id="websiteURL" type="checkbox" className="form-check-input"/>
                  <label htmlFor="websiteURL" className="form-check-label">Website URL</label>
                </div>
                <div className="form-check">
                  <input id="mediaRecordings" type="checkbox"  className="form-check-input"/>
                  <label htmlFor="mediaRecordings" className="form-check-label">Media Recordings</label>
                </div>
                <div className="form-check">
                  <input id="studentAnnotation" type="checkbox" className="form-check-input"/>
                  <label htmlFor="studentAnnotation" className="form-check-label">Student Annotation</label>
                </div>
                <div className="form-check">
                  <input id="fileUploads" type="checkbox" className="form-check-input"/>
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
                            <input type="date" className="form-control" name="due" id="due" defaultValue="2024-05-13" /> 
                        </div>
                    </div>
                    <div className="row" id="available-from-until-container">
                        <div className="col">
                            <label htmlFor="available-from" className="form-label">
                                <h6>Available From</h6>
                            </label>
                            <div className="input-group">
                                <input type="date" className="form-control" name="available-from" id="available-from" defaultValue="2024-05-06" /> 
                            </div>
                        </div>
                        <div className="col">
                            <label htmlFor="available-until" className="form-label">
                                <h6>Until</h6>
                            </label>
                            <div className="input-group">
                                <input type="date" className="form-control" id="available-until" name="available-until" defaultValue="2024-05-20" /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <hr />
          <div className="d-flex flex-row" id="assignment-form-buttons-container">
            <div className="ms-auto">
                <button className="btn btn-secondary me-1">
                    Cancel
                </button>
                <button className="btn btn-danger me-1">
                    Save
                </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
