from django.urls import include, re_path
from UserApp import views

urlpatterns=[
    re_path(r'^Users/$',views.UserApi),
    re_path(r'^Users/([0-9]+)$', views.UserApi)
]
