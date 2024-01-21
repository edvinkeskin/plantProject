from .models.listing import Listing
from rest_framework import serializers

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = [
            "id",
            "seller",
            "name",
            "description",
            "city",
            "province",
            "country",
            "pricePerLb",
            "expiryDate",
            "status",
            "dateCreated",
            "image"
        ]
        