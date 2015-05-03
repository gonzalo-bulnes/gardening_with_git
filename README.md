Gardening with Git
==================

An in-progres book about using Git within a collaborative team of software craftspeople. Review it on [Leanpub][book]!

  [book]: https://leanpub.com/gardening_with_git

Overview
--------

This book presents a set of Git conventions that me and my team have been using since mid-2013, and which have helped us in our effort to become a better, collaborative, software development team. You can believe me, or see them at work [here][demo_network], [here][demo_commits], or [here][demo_pull_requests].

  [demo_network]: https://github.com/gonzalo-bulnes/dredd-rack/network
  [demo_commits]: https://github.com/gonzalo-bulnes/kata-toy_robot_simulator/commits/master
  [demo_pull_requests]: https://github.com/gonzalo-bulnes/simple_token_authentication/pull/124

Table of Contents
-----------------

1. **Chapter 1**

  > Re-using commits and branches requires to make decisions constantly. This chapter introduces some individual practices to get started using Git as a communication tool in order to simplify decision making for you and your teammates.

  1. Re-use (**[draft](manuscript/chapter_1.md#re-use)**)
  1. Re-usable commits (**[draft](manuscript/chapter_1.md#re-usable-commits)**)
  1. Re-usable branches


2. **Chapter 2**

  > This chapter presents some key aspects of the _unified diff_ format, and describes some very common collaboration issues that re-usable commits do prevent. It then introduces the notion of context, and some merging conventions which simplify branch management by taking the context into account.

  1. Keeping commits simple to avoid collaboration deadends
    1. Understanding what an ugly diff does
    1. Debugging non-empty merge commits
  1. Simplifying branch management
  1. Leveraging the Git branching model

  References: [T. Pope rules][tpope], [The Zen of Python][zen]

3. **Chapter 3**

  > Explains how the conventions that were presented in the two previous chapters relate to each other, and how they fit the Git mecanics and tools. This is the core of the book. See also the corresponding [mindmap][mindmap].

  1. Diffs are packaged changes
  1. Commits are packaged actions
  1. Branches are packaged effects

4. **Chapter 4**

  > Having seen how the presented conventions help you to improve your code, this chapter explains how they can improve people interactions within your team. It should help you understand the principles behind the conventions, so you can adapt them to your own context.

  1. Context sharing
  1. Knowledge sharing
  1. Support

  References: [Love, internet style][love], [Conway's law][conway], DOI: [10.1037/0003-066X.60.7.678][flourish], [Netflix Culture: Freedom and Responsibility][netflix]

5. **Chapter 5**

  > Finally, the last chapter takes the reflexion about context, time and refactoring a little further. The exercise consists in adopting the same point of view that lead us to consider the `diff` files as evolutions vectors to look at our role as software developers. We may be [evolutionary architects][ea], we could also well be [gardeners][book].

  1. Growing a context to delivrer a stream of adequate programs
  1. Could we be writting diffs instead of code?
  1. A parallel with gardeners

  References: [Principle-driven][ea] [evolutionary architecture][uservices]

  [conway]: http://www.thoughtworks.com/insights/blog/demystifying-conways-law
  [uservices]: http://samnewman.io/books/building_microservices
  [love]: https://www.youtube.com/watch?v=Xe1TZaElTAs
  [zen]: http://legacy.python.org/dev/peps/pep-0020
  [flourish]: http://psycnet.apa.org/?&fa=main.doiLanding&doi=10.1037/0003-066X.60.7.678
  [netflix]: http://www.slideshare.net/reed2001/culture-1798664
  [ea]: http://softwarearchitecturecon.com/sa2015/public/schedule/detail/39990

  ### More details

  See [these notes](drafts/table_of_contents.md) for details (draft!).

Posters
-------

- [Mindmap][mindmap] (This mindmap has been the support of all presentations since late 2013.)
- Rules to ensure commits provide intention (extension of [T. Pope rules][tpope])

  [tpope]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
  [mindmap]: src/mindmap.svg

License
-------

Copyright &copy; 2013, 2014, 2015 Gonzalo Bulnes Guilpain

Permission is granted to copy, distribute and/or modify this document under the terms
of the GNU Free Documentation License, Version 1.3 or any later version published by
the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and
no Back-Cover Texts. A copy of the license can be found at
[http://www.gnu.org/copyleft/fdl.html] [2].

  [2]: http://www.gnu.org/copyleft/fdl.html
