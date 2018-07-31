# Regex Doesn't Suck

...at least not once you get used to it.

![alt text](https://raw.githubusercontent.com/pbzona/regexdoesntsuck/master/regexdoesntsuck.png)

This project is a quick regex validator that allows you to test one regular expression against multiple different test strings. For example, if you have a set of values you know you'll be using in your code, you can try out different expressions to find one that matches all of them. You provide various test cases and the application tells you whether your pattern matches some, or all, of them.

Check it out for yourself: [Regex Doesn't Suck](https://regexdoesntsuck.com)

## FAQ

### The name is wrong - regex DOES suck. Are you going to update it?

No! Regex is cool and not as hard as most people think. All the weird characters can be intimidating, so most people either don't take the time to learn it, complain about it, or both. This project gives you quick visual feedback about whether you're doing regex right.

### What if I'm not doing it right?

Check out the resources section further down for some ways to learn regex. Then come back and try it out here 😎

### How does this app check the pattern?

The pattern and flags you provide are passed into a Javascript `RegExp` constructor, which checks for matches using the built in `.test()` method. If you need to check your regex some other way, or have an advanced use case, this may not do what you want.

### Aren't there better sites that do the same thing?

Yeah probably. This is a quick way to test several strings against a pattern, and there are more advanced tools out there if you need them. See below.

## Resources

- [RegExr](https://regexr.com/) - A really good site that will show you real time feedback on the patterns that are matched in a given set of text.
- [Regex101](https://regex101.com/) - Another great tool that has a ton of implementation options, as well as explanations of the regular expressions you write.
- [MDN Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) - Because MDN is an amazing resource for pretty much everything.

## Bugs

There are probably some bugs in here, so if you find one, please open an issue or a PR.
