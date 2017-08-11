---
layout: default
---

{% for post in site.posts %}
  <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
  <p class="date">{{ post.date | date: "%b %-d, %Y" }}</p>
  <p>{{ post.excerpt | truncatewords: 50 }}</p>
  <p class="f7"><a href="{{ post.url }}">Read full post</a></p>
  <hr>
{% endfor %}