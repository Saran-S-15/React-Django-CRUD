import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import useStudent from './useStudent';
import axios from 'axios';
import { useState } from 'react';


function App() {
  const { students, fetchStudents } = useStudent();
  const [update, setUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: ""
    },
    validate: values => {
      let error = {}

      if(values.name===""){
        error.name="Please enter your name"
      }
      if(values.email===""){
        error.email="Please enter your email"
      }else if(!/ ^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(values.email)){
        error.email = "Invalid Email"
      }
      if(values.mobile===""){
        error.mobile="Please enter your mobile"
      }

      return error
    },
    onSubmit: async (values) => {
      try {
        if (update) {
          await axios.put(`http://127.0.0.1:8000/api/students/update/${updateId.id}`, values)
          setUpdate(false)
          setUpdateId(null)
        }
        else {
          await axios.post("http://127.0.0.1:8000/api/students/create/", values);
        }
        fetchStudents();
        formik.resetForm();
      } catch (error) {
        alert("Something went Wrong in Creating", error);
      }
    }
  })

  const deleteStudent = async (student) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/students/delete/${student.id}`)
      fetchStudents();
    } catch (error) {
      alert("Something went Wrong in Deleting")
    }
  }

  const updateStudent = (student) => {
    setUpdate(true)
    setUpdateId(student)
    formik.setValues(student)
  }



  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6 mt-3'>
          <form onSubmit={formik.handleSubmit}>
            <h1 className='text-center fw-bold'>Student Details</h1>
            <TextField fullWidth label="Student Name"
              id="name"
              name="name"
              type="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name} />
              {
                formik.touched.name ? <span style={{color:"red"}}>{formik.errors.name}</span> : null
              }
            <TextField fullWidth label="Email Address"
              className='mt-3'
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email} />
               {
                formik.touched.email ? <span style={{color:"red"}}>{formik.errors.email}</span> : ""
              }
            <TextField fullWidth label="Mobile Number"
              className='mt-3'
              id="mobile"
              name="mobile"
              type="mobile"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobile} />
               {
                formik.touched.mobile ? <span style={{color:"red"}}>{formik.errors.mobile}</span> : ""
              }
            <Button type='submit' sx={{ width: "100%", backgroundColor: "darkcyan" }} className='mt-3' variant="contained">{update ? "Update Student" : "Register"}</Button>
          </form>
        </div>

        <div className='col-lg-6 mt-4'>
          <table className='table table-bordered text-center'>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Student Name</th>
                <th>Email Address</th>
                <th>Mobile Number</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((student) => {
                  return <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.mobile}</td>
                    <td><Button onClick={() => updateStudent(student)} variant="contained" color='secondary'>Update</Button></td>
                    <td><Button onClick={() => deleteStudent(student)} variant="outlined">Delete</Button></td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App;
