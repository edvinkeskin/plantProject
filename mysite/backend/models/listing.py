from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Listing(models.Model):
    STATUS_CHOICES = [
        ("open", "Open"),
        ("closed", "Closed"),
    ]

    seller = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=150)
    description = models.TextField()
    city = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    expiryDate = models.DateField()
    status = models.CharField(max_length=6, default="open", choices=STATUS_CHOICES)
    dateCreated = models.DateField(auto_now_add=True)
    image = models.ImageField(upload_to="listings")
