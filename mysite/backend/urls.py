from django.urls import path
from backend.views import user

urlpatterns = [
    path('register', user.register)
]