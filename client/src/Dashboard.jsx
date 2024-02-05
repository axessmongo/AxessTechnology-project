
function Dashboard() {

  const projects = [
    {
      id: 1,
      name: 'Project A',
      description: 'Lorem ipsum dolor sit amet',
      completionDate: '2024-02-10',
      remarks: 'On track'
    },
    {
      id: 2,
      name: 'Project B',
      description: 'Consectetur adipiscing elit',
      completionDate: '2024-03-15',
      remarks: 'Delayed'
    },
    {
      id: 3,
      name: 'Project C',  
      description: 'Sed do eiusmod tempor incididunt',
      completionDate: '2024-02-28',
      remarks: 'Completed'
    },
    {
      id: 4,
      name: 'Project C',
      description: 'Sed do eiusmod tempor incididunt',
      completionDate: '2024-02-28',
      remarks: 'Completed'
    }
  ];

  return (
    <div className="dashboard-container">

      <div>
        <h2 className="dashboard-title">Client Dashboard</h2>
        <div className="table-container">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Project Name</th>
                <th>Description</th>
                <th>Completion Date</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={project.id}>
                  <td>{index + 1}</td>
                  <td>{project.name}</td>
                  <td>{project.description}</td>
                  <td>{project.completionDate}</td>
                  <td>{project.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
        <h2 className="dashboard-title">Axess Dashboard</h2>
        <div className="table-container">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Project Lead</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={project.id}>
                  <td>{index + 1}</td>
                  <td>{project.Lead}</td>
                  <td>{project.description}</td>
                  <td>{project.Status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
