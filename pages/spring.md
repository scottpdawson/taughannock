---
title: "Spring"
permalink: "seasons/spring/"
hero: "/images/taughannock_eddy_march.jpg"
description: "Depending on the year, spring-like temperatures may wait until the end of March of mid-April to appear in full force. Taughannock sheds its ice and snow and, through a gradual warming of temperatures, starts to grow a fresh coat of green once more."
includeInSeasonMenu: true
---

{% pictureRt "/images/img_0678.jpg", "Water flows under thin ice sheets" %}

Depending on the year, spring-like temperatures may wait until the end of March of mid-April to appear in full force. Taughannock sheds its ice and snow and, through a gradual warming of temperatures, starts to grow a fresh coat of green once more.

In late March, the [Ithaca Polar Plunge](http://www.polarplungeny.org/ithaca) raises money for New York's Special Olympics athletes. Who doesn't love a swim in Cayuga Lake, any time of the year?

Once temperatures moderate consistently past the freezing point, the park re-opens the North Rim Trail stairs and the bottom half of the South Rim Trail, giving hikers and runners a road-free loop option once more.

Spring's last days go out with a volunteerism bang. [I Love My Park Day](https://www.ptny.org/events/i-love-my-park-day), a statewide event held the first Saturday in May, brings volunteers into the park to help with a variety of projects to get ready for the summer ahead.

## Spring Videos, Photos & News

<div class="main-carousel" data-flickity='{ "fullscreen": false, "wrapAround": "true", "autoPlay": 7000, "pauseAutoPlayOnHover": true }'>
  {%- for item in collections.spring | reverse  -%}
  {% if loop.index <= 6 %}
  {% include '_includes/components/carousel-cell.njk' %}
  {% endif %}
  {%- endfor -%}
</div>

<h2>More Posts</h2>
<ul class="post-list">
  {%- for item in collections.spring | reverse  -%}
  {% if loop.index > 6 %}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>