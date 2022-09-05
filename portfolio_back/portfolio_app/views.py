from django.http import HttpResponse
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core import serializers
from .models import *




# Create your views here.
def home(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(['POST'])
def sign_up(request):
    try:
        user = AppUser.objects.create_user(
            first_name=request.data['firstName'],
            last_name=request.data['lastName'],
            job_title=request.data['jobTitle'],
            username=request.data['email'],
            password=request.data['password'],
            email=request.data['email'])
        user.save()
        return Response({"message":"new user was added"})
    except Exception as e :
        return Response({"message": e})
    


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
                pass
            return HttpResponse('Youre logged in')
        else:
            return HttpResponse('Not Active')
    else:
        return HttpResponse('No user recognized')
        


@api_view(['POST'])
def log_out(request):
    try:
        logout(request)
        return HttpResponse('Logged Out')
    except:
        pass


@api_view(['GET'])
def curr_user(request):
    try:
        if request.user.is_authenticated:
            data = serializers.serialize("json", [request.user], fields=[
                                        'first_name', 'email', 'password'])
            return HttpResponse(data)
        else:
            return JsonResponse({'user': None})
    except:
        pass

@api_view(['GET'])
def profile_page(request):
    try:
        current_user = AppUser.objects.filter(id=request.user.id).values()[0]
        return Response(current_user)
    except:
        pass
    
@api_view(["POST"])
def savePokemon(request):
    try:
        curr_user= AppUser.objects.get(id = request.user.id)
        if curr_user.number_of_pokemon < 6:
            try:
                user = request.user
                name=request.data["name"]
                move_one=request.data["move_one"]
                move_two=request.data["move_two"]
                move_three=request.data["move_three"]
                move_four=request.data["move_four"]
                picture= request.data["picture"]
                newPokemon= MyPokemon.objects.create(user=user, name = name, move_one = move_one, move_two = move_two, move_three = move_three, move_four = move_four, picture = picture)
                newPokemon.save()
                number= request.user.number_of_pokemon
                number +=1
                curr_user.number_of_pokemon = number
                curr_user.save()
                return Response({"success":"you saved a new pokemon"})
            except Exception as e:
                return Response({"failure":"something went wrong in adding a new pokemon"})
        else:
            return Response(False)
    except:
        pass
    
@api_view(['GET'])
def getMyPokemon(request):
    try:
        my_team = MyPokemon.objects.filter(user = request.user).values()
        return Response(my_team)
    except:
        pass

@api_view(['DELETE'])
def release_pokemon(request, id):
    try:
        currUser = AppUser.objects.get(id = request.user.id)
        currUser.number_of_pokemon = currUser.number_of_pokemon - 1
        currUser.save()
        pokemonToRelease= MyPokemon.objects.get(id = id)
        pokemonToRelease.delete()
        return Response({"success": "you released a pokemon"})
    except:
        return Response({"failure": "pokemon was not released"})

@api_view(['PUT', "GET"])
def badges(request):
    try:
        currUser = AppUser.objects.get(id = request.user.id)
        if request.method == "PUT":
            currUser.number_of_badges +=1
            currUser.save()
            return Response(currUser.number_of_badges)
        if request.method == "GET":
            return Response(currUser.number_of_badges)
    except:
        pass
    