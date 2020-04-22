from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Teacher(models.Model):
    user =  models.OneToOneField(User, on_delete=models.CASCADE,)
    code_institutional = models.CharField('institutional code', max_length=10)

    class Meta:
        verbose_name_plural = "Teachers"

    def __str__(self):
        return self.user.username


class Course(models.Model):
    name = models.CharField('name of course', max_length=30)
    maxLength = models.IntegerField()
    minLength = models.IntegerField()

    class Meta:
        ordering = ["name"]
        verbose_name_plural = "Courses"

    def __str__(self):
        return self.name


class TeacherCourse(models.Model):
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    course = models.OneToOneField(Course, on_delete=models.CASCADE,)

    class Meta:
        verbose_name_plural = "Teacher Courses"

    def __str__(self):
        return self.course.name


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,)
    code_institutional = models.CharField('institutional code', max_length=10)

    class Meta:
        verbose_name_plural = "Students"

    def __str__(self):
        return self.user.username


class StudentCourse(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ManyToManyField(Course)

    class Meta:
        verbose_name_plural = "Student Courses"

    def __str__(self):
        return self.student.user.username
