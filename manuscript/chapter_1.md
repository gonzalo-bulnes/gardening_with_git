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

### Care about modularity and make intentions clear

Modularity is the fact for a component to depend on as few others as possible. Modular commits perform one single action, and because of that they are much more  likely to be re-used than commits that perform several actions at once. Imagine for a moment that you painted a beach house white and built a garage for it in a single commit. Even if many houses need painting, you won’t be able to re-use your commit on those which already have a garage (or don’t need any) without incurring in a wood and nails and sliding doors conflict. Since the painting didn’t depend on the garage construction, splitting both actions in separate commits would have increased their modularity and increased the number of re-use opportunities.

Some actions are, indeed, much likely than others to be re-used, and some other should not be re-used without special care. Author’s intentions are the most accurate helpers we have to determine if a commit belongs to a category or another, and that is where a little addition to the T. Pope’s rules come in handy (see Constrained Verbs). Using a reduced set of verbs to start the commit messages allows to spot the most interesting commits when scanning the compact Git logs (`git log --oneline`). Feature commits are those whose title starts with `Add`, `Remove`, `Enable` or `Disable`. Feature-related actions are the most likely to be re-used and, on the opposite end of the re-usability, commits that start with `Minor ...` and `Refactor` are the less susceptible of re-use. Fixes titles start with `Fix` and should not be forgotten when re-using the corresponding feature-related actions. With some practice, your brain will quickly learn to discard the uninteresting commits and focus on those that matter the most.

----

### Constrained Verbs

Tim Pope’s rules recommend to start commits titles with verbs in imperative mode to match the Git automatic behaviour. Commits are packaged actions, and it’s no coincidence that they are best described by verbs. At first sight, any verb can fit, and even other words than verbs can start a commit title. I’ve found, however, that picking those words from a conventionally constrained list does lead to both commit messages that are better at communicating their authors’ intentions, and to increased commit modularity. An ideal list is short, yet long enough to write precise commit titles; its terms are unambiguous both within and outside of the team.

On one hand, a short list leads to regularity in the commit titles. Regularity makes easier to scan long list of commits when looking for the re-usable ones. On the other hand, a diverse set of verbs allows for increased precision when communicating intentions, which makes easier for your fellow developers to learn from you or correct your mistakes.

Intentions statements also have incidence on re-use behaviours, because some commits are simply not intended to be re-used. Making them distinct from the title allows to focus on those that matter the most.

`Add`, `Remove`, `Enable`, `Disable`, `Fix`, `Refactor` are the verbs I prefer. `Minor ...`, `Temporary ...`, `Partial ...` proved to be useful modifiers to me. I try to `Add support for hyperspace jumps`, not to `Add regulator to avoid hyperbolic retro-pulsations`. Intention is what matters the most in the commit title, while implementation details can be left for the message body. Neither `Minor ...` or `Refactor` commits are intended to be re-used. However, knowing the later should keep the test suite green if re-used is useful. `Temporary ...` and `Partial ...` commits should never make it to the merge, yet can be useful in a branch context. I could, for example, `Temporary add Alice’s IP to whitelist` so she can review our job in the staging environment servers. Such a commit could even be cherry-picked and reverted several times until the the branch is polished and the feature ready to be delivered. Those temporary commits would then be removed before merging to keep the feature clean. Re-use can save time in short time scopes too.

----
