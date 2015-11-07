Server
======

First, make sure to log into your `PythonAnywhere account <https://www.pythonanywhere.com>`_. Then, follow the directions in the video below to download the server software and do some configuration. The commands that are executed in the video are listed below, so you can save some time by copying and pasting them in instead of typing them in manually.

.. code::

  git clone https://github.com/chicktech/puzzle-hunt.git
  cd puzzle-hunt
  . setup.sh

.. youtube:: upZeyUyaKDk

Now that the server software is present and set up, you need to create a web app. Follow the steps in the following video to accomplish this. At the part where you need to edit the WSGI configuration file, copy and paste this code in:

.. code:: python

  import sys
  import os.path

  # add your project directory to the sys.path
  project_home = os.path.expanduser(u'~/puzzle-hunt')
  if project_home not in sys.path:
      sys.path = [project_home] + sys.path

  # import flask app but need to call it "application" for WSGI to work
  from flask_app import app as application
  application.secret_key = 'super secret key'
  application.config['SESSION_TYPE'] = 'filesystem'

Note that whenever you see ``chicktech`` typed in, you should substitute that with your own username.

.. youtube:: p_LstQ0NnwE

After you click the big green Reload button, a little circular animation appears. When the animation completes, you can click on the link above the button to visit your new puzzle hunt site! For the chicktech user, the site would be published at http://chicktech.pythonanywhere.com/.

One of the cool things you can do with your app is generate QR codes. Just click the "Generate QR Code" link, type anything you like in the Text field, hit submit, and you'll get back a QR code image. This image can be downloaded to your computer and printed or put on a web page.
