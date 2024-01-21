from rest_framework import serializers
from mysite.backend.models.listing import Listing


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
        