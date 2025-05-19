# models.py
from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    location = models.CharField(max_length=255)
    image = models.ImageField(upload_to='events/', null=True, blank=True)

    def __str__(self):
        return self.title


class Review(models.Model):
    name = models.CharField(max_length=100)
    content = models.TextField()
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name
