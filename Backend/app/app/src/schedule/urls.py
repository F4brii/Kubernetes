from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from schedule import views

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('user/<int:pk>/', views.UserDetail.as_view()),
    path('teachers/', views.TeacherList.as_view()),
    path('teacher/<int:pk>/', views.TeacherDetail.as_view()),
    path('students/', views.StudentList.as_view()),
    path('student/<int:pk>/', views.StudentDetail.as_view()),
    path('courses/', views.CourseList.as_view()),
    path('course/<int:pk>/', views.CourseDetail.as_view()),
    path('teacher-courses/', views.TeacherCourseList.as_view()),
    path('teacher-course/<int:pk>/', views.TeacherCourseDetail.as_view()),
    path('student-courses/', views.StudentCourseList.as_view()),
    path('student-course/<int:pk>/', views.StudentCourseDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)