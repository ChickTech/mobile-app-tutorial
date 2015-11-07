Networking
==========

Imagine that you are an app inventor living in Pork Ridge, IL. Your friend and neighbor, Tracy, had a cat named Space Cat who left
just the other day. It turns out that Space Cat was really a space alien
who was here to study humans, but she got homesick so she decided to
return to her home planet [#]_. Despite her abrupt departure, Space Cat
really did enjoy her time with Tracy, and created an app for her as a farewell present. Tracy thinks the app is a bit weird and asks you to take a look at it.

Download :download:`FarewellTracy.aia` file and :doc:`import it into App Inventor </appendix/importing-projects>`. The screen will look like this:

.. image:: farewell-tracy.png

Run the app and see how it displays your phone's IP address near the
top. This is the public address that is used to identify your device on
the Internet. While humans think of locations on the Internet as being
URLs, in reality these URLs are just surrogates for IP addresses.

This project uses a ``Web`` component, which is used to make requests
over the Internet. In this case, a web request is sent to
``http://ipecho.net/plain``, and when the response comes back from the
server, it's shown by ``IPAddressLabel``. Open the above URL in the web
browser on your computer and you'll also see an IP address, although
probably not the same one as your phone's.

Space Cat must have come from a culture where it's very important to know one's IP address at all times, but Tracy couldn't care less (although she appreciates the gesture). She asks if you could replace that part of the screen with something more interesting. You know that Tracy is a designer, so you decide to show something related to her profession. You find an interesting site called `Quotes on Design <http://quotesondesign.com/>`_ that provides a URL that shows a random quote every time you visit it.

.. exercise:: Delete the label that says "Your IP address". Rename ``IPAddressLabel`` to ``QuoteLabel``. Change the blocks in the program so that ``QuoteLabel`` displays the results of this URL: ``http://quotesondesign.com/api/3.0/api-3.0.json``.

After making the change, run the app again and you'll see something like
this (the quote will probably be different):

.. image:: design-quote-json.png

What's going on here? View the URL in your browser and you'll see the same weird-looking text. Unlike the last URL, this URL doesn't return plain text—it returns JSON [#]_, a structured text format. While most URLs are home to web pages, this URL hosts an Application Programming Interface (API) [#]_. An API is meant to be consumed by an application.

JSON often isn't very readable to humans because it's intended to be
read by machines. A JSON result usually contains multiple items of data.
This is easier to see if we reformat it in a human-readable way:

.. code:: json

    {
      "id": 602,
      "quote": "Without good design it is easy to miss the point.",
      "author": "Bjarni Wark",
      "permalink": "http:\/\/quotesondesign.com\/?p=602"
    }

You can see that not only does the result contain a quote, it also
contains the author of the quote, along with some other pieces of data.

If you use the ``Web.JsonTextDecode`` block to parse the above JSON text, it will yield a list of lists:

.. image:: list-of-lists.png

A list of lists is essentially a lookup table. You can read more about lists of lists :doc:`here </appendix/list-of-lists/index>`. You can use the ``look up in pair`` block from the List group to get the value for a given key. For example, to display just the quote in ``QuoteLabel``, you
would do something like this:

.. image:: display-quote.png

.. exercise:: Add a new label beneath ``QuoteLabel`` called ``AuthorLabel``. Make it so that your app looks like this:

  .. image:: design-is-easy.png

  .. exercisehint:: You will want to use the ``initialize local`` block to avoid needless redundancy.

  .. exercisehint:: To put the dash at the front in ``AuthorLabel``, use the ``join`` block in the Text group.

Tracy really enjoys seeing a new design quote every time she opens the
app! However, after a week of using the app, she says she's tired of
seeing Space Cat's mug all the time. "Doesn't the Internet have plenty
of other cat pictures I can look at?" she muses.

You do a little googling, and discover that, of course, there is a cat
image API! The URL for it is
``http://thecatapi.com/api/images/get?size=small``. Try visiting that
URL in your browser and see what happens.

.. exercise:: Add a Refresh button to the app so that whenever you click it, ``Image1`` will display a random cat image from the Cat API.

  .. exercisehint:: You can set ``Image1.Picture`` to the URL of an image.

Tracy loves being able to view different cat pictures! After a few days,
however, you receive a text from her that says: "Some days I only feel
like seeing photos of cats wearing hats. Other days I only want to see
cats in space. Can you do something about that?" [#]_

Fortunately, the Cat API allows you to specify what category of cat
photo you'd like to get. It does so via the query string. The query
string is the part of a URL that comes after the question mark symbol
(?), and contains one or more query string parameters. We are actually
already using a query string parameter named "size", whose value we've
set to "small". In the text block that contains the Cat API URL, change the value of "size" to "large", and see how that change affects the image that is displayed after you click the Refresh button.

Inside the query string, query string parameters are separated by the
ampersand symbol (&). For example:

.. image:: dinopics-url.png

.. Styled URLs are here: http://jsfiddle.net/p461v4cz/11/

Assuming there really was an API for awesome dinosaur images, the above
URL might be what you'd use to request a picture of a huge,
fedora-wearing dinosaur chomping on a lawyer.

To control the category of the cat photos, you just need to add the
"category" query string to the end, like so:

http://thecatapi.com/api/images/get?size=small&category=hats

Add a new ``ListPicker`` to your screen, and name it ``CategoryListPicker``. Make sure its properties look like this:

.. image:: catcategorypicker-properties.png

.. exercise:: Modify your blocks so that whenever you click ``RefreshButton``, ``Image1`` will show a new image that corresponds to the current category selected in ``CategoryListPicker``.

  .. exercisehint:: You'll probably want to use the ``join`` block.

Although assembling the URL by concatenating strings does work in this case, it's doesn't work well for all query strings. Let's say that there is an API that allows you to search for movie quotes. You want to get all the quotes from the movie *La Señora de Fátima*, so you assemble a URL that looks like this:

.. python3 -c "import urllib.parse; print(urllib.parse.quote('La Señora de Fátima'))"

.. image:: incorrect-url.png

Unfortunately, this is not going to work, because only certain
characters are allowed in URLs, and your quote uses many that aren't
allowed. You have to encode the URL in a special format so that the
server can receive the text properly. When encoded correctly, the URL
should look like this:

.. image:: correct-url.png

Fortunately, the ``Web.BuildRequestData`` block can be used to encode
the query string part of your URL. To properly build the URL in the
previous example, you would assemble your blocks like
this:

.. image:: buildrequestdata.png

Note that ``Web.BuildRequestData`` accepts a list of lists.

.. exercise:: Change how the URL for the Cat API is assembled so that you're using ``Web1.BuildRequestData`` to create the query string portion of the URL.

Namaste! In this chapter, you learned about the ``Web`` component, JSON,
APIs, and query strings. You are one step closer to becoming the Guru of
Karma!

.. rubric:: Footnotes

.. [#] Well that's what Space Cat told Tracy. In reality, she wrote a best-selling book about humans and has to go back to do the book tour.
.. [#] JSON stands for JavaScript Object Notation. See https://en.wikipedia.org/wiki/JSON.
.. [#] Application Programming Interfaces (APIs) are the primary way that mobile apps communicate with the Internet. See https://en.wikipedia.org/wiki/Application_programming_interface.
.. [#] This is what sociologists refer to as a First World Problem.
