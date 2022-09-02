from django.db import models
from django.db import models
from django.contrib.auth.models import AbstractUser

class AppUser(AbstractUser):
    first_name = models.CharField(max_length=50, null=False, default='unkown')
    last_name = models.CharField(max_length=50, null=False, default='unknown')
    job_title = models.CharField(max_length=100, null=False, default='unknown')
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    profile_picture = models.CharField(
        max_length=250, default='https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg')
    residing_state = models.CharField(max_length=250, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class MyPokemon(models.Model):
    name= models.CharField(max_length=250, null=False)
    nickname = models.CharField(max_length=250, null=True)
    move_one = models.CharField(max_length=250, null=True)
    move_two = models.CharField(max_length=250, null=True)
    move_three = models.CharField(max_length=250, null=True)
    move_four = models.CharField(max_length=250, null=True)
    picture = models.CharField(max_length=250, default="none")
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE)