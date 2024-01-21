from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from ..serializers.user import UserSerializer

@api_view(["POST"])
def register(request):
    try:
        User.objects.get(email=request.data.get("email"))
        return Response({ "error": "user already exists" })
    except User.DoesNotExist:
        pass

    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()
        login(request, user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
