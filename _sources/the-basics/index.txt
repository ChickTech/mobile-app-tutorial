The Basics
==========

Sign into `App Inventor <http://ai2.appinventor.mit.edu/>`__ in your
browser, then download :download:`this lovely image <marmoset.jpg>` to your computer.

.. tip:: Before you begin, we highly recommend that you :doc:`turn Autoplay off on YouTube </appendix/turn-autoplay-off/index>`.


Follow the steps in the video below to create your first interface:

.. youtube:: Bz5FVfCF9uQ

To run the app on your phone, launch `MIT AI2
Companion <https://play.google.com/store/apps/details?id=edu.mit.appinventor.aicompanion3&hl=en>`__:

.. youtube:: 2ZNdSvvhT5M

.. note:: If you are using an emulator, you'll need to select ``Connect > USB`` from the menu instead.


That's it! You should be able to see your app running now. It isn't much
at the moment but we're just getting warmed up.

Right now there's no way for the user to interact with your program. Add
a text box and some buttons to your interface:

.. youtube:: svSpSzWOyio

Notice how you renamed the text box from ``TextBox1`` to
``AnswerTextBox1``. In general, you should give descriptive names to the
widgets in your app that will interact with the user.

.. exercise:: Rename ``Button1`` to ``SubmitButton``, ``Button2`` to ``Hint1Button``, and ``Button3`` to ``Hint2Button``.

Right now nothing happens if you press the buttons. Let's give the user
a hint if she presses the first hint button. We can do that by using the
``Notifier`` widget:

.. youtube:: Ypaul4tF0Jk


.. note:: The Notifier is not a component that is visible in your interface. However, you need to drag it onto the Screen because if you don't, it will not be available to use in the Blocks interface.

Run the app again and see what happens. Congratulations, your mobile app
is now interactive!

.. exercise:: Show a different hint when the other hint button is pressed. For the message, you could use: *My name rhymes with "big bee karma debt"*.

    .. exercisehint:: You don't need to add a new ``Notifier`` component; you can just reuse the existing one.

Now we need to add some behavior for when the user presses the Submit
button. When that happens, we want to check if she entered the correct
answer in the ``TextBox``, and, if she did, we'll congratulate her.
Here's how to do that:

.. youtube:: J6fclajz1v4

Now run it again. Yay, you're program is now fully functional! Wasn't
that easy?

.. tip:: You might have noticed that all the components and blocks in App
  Inventor are quite "chatty". That is, they love to tell you what they
  are and how to use them. To get more information on a component in the
  Designer interface, click the question mark next to it. To get more
  information on a block in the Blocks interface, hover your mouse over it
  (although please note that some blocks don't show any help text when you hover
  over them).

Although the app works now, we haven't given any thought to layout.
There's no reason all the widgets need to be vertically stacked. Many
times we'll want to put widgets on the same row to save space or
increase coherence. Here's how to do that with the
``HorizontalArrangement`` component:

.. youtube:: ZadTsaU_Mh4

.. exercise:: Use ``HorizontalArrangement`` to also put the two hint buttons side by side on their own row.

Right now, the program only reacts if the user submits a correct answer,
and does nothing if the answer isn't correct. That isn't very
user-friendly! We can give a word of encouragement by adding an ``else``
block to our ``if`` block:

.. youtube:: wMhzAF4pIDA

Nice! But this program could still be a bit more friendly. For example,
what if the player entered an answer that was technically correct, but
not the answer we are looking for? For example, let's say that the
player entered "marmoset". We may want to give her a specific message in
that case to let her know that she's on the right track. We can do that
using the ``if else`` block.

.. youtube:: QTg_A97xkJc

Run the app again and see what happens when you submit "marmoset" as
your answer.

.. tip:: When adding blocks to your program, you can save time by duplicating existing blocks and then changing them slightly to suit your purposes.

