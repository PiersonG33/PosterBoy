from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Posts, Boards, UserActions, UserStatus, PostArchive

class BoardSerializer(serializers.ModelSerializer):
      class Meta:
            model = Boards
            fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    class Meta: 
            model = Posts
            fields = '__all__'

class UserActionsSerializer(serializers.ModelSerializer):
      class Meta:
            model = UserActions
            fields = '__all__'

class UserStatusSerializer(serializers.ModelSerializer):
      class Meta:
            model = UserStatus
            fields = '__all__'

class PostArchiveSerializer(serializers.ModelSerializer):
      class Meta:
            model = PostArchive
            fields = '__all__'

class UserSerializer(serializers.Serializer):
      id = serializers.IntegerField()
      username = serializers.CharField(max_length = 150)
      email = serializers.EmailField()

      def create(self, validated_data):
            return User.objects.create(**validated_data)
      
      def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        return instance