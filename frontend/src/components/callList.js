export default function CallList({ calls }) {
  return (
    <div>
      <h3>Previous Calls</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Workflow</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {calls.map((call) => (
            <tr key={call.id}>
              <td>{call.customerName}</td>
              <td>{call.phoneNumber}</td>
              <td>{call.workflow}</td>
              <td>{call.status} {call.retries > 0 && `(retries: ${call.retries})`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
