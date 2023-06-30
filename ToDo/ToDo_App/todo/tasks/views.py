from rest_framework import generics
from .models import Task
from .serializers import TaskSerializers


class TaskList(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializers


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all
    serializer_class = TaskSerializers




