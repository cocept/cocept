---
layout: page
title: Cocept's Blog Posts
redirect_from:
 - /development/
 - /design/
---

<div class="index">

    <h3 class="text-center">{{ page.title }}</h3>

    <ul class="portfolio posts">
    	{% assign categoriesToSkip = "portfolio|side-projects" | split: "|" %}
        {% for post in site.posts %}
        	{% if categoriesToSkip contains post.category %}
        		{% continue %}
        	{% endif %}

            {% if post.banner == nil %}
                {% assign liClass = "colorful-border colorful-border-top" %}
            {% endif %}
            <li class="{{ liClass }}">
                <a href="{{ post.url }}">
                    {% if post.banner %}
                        <div style="background-image: url({{ post.banner }});" class="post__banner"></div>
                    {% endif %}
                </a>
                <div class="post__text_content">
                    <span class="post__date">{{ post.date | date: "%b %-d, %Y" }}</span>
                    <span class="post__category">| Category: {{ post.category }}</span>
                    <a class="post__link" href="{{ post.url }}">
                        {{ post.title }}
                        <span class="glyphicon glyphicon-chevron-right"></span>
                    </a>
                    {{ post.excerpt }}
                </div>
                <a class="btn btn-default post__read_more" href="{{ post.url }}">
                    Read More
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </a>
            </li>
        {% endfor %}
    </ul>

</div>
