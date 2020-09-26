---
title: "Winter"
permalink: "seasons/winter/"
hero: "/images/IMG_3674.jpg"
description: "Foot traffic in the park lightens to a trickle as the months turn colder. December, January and February bring massive changes to the gorge. "
includeInSeasonMenu: true
---

{% pictureRt "/images/IMG_3934.jpg", "Footpath on the base trail" %}
Foot traffic in the park lightens to a trickle as the months turn colder. December, January and February bring massive changes to the gorge. Multiple cycles of snow, freezing temperatures and rapid thawing can shift Taughannock's gorge from a frozen cathedral to a raging torrent, sometimes in just a matter of days.

The park closes off several more hazardous parts of the rim trail during colder months, including the bottom stairs on the north side and the bottom half of the south side. The base trail can intermittently close if there's too much exposed ice, too. Hardy hikers can still get amazing views during these months when the base trail is open, though, and rim trail hikers and runners can still enjoy the trail with a few minor detours. On the north side, you can take the camp road's gentle rise to meet the rim trail again, and hop out on Gorge Road on the south side to meet back up with the trail just in front of the Inn at Taughannock.

The park hosts several activities during these months, too. The [first day hike](http://tompkinsweekly.com/news/2018/01/08/hundreds-come-taughannock-falls-first-day-hike/) on January 1 is incredibly popular way to kick off the year. There are typically guided hikes the first Saturday of each month, too. Fishermen wade into the creek on more temperate days near the beginning of the base trail, or from a concrete pier at North Point.

## Winter Videos, Photos & News

<div class="main-carousel" data-flickity='{ "fullscreen": false, "wrapAround": "true", "autoPlay": 7000, "pauseAutoPlayOnHover": true }'>
  {%- for item in collections.winter | reverse  -%}
  {% if loop.index <= 6 %}
  {% include '_includes/components/carousel-cell.njk' %}
  {% endif %}
  {%- endfor -%}
</div>

<h2>More Posts</h2>
<ul class="post-list">
  {%- for item in collections.winter | reverse  -%}
  {% if loop.index > 6 %}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>