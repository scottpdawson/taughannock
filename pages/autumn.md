---
title: "Autumn"
permalink: "seasons/autumn/"
hero: "/images/IMG_9526.jpg"
description: "There are warm days and cooler nights, and the trees throughout the park trade their summer coats of green for brilliant reds, yellows and oranges."
includeInSeasonMenu: true
---

{% pictureRt "/images/IMG_7312.jpg", "Leaves cover the Black Diamond Trail" %}

As kids go back to school in September, there's a marked change in the air, too. There are warm days and cooler nights, and the trees throughout the park trade their summer coats of green for brilliant reds, yellows and oranges. Everywhere you turn, whether on the rim trail or base trail, on the lakeshore or deep in the woods, things look different.

As the leaves start to fall in November, you can start to see things in the gorge that you couldn't see before. One of the sights I love is glimpses of the upper gorge from the rim trail. There's a beautiful spot on the south rim, just a few minutes from the top parking lot, where you can look toward the precipice of the falls and see where the water goes over. Beyond that, you can see the footbridge at the end of the base trail.

## Autumn Videos, Photos & News

<div class="main-carousel" data-flickity='{ "fullscreen": false, "wrapAround": "true", "autoPlay": 7000, "pauseAutoPlayOnHover": true }'>
  {%- for item in collections.autumn | reverse  -%}
  {% if loop.index <= 6 %}
  {% include '_includes/components/carousel-cell.njk' %}
  {% endif %}
  {%- endfor -%}
</div>

<h2>More Posts</h2>
<ul class="post-list">
  {%- for item in collections.autumn | reverse  -%}
  {% if loop.index > 6 %}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>