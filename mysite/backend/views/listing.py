from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status, permissions

from rest_framework.response import Response

from ..models.listing import Listing
from ..serializers.listing import ListingSerializer


class ListingViewSet(viewsets.ModelViewSet):
    serializer_class = ListingSerializer
    permission_classes = [permissions.AllowAny]

    def list(self, request, *args, **kwargs):
        list_filter = request.query_params.get("filter")
        listing = Listing.objects.all().order_by(list_filter)
        serializer = ListingSerializer(listing, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        listing = request.data.get("listing")
        user_id = request.data.get("user_id")

        user = get_object_or_404(User, pk=user_id)

        Listing.objects.create(
            seller=user,
            **{key: listing.get(key) for key in ["name", "description", "city", "province", "country", "price", "expiryDate", "status", "dateCreated", "image"]}
        )

        return Response(status=status.HTTP_201_CREATED)
