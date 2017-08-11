---
layout: page
permalink: /portfolio/
order: 1
---

{% for portfolio in site.portfolio %}
  <section>
    <h1 class='pb2 tc'><a href="{{ portfolio.url }}">{{ portfolio.title }}</a></h1>
    <div class='portfolio pb4'>
    <a href="{{ portfolio.url }}"><img class='dim' src="{{ portfolio.thumbnail }}" /></a>
    </div>
  </section>
{% endfor %}

You can see more of my work by visiting my [GitHub profile](https://github.com/behica).
