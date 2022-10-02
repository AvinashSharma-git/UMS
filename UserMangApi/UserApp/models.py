from django.db import models

# Create your models here.

class Users(models.Model):
    UserId = models.AutoField(primary_key=True)
    UserName = models.CharField(max_length=100)
    UserAddress = models.CharField(max_length=200)
    UserAge = models.IntegerField()
    UserProfession = models.CharField(max_length=200)
    UserSportInterestRate = models.IntegerField()


