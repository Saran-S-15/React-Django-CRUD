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
    1. git clone https://github.com/Saran-S-15/React-Django-CRUD

	2. cd server, cd api

	3. pip install django djangorestframework django-cors-headers

	4. python manage.py runserver

### **Frontend Setup**
    1. cd client

	2. npm install
 
	3. npm run dev

---

## 1. Create Data
<img width="1439" alt="Screenshot 2024-12-21 at 12 00 17 AM" src="https://github.com/user-attachments/assets/5ae1e000-1faf-4204-84e4-d2c063017795" />

## 2. Data Added in the Table
<img width="1440" alt="Screenshot 2024-12-21 at 12 00 37 AM" src="https://github.com/user-attachments/assets/61b61623-a8f1-478d-be8c-cf5449ff3ce8" />


## 3. Update Data
<img width="1436" alt="Screenshot 2024-12-21 at 12 01 05 AM" src="https://github.com/user-attachments/assets/5c6eed41-e289-4182-84cb-18ca159fcac7" />

## 4. Delete Data
<img width="1440" alt="Screenshot 2024-12-21 at 12 02 36 AM" src="https://github.com/user-attachments/assets/2bc9c5f3-e871-410e-9625-ad80b12d637b" />


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
