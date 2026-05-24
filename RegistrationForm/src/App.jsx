import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./styles.css";

function App() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
  });

  // Load directly from localStorage
  const [students, setStudents] = useState(() => {
    return JSON.parse(localStorage.getItem("students")) || [];
  });

  // Handle input change
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStudents = [...students, student];

    setStudents(updatedStudents);

    // Save to localStorage
    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );

    alert("Student Registered Successfully!");

    // Clear form
    setStudent({
      name: "",
      email: "",
      mobile: "",
      course: "",
    });
  };

  return (
    <div className="container">
      <h1>Student Registration Portal</h1>

      <StudentForm
        student={student}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <StudentList students={students} />
    </div>
  );
}

export default App;