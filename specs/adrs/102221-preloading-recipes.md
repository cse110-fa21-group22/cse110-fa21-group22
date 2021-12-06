# Preloaded Recipes on Explore Page

- Status: Accepted
- Deciders: all
- Date: 2021-10-22

Technical Story: On the home page of our applications, there should already be 10 recipes loaded so that the user can explore different options.

## Context and Problem Statement

From the perspective of a begineer cook, they may not know what exactly to search for to find a recipe, or may simply not know what they want to eat. Populating the home page with recipes may help these begineers find recipes.

## Considered Options

1.  Preloading recipes on explore
2.  Having only a search option to find recipes

## Decision Outcome

Chose option 1

### Positive Consequences

- Helps begineers find new recipes
- Do not need to have any knowledge on cooking/recipes to find something to make
- Populates the home page, more welcoming user experience

### Negative Consequences

- Possibly more API calls if the user keeps reloading home page
