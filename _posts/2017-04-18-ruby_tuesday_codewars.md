---
layout: post
title:  "Ruby Tuesday – CodeWars Edition"
---

The curriculum at [Bloc](https://bloc.io) is checkpoint driven. Checkpoints are clear-cut stops on your learning roadmap dedicated to explaining a particular subject related to language syntax, code theory or computer science in general. For example, I started this week off completing my introduction to Rails which consisted of:

- Explaining how Ruby compliments Rails
- How to create the basic file structure and databases
- An overview of the MVC in Rails
- Using controllers and views to create landing pages
- Setting up testing specs and random data
- HTML / CSS in Rails
- Models and linking databases

The majority of these checkpoints follow a similar pattern. A tutorial walkthrough is presented showing blocks of code, with markers within each one used to identify what is happening in each code segment, and why. In these types of checkpoints, Bloc puts the onus upon you to be able to read through the material, take your notes **[(you learn better by writing)](https://www.sciencedaily.com/releases/2011/01/110119095458.htm)**, and make changes and updates to your local copies of code with each checkpoint being a Git feature branch used to simulate version control in the real world. You then upload your work (ex. to Github), notify your mentor for review/questions, and off you go to the next one. Often times, these checkpoints end with an assignment, which is similar to a checkpoint but it may have further reading material, and a guided (but not detailed for you) coding exercise to reinforce what you just learned. For example, your checkpoint may have walked you through the setup of an `index` and `about` page, but let’s see you do the same with an `FAQ` page. Sometimes these hold a little twist for the student to explore on their own and figure out as one might do in the un-tamed wilds of Coderland.

These tutorials are an essential component to learning in this bootcamp format. There is structure to fall back on in case you need a particular review, and it provides a path to connect each concept together. If you didn’t take the time to pay attention during the checkpoint, the assignment will be difficult. If you do the bare minimum, the concepts later just become vaguer to you as the building blocks are typically presented to you earlier in the module. This cadence can sometimes put a person on autopilot; you pick up on the key themes and are able to grasp what’s happening along the way and, when reading the code, you get what’s going on and why. In the cases where you catch yourself copying/pasting code, please do yourself a favor and start over to take the time needed to read, and comprehend. You likely won’t be presented a tutorial when you’re tasked with finding a solution to a real-world issue, so at times, Bloc sends you off to [Codewars](https://www.codewars.com) to test your mettle in problem solving.

Codewars (check out their [training manual](https://www.codewars.com/about)) challenges (or _kata_) are one of the things I really look forward to in modules. As a learner, practice and repetition are key to your development. Following a tutorial and watching a web page change as you update it certainly brings about a sense of satisfaction while learning.  Applying that knowledge to Codewars kata, solving a problem at your skill level, and subsequently watching your kyu/rank rise as you take on harder kata takes that reward system and puts a measure on it. You’re able to take similar concepts that you’ve learned through checkpoints, and re-apply them, so that the material looks familiar enough to get you started, but difficult enough to engage your problem-solving skills. Through a mix of syntax memorization and knowing what questions to ask to the Google, my sense of reality solidifies that this is the type of work I signed up for, and will be looking forward to for years to come.

Today, I was tasked with taking on 3 required kata and an extra-credit bonus question to push my limits.
-	[Tube Strike Options]( https://www.codewars.com/kata/tube-strike-options-calculator/ruby)
-	[Get the Middle Character]( https://www.codewars.com/kata/get-the-middle-character/ruby)
-	[Most Frequent Item Count](https://www.codewars.com/kata/find-count-of-most-frequent-item-in-an-array/ruby)

At the time of this writing, I have yet to take on the bonus question, so I won’t link it yet. I do want to walk through my problem-solving process on the third kata, **Most Frequent Item Count**.

The details are simple:
-	Write a program to find the count of the most frequent item in an array.
-	Assume the input is an array of integers

One of the things that connects my past as a business analyst and my future as a coder is laying a foundation for what the solution is trying to accomplish. Planning out, step-by-step, in pseudo-code is important early on so you can reinforce patterns that may emerge. Let’s take a look at how that played out with this kata.

We are given a starting point:
```ruby
def most_frequent_item_count(collection)
  # Do your magic. :)
end
```

Looking at this, `collection` will be our array, so there’s no need to define it elsewhere. We do know that we are looking for a count, so let’s add that portion to our code.

```ruby
def most_frequent_item_count(collection)
  count = 0
end
```

I’ve started a variable, `count`, at 0 with the intention of increasing it as it iterates over each item in `collection` of a similar value. For example, if collection is `[3, 1, 2, 3, 3]`, I want the code to start at the first item (`3`), and count how many times it is in the array. In this case, `3` appears 3 times. When the loop goes onto the next item (`1`), I will want it to count the frequency of `1`s within the array, and compare that to the `3` value we just counted. Now we know that we need to have a placeholder to be able to compare variables. In JavaScript, I might have created a `for` loop, iterating over each position and integer, counting its frequency, storing that `count` as a comparison variable, making the `count` variable equal to the comparison variable, and re-looping and comparing that `count` figure to each subsequent integer. If the new position/integer frequency is greater than the old, I’d replace the `count` value. If not, I’d loop over the next integer, until I’m at the array’s end. Then, a simple `return` of the `count` variable tells you the highest frequency of occurrence of a number.

In Ruby, this becomes simple. Using the `.each` method on `collection`, and turning `count` into a hash, or object, I am able to store my integer counts as keys and values.

```ruby
def most_frequent_item_count(collection)
  count = Hash.new(0)

  collection.each { |i| count[i] += 1 }
end
```

`count = Hash.new(0)` turns our variable into a hash, with default key values of 0. The `.each` method takes each item in the array, `i`, and adds them to the `count` hash. Each time it is present in the array, its value is increased by 1. Awesome. We have our hash, and frequencies of each number logged. Now we need a way to figure out the highest value. Luckily, Ruby has an easy way of doing this as well.

```ruby
def most_frequent_item_count(collection)
  count = Hash.new(0)

  collection.each { |i| count[i] += 1 }
  count.each { |k,v| return v if v == count.values.max }
end
```

I iterate through each `key` and `value` (`k` and `v`). Then Ruby’s simple, almost spoken-language-like code comes into play. Iterating through each key and value combination (in this case, the integer and its count) I want to return the value if it is the greatest / maximum value present within that hash. `return v` tells me I want to return value; `if v ==` tells the code to return the value if `v`’s condition is met, and the condition we’re looking for is the largest value (highest frequency) present with `count.values.max`. Cool, huh?

There are obviously more elegant solutions, and you are able to look through these once you’ve completed your kata and refactoring upon passing all of the automatic tests the system puts your code through. For example, the best practice (as voted on by users) for the question here is listed as:
```ruby
def most_frequent_item_count(c)
  c.count(c.max_by{|x| c.count(x)})
end
```

Seeing these solutions help fortify your knowledge by allowing you to walk through the code on your own, and formulating a new thought process on how that came about. Of course, your knowledge of available methods also helps at this point, so searching the internet for syntax basics and perusing _stackoverflow_ threads is to your benefit here. **Do not** just search outright for the solution. Search instead for concepts that can help you put together what you’ve learned to good use. Augment your knowledge of available methods. Searching for a solution and just plopping down the best practice without going through the problem-solving on your own just does you a disservice. Sure, you’ve earned some internet points, but when the time comes, do you want to be able to solve more complex issues, or just regurgitate what someone else wrote without understanding the journey?


Tomorrow, I’ll try my hand at the extra-credit. It’s [Disemvowel Trolls]( https://www.codewars.com/kata/disemvowel-trolls) if you want to have a go at it yourself!


Let me know how you would have tackled this problem differently than I. As a beginner, I chose to follow the obvious paths when troubleshooting the details. Are there other tips you would give to aspiring novices? Drop me a line here, or at <http://www.behicakgun.com/contact/>.