.. exercise:: App Inventor allows you to add as many else if blocks as you like. Add
  another two else if blocks that handle the cases of the player entering
  the words "animal" and "stuffed animal".

  .. exercisehint:: Remember that the blue gear icon on an ``if`` block is used to open up a
    little window that allows you to drag more ``else if`` blocks inside the ``if``
    block. To close the little window, simply click the blue gear again.

Run your app and try submitting "pygmy marmoset " (note the extra space
at the end). Your program doesn't accept it as the right answer! That's
because computers are very exacting about input values; they don't
understand the concept of "mostly correct". We can address this by using
the ``trim`` block:

.. youtube:: ZVH3VW_5HOo

Now your app will accept the right answer, no matter how many spaces
there are around it. Try entering " pygmy marmoset " (spaces on both
sides) and verify that it works.

.. exercise:: A similar problem exists for uppercase/lowercase. Try entering "PYGMY
  MARMOSET" as your answer to see what we mean. Use the ``upcase`` block in
  the Text section to address this.

  .. exercisehint:: The ``upcase`` block is a little weird, because once you've dragged it
    into your program you can click on the dropdown to convert it to the
    ``downcase`` block. The easiest way to complete the exercise, incidentally,
    is to use the ``downcase`` block.

.. tip:: You may have noticed by now that the program running inside your phone
  doesn't always change when you update your blocks. That may be because
  the version of your program on your phone is lagging behind. You can
  force an update by clicking on the Designer button, then clicking on the
  Blocks button.

Great, now our app is much more lenient with accepting correct answers.
But what about the other conditions in our ``if`` block? For example, if
you submit "  Marmoset  ", you can see that your program doesn't yet do
the right thing. Based only on what you've learned so far, your first
instinct might be to apply the ``trim`` and ``downcase`` blocks to every
``AnswerTextBox.Text`` block. That will certainly work, but App Inventor
gives you a better way: the ``initialize local`` block!

.. youtube:: 0EvSiRYizS4

The ``initialize local`` block creates a variable with a name of your
choosing (in the video we called it "answer"). A variable is just a
block that has a name and can store a value. In the video above we
created a variable called ``answer`` and initialized it with the value
of ``downcase[trim[AnswerTextBox.Text]]``. You should use a variable
whenever you want to use the same value more than once.

.. exercise:: Replace the other ``AnswerTextBox.Text`` blocks with the ``get answer`` variable block.

Your app is already pretty good, but now it's time to make it snazzy.
Let's make your phone talk!

.. youtube:: YOHR-rvPEes

Run the app again. Voila, you now know how to make your phone say
anything you want it to! (Please try to resist the urge to make it say
swear words.)

.. tip:: App Inventor also allows you to use the keyboard to duplicate a block,
  which is quicker than the right-click method. Just select a block, and
  then perform a copy (Ctrl/⌘-c) followed by a paste (Ctrl/⌘-v).

OK, but what if we want our program to talk every time the player
submits an answer, regardless of whether her answer was right? Of
course, you can achieve that by copying all the
``call TextToSpeech1.Speak`` blocks and then modifying them. But if you
have a lot of ``if else`` blocks, that's a ton of extra work!

Fortunately, programming is all about working smarter, not harder. We
can use a procedure to make it easier for us to add speech
functionality:

.. youtube:: -HngAmkASag

A procedure is basically a custom block whose behavior is defined by
you. After you define a procedure, you can use it in any other block, as
if it was one of the blocks provided by default. You should use a
procedure whenever you notice that your program has a repetitive
structure.

.. exercise:: Replace the remaining ``Notifier1.ShowAlert`` blocks with ``announce`` blocks.

Remember, variables are used to store values, while procedures are used
to store other blocks. Often, a procedure comes with its own variables,
which can be modified by adding or removing ``input`` blocks inside the
procedure block. Don't worry, all of this will become more clear as we
move forward.

Perhaps you've wondered to yourself what kind of person can create
programs. Now you know the answer: You. Believe it or not, you now know
80% of what you need to know to work with App Inventor.

Next, let's play around with the :doc:`camera </camera/index>`.
