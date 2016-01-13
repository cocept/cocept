---
title: Using the Pillow Imaging Library on Amazon Elastic Beanstalk
---

I often use Amazon Elastic Beanstalk (EB) for project deployment. Several times now I've hosted projects on EB that use Pillow, Python's image manipulation library, and have run into a slew of problems. I have documented solutions to each one I encountered below:

### Missing the Pillow library?

In order to manipulate image files using Python on Amazon EC2 you need to have the Pillow library installed. Pillow is a newer, better maintained and supported fork of PIL. If it is missing from your environment you will see an error message like this:

{% highlight python %}
ImportError: No module named Image
{% endhighlight %}

### Installing Pillow

To install Pillow, **create** a file called **requirements.txt** in the **root** of your application. Inside it, put the following:

{% highlight txt %}
Pillow==3.0.0
{% endhighlight %}

When you next deploy your application to Amazon Elastic Beanstalk all applications referenced in your requirements.txt file will be automatically installed, along with all their dependencies, using the python package manager Pip.

### Using JPG Files With Pillow

If you try to manipulate JPG images with Pillow on EB, chances are you will run into the following error message:

{% highlight python %}
--enable-jpeg requested but jpeg not found, aborting
{% endhighlight %}

This is because your environment is missing the required libraries to manipulate the JPG files. To rectify this you'll have to install the libjpeg library. 

### Installing libjpeg

 - Create a folder at the root of your application called **.ebextensions**
 - Within it create a file called something like **01-flask.config**
 - Inside, put the following:

<!-- Hack to fix code after list markdown bug -->

{% highlight yaml %}
packages:
  yum:
    libjpeg-turbo-devel: []
    libpng-devel: []
{% endhighlight %}

<small>Note: This file uses the yaml syntax - when you copy and paste the above, ensure the indentation is maintained and uses spaces not tabs.</small>

The above will tell EB to install libjpeg-turbo-devel and libpng-devel using the yum package manager. These will enable you to use the Pillow library to manipulate jpg and png files respectively.

### Using Fonts with Pillow

If you try and load a font using the Pillow imaging library on EB you might run into the following error message:

{% highlight python %}
ImportError: The _imagingft C module is not installed
{% endhighlight %}

This error is caused by the fact that you are missing the required libraries to load and manipulate font files.

### Installing freetype

 - Open up your **.ebextensions/01-flask.config** file (see "Using JPG Files With Pillow" above for more information) 
 - Add the following line:

<!-- Hack to fix code after list markdown bug -->

{% highlight yaml %}
packages:
  yum:
    freetype-devel: []
{% endhighlight %}

<small>Note: If you already have a packages / yum section, add freetype-devel: [] to it instead of creating an additional packages or yum section.</small>

### Other error messages you may face

You may get the below error when trying to install libjpeg:

{% highlight python %}
ToolError: Yum does not have libjpeg-devel-6b available for installation
{% endhighlight %}

The solution is to **install the following package instead**:

{% highlight python %}
libjpeg-turbo-devel: []
{% endhighlight %}
