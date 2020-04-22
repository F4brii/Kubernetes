from schedule.models import Teacher, Student, Course, TeacherCourse, StudentCourse
from schedule.serializers import TeacherSerializer, StudentSerializer, CourseSerializer, TeacherCourseSerializer, StudentCourseSerializer, UserSerializer
from django.http import Http404
from django.contrib.auth.models import User
from rest_framework import generics


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):

    queryset = User.objects.all()
    serializer_class = UserSerializer


class TeacherList(generics.ListCreateAPIView):

    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):

    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class StudentList(generics.ListCreateAPIView):

    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentDetail(generics.RetrieveUpdateDestroyAPIView):

    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class CourseList(generics.ListCreateAPIView):

    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseDetail(generics.RetrieveUpdateDestroyAPIView):

    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class TeacherCourseList(generics.ListCreateAPIView):

    queryset = TeacherCourse.objects.all()
    serializer_class = TeacherCourseSerializer


class TeacherCourseDetail(generics.RetrieveUpdateDestroyAPIView):

    queryset = TeacherCourse.objects.all()
    serializer_class = TeacherCourseSerializer


class StudentCourseList(generics.ListCreateAPIView):

    queryset = StudentCourse.objects.all()
    serializer_class = StudentCourseSerializer


class StudentCourseDetail(generics.RetrieveUpdateDestroyAPIView):

    queryset = StudentCourse.objects.all()
    serializer_class = StudentCourseSerializer
