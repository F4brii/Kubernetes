from django.contrib import admin
from schedule.models import Teacher, Course, Student, TeacherCourse, StudentCourse

# Register your models here.

admin.site.register(Teacher)
admin.site.register(Course)
admin.site.register(Student)
admin.site.register(TeacherCourse)
admin.site.register(StudentCourse)
