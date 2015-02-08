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
    - Debugging merge conflicts resolution
    - Debugging non-empty merge commits
  1. Refactorings
3. A closer look at the Git tool
  1. Diffs are packaged changes
  2. Commits are packaged actions
  3. Branches are packaged effects
4. A closer look at the collaborative dynamics
  1. Context sharing
  1. Knowledge sharing
  1. Support ([Love, internet style][love])
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

