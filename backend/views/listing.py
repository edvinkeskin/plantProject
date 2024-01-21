from rest_framework import viewsets, status

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from backend.models.listing import Listing
from backend.serializers.listing import ListingSerializer


class ListingViewSet(viewsets.ModelViewSet):
    serializer_class = ListingSerializer
    permission_classes = (IsAuthenticated,)

    def list(self, request, *args, **kwargs):
        list_filter = request.data.get("filter")
        listing = Listing.objects.all().order_by(list_filter)
        serializer = ListingSerializer(listing, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        listing = request.data.get("listing")
        Listing.objects.create(
            seller=self.request.user,
            name=listing.get("name"),
            description=listing.get("description"),
            city=listing.get("city"),
            province=listing.get("province"),
            country=listing.get("country"),
            price=listing.get("price"),
            expiryDate=listing.get("expiryDate"),
            status=listing.get("status"),
            dateCreated=listing.get("dateCreated"),
            image=listing.get("image")
        )
        return Response(status=status.HTTP_201_CREATED)
