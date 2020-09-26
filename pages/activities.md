---
title: "Activities"
permalink: "activities/"
hero: ""
description: "There's plenty to do at Taughannock Falls State Park. Hiking, camping, picnics, swimming, and more."
---

There's plenty to do at Taughannock Falls State Park.

- [Hiking](/activities/hiking/)
- [Camping](/activities/camping/)
- [Picnics](/activities/picnics/)
- [Swimming](/activities/swimming/)
- [Boating & Fishing](/activities/boating-fishing/)
- [Sledding & Ice Skating](/activities/sledding-ice-skating/)
- [Cayuga Lake Triathlon](/activities/cayuga-lake-triathlon/)
- [Summer Concert Series](/activities/taughannock-falls-state-park-summer-concert-series/)

<div class="main-carousel" data-flickity='{ "fullscreen": false, "wrapAround": "true", "autoPlay": 7000, "pauseAutoPlayOnHover": true }'>
  {%- for item in collections.activities -%}
  {% include '_includes/components/carousel-cell.njk' %}
  {%- endfor -%}
</div>