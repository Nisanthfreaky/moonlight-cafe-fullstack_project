from django.shortcuts import render, redirect
from .models import Reservation, Contact


def home(request):
    return render(request, "main/index.html")


def reservation(request):

    if request.method == "POST":

        name = request.POST.get("name")
        phone = request.POST.get("phone")
        date = request.POST.get("date")
        time = request.POST.get("time")
        people = request.POST.get("people")

        Reservation.objects.create(
            name=name,
            phone=phone,
            date=date,
            time=time,
            people=people
        )

    return redirect("/")


def contact(request):

    if request.method == "POST":

        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        Contact.objects.create(
            name=name,
            email=email,
            message=message
        )

    return redirect("/")