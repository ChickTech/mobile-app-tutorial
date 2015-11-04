QR Code
=======

Imagine you are an app inventor living in Kevinston, IL. Sandra, the town riddlemaster, is organizing the annual Kevinston Riddle Hunt. Being a tech-savvy riddlemaster, she has decided to encode her riddles into QR codes and put them all over town. She has also decided to create an app that riddle hunters can use to scan the QR codes and display the scan results.

.. note:: Note: QR code is short for Quick Response Code, and is essentially a two-dimensional barcode. Like any barcode, it can encode any kind of textual information and is easily scanned by machines. You can learn how to generate your own QR codes in the :doc:`Server chapter </server/index>`.

Sandra has already started the app on her own, but she's too busy with her other duties to keep working on it, so she commissions you to complete the app. Download :download:`RiddleHunter.aia` and :doc:`import it into App Inventor </appendix/importing-projects/index>`. The screen should look like this:

.. image:: riddle-hunter-interface.png

Now drag a ``BarcodeScanner`` (from the Sensors section) into the
screen, and **make sure to uncheck** the "UseExternalScanner" checkbox.

.. exercise:: Make it so that clicking the Scan button triggers a scan, and that the result of the scan is shown by ``ScanResultLabel``.

  .. exercisehint:: If you get an error that says "Error 1501: Your device does not have a scanning application installed", it means you forgot to uncheck "UseExternalScanner".

  .. exercisehint:: Scanning is a two-part process: first the user has to click the Scan button to initialize the scanning screen, and then she has to aim her camera at a valid barcode. You'll need to use two ``when`` blocks to implement the whole process.

Run the app in your phone, and then use it to scan this QR code:

.. What happens when the Unstoppable Force meets the Immovable Object?

.. image:: riddle-1.svg

Sandra likes what she sees so far, but she says that some of her QR codes contain URLs instead of plain text. In that case, the app shouldn't just show the URL, it should also automatically open the browser to that URL. Here's an example of a QR code that encodes a URL:

.. http://www.blifaloo.com/images/heathersriddle.gif

.. image:: riddle-2.svg

In order for us to be able to process a URL, we must add some logic to check whether a scan result is actually a URL as opposed to just plain text. Fortunately, URLs are pretty distinctive—they always start with either "http://" or "https://". In order to check whether some text starts with some other text, you need to use the ``starts at`` block. Here's an example of its usage:

.. image:: starts-at-example-1.png

``TestLabel`` will display "3", because "phib" starts at the third character of "amphibian". However, if you try this:

.. image:: starts-at-example-2.png

You'll find that ``TestLabel`` displays "0", because "bean" does not appear at inside "amphibian".

What we'd like to do is have a ``startsWith`` procedure with two inputs, ``text`` and ``piece`` (echoing the two inputs of the ``starts at`` block). You would be able to use it like this:

.. image:: startsWith-examples.png

Here is how you would start defining the ``startsWith`` procedure block:

.. image:: startsWith-definition.png

Note that we are using a different procedure block than we used in :doc:`the first chapter </the-basics/index>`. It has a ``result`` input that indicates this procedure will return a value. In the case of ``startsWith``, it will return either ``true`` or ``false`` depending on what inputs it is given.

.. exercise:: Complete the ``startsWith`` procedure, and then add these blocks to the inside of the ``BarcodeScanner1.AfterScan`` block:

  .. image:: set-TestLabel-Text.png

Run your app to see that ``TestLabel`` shows true if the scan result is a URL, but false if it is not a URL.

.. exercise:: Now you are ready to create another procedure called ``isURL``. This procedure will take a text block as input, and will return ``true`` if it's a URL and ``false`` otherwise. You can test that your procedure works by scanning these two codes:

  - :download:`A QR code that encodes a URL starting with "http://" <http-code.svg>`
  - :download:`A QR code that encodes a URL starting with "https://" <https-code.svg>`

Now we need to turn our attention to how to open URLs in the browser. From the Connectivity section, drag an ``ActivityStarter`` into your screen. This component is used to open other apps on your
phone while also sending them relevant data. Now create a new procedure called ``openURL``, which will can be defined like this:

.. image:: openURL-definition.png

This procedure sets ``ActivityStarter1.Action`` to "android.intent.action.VIEW", which tells Android OS that you want to view something. The ``ActivityStarter1.DataUri`` property is used to tell Android OS what we want to view—in this case, we set it to ``url``, which is an input variable representing the URL. When ``ActivityStarter1.StartActivity`` is called, your phone will ask you if you want to view the URL in
Chrome, but it's possible to override this (perhaps with another browser you've installed on your phone).

.. exercise:: Change the app so that after scanning a QR code containing a URL, it will open that URL in the browser. Do not open the browser if the QR code does not contain a URL.

Run the app and open the some URLs in your phone's browser (or any app
capable of opening a URL). Hooray! Now Sandra's RiddleHunter app is finally complete. 

Excelsior! In this chapter, you learned about QR codes, using ``ActivityStarter`` to open URLs in another app, and ``starts at``. You also got more practice with defining and using procedures. You are one step
closer to becoming Lord of the Infinite!
