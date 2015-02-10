Chapter 1
=========

Re-use
------

The Don’t Repeat Yourself (DRY) principle has been widely adopted across the software development community and most of us try not to write twice the same code, or try to eliminate duplication through specific refactoring. However, for those of us who usually work on different projects, not repeating what we write doesn’t mean not repeating ourselves. When implementing popular features in several projects, we still repeatedly add similar dependencies packages, apply similar configurations, and integrate similar options across them. We repeat what we do.

Git does provide mechanisms to avoid that repetition through re-use. Making them obvious requires, however, to shift mindsets about the role of Git in our workflows. Teams often use version control systems to go back when things go wrong, that’s true for Git too. This book proposes you to use Git with re-use in mind, to go forward.

Re-usable commits
-----------------

Commits can be re-used through the `git cherry-pick` command. That command applies each one of the commit diffs in the context of the current branch. Hold that thought.

### Care about context readability

Cherry-picking commits effectively requires, however, some precautions. First of all, diffs are sensible to context and cannot be applied if the current branch context differs widely from the context in which they were created. Conflicts are scary but rarely dangerous, and those rising from a single commit cherry-pick should not escape control. Errors that go unnoticed are far worse, and are increasingly probable when contexts differ the most.

The context of the current branch is usually well-known and can be reviewed if necessary. On the contrary, the context in which the cherry-picked commit was created is often far away, and the only information at hand may be that which is contained in the commit itself. Happily for us, the _unified diff_ format, that `git diff` uses, was specially created to provide context information and does the job pretty well if care is taken to keep it readable.

The second precaution becomes necessary when cherry-picking becomes a habit. You cannot afford reading each commit diffs when searching the one that does what you want to do. As soon as you write more than a few lines of code each week, you must give accurate titles to your commits if you intend to re-use them, otherwise, you simply won’t find them. [Tim Pope’s advice][tpope] is an excellent starting point to write useful commit messages, although we’ll discuss an addition to these rules later when talking about modularity. Read Tim Pope’s rules, apply them, you won’t regret.

  [tpope]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

### Care about modularity

Modularity is the fact for a component to depend on as few others than possible. Modular commits perform one single action, and because of that they are much more likely to be re-used that commits that perform several actions at once. Imagine for a moment that you painted a beach house white and built a garage for it in a single commit. Even if many houses need painting, you won’t be able to re-use your commit on those which already have a garage (or don’t need any) without incurring in a wood and nails and sliding doors conflict. Since the painting didn’t depend on the garage construction, splitting both actions in separate commits would have increased their modularity and increased the number of re-use opportunities.

Some actions are, indeed, much likely than others to be re-used, and some other should not be re-used without special care. Author’s intentions are the most accurate helpers we have to determine if a commit belongs to a category or another, and here is where a little addition to the T. Popes rules come in handy (see Constrained Verbs). Using a reduced set of verbs to start the commit messages allows to spot the most interesting commits when scanning the compact Git logs (`git log --oneline`). Feature commits are those whose title starts with `Add`, `Remove`, `Enable` or `Disable`. Fixes titles start with `Fix`. Feature-related actions are the most likely to be re-used and, on the opposite end of the re-usability, commits that start with `Minor ...` and `Refactor` are the less susceptible of re-use. With some practice, your brain will quickly learn to discard those uninteresting commits and focus on the others.

### Make intentions clear

Real world. Today. My team, your team, are not perfect. We don’t know everything and all of us, besides, make mistakes. Making mistakes means that sometimes, what we actually do differs from what we intended to do. Agile teams do handle that through collaboration. Individuals may fail, but the team should not. Communicating your intentions in all commit messages will improve your team’s resistance to failure.

“Why intentions?” may you ask.  Commits are composed by a collection of diffs, a hash, and a message. The diffs do already show what you did, no need to repeat it in the commit message. Your intentions, however, may not be obvious. That commit looks like a refactoring, did Bob intend to modify that method's return value? When in doubt, Alice won’t fix the code. Would Bob have started his commit message with `Refactor` and Alice would have fixed the mistake before it became a bug.

That’s not all. Intentions are also what we look for when looking for solutions. People may not know _how_ to enable the file sharing system, but they know that’s what they want to do. Clear intentions in commit messages allow all of us to get the job done, first, and then to learn from the work of more skilled developers.
