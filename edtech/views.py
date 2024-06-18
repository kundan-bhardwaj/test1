from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')

def details(request):
    img = request.GET.get('img')
    print(img)
    return render(request,'details.html',{'img':img})

def quiz(request):
    return render(request,'quiz.html')

def learningcentre(request):
    return render(request,'learningcentre.html')