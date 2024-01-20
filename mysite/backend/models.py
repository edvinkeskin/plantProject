from django.db import models

# Create your models here.
class Listing(models.Model):
    STATUS_CHOICES = {
        "open": "open",
        "closed": "closed"
    }

    seller = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=150)
    description = models.TextField()
    city = models.CharField(max_length=50)
    province = models.CharField(max_length=2)
    country = models.CharField(max_length=3)
    pricePerLb = models.DecimalField(decimal_places=2)
    expiryDate = models.DateField()
    status = models.CharField(max_length=6, default="open", choices=STATUS_CHOICES)
    dateCreated = models.DateField()
    image = models.FileField()
    