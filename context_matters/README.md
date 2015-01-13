Context Matters
===============

Limitations of the tree model
-----------------------------



<img src="assets/git_repo_vs_tree.png" alt="" align="left"/>

### An error-prone tree representation of Git repositories


- Git repositories are often represented as skinny trees
- That's useful to visualize how branches are related
- But that compact representation is also error-prone
- And can lead to mistakes when working with branches

<img src="assets/tree_branch_vs_git_branch.png" alt="" align="left"/>

### Git branches are not tree branches


- Git branches go far beyond tree branches because they do extend down to the repository intial commit

```bash
git log --oneline purple

3af45d44 Add purple feature
985d3ea3 ...
...      ...
96bb4c78 Initial commit
```

<img src="assets/repo_collection_of_branches.png" alt="" align="left"/>

### All Git branches contain the initial commit



<img src="assets/git_repo_as_a_large_tree.png" alt="" align="left"/>

### A more accurate tree representation


----


License
-------

    This article is part of the Gardening with Git series.

    Copyright (C) 2014, 2015 Gonzalo Bulnes Guilpain
    Please refer to the series LICENSE for copying conditions.

