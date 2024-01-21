from rest_framework import serializers

from backend.models.listing import Listing


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
            "price",
            "expiryDate",
            "status",
            "dateCreated",
            "image"
        ]
        