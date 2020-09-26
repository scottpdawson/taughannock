---
title: "Seasons"
permalink: "seasons/"
hero: ""
description: "It's so evident as the seasons change at Taughannock Falls. Each season has such a unique feel, from the variety and number of visitors, the colors around the park, the texture of the leaves on the trees and underfoot, to the activity of the animals that call Taughannock home."
---

One of Central New York's natural benefits is its seasonality. It's so evident as the seasons change at Taughannock Falls. Each season has such a unique feel, from the variety and number of visitors, the colors around the park, the texture of the leaves on the trees and underfoot, to the activity of the animals that call Taughannock home.

Select a season to explore Taughannock during each unique time of the year.

<div class="main-carousel" data-flickity='{ "fullscreen": false, "wrapAround": "true", "autoPlay": 7000, "pauseAutoPlayOnHover": true }'>
  {%- for item in collections.seasons -%}
  {% include '_includes/components/carousel-cell.njk' %}
  {%- endfor -%}
</div>