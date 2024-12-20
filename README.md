# **Student Details CRUD Using React & Django**

A Basic full-stack **Using React & Django** built with React.js for the frontend and Django REST Framework (DRF) for the backend. The system allows users to perform CRUD operations on student data with robust form validation and a responsive design.

---

## **Features**
- **Add Student**: Create new student records.
- **View Students**: Display all student details in a tabular format.
- **Update Student**: Modify existing student records.
- **Delete Student**: Remove student records from the database.
- **Form Validation**: Includes validation for all fields using Formik.
- **Responsive Design**: Styled with Material-UI and Bootstrap for responsiveness.

---

## **Tech Stack**
### **Frontend**
- React.js
- Formik
- Material-UI
- Bootstrap
- Axios

### **Backend**
- Django REST Framework (DRF)
- SQLite 

---

## **Getting Started**

### **Prerequisites**
Ensure the following are installed on your system:
- **Node.js**
- **Python 3.x**
- **Django**

---

### **Backend Setup**
1. Clone the repository:
   ```bash
    1. git clone <repository-url>

	2. cd server, cd api

	3. pip install django djangorestframework django-cors-headers

	4. python manage.py runserver

### **Frontend Setup**
    1. cd client

	2. npm install
 
	3. npm run dev

---

## API Endpoints
- GET /api/students/: Retrieve all student records.
- POST /api/students/create/: Add a new student record.
- PUT /api/students/update//: Update an existing student record.
- DELETE /api/students/delete//: Delete a student record.

---

## **Folder Structure**

## Frontend
-	**App.js: Main component for UI and logic.**
-	**useStudent.js: Custom hook for API interactions.**

## Backend
-	**models.py: Defines the Student model.**
-	**serializer.py: Serializes the Student model for API communication.**
-	**views.py: Handles CRUD operations.**

---

## Form Validation
-	Formik:
-	Ensures all fields are filled.
-	Validates the email format.
-	Provides error messages for invalid inputs.
-	Django REST Framework:
-	Validates data on the server-side using serializers.

License

This project is licensed under the MIT License.
