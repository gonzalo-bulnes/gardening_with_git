Using Git to Go Forward
=======================

<img src="assets/reuse-243x310.png" alt="" align="left"/>

**re-use** [ˌriːˈjuːz]:

1. _vtr_ To use something that is considered past its usefulness, again.
2. _n_ The act of salvaging or in some manner returning a discarded item into something usable. ([source][wiktionary])

  [wiktionary]: https://en.wiktionary.org/wiki/reuse


**Abstract**: By reconsiderig the Git respository purpose, collaborative teams can go beyond the rollback mecanism it provides and leverage their members mastery to write software that's easier to change in faster and more reliable ways. This article aims at switching views by explaing a few key aspects of the Git behaviour with re-use in mind, and describing a set of Git usage conventions which have proved being helpful in the Acid Labs agile daily practice.

Overview
--------

While `diff` files are often seen as a change by-product, the `patch` utility allows to use them as executable recipes to apply pre-defined changes to existing documents. The _[unified format][unidiff]_ (that `git diff` uses) can then be seen as a mean to **package changes** for further re-use.

With that in mind, it becomes possible to reconsider the Git repository purpose: while its main feature seemed to be going back in time when things went wrong, using Git with re-use in mind makes possible to avoid repeating recurrent actions, which may result in time savings and increased auditability and reliability. Hence the idea of going forward.

Special care at three levels is required, however, for these benefits to appear. At the smaller scale, _diff_ files provide information about the **context** in which changes can be applied. Skilled developers should focus in ensuring their **readability**. _Diff_ files are not re-used by themselves.

At the _commit_ level, full actions are packaged (thats to say small collections of related changes); care must be taken first in making them as **modular** as possible to open future re-use opportunities. The same care must be taken then in making committer **intentions** explicit to allow for further decisions to be made about re-use or debugging. Provided that's done, commits are susceptible to be re-used as-is.

At a larger scale, at the _branch_ level, **versatility** is the must-have characteristic, mainly because branches re-use often goes beyond the repository scope, where context shifts are important. Each branch provides some observable **effect**: a feature or some valuable chore. It's worth noting that moving a branch within a repository (that's to say updating its context) is, in fact, a case of re-use and that optimizing for re-use is optimizing for change.

At each of the three mentionned levels, a collection of conventional practices ensures the consitent and safe use of the available Git commands and a collection of how-to descriptions makes easier to sort the most recurrent difficulties out.

  [unidiff]: https://www.gnu.org/software/diffutils/manual/html_node/Context.html

Acknowledgements
----------------

I can't but thank my teammates at [Acid Labs](https://github.com/acidlabs). Without their disposition to experiment, the Git conventions presented here wouldn't be conventions at all.

License
-------

    This article is part of the Gardening with Git series.

    Copyright (C) 2013, 2014, 2015 Gonzalo Bulnes Guilpain
    Please refer to the series LICENSE for copying conditions.

