Gardening with Git
==================

An article series about using Git within a collaborative team of
software craftspeople.

Table of Contents
-----------------

1. The Git Conventions
  1. Re-usable commits
    - Commits can be re-used (`git cherry-pick`)
    - Apply [T. Pope rules][tpope] as a starting point
    - Are modular
      * without that, the number of re-use opportunities drops
      * tip: constrain verb usage to enforce modularity (extension to the T. Pope rules)
        - distinction between feature commits and fix and chore commits
        - distinction between important commits and minor commits
    - Context readability matters ([The Zen of Python][zen])
      * because you always must decide if the commit fits
    - Author's intention is explicit
      * some commits depend on posterior fixes, re-users shouldn't forget them
      * so others can learn from the commit
      * so others can fix the commit (you don't fix if unsure that intention didn't match action)
  1. Re-usable branches
    - Branches can be re-used, and their commits re-ordered  (`git rebase`, `git rebase --interactive`)
    - Descriptive branch names
      * same rules as commits titles
    - Context adaptation (refactor), [Red, Green], Refactor
    - History as a logical step-by-step
      * make sure the sequence of commits tells a logical story
      * that's refactoring!
2. The Git Conventions in Action
  1. Complicated Git is Beginner Git
    - Understanding what an ugly diff does
      * fixing indentation errors while configuring something shadows what's important
      * diffs should keep context readable so others can decide if re-using a commit is safe in *their* context
    - Debugging non-empty merge commits
      * when an outdated branch is merged, context adaptation is performed in the merge commit and debugging become complicated
      * then feature fixes that became necessary after context adaptation are applied out-of-the branch, making then easy to forget when re-using
  1. Refactorings
    - in a nutshell:
      * merge only in fast-forward situations (those ensure up-to-date contexts)
      * do **not** fast-forward, you would loose context information (`git merge --no-ff`)
      * you can treat branches are very similar to tags, you can use them both ways
3. A closer look at the Git tool
  1. Diffs are packaged changes
    - diffs are executable files (`patch`)
    - diffs are not by-products of change, they're vector of change
  2. Commits are packaged actions
    - commits are collections of changes (collection supposes an aim, it's not a bunch) see re-usable commits are modular
    - commits can be crafted with precision (`git commit --amend`, `git add -i`, `git diff --staged`)
    - the order in which you do things has no reason to be that in which you commit them
  3. Branches are packaged effects
    - a branch is a sequence of commits (a sequence is ordered, it's not a list!)
    - If you want to have a nice beach house (that's the effect), you'll have to paint it, make the garden up, maybe fix the fence. That is a sequence of actions, that may be unrelated and could eventually be performed by distinct persons.
    - effects can either be valued by end users, and be called _features_, or be related to the code maintenance. Those are called chores and include dependencies update and refactorings.
4. A closer look at the collaboration dynamics
  1. Context sharing
    - when people collaborate, they may work on different features, but they share the context of the project
    - any modification they apply to that context does affect the rest of their team
    - ensuring that commits provide enough information about their author's intentions, that branches do tell a step-by-step story of the context modification are multiple cares for a successful collaboration
    - make commits which add value distinct from maintenance-related or less important commits, you'll make the job easier for your teammates
    - feature integration is a complex activity, do anything that makes context adaptation safe and simple
  1. Knowledge sharing
    - in a collaborative team, the faster I teach you what I know, the faster you can help me performing the task I'm struggling with
    - in creative processes, people interactions matter more than people individual abilities
    - people are not judged by what they know, they're judged instead how much, how fast they do learn and how supportive they are
    - we're different and good at different things, explaining you intentions in commit messages, making important changes highly visible in their diffs and ordering your branches as a logical story are ways to make visible what you see that others could miss when re-using your commits and branches
    - show how you think by showing how you do so others can learn from your work, show how you think by showing how you do so other can pin-point your missconceptions and help you become better at what you do
  1. Support
    - collaborative team members succeed when their team succeeds
    - resilient teams and communities use to be composed by supportive individuals ([Love, internet style][love])
    - supporting teams are more likely to be high-performance teams than others (DOI: [10.1037/0003-066X.60.7.678][flourish])
    - Great workplace is stunnig colleagues. Do care about their needs and they'll become even better. ([Netflix Culture: Freedom and Responsibility][netflix])
    - Support is a two-way activity: make clear your intentions so others can help you
5. Using Git to support collaborative dynamics
  1. What to do, when and how a 3-scale story
  1. What: there is no precise action without intention
  1. When: actions have no effect without good timing
  1. How: context matters, the way of the samurai
6. Gardening People
  1. Growing a context to delivrer a steam of adequate programs
    - Could we be writting diffs instead of code?
    - Maintaining the ability to write diffs through context
7. Conclusion
  1. Beyond software
    - What are we good at that is useful in a multi-disciplinary team?
    - Identifying context and dependencies
    - Introspection ability

  [love]: https://www.youtube.com/watch?v=Xe1TZaElTAs
  [zen]: http://legacy.python.org/dev/peps/pep-0020
  [flourish]: http://psycnet.apa.org/?&fa=main.doiLanding&doi=10.1037/0003-066X.60.7.678
  [netflix]: http://www.slideshare.net/reed2001/culture-1798664

Posters
-------

- Rules to ensure commits provide intention (extension of [T. Pope rules][tpope])

  [tpope]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

License
-------

Copyright &copy; 2013, 2014, 2015 Gonzalo Bulnes Guilpain

Permission is granted to copy, distribute and/or modify this document under the terms
of the GNU Free Documentation License, Version 1.3 or any later version published by
the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and
no Back-Cover Texts. A copy of the license can be found at
[http://www.gnu.org/copyleft/fdl.html] [2].

  [2]: http://www.gnu.org/copyleft/fdl.html

