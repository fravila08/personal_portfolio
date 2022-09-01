import http
from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core import serializers
from dotenv import load_dotenv
from .models import *
import json
import requests
import os




# Create your views here.
def home(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(['POST'])
def sign_up(request):
    user = AppUser.objects.create_user(
        first_name=request.data['firstName'],
        last_name=request.data['lastName'],
        job_title=request.data['jobTitle'],
        username=request.data['email'],
        password=request.data['password'],
        email=request.data['email'])
    print(user)
    return Response({"message": "success"})


@api_view(['POST'])
def log_in(request):
    email = request.data['email']
    password = request.data['password']
    user = authenticate(username=email, password=password)
    if user is not None:
        if user.is_active:
            try:
                login(request._request, user)
            except Exception as e:
                print(str(e))
            return HttpResponse('Youre logged in')
        else:
            return HttpResponse('Not Active')
    else:
        return HttpResponse('No user recognized')


@api_view(['POST'])
def log_out(request):
    print('here')
    logout(request)
    return HttpResponse('Logged Out')


@api_view(['GET'])
def curr_user(request):
    if request.user.is_authenticated:
        data = serializers.serialize("json", [request.user], fields=[
                                     'first_name', 'email', 'password'])
        return HttpResponse(data)
    else:
        return JsonResponse({'user': None})