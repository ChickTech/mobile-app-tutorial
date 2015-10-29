QR Code
=======

A QR code is similar to a barcode, and like a barcode, can encode all
kinds of text. When making a puzzle hunt, you can stick QR codes in
designated places so that players can scan them for clues, hints,
directions, or any kind of information that you wish to share. In this
tutorial, you will learn how to scan QR codes.

.. note:: You can learn about how to generate your own QR codes in the :doc:`Server chapter </server/index>`.

Download :download:`QRCode.aia` and :doc:`import it into App Inventor </appendix/importing-projects>`. The screen will look like this:

.. image:: qr-code-interface.png

Now drag a ``BarcodeScanner`` (from the Sensors section) into the
screen, and make sure to uncheck the "UseExternalScanner" checkbox.

.. exercise:: Make it so that clicking the Scan button triggers a scan, and that the result of the scan is shown by ``ScanResultLabel``.

  .. exercisehint:: If you get an error that says "Error 1501: Your device does not have a scanning application installed", it means you forgot to uncheck "UseExternalScanner".

Run the app in your phone, and then use it to scan this QR code:

.. image:: hello.svg

The ``BarCodeScanner`` component can convert any valid barcode or QR
code to its underlying text. Sometimes this underlying text is actually
the URL of a web page. For example, this one:

.. image:: cats-url.svg

.. exercise:: Fix the app so that after you scan a QR code containing a URL, you can click the "Open web page" button to open the URL in the browser on your phone.

  .. exercisehint:: You'll want to set ``ActivityStarter1.DataUri`` to be the URL you want to open.

Run the app and open the scanned URL in your phone's browser (or any app
capable of opening a URL). Hooray! Now you can leave QR codes around the
house so that your family members or roommates can scan them and get
their daily dose of funny cat GIFs.

You may have noticed that we used a new component called
``ActivityStarter``. This component is used to open other apps on your
phone while also sending them relevant data. In the previous example, we
told the Android operating system that we wanted to view
``https://media3.giphy.com/media/iACp2LfrWulcQ/giphy.gif`` using another
app. By default your system will ask you if you want to view it in
Chrome, but it's possible to override this.

But wait, have you noticed that there's a bug in your program? See what
happens if you scan the first QR code, then click the "Open web page"
button.

.. exercise:: Fix the bug so that if you scan a QR code that doesn't convert to a URL, the "Open web page" button is disabled.

  .. exercisehint:: All URLs start with "http".

  .. exercisehint:: You'll have to use the ``starts at`` block. It might help to consult the `official documentation on this text block <http://appinventor.mit.edu/explore/ai2/support/blocks/text.html#startsat>`_.

Excelsior! In this chapter, you learned about QR codes and how they can
be used to direct users to amusing cat animations. You are one step
closer to becoming Lord of the Infinite!
