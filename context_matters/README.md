Context Matters
===============

Summary
-------

### Limitations of the tree representation

Git repositories are often represented as skinny trees. That's a compact and useful representation to visualize how branches are related, but it is error-prone and can lead to mistakes when working with branches. Unlike tree branches, Git branches do extend down to the repository initial commit. Other tree representation can be used that don't have that drawback.

### Context does matter

Because identical commits will have different consequences when applied in different contexts, a branch is defined by what makes it different from others -original commits-, but also by what it shares with them - the original commits **context**.

In fact, almost all branches are created in the context of another, that's what `git checkout -b new-branch` does. When a whole branch is part of the context of another, the first is said to be _fast-forwardable_ from the other.  The **fast-forward** relation between branches is essential to ensure that commits are always applied in the adequate context, that's to say that they do what they're intended to do.

### Context adaptation in practice

- Updating a branch context with `git rebase`
- Separating context adaptation from original commits with `git rebase --interactive`

License
-------

    This article is part of the Gardening with Git series.

    Copyright (C) 2014, 2015 Gonzalo Bulnes Guilpain
    Please refer to the series LICENSE for copying conditions.

