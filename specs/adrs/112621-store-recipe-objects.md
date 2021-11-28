# {short title of solved problem and solution}

- Status: accepted
- Deciders: all
- Date: 11/26/21

Technical Story: Deciding whether to store entire recipe objects to local storage rather than just he ids.

## Context and Problem Statement

Storing entire recipes would make subsequent lookups much faster but would require rewriting how our current localStorage backend is written. 

## Considered Options

- Keep the current system of using ids in exchange for speed and api points
- Rewrite the backend to store entire recipe objects

## Decision Outcome

Chosen option: Rewrite localStorage to store recipe objects

### Positive Consequences <!-- optional -->

- Loading the favorites page will be significantly faster
- We will use significantly fewer api points

### Negative Consequences <!-- optional -->

- Lots of dependencies for this code will make it hard to rewrite
- This change could potentially break a lot of part of the site
