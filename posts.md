---
layout: default
---

{% for post in site.posts %}
  <a href="{{ post.url }}"><img class="post_preview" src="{{post.image}}" height="200" /></a>
  <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
  <p class="date">{{ post.date | date: "%b %-d, %Y" }}</p>
  <p>{{ post.excerpt | excerpt }}</p>
  <p class="f7"><a href="{{ post.url }}">Read full post</a></p>
  <hr>
{% endfor %}
