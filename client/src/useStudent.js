import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useStudent() {
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/students/")
            setStudents(response.data);
        } catch (error) {
            alert("Something went Wrong in Fetching")
        }
    }

    useEffect(() => {
      fetchStudents();
    }, [])
    
  return {
    students,
    fetchStudents,
  }
}

export default useStudent;