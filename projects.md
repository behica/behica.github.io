---
layout: page
permalink: /projects/
order: 1
---

{% for project in site.projects %}
  <article>
    <center>
    <h1 class='pa2'><a href="{{ project.url }}">{{ project.title }}</a></h1>
    <div class='project'>
      <a href="{{ project.url }}"><img class='dim' src="{{ project.thumbnail }}" /></a>
    </div>
    </center>
  </article>
{% endfor %}
