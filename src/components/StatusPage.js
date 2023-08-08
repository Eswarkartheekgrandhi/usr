import React from "react";

function StatusPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.png" alt="logo-here" />
      </header>
      <div className="separator"></div>
      <div className="ico">
        <div className="left">
          <button>Add USR</button>
        </div>
        <div className="right">
          <button>EXPORT</button>
          <button>DELETE</button>
        </div>
      </div>
      <div className="tables">
        <table>
          <tr>
            <th>Discourse Name</th>
            <th>Total USR</th>
            <th>USR Validate</th>
            <th>Pending</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default StatusPage;
