Backup a branch
===============

You are going to modify a branch in a destructive way and want to keep a backup at hand.

_Create a new branch in the context of the one you want to backup. Give it a name that conventionally designs it as a backup branch (e.g.: `<name-of-the-branch-to-backup>-backup`)._

Motivation
----------

Some `git` commands are potentially destructive. Backing branches up allows to use them them safely and ensures there is always a way back when moving branches (`git rebase`) or refactoring them (`git rebase --interactive`).

Mechanics
---------

1. Establish a naming convention for backup branches
1. Choose an appropriate name for your backup branch
1. Create a new backup branch in the context of the one you want to backup, with the appropriate name

Example
-------

Let's say that two features were developped simultaneously, each one in a feature branch and may interfere (that's to say they may be incompatible). While one branch will be merged without modification, the context of the second should be updated before merging it. Since [updating the context of a branch][../../context] involves the potentially-destructive `git rebase` command, it's worth creating a backup first.

```bash
# create a branch in the context of feature-B and
# with a name that's appropriate for a backup branch
git branch feature-B-backup feature-B
```

See Also
--------

- How-to [restore a branch from a backup](restore_a_branch_from_a_backup.md)

License
-------

    This how-to is part of the Gardening with Git series.

    Copyright (C) 2013, 2014, 2015 Gonzalo Bulnes Guilpain
    Copyright (C) 2015 Acid Ltda.
    Please refer to the series LICENSE for copying conditions.
