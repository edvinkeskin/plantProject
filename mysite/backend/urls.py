from django.urls import path

from .views import user

urlpatterns = [
    path(r'register', user.RegisterView.as_view()),
    path(r'login', user.LoginView.as_view()),
#   path(r'logout/', views.LogoutView.as_view()),
]
