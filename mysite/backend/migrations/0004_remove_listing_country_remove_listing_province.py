# Generated by Django 4.2.6 on 2024-01-21 09:34

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("backend", "0003_rename_priceperlb_listing_price"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="listing",
            name="country",
        ),
        migrations.RemoveField(
            model_name="listing",
            name="province",
        ),
    ]