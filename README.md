Hi,

This is my messaging app for interview process.

Obviously, it's hard to gauge how sophisticated to make the app, since the scope of what was expected wasn't defined. It's a small app but being a demo of skill, some things are necessarily over-engineered, for the sake of demonstration.

I added some state management. It could be argued that it wouldn't be needed on this app since it is so small and React Query's caching could accomplish the same thing. I chose Zustand, being small and lightweight. Ordinarily I favor Redux (and especially like it paired with Redux Saga), but that definitely would have been overkill here.

One odd thing I did was to randomize the posts when they are loaded. Without this, they are sorted by user and the landing screen is a little boring.

I added navigation, which is more than this app needs, but is an important thing on larger apps and gives some nice transitions.

Ordinarily an app would have i18n, but it isn't needed here and is trivial to add.

For an app like this I would rather be able to paginate the messages or load in batches, but that seemed like an unnecessary complication here.

I added an app icon and a splash screen.

The app has 100% unit test coverage and no TS or linter errors.

I also should note I don't add a lot of comments. I know that there are different opinions about this subject. My philosophy is that comments are generally bad because:

1. They are an excuse to not make the code documents itself.

2. Comments don't tend to get maintained so given enough time, there is a good probability that they will become increasingly inaccurate. As Robert Martin says, "Comments are lies."

I try to chose expressive variable, function, and module names. If you keep things small enough, well organized, and well named - then comments become less necessary. If I feel the urge to write a comment, I ask myself, "Could this be written more clearly?" I tend to only write comments if I feel the code cannot easily convey the information the future coder may need. But I've worked at places that commented more and can adjust to whatever the philosophy is where I work. This applies to all things - ultimately it is an agreement between the developing team about how to handle things.

I look forward to your feedback.

Regards,
Kevin Smith
kevinsmithwebdev@gmail.com

P.S. I should also comment that my github account is fairly sparse. When I'm working, I often just focus on the work that I'm doing for the company. I haven't had much time for side projects, having moved to Barcelona, and then Madrid, we're buying an apartment, and of course trying to learn Spanish. Of course my work github contributions are of course extensive, but I can't share that. My portfolio is similarly not up-to-date.
