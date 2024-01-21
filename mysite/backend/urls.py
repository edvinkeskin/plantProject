from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views.listing import ListingViewSet
from .views.user import RegisterView, LoginView, LogoutView

router = DefaultRouter()
router.register(r"listings", ListingViewSet, basename="listings")

urlpatterns = [
    path(r'register', RegisterView.as_view()),
    path(r'login', LoginView.as_view()),
    path(r'logout', LogoutView.as_view()),
    path("", include(router.urls)),
]
