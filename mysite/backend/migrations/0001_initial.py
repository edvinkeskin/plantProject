# Generated by Django 4.2.6 on 2024-01-20 23:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Listing",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=150)),
                ("description", models.TextField()),
                ("city", models.CharField(max_length=50)),
                ("province", models.CharField(max_length=2)),
                ("country", models.CharField(max_length=3)),
                ("pricePerLb", models.DecimalField(decimal_places=2, max_digits=5)),
                ("expiryDate", models.DateField()),
                (
                    "status",
                    models.CharField(
                        choices=[("open", "Open"), ("closed", "Closed")],
                        default="open",
                        max_length=6,
                    ),
                ),
                ("dateCreated", models.DateField(auto_now_add=True)),
                ("image", models.FileField(upload_to="")),
                (
                    "seller",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
