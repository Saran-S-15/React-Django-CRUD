from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from studentApp.serializer import StudentSerializer
from studentApp.models import Student

# Create your views here.

@api_view(['GET'])
def get_students(request):
    students = Student.objects.all()
    serializedData = StudentSerializer(students, many=True)
    return Response(serializedData.data)

@api_view(['POST'])
def create_student(request):
    data = request.data
    serialize = StudentSerializer(data=data)
    if serialize.is_valid():
        serialize.save()
        return Response(serialize.data, status=status.HTTP_201_CREATED)
    return Response(serialize.error, status=status.HTTP_400_REQUEST)

@api_view(['DELETE'])
def delete_student(request, id):
    try:
        student = Student.objects.get(id=id)
        student.delete()
        return Response({"message":"Deleted Successfully"}, status=status.HTTP_204_NO_CONTENT)
    except Student.DoesNotExist:
        return Response({"message":"Student Not Found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['PUT'])
def update_student(request, id):
    try:
        student = Student.objects.get(id=id)
        serialize = StudentSerializer(student, data=request.data)
        if serialize.is_valid():
            serialize.save()
            return Response({"message":"Updated Successfully"}, status=status.HTTP_201_CREATED)
    except Student.DoesNotExist:
        return Response({"error":"No Such Data to Edit"}, status=status.HTTP_404_NOT_FOUND)