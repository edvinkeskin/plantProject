# Generated by Django 4.2.6 on 2024-01-21 01:45

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("backend", "0002_alter_listing_image"),
    ]

    operations = [
        migrations.RenameField(
            model_name="listing",
            old_name="pricePerLb",
            new_name="price",
        ),
    ]
