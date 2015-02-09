Chapter 1
=========

Re-use
------

The Don’t Repeat Yourself (DRY) principle has been widely adopted across the software development community and most of us try not to write twice the same code, or we eliminate duplication through specific refactoring. However, for those of us who use to work on different projects, not repeating what we write doesn’t mean not repeating ourselves. When implementing popular features in several projects, we still repeatedly add similar dependencies packages, apply similar configurations, and integrate similar options across them. We repeat what we do.

Git does provide mechanisms to avoid that repetition through re-use. Making them obvious requires, however, to shift mindsets about the role of Git in our workflows. Teams often use version control systems to go back when things go wrong, that’s true for Git too. This book proposes you to use Git with re-use in mind, to go forward.

Re-usable commits
-----------------

Commits can be re-used through the `git cherry-pick` command. That command applies each one of the commit diffs in the context of the current branch. Hold that thought.

### Do care about context readability

Cherry-picking commits effectively requires, however, some precautions. First of all, diffs are sensible to context and cannot be applied if the current branch context differs widely from the context in which they were created. Conflicts are scary but rarely dangerous, and those rising from a single commit cherry-pick should not escape from control. Errors that go unnoticed are far worse, and are increasingly probable when contexts differ the most.

The context of the current branch is usually well-known and can be reviewed if necessary. On the contrary, the context in which the cherry-picked commit was created is often far away, and the only information at hand may be that which is contained in the commit itself. Happily for us, the _unified diff_ format, that `git diff` uses, was specially created to provide context information and does the job pretty well if care is taken to keep it readable.

The second precaution becomes necessary when cherry-picking becomes a habit. You cannot afford reading each commit diffs when searching the one which does what you want to do. As soon as you write more than a few lines of code each week, you must give accurate titles to your commits if you intend to re-use them, otherwise, you simply won’t find them. [Tim Pope’s advice][tpope] is an excellent starting point to write useful commit messages, although we’ll discuss an addition to these rules later when talking about modularity. Read Tim Pope’s rules, apply them, you won’t regret.

  [tpope]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
