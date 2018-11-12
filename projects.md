---
layout: page
permalink: /projects/
order: 1
---

You can see more of my work by visiting my [GitHub profile](https://github.com/behica).

{% for projects in site.projects %}
  <section>
    <h1 class='pb2 tc'><a href="{{ projects.url }}">{{ projects.title }}</a></h1>
    <div class='portfolio pb4'>
    <a href="{{ projects.url }}"><img class='dim' src="{{ projects.thumbnail }}" /></a>
    </div>
  </section>
{% endfor %}
