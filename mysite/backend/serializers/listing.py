from rest_framework import serializers

from ..models.listing import Listing


class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = [
            "id",
            "seller",
            "name",
            "description",
            "city",
            "price",
            "expiryDate",
            "status",
            "dateCreated",
            "image"
        ]
        