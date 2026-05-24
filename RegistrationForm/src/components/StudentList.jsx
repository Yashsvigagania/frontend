import React from "react";

function StudentList({ students }) {
  return (
    <div>
      <h2>Registered Students</h2>

      {students.length === 0 ? (
        <p>No students registered yet.</p>
      ) : (
        students.map((s, index) => (
          <div
            key={index}
            className="student-card"
          >
            <p>
              <strong>Name:</strong> {s.name}
            </p>

            <p>
              <strong>Email:</strong> {s.email}
            </p>

            <p>
              <strong>Mobile:</strong> {s.mobile}
            </p>

            <p>
              <strong>Course:</strong> {s.course}
            </p>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default StudentList;