from rest_framework import serializers
from api.models import Posts


class PostSerializer(serializers.ModelSerializer):
    class Meta: 
            model = Posts
            fields = ['userid','boardid','id','date','color','message','message_type','score','x','y']