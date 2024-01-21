from rest_framework import serializers

from ..models.listing import Listing
from ..serializers.user import UserSerializer


class ListingSerializer(serializers.ModelSerializer):
    seller = UserSerializer()
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
        