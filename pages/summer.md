---
title: "Summer"
permalink: "seasons/summer/"
hero: "/images/IMG_8427a.jpg"
description: "Taughannock is so lively during the summer months! It's vacation time, and people love to come and hike the trails, stop at the overlook or hang out at the park for the day and enjoy the water."
includeInSeasonMenu: true
---

{% pictureRt "/images/IMG_4546.jpg", "Gorgeous greenery frames the falls" %}
Taughannock is so lively during the summer months! It's vacation time, and people love to come and hike the trails, stop at the overlook or hang out at the park for the day and enjoy the water. There are so many things to do: camping, swimming, renting a canoe or enjoying ice cream from the concession stand.

The [Summer Concert Series](/activities/taughannock-falls-state-park-summer-concert-series/) is a seasonal highlight, with fantastic bands, a wonderful viewing atmosphere and one of the most beautiful backdrops around. The [Cayuga Lake Triathlon](/activities/cayuga-lake-triathlon/) is also an incredible draw, hosting thousands of athletes and spectators for a fun-filled weekend.

## Summer Videos, Photos & News

<div class="main-carousel" data-flickity='{ "fullscreen": false, "wrapAround": "true", "autoPlay": 7000, "pauseAutoPlayOnHover": true }'>
  {%- for item in collections.summer | reverse  -%}
  {% if loop.index <= 6 %}
  {% include '_includes/components/carousel-cell.njk' %}
  {% endif %}
  {%- endfor -%}
</div>

<h2>More Posts</h2>
<ul class="post-list">
  {%- for item in collections.summer | reverse  -%}
  {% if loop.index > 6 %}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>