Math
====

Now it's time to put some of the skills you acquired to tackle some
basic math problems. Create a new project in App Inventor and name it
"Addition". Build the screen shown in the following image:

.. image:: math-screen.png

.. exercise:: Add some behavior to your program to check that the user entered the
  correct answer and congratulate her if she did. If her answer wasn't
  correct, give her a note of encouragement.

OK, that's not very interesting, right? Every player will solve the same
math problem every time they use your app. Let's make it so that the two
numbers are random. First, let's rearrange the screen like so:

.. image:: math-rearranged.png

Now, go to the Blocks interface and add the following blocks to your
program:

.. image:: math-blocks.png

Run your app and observe that the numbers are different every time you
refresh.

.. exercise:: Change the logic in your program so that when the user clicks the Submit button, her answer is checked against the value of x + y. Let the player know if she got the answer right or wrong.

.. exercise:: App Inventor has a lot of math-related blocks, so you can make the math
  problem as complex as you want. Change the math problem in your program
  to use a different math operator (e.g. ``divide``, ``multiply``, ``power``, etc.).

.. exercise:: Even the best of us can make occasional errors in our arithmetic. Show a
  different note of encouragement if the player's answer is off by 1,
  perhaps: "Your answer is not correct, but it's very close!"

  .. exercisehint:: You will probably want to use a local variable, an else ``if`` block, and the ``absolute`` block.

App Inventor can be used for much more than just numerical computation problems. You can also use it to make randomized word problems! Here's the word problem we will implement:

    Godzilla has returned, and she's beating the crap out of Tokyo
    (again)! Unluckily for Tokyo, there isn't anyone around to stop her,
    as Ultraman is on his honeymoon while Sailor Moon is on
    maternity leave. The mayor of Tokyo, in desperation, calls up Pope
    Francis. Fortunately, his Holiness is prepared for just such an
    occasion, and immediately scrambles his Popejet, which has a maximum
    speed of [maxSpeed] km/hr and air-to-surface missiles capable of
    hitting targets [missileRange] km away. Assuming the distance
    between the Vatican and Tokyo is 9,850 km, how many minutes will it
    take for the Pope to get within targeting distance of Godzilla?

Create a new project called "Popejet" and make the screen look like this:

.. image:: popejet-designer.png

Note here that we didn't split up the description into separate labels.
This would be awkward because of how long the description label needs to
be to hold all that text. Instead, you can put the variable names inside
square brackets, and then, inside the ``Screen1.Initialize`` block, replace the variable names with their numerical values:

.. image:: popejet-blocks.png

.. tip:: Because of how large the amount of text is, it might take up so much space that when you try to type an answer into the textbox, the keyboard covers up the textbox. To avoid this problem, check the Scrollable checkbox in the Properties sidebar for ``Screen1``.

Run the app to see that both [maxSpeed] and [missileRange] are replaced with random numbers in the description label.

.. exercise:: Add the logic in Blocks to check that the user submitted the correct
  answer to the problem. To compute the answer, you need to consider this equation:

  ``maxSpeed * timeInHours - missileRange = 9850``

  .. exercisehint:: Don't forget to convert hours to minutes.

  .. exercisehint:: To round to the nearest minute, you'll need to use the ``round`` block, found in the Math group.

.. exercise:: Inside the ``Screen1.Initialize`` block you have a little bit of redundancy.
  Add a new procedure called ``setDescriptionValue`` that takes two
  inputs, ``segment`` and ``replacement``, which can take the place of a ``set DescriptionLabel.Text`` block.

  .. exercisehint::

    This is how you would begin setting up the ``setDescriptionValue`` procedure block:

    .. image:: setDescriptionValue-block.png

  .. exercisehint:: This exercise is quite similar to what you did when following the last video in :doc:`/the-basics/index`.

Congratulations, you've completed all of the core chapters in this
tutorial. You can now do the other chapters in any order that you like,
based on your own interest. You can also just start building your own
puzzle hunt!
