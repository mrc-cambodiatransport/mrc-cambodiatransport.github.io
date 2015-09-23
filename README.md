## Mr. C's website

This is a website for the transportation company of Mr. C in Phnom Penh. It is based on the
[Agency Jekyll theme](https://y7kim.github.io/agency-jekyll-theme). See documentation about how to use
the theme here: [github.com/desaiuditd/agency](https://github.com/desaiuditd/agency).

For info on Jekyll see: [jekyllrb.com](https://jekyllrb.com)

### How to install

#### Install the required software
 
In order to add content, or change something, on the website you need to [install Git](https://git-scm.com/downloads) 
and the software required to run Jekyll, see: [Jekyll installation](https://jekyllrb.com/docs/installation/)

#### Check out the Git repository with the website content and run it locally

```
git clone https://github.com/mrc-cambodiatransport/mrc-cambodiatransport.github.io
```

Check the website locally by running Jekyll:

```
cd mrc-cambodiatransport.github.io
jekyll serve 
```

You should see something like this:

```
 mrc-cambodiatransport.github.io git:(master) ✗ jekyll serve                                  
Configuration file: /Users/PerSpilling/workspace/mrc-cambodiatransport.github.io/_config.yml
            Source: /Users/PerSpilling/workspace/mrc-cambodiatransport.github.io
       Destination: /Users/PerSpilling/workspace/mrc-cambodiatransport.github.io/_site
      Generating... 
                    done.
 Auto-regeneration: enabled for '/Users/PerSpilling/workspace/mrc-cambodiatransport.github.io'
Configuration file: /Users/PerSpilling/workspace/mrc-cambodiatransport.github.io/_config.yml
    Server address: http://0.0.0.0:4000/
  Server running... press ctrl-c to stop.
```

Now you can see the website by pointing your browser at `http://localhost:4000`


### How to add new testimonials to the website

Add a new testimonial file in the `_posts` catalog. Copy one of the existing files and adjust it with the text 
for the new testimonial. The filename should be in the following format: 

`yyyy-mm-dd-testimonial-n.markdown`

And the content should have the following format:

```
---
title: <name of the person giving the testimonial>
layout: default
date: <yyyy-mm-dd>
img: testimonials/<image file>.jpg
alt: image-alt
category: testimonial
description: |
    <p>Testimonial text</p>
---
```

The description part is where you put the testimonial text. You can use html-formatting there (look at the existing
testimonial files).

Add an image to the testimonial by adding the image file to the `img/testimonials` catalog and referencing it 
in the `img:` section in the testimonial file as shown above. 

Make sure to add the files to git, i.e. like this:

```
git add <testimonial file>
git add <testimonial image file>
git commit -m '<commit message>'
```

Check locally on your own computer that it looks okay by running Jekyll locally from the project root directory:

```
jekyll serve 
```

If everything looks okay you can push it to GitHub and it will "magically" be published to the public website.
 
```
git push 
```







