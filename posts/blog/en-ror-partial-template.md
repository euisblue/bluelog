---
title: "[RoR] How to use partial template"
subtitle: "Learn how to create partials with local variables"
lang: "en"
date: "2022-01-01"
tags:
- ror
- partial template
---

## Partial Template

We have two files: `a.html.erb` and `b.html.erb`, with similar contents.



a.html.erb
```rb
<div class="container mx-auto">
  <h1> a.html.erb </h1>

  <ul role="list">
    <li>Ruby</li>
    <li>Rails</li>
    <li>C++</li>
    <li>C</li> 
    <li>Python</li>
    <li>JavaScript</li>
    ... 
    ...
    <!-- many more -->
  </ul>
</div>
```

b.html.erb
```rb
<div class="container mx-auto">
  <h1> b.html.erb </h1>

  <ul role="list">
    <li>Ruby</li>
    <li>Rails</li>
    <li>C++</li>
    <li>C</li> 
    <li>Python</li>
    <li>JavaScript</li>
    ... 
    ...
    <!-- many more -->
  </ul>
</div>
```

Contents of both files are identical except `<h1>` tag. I'm going to follow the DRY (Don't Repeat Yourself) principle and remove those duplicates using a partial template.

### Creating a partial
The name of the partial template or a partial starts with an underscore(`_`). 


Here's my partial `_langList.html.erb`:
```rb
<ul role="list">
  <li>Ruby</li>
  <li>Rails</li>
  <li>C++</li>
  <li>C</li> 
  <li>Python</li>
  <li>JavaScript</li>
  ... 
  ...
  <!-- many more -->
</ul>
```

Now we can replace these codes in `a.html.erb` and `b.html.erb` with the partial we just created.

### Calling a partial

a.html.erb
```rb
<div class="container mx-auto">
  <h1> a.html.erb </h1>
  
  <%= render partial: 'langList' %>
</div>
```

b.html.erb
```rb
<div class="container mx-auto">
  <h1> b.html.erb </h1>

  <%= render partial: 'langList' %>
</div>
```

Note that I didn't use `'_langList'`. You don't need to include the underscore when passing the name. In fact, you shouldn't include it otherwise rails wont be able to locate partials.



Sometimes you might need to specify the partial in a specific view directory. Let say you have a `_langList.html.erb` inside the `home` view.
```rb
<%= render partial: 'home/langList' %>
```

### Passing local variables
We can further reduce those codes in `a.html.erb` and `b.html.erb` by passing in contents inside the `<h1>` tag with a variable to the partial.



a.html.erb
```rb
<div class="container mx-auto">
  <%= render partial: 'langList', :locals => {:title => "a.html.erb"} %>
</div>
```

b.html.erb
```rb
<div class="container mx-auto">
  <%= render partial: 'langList', :locals => {:title => "b.html.erb"} %>
</div>
```

Using `:locals`, we can pass in variables to the partial. Here, `:title` is the key I named, and I can access its value with `title` (without the colon) in partial.



_langList.html.erb
```rb
<h1> <%= title %> </h1>

<ul role="list">
  <li>Ruby</li>
  <li>Rails</li>
  <li>C++</li>
  <li>C</li> 
  <li>Python</li>
  <li>JavaScript</li>
  ... 
  ...
  <!-- many more -->
</ul>
```

If you want, you can even include those `<div>` tags inside the partial and reduce the code even further more.



_langList.html.erb
```rb
<div class="container mx-auto">
  <h1> <%= title %> </h1>

  <ul role="list">
    <li>Ruby</li>
    <li>Rails</li>
    <li>C++</li>
    <li>C</li> 
    <li>Python</li>
    <li>JavaScript</li>
    ... 
    ...
    <!-- many more -->
  </ul>
</div>
```

a.html.erb
```rb
<%= render partial: 'langList', :locals => {:title => "a.html.erb"} %>
```

b.html.erb
```rb
<%= render partial: 'langList', :locals => {:title => "b.html.erb"} %>
```

## Reference
- [Rails Guides - Layouts and Renderings](https://guides.rubyonrails.org/layouts_and_rendering.html)