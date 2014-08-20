---
layout: under_construction
title: Resume
permalink: /resume/
---

<br />

<h2>Talk To Me</h2>

<form action="//forms.brace.io/maxmumford@gmail.com" method="POST" id="contact">
    <input type="hidden" name="_next" value="{{site.url}}/thanks" />

	<div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" name="name" />
    </div>
    <div class="form-group">
        <label>Email address</label>
        <input type="text" class="form-control" name="email" />
    </div>
	<div class="form-group">
		<label>Message</label>
		<textarea name="message" class="form-control" rows="3"></textarea>
	</div>
	<div class="form-group">
		<input type="submit" value="Send" class="btn btn-primary">
	</div>
</form>

<script src="/js/contact.js"></script>
