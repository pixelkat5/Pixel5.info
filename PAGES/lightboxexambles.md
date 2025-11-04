# Single images

Single images. Add a data-lightbox attribute to any image link to enable Lightbox. For the value of the attribute, use a unique name for each image. For example:

```html
<a href="images/image-1.jpg" data-lightbox="image-1" data-title="My caption">Image #1</a>
```

# Group images

Image sets. If you have a group of related images that you would like to combine into a set, use the same data-lightbox attribute value for all of the images. For example:
```html
<a href="images/image-2.jpg" data-lightbox="roadtrip">Image #2</a>
<a href="images/image-3.jpg" data-lightbox="roadtrip">Image #3</a>
<a href="images/image-4.jpg" data-lightbox="roadtrip">Image #4</a>
```


# to change settings:

```js
<script>
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
      'fadeDuration': 500 //def = 600
      'imageFadeDuration': 500 //def = 600
      'resizeDuration': 500 //def = 700
    })
</script>
```

# **[docs for lightbox2 are here](https://lokeshdhakar.com/projects/lightbox2/)**