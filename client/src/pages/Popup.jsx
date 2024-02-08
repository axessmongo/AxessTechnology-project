import React from "react";

function Popup() {
  return (
    <div className="popup   ">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Project ➕
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog my-5 ">
          <div class="modal-content">
            <div class="modal-header bg-green-1 text-light">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Project Details
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body bg">
              <div className="form text-center">
                <label htmlFor="" className="fs-4 mb-2">
                  {" "}
                  Project Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="mb-4 text-center"
                  placeholder="Project Name"
                />
                <label className="fs-4 mb-2" htmlFor="">
                  Project Complete Date
                </label>
                <input
                  type="date"
                  className="mb-4 text-center"
                  placeholder="Project Name"
                />
                <br />
                <label htmlFor="" className="fs-4 mb-2">
                  {" "}
                  Description
                </label>{" "}
                <br />
                <textarea className="datemb-4 text-center"></textarea>
                <br />
                <label htmlFor="" className="fs-4 mb-2">
                  {" "}
                  Status
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="mb-4 text-center"
                  placeholder="Status"
                />
                <br />
              </div>
            </div>
            <div class="modal-footer bg-green-1 text-light">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <table>
          <tr>
            <th>S.No</th>
            <th>Project Name</th>
            <th>Description</th>
            <th>Remarks</th>
            <th>Project Lead</th>
            <th>Status</th>
            <th> Complete Date</th>
          </tr>
          <tr>
            <td>01</td>
            <td>Catering</td>
            <td>
              Full Animation Webside Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Iure minus facilis illum fugit corrupti quia
              distinctio nobis odio, totam laudantium quam consectetur et
              reiciendis ipsum adipisci sed explicabo rerum voluptatem.
            </td>
            <td>yyy</td>
            <td>Nivetha</td>
            <td>Process</td>
            <td>31/03/2024</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Popup;
