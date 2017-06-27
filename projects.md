---
layout: page
title: Projects
permalink: /projects/
order: 1
---

{% for project in site.projects %}
  <article>
    <center>
    <h1><a href="{{ project.url }}">{{ project.title }}
    <img src="{{ project.thumbnail }}" /></a></h1>
    </center>
  </article>
{% endfor %}
