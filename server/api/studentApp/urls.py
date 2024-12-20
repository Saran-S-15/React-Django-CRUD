from django.urls import path
from studentApp.views import get_students , create_student, delete_student, update_student

urlpatterns = [
    path("students/", get_students, name="get_students" ),
    path("students/create/", create_student, name="create_student"),
    path("students/delete/<id>", delete_student, name="delete_student"),
    path("students/update/<id>", update_student, name="update_student"),
]