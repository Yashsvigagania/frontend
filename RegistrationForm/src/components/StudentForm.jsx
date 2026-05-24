import React from "react";

function StudentForm({
  student,
  handleChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={student.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={student.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="mobile"
        placeholder="Enter Mobile Number"
        value={student.mobile}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={student.course}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Register Student
      </button>
    </form>
  );
}

export default StudentForm;