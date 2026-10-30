(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const bo="\\t\\n\\v\\f\\r \\x1c-\\x1f\\x85\\xa0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000",$e=s=>Array.from(s);function tt(s){const e=Math.floor(s),t=s-e;return t<.5?e:t>.5?e+1:e%2===0?e:e+1}function Gr(s,e){const t=Array.from(s),n=Array.from(e);for(let i=0;i<Math.min(t.length,n.length);i++){const r=t[i].codePointAt(0)-n[i].codePointAt(0);if(r)return r}return t.length-n.length}const ef=40;function zh(s,e,t){if(!e)return 0;const n=$e(s);let i=e.pos;if(e.textSha1!==t&&e.before){const r=s.indexOf(e.before);r>=0&&(i=$e(s.slice(0,r)).length+$e(e.before).length)}return i>0&&i<n.length?i:0}function tf(s,e){return $e(s).slice(Math.max(0,e-ef),e).join("")}const _l=`Bartleby, The Scrivener

A STORY OF WALL-STREET.

by Herman Melville




I am a rather elderly man. The nature of my avocations for the last
thirty years has brought me into more than ordinary contact with what
would seem an interesting and somewhat singular set of men, of whom as
yet nothing that I know of has ever been written:—I mean the
law-copyists or scriveners. I have known very many of them,
professionally and privately, and if I pleased, could relate divers
histories, at which good-natured gentlemen might smile, and sentimental
souls might weep. But I waive the biographies of all other scriveners
for a few passages in the life of Bartleby, who was a scrivener of the
strangest I ever saw or heard of. While of other law-copyists I might
write the complete life, of Bartleby nothing of that sort can be done.
I believe that no materials exist for a full and satisfactory biography
of this man. It is an irreparable loss to literature. Bartleby was one
of those beings of whom nothing is ascertainable, except from the
original sources, and in his case those are very small. What my own
astonished eyes saw of Bartleby, _that_ is all I know of him, except,
indeed, one vague report which will appear in the sequel.

Ere introducing the scrivener, as he first appeared to me, it is fit I
make some mention of myself, my employés, my business, my chambers, and
general surroundings; because some such description is indispensable to
an adequate understanding of the chief character about to be presented.

Imprimis: I am a man who, from his youth upwards, has been filled with
a profound conviction that the easiest way of life is the best. Hence,
though I belong to a profession proverbially energetic and nervous,
even to turbulence, at times, yet nothing of that sort have I ever
suffered to invade my peace. I am one of those unambitious lawyers who
never addresses a jury, or in any way draws down public applause; but
in the cool tranquility of a snug retreat, do a snug business among
rich men’s bonds and mortgages and title-deeds. All who know me,
consider me an eminently _safe_ man. The late John Jacob Astor, a
personage little given to poetic enthusiasm, had no hesitation in
pronouncing my first grand point to be prudence; my next, method. I do
not speak it in vanity, but simply record the fact, that I was not
unemployed in my profession by the late John Jacob Astor; a name which,
I admit, I love to repeat, for it hath a rounded and orbicular sound to
it, and rings like unto bullion. I will freely add, that I was not
insensible to the late John Jacob Astor’s good opinion.

Some time prior to the period at which this little history begins, my
avocations had been largely increased. The good old office, now extinct
in the State of New York, of a Master in Chancery, had been conferred
upon me. It was not a very arduous office, but very pleasantly
remunerative. I seldom lose my temper; much more seldom indulge in
dangerous indignation at wrongs and outrages; but I must be permitted
to be rash here and declare, that I consider the sudden and violent
abrogation of the office of Master in Chancery, by the new
Constitution, as a—premature act; inasmuch as I had counted upon a
life-lease of the profits, whereas I only received those of a few short
years. But this is by the way.

My chambers were up stairs at No.—Wall-street. At one end they looked
upon the white wall of the interior of a spacious sky-light shaft,
penetrating the building from top to bottom. This view might have been
considered rather tame than otherwise, deficient in what landscape
painters call “life.” But if so, the view from the other end of my
chambers offered, at least, a contrast, if nothing more. In that
direction my windows commanded an unobstructed view of a lofty brick
wall, black by age and everlasting shade; which wall required no
spy-glass to bring out its lurking beauties, but for the benefit of all
near-sighted spectators, was pushed up to within ten feet of my window
panes. Owing to the great height of the surrounding buildings, and my
chambers being on the second floor, the interval between this wall and
mine not a little resembled a huge square cistern.

At the period just preceding the advent of Bartleby, I had two persons
as copyists in my employment, and a promising lad as an office-boy.
First, Turkey; second, Nippers; third, Ginger Nut. These may seem
names, the like of which are not usually found in the Directory. In
truth they were nicknames, mutually conferred upon each other by my
three clerks, and were deemed expressive of their respective persons or
characters. Turkey was a short, pursy Englishman of about my own age,
that is, somewhere not far from sixty. In the morning, one might say,
his face was of a fine florid hue, but after twelve o’clock,
meridian—his dinner hour—it blazed like a grate full of Christmas
coals; and continued blazing—but, as it were, with a gradual wane—till
6 o’clock, P.M. or thereabouts, after which I saw no more of the
proprietor of the face, which gaining its meridian with the sun, seemed
to set with it, to rise, culminate, and decline the following day, with
the like regularity and undiminished glory. There are many singular
coincidences I have known in the course of my life, not the least among
which was the fact, that exactly when Turkey displayed his fullest
beams from his red and radiant countenance, just then, too, at that
critical moment, began the daily period when I considered his business
capacities as seriously disturbed for the remainder of the twenty-four
hours. Not that he was absolutely idle, or averse to business then; far
from it. The difficulty was, he was apt to be altogether too energetic.
There was a strange, inflamed, flurried, flighty recklessness of
activity about him. He would be incautious in dipping his pen into his
inkstand. All his blots upon my documents, were dropped there after
twelve o’clock, meridian. Indeed, not only would he be reckless and
sadly given to making blots in the afternoon, but some days he went
further, and was rather noisy. At such times, too, his face flamed with
augmented blazonry, as if cannel coal had been heaped on anthracite. He
made an unpleasant racket with his chair; spilled his sand-box; in
mending his pens, impatiently split them all to pieces, and threw them
on the floor in a sudden passion; stood up and leaned over his table,
boxing his papers about in a most indecorous manner, very sad to behold
in an elderly man like him. Nevertheless, as he was in many ways a most
valuable person to me, and all the time before twelve o’clock,
meridian, was the quickest, steadiest creature too, accomplishing a
great deal of work in a style not easy to be matched—for these reasons,
I was willing to overlook his eccentricities, though indeed,
occasionally, I remonstrated with him. I did this very gently, however,
because, though the civilest, nay, the blandest and most reverential of
men in the morning, yet in the afternoon he was disposed, upon
provocation, to be slightly rash with his tongue, in fact, insolent.
Now, valuing his morning services as I did, and resolved not to lose
them; yet, at the same time made uncomfortable by his inflamed ways
after twelve o’clock; and being a man of peace, unwilling by my
admonitions to call forth unseemly retorts from him; I took upon me,
one Saturday noon (he was always worse on Saturdays), to hint to him,
very kindly, that perhaps now that he was growing old, it might be well
to abridge his labors; in short, he need not come to my chambers after
twelve o’clock, but, dinner over, had best go home to his lodgings and
rest himself till teatime. But no; he insisted upon his afternoon
devotions. His countenance became intolerably fervid, as he
oratorically assured me—gesticulating with a long ruler at the other
end of the room—that if his services in the morning were useful, how
indispensable, then, in the afternoon?

“With submission, sir,” said Turkey on this occasion, “I consider
myself your right-hand man. In the morning I but marshal and deploy my
columns; but in the afternoon I put myself at their head, and gallantly
charge the foe, thus!”—and he made a violent thrust with the ruler.

“But the blots, Turkey,” intimated I.

“True,—but, with submission, sir, behold these hairs! I am getting old.
Surely, sir, a blot or two of a warm afternoon is not to be severely
urged against gray hairs. Old age—even if it blot the page—is
honorable. With submission, sir, we _both_ are getting old.”

This appeal to my fellow-feeling was hardly to be resisted. At all
events, I saw that go he would not. So I made up my mind to let him
stay, resolving, nevertheless, to see to it, that during the afternoon
he had to do with my less important papers.

Nippers, the second on my list, was a whiskered, sallow, and, upon the
whole, rather piratical-looking young man of about five and twenty. I
always deemed him the victim of two evil powers—ambition and
indigestion. The ambition was evinced by a certain impatience of the
duties of a mere copyist, an unwarrantable usurpation of strictly
professional affairs, such as the original drawing up of legal
documents. The indigestion seemed betokened in an occasional nervous
testiness and grinning irritability, causing the teeth to audibly grind
together over mistakes committed in copying; unnecessary maledictions,
hissed, rather than spoken, in the heat of business; and especially by
a continual discontent with the height of the table where he worked.
Though of a very ingenious mechanical turn, Nippers could never get
this table to suit him. He put chips under it, blocks of various sorts,
bits of pasteboard, and at last went so far as to attempt an exquisite
adjustment by final pieces of folded blotting paper. But no invention
would answer. If, for the sake of easing his back, he brought the table
lid at a sharp angle well up towards his chin, and wrote there like a
man using the steep roof of a Dutch house for his desk:—then he
declared that it stopped the circulation in his arms. If now he lowered
the table to his waistbands, and stooped over it in writing, then there
was a sore aching in his back. In short, the truth of the matter was,
Nippers knew not what he wanted. Or, if he wanted any thing, it was to
be rid of a scrivener’s table altogether. Among the manifestations of
his diseased ambition was a fondness he had for receiving visits from
certain ambiguous-looking fellows in seedy coats, whom he called his
clients. Indeed I was aware that not only was he, at times,
considerable of a ward-politician, but he occasionally did a little
business at the Justices’ courts, and was not unknown on the steps of
the Tombs. I have good reason to believe, however, that one individual
who called upon him at my chambers, and who, with a grand air, he
insisted was his client, was no other than a dun, and the alleged
title-deed, a bill. But with all his failings, and the annoyances he
caused me, Nippers, like his compatriot Turkey, was a very useful man
to me; wrote a neat, swift hand; and, when he chose, was not deficient
in a gentlemanly sort of deportment. Added to this, he always dressed
in a gentlemanly sort of way; and so, incidentally, reflected credit
upon my chambers. Whereas with respect to Turkey, I had much ado to
keep him from being a reproach to me. His clothes were apt to look oily
and smell of eating-houses. He wore his pantaloons very loose and baggy
in summer. His coats were execrable; his hat not to be handled. But
while the hat was a thing of indifference to me, inasmuch as his
natural civility and deference, as a dependent Englishman, always led
him to doff it the moment he entered the room, yet his coat was another
matter. Concerning his coats, I reasoned with him; but with no effect.
The truth was, I suppose, that a man of so small an income, could not
afford to sport such a lustrous face and a lustrous coat at one and the
same time. As Nippers once observed, Turkey’s money went chiefly for
red ink. One winter day I presented Turkey with a highly-respectable
looking coat of my own, a padded gray coat, of a most comfortable
warmth, and which buttoned straight up from the knee to the neck. I
thought Turkey would appreciate the favor, and abate his rashness and
obstreperousness of afternoons. But no. I verily believe that buttoning
himself up in so downy and blanket-like a coat had a pernicious effect
upon him; upon the same principle that too much oats are bad for
horses. In fact, precisely as a rash, restive horse is said to feel his
oats, so Turkey felt his coat. It made him insolent. He was a man whom
prosperity harmed.

Though concerning the self-indulgent habits of Turkey I had my own
private surmises, yet touching Nippers I was well persuaded that
whatever might be his faults in other respects, he was, at least, a
temperate young man. But indeed, nature herself seemed to have been his
vintner, and at his birth charged him so thoroughly with an irritable,
brandy-like disposition, that all subsequent potations were needless.
When I consider how, amid the stillness of my chambers, Nippers would
sometimes impatiently rise from his seat, and stooping over his table,
spread his arms wide apart, seize the whole desk, and move it, and jerk
it, with a grim, grinding motion on the floor, as if the table were a
perverse voluntary agent, intent on thwarting and vexing him; I plainly
perceive that for Nippers, brandy and water were altogether
superfluous.

It was fortunate for me that, owing to its peculiar
cause—indigestion—the irritability and consequent nervousness of
Nippers, were mainly observable in the morning, while in the afternoon
he was comparatively mild. So that Turkey’s paroxysms only coming on
about twelve o’clock, I never had to do with their eccentricities at
one time. Their fits relieved each other like guards. When Nippers’ was
on, Turkey’s was off; and _vice versa_. This was a good natural
arrangement under the circumstances.

Ginger Nut, the third on my list, was a lad some twelve years old. His
father was a carman, ambitious of seeing his son on the bench instead
of a cart, before he died. So he sent him to my office as student at
law, errand boy, and cleaner and sweeper, at the rate of one dollar a
week. He had a little desk to himself, but he did not use it much. Upon
inspection, the drawer exhibited a great array of the shells of various
sorts of nuts. Indeed, to this quick-witted youth the whole noble
science of the law was contained in a nut-shell. Not the least among
the employments of Ginger Nut, as well as one which he discharged with
the most alacrity, was his duty as cake and apple purveyor for Turkey
and Nippers. Copying law papers being proverbially dry, husky sort of
business, my two scriveners were fain to moisten their mouths very
often with Spitzenbergs to be had at the numerous stalls nigh the
Custom House and Post Office. Also, they sent Ginger Nut very
frequently for that peculiar cake—small, flat, round, and very
spicy—after which he had been named by them. Of a cold morning when
business was but dull, Turkey would gobble up scores of these cakes, as
if they were mere wafers—indeed they sell them at the rate of six or
eight for a penny—the scrape of his pen blending with the crunching of
the crisp particles in his mouth. Of all the fiery afternoon blunders
and flurried rashnesses of Turkey, was his once moistening a
ginger-cake between his lips, and clapping it on to a mortgage for a
seal. I came within an ace of dismissing him then. But he mollified me
by making an oriental bow, and saying—“With submission, sir, it was
generous of me to find you in stationery on my own account.”

Now my original business—that of a conveyancer and title hunter, and
drawer-up of recondite documents of all sorts—was considerably
increased by receiving the master’s office. There was now great work
for scriveners. Not only must I push the clerks already with me, but I
must have additional help. In answer to my advertisement, a motionless
young man one morning, stood upon my office threshold, the door being
open, for it was summer. I can see that figure now—pallidly neat,
pitiably respectable, incurably forlorn! It was Bartleby.

After a few words touching his qualifications, I engaged him, glad to
have among my corps of copyists a man of so singularly sedate an
aspect, which I thought might operate beneficially upon the flighty
temper of Turkey, and the fiery one of Nippers.

I should have stated before that ground glass folding-doors divided my
premises into two parts, one of which was occupied by my scriveners,
the other by myself. According to my humor I threw open these doors, or
closed them. I resolved to assign Bartleby a corner by the
folding-doors, but on my side of them, so as to have this quiet man
within easy call, in case any trifling thing was to be done. I placed
his desk close up to a small side-window in that part of the room, a
window which originally had afforded a lateral view of certain grimy
back-yards and bricks, but which, owing to subsequent erections,
commanded at present no view at all, though it gave some light. Within
three feet of the panes was a wall, and the light came down from far
above, between two lofty buildings, as from a very small opening in a
dome. Still further to a satisfactory arrangement, I procured a high
green folding screen, which might entirely isolate Bartleby from my
sight, though not remove him from my voice. And thus, in a manner,
privacy and society were conjoined.

At first Bartleby did an extraordinary quantity of writing. As if long
famishing for something to copy, he seemed to gorge himself on my
documents. There was no pause for digestion. He ran a day and night
line, copying by sun-light and by candle-light. I should have been
quite delighted with his application, had he been cheerfully
industrious. But he wrote on silently, palely, mechanically.

It is, of course, an indispensable part of a scrivener’s business to
verify the accuracy of his copy, word by word. Where there are two or
more scriveners in an office, they assist each other in this
examination, one reading from the copy, the other holding the original.
It is a very dull, wearisome, and lethargic affair. I can readily
imagine that to some sanguine temperaments it would be altogether
intolerable. For example, I cannot credit that the mettlesome poet
Byron would have contentedly sat down with Bartleby to examine a law
document of, say five hundred pages, closely written in a crimpy hand.

Now and then, in the haste of business, it had been my habit to assist
in comparing some brief document myself, calling Turkey or Nippers for
this purpose. One object I had in placing Bartleby so handy to me
behind the screen, was to avail myself of his services on such trivial
occasions. It was on the third day, I think, of his being with me, and
before any necessity had arisen for having his own writing examined,
that, being much hurried to complete a small affair I had in hand, I
abruptly called to Bartleby. In my haste and natural expectancy of
instant compliance, I sat with my head bent over the original on my
desk, and my right hand sideways, and somewhat nervously extended with
the copy, so that immediately upon emerging from his retreat, Bartleby
might snatch it and proceed to business without the least delay.

In this very attitude did I sit when I called to him, rapidly stating
what it was I wanted him to do—namely, to examine a small paper with
me. Imagine my surprise, nay, my consternation, when without moving
from his privacy, Bartleby in a singularly mild, firm voice, replied,
“I would prefer not to.”

I sat awhile in perfect silence, rallying my stunned faculties.
Immediately it occurred to me that my ears had deceived me, or Bartleby
had entirely misunderstood my meaning. I repeated my request in the
clearest tone I could assume. But in quite as clear a one came the
previous reply, “I would prefer not to.”

“Prefer not to,” echoed I, rising in high excitement, and crossing the
room with a stride. “What do you mean? Are you moon-struck? I want you
to help me compare this sheet here—take it,” and I thrust it towards
him.

“I would prefer not to,” said he.

I looked at him steadfastly. His face was leanly composed; his gray eye
dimly calm. Not a wrinkle of agitation rippled him. Had there been the
least uneasiness, anger, impatience or impertinence in his manner; in
other words, had there been any thing ordinarily human about him,
doubtless I should have violently dismissed him from the premises. But
as it was, I should have as soon thought of turning my pale
plaster-of-paris bust of Cicero out of doors. I stood gazing at him
awhile, as he went on with his own writing, and then reseated myself at
my desk. This is very strange, thought I. What had one best do? But my
business hurried me. I concluded to forget the matter for the present,
reserving it for my future leisure. So calling Nippers from the other
room, the paper was speedily examined.

A few days after this, Bartleby concluded four lengthy documents, being
quadruplicates of a week’s testimony taken before me in my High Court
of Chancery. It became necessary to examine them. It was an important
suit, and great accuracy was imperative. Having all things arranged I
called Turkey, Nippers and Ginger Nut from the next room, meaning to
place the four copies in the hands of my four clerks, while I should
read from the original. Accordingly Turkey, Nippers and Ginger Nut had
taken their seats in a row, each with his document in hand, when I
called to Bartleby to join this interesting group.

“Bartleby! quick, I am waiting.”

I heard a slow scrape of his chair legs on the uncarpeted floor, and
soon he appeared standing at the entrance of his hermitage.

“What is wanted?” said he mildly.

“The copies, the copies,” said I hurriedly. “We are going to examine
them. There”—and I held towards him the fourth quadruplicate.

“I would prefer not to,” he said, and gently disappeared behind the
screen.

For a few moments I was turned into a pillar of salt, standing at the
head of my seated column of clerks. Recovering myself, I advanced
towards the screen, and demanded the reason for such extraordinary
conduct.

“_Why_ do you refuse?”

“I would prefer not to.”

With any other man I should have flown outright into a dreadful
passion, scorned all further words, and thrust him ignominiously from
my presence. But there was something about Bartleby that not only
strangely disarmed me, but in a wonderful manner touched and
disconcerted me. I began to reason with him.

“These are your own copies we are about to examine. It is labor saving
to you, because one examination will answer for your four papers. It is
common usage. Every copyist is bound to help examine his copy. Is it
not so? Will you not speak? Answer!”

“I prefer not to,” he replied in a flute-like tone. It seemed to me
that while I had been addressing him, he carefully revolved every
statement that I made; fully comprehended the meaning; could not
gainsay the irresistible conclusions; but, at the same time, some
paramount consideration prevailed with him to reply as he did.

“You are decided, then, not to comply with my request—a request made
according to common usage and common sense?”

He briefly gave me to understand that on that point my judgment was
sound. Yes: his decision was irreversible.

It is not seldom the case that when a man is browbeaten in some
unprecedented and violently unreasonable way, he begins to stagger in
his own plainest faith. He begins, as it were, vaguely to surmise that,
wonderful as it may be, all the justice and all the reason is on the
other side. Accordingly, if any disinterested persons are present, he
turns to them for some reinforcement for his own faltering mind.

“Turkey,” said I, “what do you think of this? Am I not right?”

“With submission, sir,” said Turkey, with his blandest tone, “I think
that you are.”

“Nippers,” said I, “what do _you_ think of it?”

“I think I should kick him out of the office.”

(The reader of nice perceptions will here perceive that, it being
morning, Turkey’s answer is couched in polite and tranquil terms, but
Nippers replies in ill-tempered ones. Or, to repeat a previous
sentence, Nippers’ ugly mood was on duty and Turkey’s off.)

“Ginger Nut,” said I, willing to enlist the smallest suffrage in my
behalf, “what do you think of it?”

“I think, sir, he’s a little _luny_,” replied Ginger Nut with a grin.

“You hear what they say,” said I, turning towards the screen, “come
forth and do your duty.”

But he vouchsafed no reply. I pondered a moment in sore perplexity. But
once more business hurried me. I determined again to postpone the
consideration of this dilemma to my future leisure. With a little
trouble we made out to examine the papers without Bartleby, though at
every page or two, Turkey deferentially dropped his opinion that this
proceeding was quite out of the common; while Nippers, twitching in his
chair with a dyspeptic nervousness, ground out between his set teeth
occasional hissing maledictions against the stubborn oaf behind the
screen. And for his (Nippers’) part, this was the first and the last
time he would do another man’s business without pay.

Meanwhile Bartleby sat in his hermitage, oblivious to every thing but
his own peculiar business there.

Some days passed, the scrivener being employed upon another lengthy
work. His late remarkable conduct led me to regard his ways narrowly. I
observed that he never went to dinner; indeed that he never went any
where. As yet I had never of my personal knowledge known him to be
outside of my office. He was a perpetual sentry in the corner. At about
eleven o’clock though, in the morning, I noticed that Ginger Nut would
advance toward the opening in Bartleby’s screen, as if silently
beckoned thither by a gesture invisible to me where I sat. The boy
would then leave the office jingling a few pence, and reappear with a
handful of ginger-nuts which he delivered in the hermitage, receiving
two of the cakes for his trouble.

He lives, then, on ginger-nuts, thought I; never eats a dinner,
properly speaking; he must be a vegetarian then; but no; he never eats
even vegetables, he eats nothing but ginger-nuts. My mind then ran on
in reveries concerning the probable effects upon the human constitution
of living entirely on ginger-nuts. Ginger-nuts are so called because
they contain ginger as one of their peculiar constituents, and the
final flavoring one. Now what was ginger? A hot, spicy thing. Was
Bartleby hot and spicy? Not at all. Ginger, then, had no effect upon
Bartleby. Probably he preferred it should have none.

Nothing so aggravates an earnest person as a passive resistance. If the
individual so resisted be of a not inhumane temper, and the resisting
one perfectly harmless in his passivity; then, in the better moods of
the former, he will endeavor charitably to construe to his imagination
what proves impossible to be solved by his judgment. Even so, for the
most part, I regarded Bartleby and his ways. Poor fellow! thought I, he
means no mischief; it is plain he intends no insolence; his aspect
sufficiently evinces that his eccentricities are involuntary. He is
useful to me. I can get along with him. If I turn him away, the chances
are he will fall in with some less indulgent employer, and then he will
be rudely treated, and perhaps driven forth miserably to starve. Yes.
Here I can cheaply purchase a delicious self-approval. To befriend
Bartleby; to humor him in his strange willfulness, will cost me little
or nothing, while I lay up in my soul what will eventually prove a
sweet morsel for my conscience. But this mood was not invariable with
me. The passiveness of Bartleby sometimes irritated me. I felt
strangely goaded on to encounter him in new opposition, to elicit some
angry spark from him answerable to my own. But indeed I might as well
have essayed to strike fire with my knuckles against a bit of Windsor
soap. But one afternoon the evil impulse in me mastered me, and the
following little scene ensued:

“Bartleby,” said I, “when those papers are all copied, I will compare
them with you.”

“I would prefer not to.”

“How? Surely you do not mean to persist in that mulish vagary?”

No answer.

I threw open the folding-doors near by, and turning upon Turkey and
Nippers, exclaimed in an excited manner—

“He says, a second time, he won’t examine his papers. What do you think
of it, Turkey?”

It was afternoon, be it remembered. Turkey sat glowing like a brass
boiler, his bald head steaming, his hands reeling among his blotted
papers.

“Think of it?” roared Turkey; “I think I’ll just step behind his
screen, and black his eyes for him!”

So saying, Turkey rose to his feet and threw his arms into a pugilistic
position. He was hurrying away to make good his promise, when I
detained him, alarmed at the effect of incautiously rousing Turkey’s
combativeness after dinner.

“Sit down, Turkey,” said I, “and hear what Nippers has to say. What do
you think of it, Nippers? Would I not be justified in immediately
dismissing Bartleby?”

“Excuse me, that is for you to decide, sir. I think his conduct quite
unusual, and indeed unjust, as regards Turkey and myself. But it may
only be a passing whim.”

“Ah,” exclaimed I, “you have strangely changed your mind then—you speak
very gently of him now.”

“All beer,” cried Turkey; “gentleness is effects of beer—Nippers and I
dined together to-day. You see how gentle _I_ am, sir. Shall I go and
black his eyes?”

“You refer to Bartleby, I suppose. No, not to-day, Turkey,” I replied;
“pray, put up your fists.”

I closed the doors, and again advanced towards Bartleby. I felt
additional incentives tempting me to my fate. I burned to be rebelled
against again. I remembered that Bartleby never left the office.

“Bartleby,” said I, “Ginger Nut is away; just step round to the Post
Office, won’t you? (it was but a three minute walk,) and see if there
is any thing for me.”

“I would prefer not to.”

“You _will_ not?”

“I _prefer_ not.”

I staggered to my desk, and sat there in a deep study. My blind
inveteracy returned. Was there any other thing in which I could procure
myself to be ignominiously repulsed by this lean, penniless wight?—my
hired clerk? What added thing is there, perfectly reasonable, that he
will be sure to refuse to do?

“Bartleby!”

No answer.

“Bartleby,” in a louder tone.

No answer.

“Bartleby,” I roared.

Like a very ghost, agreeably to the laws of magical invocation, at the
third summons, he appeared at the entrance of his hermitage.

“Go to the next room, and tell Nippers to come to me.”

“I prefer not to,” he respectfully and slowly said, and mildly
disappeared.

“Very good, Bartleby,” said I, in a quiet sort of serenely severe
self-possessed tone, intimating the unalterable purpose of some
terrible retribution very close at hand. At the moment I half intended
something of the kind. But upon the whole, as it was drawing towards my
dinner-hour, I thought it best to put on my hat and walk home for the
day, suffering much from perplexity and distress of mind.

Shall I acknowledge it? The conclusion of this whole business was, that
it soon became a fixed fact of my chambers, that a pale young
scrivener, by the name of Bartleby, and a desk there; that he copied
for me at the usual rate of four cents a folio (one hundred words); but
he was permanently exempt from examining the work done by him, that
duty being transferred to Turkey and Nippers, one of compliment
doubtless to their superior acuteness; moreover, said Bartleby was
never on any account to be dispatched on the most trivial errand of any
sort; and that even if entreated to take upon him such a matter, it was
generally understood that he would prefer not to—in other words, that
he would refuse pointblank.

As days passed on, I became considerably reconciled to Bartleby. His
steadiness, his freedom from all dissipation, his incessant industry
(except when he chose to throw himself into a standing revery behind
his screen), his great stillness, his unalterableness of demeanor under
all circumstances, made him a valuable acquisition. One prime thing was
this,—_he was always there;_—first in the morning, continually through
the day, and the last at night. I had a singular confidence in his
honesty. I felt my most precious papers perfectly safe in his hands.
Sometimes to be sure I could not, for the very soul of me, avoid
falling into sudden spasmodic passions with him. For it was exceeding
difficult to bear in mind all the time those strange peculiarities,
privileges, and unheard of exemptions, forming the tacit stipulations
on Bartleby’s part under which he remained in my office. Now and then,
in the eagerness of dispatching pressing business, I would
inadvertently summon Bartleby, in a short, rapid tone, to put his
finger, say, on the incipient tie of a bit of red tape with which I was
about compressing some papers. Of course, from behind the screen the
usual answer, “I prefer not to,” was sure to come; and then, how could
a human creature with the common infirmities of our nature, refrain
from bitterly exclaiming upon such perverseness—such unreasonableness.
However, every added repulse of this sort which I received only tended
to lessen the probability of my repeating the inadvertence.

Here it must be said, that according to the custom of most legal
gentlemen occupying chambers in densely-populated law buildings, there
were several keys to my door. One was kept by a woman residing in the
attic, which person weekly scrubbed and daily swept and dusted my
apartments. Another was kept by Turkey for convenience sake. The third
I sometimes carried in my own pocket. The fourth I knew not who had.

Now, one Sunday morning I happened to go to Trinity Church, to hear a
celebrated preacher, and finding myself rather early on the ground, I
thought I would walk around to my chambers for a while. Luckily I had
my key with me; but upon applying it to the lock, I found it resisted
by something inserted from the inside. Quite surprised, I called out;
when to my consternation a key was turned from within; and thrusting
his lean visage at me, and holding the door ajar, the apparition of
Bartleby appeared, in his shirt sleeves, and otherwise in a strangely
tattered dishabille, saying quietly that he was sorry, but he was
deeply engaged just then, and—preferred not admitting me at present. In
a brief word or two, he moreover added, that perhaps I had better walk
round the block two or three times, and by that time he would probably
have concluded his affairs.

Now, the utterly unsurmised appearance of Bartleby, tenanting my
law-chambers of a Sunday morning, with his cadaverously gentlemanly
_nonchalance_, yet withal firm and self-possessed, had such a strange
effect upon me, that incontinently I slunk away from my own door, and
did as desired. But not without sundry twinges of impotent rebellion
against the mild effrontery of this unaccountable scrivener. Indeed, it
was his wonderful mildness chiefly, which not only disarmed me, but
unmanned me, as it were. For I consider that one, for the time, is a
sort of unmanned when he tranquilly permits his hired clerk to dictate
to him, and order him away from his own premises. Furthermore, I was
full of uneasiness as to what Bartleby could possibly be doing in my
office in his shirt sleeves, and in an otherwise dismantled condition
of a Sunday morning. Was any thing amiss going on? Nay, that was out of
the question. It was not to be thought of for a moment that Bartleby
was an immoral person. But what could he be doing there?—copying? Nay
again, whatever might be his eccentricities, Bartleby was an eminently
decorous person. He would be the last man to sit down to his desk in
any state approaching to nudity. Besides, it was Sunday; and there was
something about Bartleby that forbade the supposition that he would by
any secular occupation violate the proprieties of the day.

Nevertheless, my mind was not pacified; and full of a restless
curiosity, at last I returned to the door. Without hindrance I inserted
my key, opened it, and entered. Bartleby was not to be seen. I looked
round anxiously, peeped behind his screen; but it was very plain that
he was gone. Upon more closely examining the place, I surmised that for
an indefinite period Bartleby must have ate, dressed, and slept in my
office, and that too without plate, mirror, or bed. The cushioned seat
of a rickety old sofa in one corner bore the faint impress of a lean,
reclining form. Rolled away under his desk, I found a blanket; under
the empty grate, a blacking box and brush; on a chair, a tin basin,
with soap and a ragged towel; in a newspaper a few crumbs of
ginger-nuts and a morsel of cheese. Yes, thought I, it is evident
enough that Bartleby has been making his home here, keeping bachelor’s
hall all by himself. Immediately then the thought came sweeping across
me, What miserable friendlessness and loneliness are here revealed! His
poverty is great; but his solitude, how horrible! Think of it. Of a
Sunday, Wall-street is deserted as Petra; and every night of every day
it is an emptiness. This building too, which of week-days hums with
industry and life, at nightfall echoes with sheer vacancy, and all
through Sunday is forlorn. And here Bartleby makes his home; sole
spectator of a solitude which he has seen all populous—a sort of
innocent and transformed Marius brooding among the ruins of Carthage!

For the first time in my life a feeling of overpowering stinging
melancholy seized me. Before, I had never experienced aught but a
not-unpleasing sadness. The bond of a common humanity now drew me
irresistibly to gloom. A fraternal melancholy! For both I and Bartleby
were sons of Adam. I remembered the bright silks and sparkling faces I
had seen that day, in gala trim, swan-like sailing down the Mississippi
of Broadway; and I contrasted them with the pallid copyist, and thought
to myself, Ah, happiness courts the light, so we deem the world is gay;
but misery hides aloof, so we deem that misery there is none. These sad
fancyings—chimeras, doubtless, of a sick and silly brain—led on to
other and more special thoughts, concerning the eccentricities of
Bartleby. Presentiments of strange discoveries hovered round me. The
scrivener’s pale form appeared to me laid out, among uncaring
strangers, in its shivering winding sheet.

Suddenly I was attracted by Bartleby’s closed desk, the key in open
sight left in the lock.

I mean no mischief, seek the gratification of no heartless curiosity,
thought I; besides, the desk is mine, and its contents too, so I will
make bold to look within. Every thing was methodically arranged, the
papers smoothly placed. The pigeon holes were deep, and removing the
files of documents, I groped into their recesses. Presently I felt
something there, and dragged it out. It was an old bandanna
handkerchief, heavy and knotted. I opened it, and saw it was a savings’
bank.

I now recalled all the quiet mysteries which I had noted in the man. I
remembered that he never spoke but to answer; that though at intervals
he had considerable time to himself, yet I had never seen him
reading—no, not even a newspaper; that for long periods he would stand
looking out, at his pale window behind the screen, upon the dead brick
wall; I was quite sure he never visited any refectory or eating house;
while his pale face clearly indicated that he never drank beer like
Turkey, or tea and coffee even, like other men; that he never went any
where in particular that I could learn; never went out for a walk,
unless indeed that was the case at present; that he had declined
telling who he was, or whence he came, or whether he had any relatives
in the world; that though so thin and pale, he never complained of ill
health. And more than all, I remembered a certain unconscious air of
pallid—how shall I call it?—of pallid haughtiness, say, or rather an
austere reserve about him, which had positively awed me into my tame
compliance with his eccentricities, when I had feared to ask him to do
the slightest incidental thing for me, even though I might know, from
his long-continued motionlessness, that behind his screen he must be
standing in one of those dead-wall reveries of his.

Revolving all these things, and coupling them with the recently
discovered fact that he made my office his constant abiding place and
home, and not forgetful of his morbid moodiness; revolving all these
things, a prudential feeling began to steal over me. My first emotions
had been those of pure melancholy and sincerest pity; but just in
proportion as the forlornness of Bartleby grew and grew to my
imagination, did that same melancholy merge into fear, that pity into
repulsion. So true it is, and so terrible too, that up to a certain
point the thought or sight of misery enlists our best affections; but,
in certain special cases, beyond that point it does not. They err who
would assert that invariably this is owing to the inherent selfishness
of the human heart. It rather proceeds from a certain hopelessness of
remedying excessive and organic ill. To a sensitive being, pity is not
seldom pain. And when at last it is perceived that such pity cannot
lead to effectual succor, common sense bids the soul rid of it. What I
saw that morning persuaded me that the scrivener was the victim of
innate and incurable disorder. I might give alms to his body; but his
body did not pain him; it was his soul that suffered, and his soul I
could not reach.

I did not accomplish the purpose of going to Trinity Church that
morning. Somehow, the things I had seen disqualified me for the time
from church-going. I walked homeward, thinking what I would do with
Bartleby. Finally, I resolved upon this;—I would put certain calm
questions to him the next morning, touching his history, etc., and if
he declined to answer them openly and unreservedly (and I supposed he
would prefer not), then to give him a twenty dollar bill over and above
whatever I might owe him, and tell him his services were no longer
required; but that if in any other way I could assist him, I would be
happy to do so, especially if he desired to return to his native place,
wherever that might be, I would willingly help to defray the expenses.
Moreover, if, after reaching home, he found himself at any time in want
of aid, a letter from him would be sure of a reply.

The next morning came.

“Bartleby,” said I, gently calling to him behind his screen.

No reply.

“Bartleby,” said I, in a still gentler tone, “come here; I am not going
to ask you to do any thing you would prefer not to do—I simply wish to
speak to you.”

Upon this he noiselessly slid into view.

“Will you tell me, Bartleby, where you were born?”

“I would prefer not to.”

“Will you tell me _any thing_ about yourself?”

“I would prefer not to.”

“But what reasonable objection can you have to speak to me? I feel
friendly towards you.”

He did not look at me while I spoke, but kept his glance fixed upon my
bust of Cicero, which as I then sat, was directly behind me, some six
inches above my head.

“What is your answer, Bartleby?” said I, after waiting a considerable
time for a reply, during which his countenance remained immovable, only
there was the faintest conceivable tremor of the white attenuated
mouth.

“At present I prefer to give no answer,” he said, and retired into his
hermitage.

It was rather weak in me I confess, but his manner on this occasion
nettled me. Not only did there seem to lurk in it a certain calm
disdain, but his perverseness seemed ungrateful, considering the
undeniable good usage and indulgence he had received from me.

Again I sat ruminating what I should do. Mortified as I was at his
behavior, and resolved as I had been to dismiss him when I entered my
offices, nevertheless I strangely felt something superstitious knocking
at my heart, and forbidding me to carry out my purpose, and denouncing
me for a villain if I dared to breathe one bitter word against this
forlornest of mankind. At last, familiarly drawing my chair behind his
screen, I sat down and said: “Bartleby, never mind then about revealing
your history; but let me entreat you, as a friend, to comply as far as
may be with the usages of this office. Say now you will help to examine
papers to-morrow or next day: in short, say now that in a day or two
you will begin to be a little reasonable:—say so, Bartleby.”

“At present I would prefer not to be a little reasonable,” was his
mildly cadaverous reply.

Just then the folding-doors opened, and Nippers approached. He seemed
suffering from an unusually bad night’s rest, induced by severer
indigestion than common. He overheard those final words of Bartleby.

“_Prefer not_, eh?” gritted Nippers—“I’d _prefer_ him, if I were you,
sir,” addressing me—“I’d _prefer_ him; I’d give him preferences, the
stubborn mule! What is it, sir, pray, that he _prefers_ not to do now?”

Bartleby moved not a limb.

“Mr. Nippers,” said I, “I’d prefer that you would withdraw for the
present.”

Somehow, of late I had got into the way of involuntarily using this
word “prefer” upon all sorts of not exactly suitable occasions. And I
trembled to think that my contact with the scrivener had already and
seriously affected me in a mental way. And what further and deeper
aberration might it not yet produce? This apprehension had not been
without efficacy in determining me to summary means.

As Nippers, looking very sour and sulky, was departing, Turkey blandly
and deferentially approached.

“With submission, sir,” said he, “yesterday I was thinking about
Bartleby here, and I think that if he would but prefer to take a quart
of good ale every day, it would do much towards mending him, and
enabling him to assist in examining his papers.”

“So you have got the word too,” said I, slightly excited.

“With submission, what word, sir,” asked Turkey, respectfully crowding
himself into the contracted space behind the screen, and by so doing,
making me jostle the scrivener. “What word, sir?”

“I would prefer to be left alone here,” said Bartleby, as if offended
at being mobbed in his privacy.

“_That’s_ the word, Turkey,” said I—“that’s it.”

“Oh, _prefer_? oh yes—queer word. I never use it myself. But, sir, as I
was saying, if he would but prefer—”

“Turkey,” interrupted I, “you will please withdraw.”

“Oh certainly, sir, if you prefer that I should.”

As he opened the folding-door to retire, Nippers at his desk caught a
glimpse of me, and asked whether I would prefer to have a certain paper
copied on blue paper or white. He did not in the least roguishly accent
the word prefer. It was plain that it involuntarily rolled from his
tongue. I thought to myself, surely I must get rid of a demented man,
who already has in some degree turned the tongues, if not the heads of
myself and clerks. But I thought it prudent not to break the dismission
at once.

The next day I noticed that Bartleby did nothing but stand at his
window in his dead-wall revery. Upon asking him why he did not write,
he said that he had decided upon doing no more writing.

“Why, how now? what next?” exclaimed I, “do no more writing?”

“No more.”

“And what is the reason?”

“Do you not see the reason for yourself,” he indifferently replied.

I looked steadfastly at him, and perceived that his eyes looked dull
and glazed. Instantly it occurred to me, that his unexampled diligence
in copying by his dim window for the first few weeks of his stay with
me might have temporarily impaired his vision.

I was touched. I said something in condolence with him. I hinted that
of course he did wisely in abstaining from writing for a while; and
urged him to embrace that opportunity of taking wholesome exercise in
the open air. This, however, he did not do. A few days after this, my
other clerks being absent, and being in a great hurry to dispatch
certain letters by the mail, I thought that, having nothing else
earthly to do, Bartleby would surely be less inflexible than usual, and
carry these letters to the post-office. But he blankly declined. So,
much to my inconvenience, I went myself.

Still added days went by. Whether Bartleby’s eyes improved or not, I
could not say. To all appearance, I thought they did. But when I asked
him if they did, he vouchsafed no answer. At all events, he would do no
copying. At last, in reply to my urgings, he informed me that he had
permanently given up copying.

“What!” exclaimed I; “suppose your eyes should get entirely well—better
than ever before—would you not copy then?”

“I have given up copying,” he answered, and slid aside.

He remained as ever, a fixture in my chamber. Nay—if that were
possible—he became still more of a fixture than before. What was to be
done? He would do nothing in the office: why should he stay there? In
plain fact, he had now become a millstone to me, not only useless as a
necklace, but afflictive to bear. Yet I was sorry for him. I speak less
than truth when I say that, on his own account, he occasioned me
uneasiness. If he would but have named a single relative or friend, I
would instantly have written, and urged their taking the poor fellow
away to some convenient retreat. But he seemed alone, absolutely alone
in the universe. A bit of wreck in the mid Atlantic. At length,
necessities connected with my business tyrannized over all other
considerations. Decently as I could, I told Bartleby that in six days’
time he must unconditionally leave the office. I warned him to take
measures, in the interval, for procuring some other abode. I offered to
assist him in this endeavor, if he himself would but take the first
step towards a removal. “And when you finally quit me, Bartleby,” added
I, “I shall see that you go not away entirely unprovided. Six days from
this hour, remember.”

At the expiration of that period, I peeped behind the screen, and lo!
Bartleby was there.

I buttoned up my coat, balanced myself; advanced slowly towards him,
touched his shoulder, and said, “The time has come; you must quit this
place; I am sorry for you; here is money; but you must go.”

“I would prefer not,” he replied, with his back still towards me.

“You _must_.”

He remained silent.

Now I had an unbounded confidence in this man’s common honesty. He had
frequently restored to me sixpences and shillings carelessly dropped
upon the floor, for I am apt to be very reckless in such shirt-button
affairs. The proceeding then which followed will not be deemed
extraordinary.

“Bartleby,” said I, “I owe you twelve dollars on account; here are
thirty-two; the odd twenty are yours.—Will you take it?” and I handed
the bills towards him.

But he made no motion.

“I will leave them here then,” putting them under a weight on the
table. Then taking my hat and cane and going to the door I tranquilly
turned and added—“After you have removed your things from these
offices, Bartleby, you will of course lock the door—since every one is
now gone for the day but you—and if you please, slip your key
underneath the mat, so that I may have it in the morning. I shall not
see you again; so good-bye to you. If hereafter in your new place of
abode I can be of any service to you, do not fail to advise me by
letter. Good-bye, Bartleby, and fare you well.”

But he answered not a word; like the last column of some ruined temple,
he remained standing mute and solitary in the middle of the otherwise
deserted room.

As I walked home in a pensive mood, my vanity got the better of my
pity. I could not but highly plume myself on my masterly management in
getting rid of Bartleby. Masterly I call it, and such it must appear to
any dispassionate thinker. The beauty of my procedure seemed to consist
in its perfect quietness. There was no vulgar bullying, no bravado of
any sort, no choleric hectoring, and striding to and fro across the
apartment, jerking out vehement commands for Bartleby to bundle himself
off with his beggarly traps. Nothing of the kind. Without loudly
bidding Bartleby depart—as an inferior genius might have done—I
_assumed_ the ground that depart he must; and upon that assumption
built all I had to say. The more I thought over my procedure, the more
I was charmed with it. Nevertheless, next morning, upon awakening, I
had my doubts,—I had somehow slept off the fumes of vanity. One of the
coolest and wisest hours a man has, is just after he awakes in the
morning. My procedure seemed as sagacious as ever.—but only in theory.
How it would prove in practice—there was the rub. It was truly a
beautiful thought to have assumed Bartleby’s departure; but, after all,
that assumption was simply my own, and none of Bartleby’s. The great
point was, not whether I had assumed that he would quit me, but whether
he would prefer so to do. He was more a man of preferences than
assumptions.

After breakfast, I walked down town, arguing the probabilities _pro_
and _con_. One moment I thought it would prove a miserable failure, and
Bartleby would be found all alive at my office as usual; the next
moment it seemed certain that I should see his chair empty. And so I
kept veering about. At the corner of Broadway and Canal-street, I saw
quite an excited group of people standing in earnest conversation.

“I’ll take odds he doesn’t,” said a voice as I passed.

“Doesn’t go?—done!” said I, “put up your money.”

I was instinctively putting my hand in my pocket to produce my own,
when I remembered that this was an election day. The words I had
overheard bore no reference to Bartleby, but to the success or
non-success of some candidate for the mayoralty. In my intent frame of
mind, I had, as it were, imagined that all Broadway shared in my
excitement, and were debating the same question with me. I passed on,
very thankful that the uproar of the street screened my momentary
absent-mindedness.

As I had intended, I was earlier than usual at my office door. I stood
listening for a moment. All was still. He must be gone. I tried the
knob. The door was locked. Yes, my procedure had worked to a charm; he
indeed must be vanished. Yet a certain melancholy mixed with this: I
was almost sorry for my brilliant success. I was fumbling under the
door mat for the key, which Bartleby was to have left there for me,
when accidentally my knee knocked against a panel, producing a
summoning sound, and in response a voice came to me from within—“Not
yet; I am occupied.”

It was Bartleby.

I was thunderstruck. For an instant I stood like the man who, pipe in
mouth, was killed one cloudless afternoon long ago in Virginia, by a
summer lightning; at his own warm open window he was killed, and
remained leaning out there upon the dreamy afternoon, till some one
touched him, when he fell.

“Not gone!” I murmured at last. But again obeying that wondrous
ascendancy which the inscrutable scrivener had over me, and from which
ascendancy, for all my chafing, I could not completely escape, I slowly
went down stairs and out into the street, and while walking round the
block, considered what I should next do in this unheard-of perplexity.
Turn the man out by an actual thrusting I could not; to drive him away
by calling him hard names would not do; calling in the police was an
unpleasant idea; and yet, permit him to enjoy his cadaverous triumph
over me,—this too I could not think of. What was to be done? or, if
nothing could be done, was there any thing further that I could
_assume_ in the matter? Yes, as before I had prospectively assumed that
Bartleby would depart, so now I might retrospectively assume that
departed he was. In the legitimate carrying out of this assumption, I
might enter my office in a great hurry, and pretending not to see
Bartleby at all, walk straight against him as if he were air. Such a
proceeding would in a singular degree have the appearance of a
home-thrust. It was hardly possible that Bartleby could withstand such
an application of the doctrine of assumptions. But upon second thoughts
the success of the plan seemed rather dubious. I resolved to argue the
matter over with him again.

“Bartleby,” said I, entering the office, with a quietly severe
expression, “I am seriously displeased. I am pained, Bartleby. I had
thought better of you. I had imagined you of such a gentlemanly
organization, that in any delicate dilemma a slight hint would have
suffice—in short, an assumption. But it appears I am deceived. Why,” I
added, unaffectedly starting, “you have not even touched that money
yet,” pointing to it, just where I had left it the evening previous.

He answered nothing.

“Will you, or will you not, quit me?” I now demanded in a sudden
passion, advancing close to him.

“I would prefer _not_ to quit you,” he replied, gently emphasizing the
_not_.

“What earthly right have you to stay here? Do you pay any rent? Do you
pay my taxes? Or is this property yours?”

He answered nothing.

“Are you ready to go on and write now? Are your eyes recovered? Could
you copy a small paper for me this morning? or help examine a few
lines? or step round to the post-office? In a word, will you do any
thing at all, to give a coloring to your refusal to depart the
premises?”

He silently retired into his hermitage.

I was now in such a state of nervous resentment that I thought it but
prudent to check myself at present from further demonstrations.
Bartleby and I were alone. I remembered the tragedy of the unfortunate
Adams and the still more unfortunate Colt in the solitary office of the
latter; and how poor Colt, being dreadfully incensed by Adams, and
imprudently permitting himself to get wildly excited, was at unawares
hurried into his fatal act—an act which certainly no man could possibly
deplore more than the actor himself. Often it had occurred to me in my
ponderings upon the subject, that had that altercation taken place in
the public street, or at a private residence, it would not have
terminated as it did. It was the circumstance of being alone in a
solitary office, up stairs, of a building entirely unhallowed by
humanizing domestic associations—an uncarpeted office, doubtless, of a
dusty, haggard sort of appearance;—this it must have been, which
greatly helped to enhance the irritable desperation of the hapless
Colt.

But when this old Adam of resentment rose in me and tempted me
concerning Bartleby, I grappled him and threw him. How? Why, simply by
recalling the divine injunction: “A new commandment give I unto you,
that ye love one another.” Yes, this it was that saved me. Aside from
higher considerations, charity often operates as a vastly wise and
prudent principle—a great safeguard to its possessor. Men have
committed murder for jealousy’s sake, and anger’s sake, and hatred’s
sake, and selfishness’ sake, and spiritual pride’s sake; but no man
that ever I heard of, ever committed a diabolical murder for sweet
charity’s sake. Mere self-interest, then, if no better motive can be
enlisted, should, especially with high-tempered men, prompt all beings
to charity and philanthropy. At any rate, upon the occasion in
question, I strove to drown my exasperated feelings towards the
scrivener by benevolently construing his conduct. Poor fellow, poor
fellow! thought I, he don’t mean any thing; and besides, he has seen
hard times, and ought to be indulged.

I endeavored also immediately to occupy myself, and at the same time to
comfort my despondency. I tried to fancy that in the course of the
morning, at such time as might prove agreeable to him, Bartleby, of his
own free accord, would emerge from his hermitage, and take up some
decided line of march in the direction of the door. But no. Half-past
twelve o’clock came; Turkey began to glow in the face, overturn his
inkstand, and become generally obstreperous; Nippers abated down into
quietude and courtesy; Ginger Nut munched his noon apple; and Bartleby
remained standing at his window in one of his profoundest dead-wall
reveries. Will it be credited? Ought I to acknowledge it? That
afternoon I left the office without saying one further word to him.

Some days now passed, during which, at leisure intervals I looked a
little into “Edwards on the Will,” and “Priestly on Necessity.” Under
the circumstances, those books induced a salutary feeling. Gradually I
slid into the persuasion that these troubles of mine touching the
scrivener, had been all predestinated from eternity, and Bartleby was
billeted upon me for some mysterious purpose of an all-wise Providence,
which it was not for a mere mortal like me to fathom. Yes, Bartleby,
stay there behind your screen, thought I; I shall persecute you no
more; you are harmless and noiseless as any of these old chairs; in
short, I never feel so private as when I know you are here. At last I
see it, I feel it; I penetrate to the predestinated purpose of my life.
I am content. Others may have loftier parts to enact; but my mission in
this world, Bartleby, is to furnish you with office-room for such
period as you may see fit to remain.

I believe that this wise and blessed frame of mind would have continued
with me, had it not been for the unsolicited and uncharitable remarks
obtruded upon me by my professional friends who visited the rooms. But
thus it often is, that the constant friction of illiberal minds wears
out at last the best resolves of the more generous. Though to be sure,
when I reflected upon it, it was not strange that people entering my
office should be struck by the peculiar aspect of the unaccountable
Bartleby, and so be tempted to throw out some sinister observations
concerning him. Sometimes an attorney having business with me, and
calling at my office and finding no one but the scrivener there, would
undertake to obtain some sort of precise information from him touching
my whereabouts; but without heeding his idle talk, Bartleby would
remain standing immovable in the middle of the room. So after
contemplating him in that position for a time, the attorney would
depart, no wiser than he came.

Also, when a Reference was going on, and the room full of lawyers and
witnesses and business was driving fast; some deeply occupied legal
gentleman present, seeing Bartleby wholly unemployed, would request him
to run round to his (the legal gentleman’s) office and fetch some
papers for him. Thereupon, Bartleby would tranquilly decline, and yet
remain idle as before. Then the lawyer would give a great stare, and
turn to me. And what could I say? At last I was made aware that all
through the circle of my professional acquaintance, a whisper of wonder
was running round, having reference to the strange creature I kept at
my office. This worried me very much. And as the idea came upon me of
his possibly turning out a long-lived man, and keep occupying my
chambers, and denying my authority; and perplexing my visitors; and
scandalizing my professional reputation; and casting a general gloom
over the premises; keeping soul and body together to the last upon his
savings (for doubtless he spent but half a dime a day), and in the end
perhaps outlive me, and claim possession of my office by right of his
perpetual occupancy: as all these dark anticipations crowded upon me
more and more, and my friends continually intruded their relentless
remarks upon the apparition in my room; a great change was wrought in
me. I resolved to gather all my faculties together, and for ever rid me
of this intolerable incubus.

Ere revolving any complicated project, however, adapted to this end, I
first simply suggested to Bartleby the propriety of his permanent
departure. In a calm and serious tone, I commended the idea to his
careful and mature consideration. But having taken three days to
meditate upon it, he apprised me that his original determination
remained the same; in short, that he still preferred to abide with me.

What shall I do? I now said to myself, buttoning up my coat to the last
button. What shall I do? what ought I to do? what does conscience say I
_should_ do with this man, or rather ghost. Rid myself of him, I must;
go, he shall. But how? You will not thrust him, the poor, pale, passive
mortal,—you will not thrust such a helpless creature out of your door?
you will not dishonor yourself by such cruelty? No, I will not, I
cannot do that. Rather would I let him live and die here, and then
mason up his remains in the wall. What then will you do? For all your
coaxing, he will not budge. Bribes he leaves under your own paperweight
on your table; in short, it is quite plain that he prefers to cling to
you.

Then something severe, something unusual must be done. What! surely you
will not have him collared by a constable, and commit his innocent
pallor to the common jail? And upon what ground could you procure such
a thing to be done?—a vagrant, is he? What! he a vagrant, a wanderer,
who refuses to budge? It is because he will _not_ be a vagrant, then,
that you seek to count him _as_ a vagrant. That is too absurd. No
visible means of support: there I have him. Wrong again: for
indubitably he _does_ support himself, and that is the only
unanswerable proof that any man can show of his possessing the means so
to do. No more then. Since he will not quit me, I must quit him. I will
change my offices; I will move elsewhere; and give him fair notice,
that if I find him on my new premises I will then proceed against him
as a common trespasser.

Acting accordingly, next day I thus addressed him: “I find these
chambers too far from the City Hall; the air is unwholesome. In a word,
I propose to remove my offices next week, and shall no longer require
your services. I tell you this now, in order that you may seek another
place.”

He made no reply, and nothing more was said.

On the appointed day I engaged carts and men, proceeded to my chambers,
and having but little furniture, every thing was removed in a few
hours. Throughout, the scrivener remained standing behind the screen,
which I directed to be removed the last thing. It was withdrawn; and
being folded up like a huge folio, left him the motionless occupant of
a naked room. I stood in the entry watching him a moment, while
something from within me upbraided me.

I re-entered, with my hand in my pocket—and—and my heart in my mouth.

“Good-bye, Bartleby; I am going—good-bye, and God some way bless you;
and take that,” slipping something in his hand. But it dropped upon the
floor, and then,—strange to say—I tore myself from him whom I had so
longed to be rid of.

Established in my new quarters, for a day or two I kept the door
locked, and started at every footfall in the passages. When I returned
to my rooms after any little absence, I would pause at the threshold
for an instant, and attentively listen, ere applying my key. But these
fears were needless. Bartleby never came nigh me.

I thought all was going well, when a perturbed looking stranger visited
me, inquiring whether I was the person who had recently occupied rooms
at No.—Wall-street.

Full of forebodings, I replied that I was.

“Then sir,” said the stranger, who proved a lawyer, “you are
responsible for the man you left there. He refuses to do any copying;
he refuses to do any thing; he says he prefers not to; and he refuses
to quit the premises.”

“I am very sorry, sir,” said I, with assumed tranquility, but an inward
tremor, “but, really, the man you allude to is nothing to me—he is no
relation or apprentice of mine, that you should hold me responsible for
him.”

“In mercy’s name, who is he?”

“I certainly cannot inform you. I know nothing about him. Formerly I
employed him as a copyist; but he has done nothing for me now for some
time past.”

“I shall settle him then,—good morning, sir.”

Several days passed, and I heard nothing more; and though I often felt
a charitable prompting to call at the place and see poor Bartleby, yet
a certain squeamishness of I know not what withheld me.

All is over with him, by this time, thought I at last, when through
another week no further intelligence reached me. But coming to my room
the day after, I found several persons waiting at my door in a high
state of nervous excitement.

“That’s the man—here he comes,” cried the foremost one, whom I
recognized as the lawyer who had previously called upon me alone.

“You must take him away, sir, at once,” cried a portly person among
them, advancing upon me, and whom I knew to be the landlord of
No.—Wall-street. “These gentlemen, my tenants, cannot stand it any
longer; Mr. B—” pointing to the lawyer, “has turned him out of his
room, and he now persists in haunting the building generally, sitting
upon the banisters of the stairs by day, and sleeping in the entry by
night. Every body is concerned; clients are leaving the offices; some
fears are entertained of a mob; something you must do, and that without
delay.”

Aghast at this torrent, I fell back before it, and would fain have
locked myself in my new quarters. In vain I persisted that Bartleby was
nothing to me—no more than to any one else. In vain:—I was the last
person known to have any thing to do with him, and they held me to the
terrible account. Fearful then of being exposed in the papers (as one
person present obscurely threatened) I considered the matter, and at
length said, that if the lawyer would give me a confidential interview
with the scrivener, in his (the lawyer’s) own room, I would that
afternoon strive my best to rid them of the nuisance they complained
of.

Going up stairs to my old haunt, there was Bartleby silently sitting
upon the banister at the landing.

“What are you doing here, Bartleby?” said I.

“Sitting upon the banister,” he mildly replied.

I motioned him into the lawyer’s room, who then left us.

“Bartleby,” said I, “are you aware that you are the cause of great
tribulation to me, by persisting in occupying the entry after being
dismissed from the office?”

No answer.

“Now one of two things must take place. Either you must do something,
or something must be done to you. Now what sort of business would you
like to engage in? Would you like to re-engage in copying for some
one?”

“No; I would prefer not to make any change.”

“Would you like a clerkship in a dry-goods store?”

“There is too much confinement about that. No, I would not like a
clerkship; but I am not particular.”

“Too much confinement,” I cried, “why you keep yourself confined all
the time!”

“I would prefer not to take a clerkship,” he rejoined, as if to settle
that little item at once.

“How would a bar-tender’s business suit you? There is no trying of the
eyesight in that.”

“I would not like it at all; though, as I said before, I am not
particular.”

His unwonted wordiness inspirited me. I returned to the charge.

“Well then, would you like to travel through the country collecting
bills for the merchants? That would improve your health.”

“No, I would prefer to be doing something else.”

“How then would going as a companion to Europe, to entertain some young
gentleman with your conversation,—how would that suit you?”

“Not at all. It does not strike me that there is any thing definite
about that. I like to be stationary. But I am not particular.”

“Stationary you shall be then,” I cried, now losing all patience, and
for the first time in all my exasperating connection with him fairly
flying into a passion. “If you do not go away from these premises
before night, I shall feel bound—indeed I _am_ bound—to—to—to quit the
premises myself!” I rather absurdly concluded, knowing not with what
possible threat to try to frighten his immobility into compliance.
Despairing of all further efforts, I was precipitately leaving him,
when a final thought occurred to me—one which had not been wholly
unindulged before.

“Bartleby,” said I, in the kindest tone I could assume under such
exciting circumstances, “will you go home with me now—not to my office,
but my dwelling—and remain there till we can conclude upon some
convenient arrangement for you at our leisure? Come, let us start now,
right away.”

“No: at present I would prefer not to make any change at all.”

I answered nothing; but effectually dodging every one by the suddenness
and rapidity of my flight, rushed from the building, ran up Wall-street
towards Broadway, and jumping into the first omnibus was soon removed
from pursuit. As soon as tranquility returned I distinctly perceived
that I had now done all that I possibly could, both in respect to the
demands of the landlord and his tenants, and with regard to my own
desire and sense of duty, to benefit Bartleby, and shield him from rude
persecution. I now strove to be entirely care-free and quiescent; and
my conscience justified me in the attempt; though indeed it was not so
successful as I could have wished. So fearful was I of being again
hunted out by the incensed landlord and his exasperated tenants, that,
surrendering my business to Nippers, for a few days I drove about the
upper part of the town and through the suburbs, in my rockaway; crossed
over to Jersey City and Hoboken, and paid fugitive visits to
Manhattanville and Astoria. In fact I almost lived in my rockaway for
the time.

When again I entered my office, lo, a note from the landlord lay upon
the desk. I opened it with trembling hands. It informed me that the
writer had sent to the police, and had Bartleby removed to the Tombs as
a vagrant. Moreover, since I knew more about him than any one else, he
wished me to appear at that place, and make a suitable statement of the
facts. These tidings had a conflicting effect upon me. At first I was
indignant; but at last almost approved. The landlord’s energetic,
summary disposition had led him to adopt a procedure which I do not
think I would have decided upon myself; and yet as a last resort, under
such peculiar circumstances, it seemed the only plan.

As I afterwards learned, the poor scrivener, when told that he must be
conducted to the Tombs, offered not the slightest obstacle, but in his
pale unmoving way, silently acquiesced.

Some of the compassionate and curious bystanders joined the party; and
headed by one of the constables arm in arm with Bartleby, the silent
procession filed its way through all the noise, and heat, and joy of
the roaring thoroughfares at noon.

The same day I received the note I went to the Tombs, or to speak more
properly, the Halls of Justice. Seeking the right officer, I stated the
purpose of my call, and was informed that the individual I described
was indeed within. I then assured the functionary that Bartleby was a
perfectly honest man, and greatly to be compassionated, however
unaccountably eccentric. I narrated all I knew, and closed by
suggesting the idea of letting him remain in as indulgent confinement
as possible till something less harsh might be done—though indeed I
hardly knew what. At all events, if nothing else could be decided upon,
the alms-house must receive him. I then begged to have an interview.

Being under no disgraceful charge, and quite serene and harmless in all
his ways, they had permitted him freely to wander about the prison, and
especially in the inclosed grass-platted yard thereof. And so I found
him there, standing all alone in the quietest of the yards, his face
towards a high wall, while all around, from the narrow slits of the
jail windows, I thought I saw peering out upon him the eyes of
murderers and thieves.

“Bartleby!”

“I know you,” he said, without looking round,—“and I want nothing to
say to you.”

“It was not I that brought you here, Bartleby,” said I, keenly pained
at his implied suspicion. “And to you, this should not be so vile a
place. Nothing reproachful attaches to you by being here. And see, it
is not so sad a place as one might think. Look, there is the sky, and
here is the grass.”

“I know where I am,” he replied, but would say nothing more, and so I
left him.

As I entered the corridor again, a broad meat-like man, in an apron,
accosted me, and jerking his thumb over his shoulder said—“Is that your
friend?”

“Yes.”

“Does he want to starve? If he does, let him live on the prison fare,
that’s all.”

“Who are you?” asked I, not knowing what to make of such an
unofficially speaking person in such a place.

“I am the grub-man. Such gentlemen as have friends here, hire me to
provide them with something good to eat.”

“Is this so?” said I, turning to the turnkey.

He said it was.

“Well then,” said I, slipping some silver into the grub-man’s hands
(for so they called him). “I want you to give particular attention to
my friend there; let him have the best dinner you can get. And you must
be as polite to him as possible.”

“Introduce me, will you?” said the grub-man, looking at me with an
expression which seemed to say he was all impatience for an opportunity
to give a specimen of his breeding.

Thinking it would prove of benefit to the scrivener, I acquiesced; and
asking the grub-man his name, went up with him to Bartleby.

“Bartleby, this is Mr. Cutlets; you will find him very useful to you.”

“Your sarvant, sir, your sarvant,” said the grub-man, making a low
salutation behind his apron. “Hope you find it pleasant here,
sir;—spacious grounds—cool apartments, sir—hope you’ll stay with us
some time—try to make it agreeable. May Mrs. Cutlets and I have the
pleasure of your company to dinner, sir, in Mrs. Cutlets’ private
room?”

“I prefer not to dine to-day,” said Bartleby, turning away. “It would
disagree with me; I am unused to dinners.” So saying he slowly moved to
the other side of the inclosure, and took up a position fronting the
dead-wall.

“How’s this?” said the grub-man, addressing me with a stare of
astonishment. “He’s odd, aint he?”

“I think he is a little deranged,” said I, sadly.

“Deranged? deranged is it? Well now, upon my word, I thought that
friend of yourn was a gentleman forger; they are always pale and
genteel-like, them forgers. I can’t pity’em—can’t help it, sir. Did you
know Monroe Edwards?” he added touchingly, and paused. Then, laying his
hand pityingly on my shoulder, sighed, “he died of consumption at
Sing-Sing. So you weren’t acquainted with Monroe?”

“No, I was never socially acquainted with any forgers. But I cannot
stop longer. Look to my friend yonder. You will not lose by it. I will
see you again.”

Some few days after this, I again obtained admission to the Tombs, and
went through the corridors in quest of Bartleby; but without finding
him.

“I saw him coming from his cell not long ago,” said a turnkey, “may be
he’s gone to loiter in the yards.”

So I went in that direction.

“Are you looking for the silent man?” said another turnkey passing me.
“Yonder he lies—sleeping in the yard there. ’Tis not twenty minutes
since I saw him lie down.”

The yard was entirely quiet. It was not accessible to the common
prisoners. The surrounding walls, of amazing thickness, kept off all
sounds behind them. The Egyptian character of the masonry weighed upon
me with its gloom. But a soft imprisoned turf grew under foot. The
heart of the eternal pyramids, it seemed, wherein, by some strange
magic, through the clefts, grass-seed, dropped by birds, had sprung.

Strangely huddled at the base of the wall, his knees drawn up, and
lying on his side, his head touching the cold stones, I saw the wasted
Bartleby. But nothing stirred. I paused; then went close up to him;
stooped over, and saw that his dim eyes were open; otherwise he seemed
profoundly sleeping. Something prompted me to touch him. I felt his
hand, when a tingling shiver ran up my arm and down my spine to my
feet.

The round face of the grub-man peered upon me now. “His dinner is
ready. Won’t he dine to-day, either? Or does he live without dining?”

“Lives without dining,” said I, and closed his eyes.

“Eh!—He’s asleep, aint he?”

“With kings and counselors,” murmured I.


There would seem little need for proceeding further in this history.
Imagination will readily supply the meager recital of poor Bartleby’s
interment. But ere parting with the reader, let me say, that if this
little narrative has sufficiently interested him, to awaken curiosity
as to who Bartleby was, and what manner of life he led prior to the
present narrator’s making his acquaintance, I can only reply, that in
such curiosity I fully share, but am wholly unable to gratify it. Yet
here I hardly know whether I should divulge one little item of rumor,
which came to my ear a few months after the scrivener’s decease. Upon
what basis it rested, I could never ascertain; and hence, how true it
is I cannot now tell. But inasmuch as this vague report has not been
without certain strange suggestive interest to me, however sad, it may
prove the same with some others; and so I will briefly mention it. The
report was this: that Bartleby had been a subordinate clerk in the Dead
Letter Office at Washington, from which he had been suddenly removed by
a change in the administration. When I think over this rumor, I cannot
adequately express the emotions which seize me. Dead letters! does it
not sound like dead men? Conceive a man by nature and misfortune prone
to a pallid hopelessness, can any business seem more fitted to heighten
it than that of continually handling these dead letters, and assorting
them for the flames? For by the cart-load they are annually burned.
Sometimes from out the folded paper the pale clerk takes a ring:—the
finger it was meant for, perhaps, moulders in the grave; a bank-note
sent in swiftest charity:—he whom it would relieve, nor eats nor
hungers any more; pardon for those who died despairing; hope for those
who died unhoping; good tidings for those who died stifled by
unrelieved calamities. On errands of life, these letters speed to
death.

Ah Bartleby! Ah humanity!
`,nf="/tuitype-site/assets/call-of-cthulhu-BfeF24VQ.txt",sf="/tuitype-site/assets/ulysses-CO7SL8Pt.txt",rf="/tuitype-site/assets/alice-im-wunderland-5G93jCSV.txt",of={"‘":"'","’":"'","‚":"'","‛":"'","“":'"',"”":'"',"„":'"',"–":"-","—":"-","−":"-"," ":" ","…":"..."},af=new RegExp(`[${bo}]+`,"u"),lf=new RegExp(`\\n[${bo}]*\\n`,"u");function Hh(s){let e=s.replace(/^﻿+/,"");return e=Array.from(e,t=>of[t]??t).join(""),e=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),e.split(lf).map(t=>t.split(af).filter(n=>n!=="").join(" ")).filter(t=>t!=="").join(`
`)}const hf=new RegExp(`[^${bo}]+ ?`,"gu");class cf{text;width;lines=[];paraStart=[];starts=[];indexes=[];constructor(e,t){this.text=$e(e),this.width=Math.max(t,1);let n=0;const i=e.split(`
`);i.forEach((r,a)=>{a&&this.lines.push({start:n-1,end:n-1,para:a-1}),this.paraStart.push(this.lines.length),this.wrap($e(r),n,a,a===i.length-1),n+=$e(r).length+1}),this.lines.forEach((r,a)=>{r.start!==r.end&&(this.starts.push(r.start),this.indexes.push(a))})}wrap(e,t,n,i){let r=e.join("").match(hf)?.map(c=>$e(c))??[];r.length||(r=[[]]);let a=t,l=0;for(let c of r){for(;c.length>this.width;)l&&(this.lines.push({start:a,end:a+l,para:n}),a+=l,l=0),this.lines.push({start:a,end:a+this.width,para:n}),a+=this.width,c=c.slice(this.width);l&&l+c.length>this.width&&(this.lines.push({start:a,end:a+l,para:n}),a+=l,l=0),l+=c.length}this.lines.push({start:a,end:a+l+(i?0:1),para:n})}lineOf(e){let t=0,n=this.starts.length;for(;t<n;){const i=t+n>>1;e<this.starts[i]?n=i:t=i+1}return this.indexes[Math.max(t-1,0)]}initialTop(e,t){const n=this.lineOf(e),i=this.paraStart[this.lines[n].para];return n-i<t?i:n}scroll(e,t,n){const i=this.lineOf(t);if(i<e)return this.initialTop(t,n);for(;i>=e+n;){const r=this.paraStart.find(a=>a>e);if(r===void 0||r>i)return i-n+1;e=r}return e}}const vl="",Gh="ok",fn="bad",Kh="fixed",Qh="old",xe="back",Kr=5,uf=.25;class Il{text;startPos;pos;marks;typed=new Map;retry=new Set;keystrokes=0;correct=0;errors=0;backspaces=0;uncorrected=0;active=0;firstWall=null;events=[];intervalSum=0;intervalCount=0;first=null;last=null;wallClock;constructor(e,t=0,n=()=>Date.now()/1e3){this.wallClock=n,this.text=typeof e=="string"?$e(e):e,this.startPos=this.pos=t,this.marks=[...Array(t).fill(Qh),...Array(this.text.length-t).fill(vl)]}get done(){return this.pos>=this.text.length}get typicalInterval(){return this.intervalCount?this.intervalSum/this.intervalCount:uf}paused(e){return this.last!==null&&e-this.last>Kr}clockMs(e){return this.first===null?0:tt((e-this.first)*1e3)}tick(e){this.first===null&&(this.first=e,this.firstWall=this.wallClock());let t=null;return this.last!==null&&(t=e-this.last,t<=Kr?(this.active+=t,this.intervalSum+=t,this.intervalCount+=1):this.active+=this.typicalInterval),this.last=e,[tt((e-this.first)*1e3),t===null?null:tt(t*1e3)]}type(e,t){if(this.done)return;const[n,i]=this.tick(t);this.keystrokes+=1;const r=this.text[this.pos];let a;e===r?(this.correct+=1,a=this.retry.has(this.pos)?Kh:Gh):(a=fn,this.errors+=1,this.uncorrected+=1),this.marks[this.pos]=a,this.typed.set(this.pos,e),this.events.push([n,i,this.pos,r,e,a]),this.pos+=1}backspace(e){if(this.pos===0)return;const[t,n]=this.tick(e);this.pos-=1,this.backspaces+=1,this.marks[this.pos]===fn&&(this.retry.add(this.pos),this.uncorrected-=1);const i=this.typed.get(this.pos)??null;this.typed.delete(this.pos),this.events.push([t,n,this.pos,this.text[this.pos],i,xe]),this.marks[this.pos]=vl}get wpm(){return this.active>=1?this.keystrokes/5/(this.active/60):0}get netWpm(){return this.active>=1?Math.max(this.keystrokes-this.uncorrected,0)/5/(this.active/60):0}get accuracy(){return this.keystrokes?100*this.correct/this.keystrokes:100}}const Ar=1e4,df=3e3,ff=100,mf=1,pf=60;class bl{history=[];best=0;view;at=null;session;constructor(e){this.session=e,this.view=this.compute(null)}update(e){return this.at!==null&&e-this.at<mf?!1:(this.at=e,this.view=this.compute(e),this.session.keystrokes&&(this.history.push(this.view.wpm),this.history.length>pf&&this.history.shift(),this.session.active>=Ar/1e3&&(this.best=Math.max(this.best,this.view.wpm))),!0)}window(){const e=this.session,t=e.typicalInterval*1e3;let n=0,i=0;for(let r=e.events.length-1;r>=0&&!(i>=Ar);r--){const a=e.events[r];i+=a[1]!==null&&a[1]<=Kr*1e3?a[1]:a[1]!==null?t:0,n+=a[5]!==xe?1:0}return[n,Math.max(Math.min(i,Ar),df)]}compute(e){const t=this.session,[n,i]=this.window(),r=e!==null&&t.paused(e),a=[];for(let d=t.events.length-1;d>=0&&a.length<ff;d--)t.events[d][5]!==xe&&a.push(t.events[d][5]);let l=0;for(let d=t.events.length-1;d>=0&&t.events[d][5]!==fn;d--)l+=t.events[d][5]!==xe?1:0;const c=a.filter(d=>d===fn).length;return{wpm:r||!t.keystrokes?0:n/5/(i/6e4),paused:r,avg:t.wpm,accuracy:a.length?100*(a.length-c)/a.length:100,streak:l,errors:t.uncorrected,backspaces:t.backspaces,active:t.active}}}const ui=5e3,gf=1e3,Yh=10,ei=50,yf=400,wf=250,_f=3;function To(s,e){let t=s.get(e);return t||s.set(e,t=[0,0,0,0]),t}const ds=s=>s!==null&&s<=ui;function vf(s){const e=new Map;for(const[,t,,n,,i]of s){if(i===xe)continue;const r=To(e,n);r[0]+=1,r[1]+=i==="bad"?1:0,ds(t)&&(r[2]+=1,r[3]+=t)}return e}function If(s){const e=new Map;for(const t of s)if(t[5]==="bad"){const n=JSON.stringify([t[3],t[4]]);e.set(n,(e.get(n)??0)+1)}return e}function bf(s){const e=new Map;let t=null;for(const n of s){if(n[5]!==xe&&t!==null&&t[5]!==xe&&n[2]===t[2]+1){const i=To(e,t[3]+n[3]);i[0]+=1,i[1]+=n[5]==="bad"?1:0,ds(n[1])&&(i[2]+=1,i[3]+=n[1])}t=n}return e}const Tf=/^[^\p{L}\p{N}_]+|[^\p{L}\p{N}_]+$/gu;function Ef(s){const e=new Map;let t=[],n=!0;const i=()=>{if(t.length&&n){const r=t.map(a=>a[3]).join("").toLowerCase().replace(Tf,"");if($e(r).length>=_f){const a=To(e,r);a[0]+=1,a[1]+=t.some(l=>l[5]==="bad")?1:0;for(const l of t.slice(1))ds(l[1])&&(a[2]+=1,a[3]+=l[1])}}t=[]};for(const r of s)r[5]!==xe&&(r[3]===" "||r[3]===`
`?(i(),n=!0):t.length&&r[2]!==t[t.length-1][2]+1?(i(),n=!1,t=[r]):t.push(r));return i(),e}function Af(s){const e=new Map;for(const t of s)if(t[5]!==xe&&ds(t[1])){const n=Math.floor(t[1]/Yh);e.set(n,(e.get(n)??0)+1)}return e}function kf(s){const e=s.filter(t=>t[5]!==xe&&ds(t[1])).map(t=>t[1]);return e.length?e.reduce((t,n)=>t+n,0)/e.length:wf}function Sf(s,e,t){const n=kf(s),i=new Map;for(const r of s){if(r[5]===xe)continue;const a=Math.floor(e+r[0]/1e3+t),l=Math.floor(a/86400),c=a-l*86400,d=`${((l+3)%7+7)%7},${Math.floor(c/3600)}`;let m=i.get(d);m||i.set(d,m=[0,0,0]),m[0]+=1,m[1]+=r[5]==="bad"?1:0,r[1]!==null&&(m[2]+=r[1]<=ui?r[1]:n)}return i}const Qr=["longest_clean_run","peak_burst_wpm","backspace_runs","runs_fixing_error","needless_runs","run_chars","overshoot_sum","overshoot_n","notice_ms_sum","notice_n","hesitations","breaks","fixed"];function Rf(s){const e=Object.fromEntries(Qr.map(d=>[d,0])),t=new Map,n=new Map;let i=null,r=0,a=[],l=0;const c=()=>{if(i!==null){if(e.backspace_runs+=1,i.erased.length){const d=Math.min(...i.erased);e.runs_fixing_error+=1,e.overshoot_sum+=i.cursor-d-1,e.overshoot_n+=1,e.notice_ms_sum+=i.firstT-n.get(d),e.notice_n+=1}else e.needless_runs+=1;i=null}};for(const[d,m,w,,,E]of s){if(E===xe){i===null&&(i={cursor:w+1,erased:[],firstT:d}),e.run_chars+=1,t.has(w)&&(i.erased.push(w),t.delete(w));continue}if(c(),m!==null&&(e.hesitations+=m>=gf&&m<=ui?1:0,e.breaks+=m>ui?1:0),E==="bad"?(t.set(w,d),n.set(w,d),r=0):(r+=1,e.longest_clean_run=Math.max(e.longest_clean_run,r),e.fixed+=E==="fixed"?1:0),a.push(d),a.length>ei&&a.shift(),a.length===ei&&a[a.length-1]>a[0]){const S=ei/5/((a[a.length-1]-a[0])/6e4);S<=yf&&(l=Math.max(l,S))}}return c(),e.peak_burst_wpm=l,e}function Jh(s,e,t){return{chars:vf(s),confusions:If(s),bigrams:bf(s),words:Ef(s),buckets:Sf(s,e,t),intervals:Af(s),flow:Rf(s)}}function Xh(s=Date.now()/1e3){const e=new Uint8Array(16);crypto.getRandomValues(e);let t=Math.floor(s*1e3);for(let i=5;i>=0;i--)e[i]=t%256,t=Math.floor(t/256);e[6]=112|e[6]&15,e[8]=128|e[8]&63;const n=[...e].map(i=>i.toString(16).padStart(2,"0")).join("");return`${n.slice(0,8)}-${n.slice(8,12)}-${n.slice(12,16)}-${n.slice(16,20)}-${n.slice(20)}`}async function Zh(s){const e=await crypto.subtle.digest("SHA-1",new TextEncoder().encode(s));return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}const Tl={title:"Bartleby, the Scrivener",author:"Herman Melville"},El=[{title:"The Call of Cthulhu",author:"H. P. Lovecraft",url:nf},{title:"Ulysses",author:"James Joyce",url:sf},{title:"Alice's Abenteuer im Wunderland",author:"Lewis Carroll",url:rf}];async function Pf(s,e){const t=await fetch(e.url);if(!t.ok)throw new Error(`could not load ${e.title} (${t.status})`);return Eo(s,await t.text(),e.title,e.author)}async function Eo(s,e,t,n=null,i=null){const r=Hh(e);if(!r)throw new Error("the file has no text");const a=await Zh(r);await s.getText(a)||await s.putText({sha1:a,title:t,text:r});const l=await s.bookForText(a,t);if(n!==null&&n!==l.author||i!==null&&i!==l.pages||t!==l.title){const d={...l,title:t,author:n??l.author,pages:i??l.pages,updatedAt:Date.now()/1e3};return await s.putBook(d),d}return l}async function Cf(s){const e=Hh(_l),t=await Zh(e),n=(await s.books()).find(i=>i.textSha1===t);return n&&await s.getText(t)?n:Eo(s,_l,n?.title??Tl.title,n?.author??Tl.author,n?.pages??null)}async function Nf(s,e,t){const n=await s.getBook(e);n&&await s.putBook({...n,...t,updatedAt:Date.now()/1e3})}var Al={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let i=s.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Df=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const i=s[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const r=s[t++];e[n++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=s[t++],a=s[t++],l=s[t++],c=((i&7)<<18|(r&63)<<12|(a&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const r=s[t++],a=s[t++];e[n++]=String.fromCharCode((i&15)<<12|(r&63)<<6|a&63)}}return e.join("")},tc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<s.length;i+=3){const r=s[i],a=i+1<s.length,l=a?s[i+1]:0,c=i+2<s.length,d=c?s[i+2]:0,m=r>>2,w=(r&3)<<4|l>>4;let E=(l&15)<<2|d>>6,S=d&63;c||(S=64,a||(E=64)),n.push(t[m],t[w],t[E],t[S])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(ec(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):Df(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<s.length;){const r=t[s.charAt(i++)],l=i<s.length?t[s.charAt(i)]:0;++i;const d=i<s.length?t[s.charAt(i)]:64;++i;const w=i<s.length?t[s.charAt(i)]:64;if(++i,r==null||l==null||d==null||w==null)throw new Vf;const E=r<<2|l>>4;if(n.push(E),d!==64){const S=l<<4&240|d>>2;if(n.push(S),w!==64){const N=d<<6&192|w;n.push(N)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Vf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xf=function(s){const e=ec(s);return tc.encodeByteArray(e,!0)},di=function(s){return xf(s).replace(/\./g,"")},nc=function(s){try{return tc.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=()=>Of().__FIREBASE_DEFAULTS__,Lf=()=>{if(typeof process>"u"||typeof Al>"u")return;const s=Al.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Bf=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&nc(s[1]);return e&&JSON.parse(e)},Di=()=>{try{return Mf()||Lf()||Bf()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},sc=s=>{var e,t;return(t=(e=Di())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[s]},Uf=s=>{const e=sc(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},ic=()=>{var s;return(s=Di())===null||s===void 0?void 0:s.config},rc=s=>{var e;return(e=Di())===null||e===void 0?void 0:e[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=s.iat||0,r=s.sub||s.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},s);return[di(JSON.stringify(t)),di(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function $f(){var s;const e=(s=Di())===null||s===void 0?void 0:s.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zf(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Hf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gf(){const s=Ee();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Kf(){return!$f()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qf(){try{return typeof indexedDB=="object"}catch{return!1}}function Yf(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="FirebaseError";class ct extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Jf,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],a=r?Xf(r,n):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new ct(i,l,n)}}function Xf(s,e){return s.replace(Zf,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Zf=/\{\$([^}]+)}/g;function em(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function fi(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const r=s[i],a=e[i];if(kl(r)&&kl(a)){if(!fi(r,a))return!1}else if(r!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function kl(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function tm(s,e){const t=new nm(s,e);return t.subscribe.bind(t)}class nm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");sm(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=kr),i.error===void 0&&(i.error=kr),i.complete===void 0&&(i.complete=kr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sm(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function kr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(s){return s&&s._delegate?s._delegate:s}class Wt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Ff;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(om(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});n.resolve(r)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);n===l&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const a=this.instances.get(i);return a&&e(a,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:rm(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rm(s){return s===Ut?void 0:s}function om(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new im(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(j||(j={}));const lm={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},hm=j.INFO,cm={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},um=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),i=cm[e];if(i)console[i](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ao{constructor(e){this.name=e,this._logLevel=hm,this._logHandler=um,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const dm=(s,e)=>e.some(t=>s instanceof t);let Sl,Rl;function fm(){return Sl||(Sl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mm(){return Rl||(Rl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oc=new WeakMap,Yr=new WeakMap,ac=new WeakMap,Sr=new WeakMap,ko=new WeakMap;function pm(s){const e=new Promise((t,n)=>{const i=()=>{s.removeEventListener("success",r),s.removeEventListener("error",a)},r=()=>{t(It(s.result)),i()},a=()=>{n(s.error),i()};s.addEventListener("success",r),s.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&oc.set(t,s)}).catch(()=>{}),ko.set(e,s),e}function gm(s){if(Yr.has(s))return;const e=new Promise((t,n)=>{const i=()=>{s.removeEventListener("complete",r),s.removeEventListener("error",a),s.removeEventListener("abort",a)},r=()=>{t(),i()},a=()=>{n(s.error||new DOMException("AbortError","AbortError")),i()};s.addEventListener("complete",r),s.addEventListener("error",a),s.addEventListener("abort",a)});Yr.set(s,e)}let Jr={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return Yr.get(s);if(e==="objectStoreNames")return s.objectStoreNames||ac.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return It(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function ym(s){Jr=s(Jr)}function wm(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(Rr(this),e,...t);return ac.set(n,e.sort?e.sort():[e]),It(n)}:mm().includes(s)?function(...e){return s.apply(Rr(this),e),It(oc.get(this))}:function(...e){return It(s.apply(Rr(this),e))}}function _m(s){return typeof s=="function"?wm(s):(s instanceof IDBTransaction&&gm(s),dm(s,fm())?new Proxy(s,Jr):s)}function It(s){if(s instanceof IDBRequest)return pm(s);if(Sr.has(s))return Sr.get(s);const e=_m(s);return e!==s&&(Sr.set(s,e),ko.set(e,s)),e}const Rr=s=>ko.get(s);function vm(s,e,{blocked:t,upgrade:n,blocking:i,terminated:r}={}){const a=indexedDB.open(s,e),l=It(a);return n&&a.addEventListener("upgradeneeded",c=>{n(It(a.result),c.oldVersion,c.newVersion,It(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Im=["get","getKey","getAll","getAllKeys","count"],bm=["put","add","delete","clear"],Pr=new Map;function Pl(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Pr.get(e))return Pr.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=bm.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Im.includes(t)))return;const r=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let d=c.store;return n&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&c.done]))[0]};return Pr.set(e,r),r}ym(s=>({...s,get:(e,t,n)=>Pl(e,t)||s.get(e,t,n),has:(e,t)=>!!Pl(e,t)||s.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Em(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Em(s){const e=s.getComponent();return e?.type==="VERSION"}const Xr="@firebase/app",Cl="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new Ao("@firebase/app"),Am="@firebase/app-compat",km="@firebase/analytics-compat",Sm="@firebase/analytics",Rm="@firebase/app-check-compat",Pm="@firebase/app-check",Cm="@firebase/auth",Nm="@firebase/auth-compat",Dm="@firebase/database",Vm="@firebase/data-connect",xm="@firebase/database-compat",Om="@firebase/functions",Mm="@firebase/functions-compat",Lm="@firebase/installations",Bm="@firebase/installations-compat",Um="@firebase/messaging",Fm="@firebase/messaging-compat",qm="@firebase/performance",jm="@firebase/performance-compat",$m="@firebase/remote-config",Wm="@firebase/remote-config-compat",zm="@firebase/storage",Hm="@firebase/storage-compat",Gm="@firebase/firestore",Km="@firebase/vertexai",Qm="@firebase/firestore-compat",Ym="firebase",Jm="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="[DEFAULT]",Xm={[Xr]:"fire-core",[Am]:"fire-core-compat",[Sm]:"fire-analytics",[km]:"fire-analytics-compat",[Pm]:"fire-app-check",[Rm]:"fire-app-check-compat",[Cm]:"fire-auth",[Nm]:"fire-auth-compat",[Dm]:"fire-rtdb",[Vm]:"fire-data-connect",[xm]:"fire-rtdb-compat",[Om]:"fire-fn",[Mm]:"fire-fn-compat",[Lm]:"fire-iid",[Bm]:"fire-iid-compat",[Um]:"fire-fcm",[Fm]:"fire-fcm-compat",[qm]:"fire-perf",[jm]:"fire-perf-compat",[$m]:"fire-rc",[Wm]:"fire-rc-compat",[zm]:"fire-gcs",[Hm]:"fire-gcs-compat",[Gm]:"fire-fst",[Qm]:"fire-fst-compat",[Km]:"fire-vertex","fire-js":"fire-js",[Ym]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new Map,Zm=new Map,eo=new Map;function Nl(s,e){try{s.container.addComponent(e)}catch(t){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function mn(s){const e=s.name;if(eo.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;eo.set(e,s);for(const t of mi.values())Nl(t,s);for(const t of Zm.values())Nl(t,s);return!0}function So(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function We(s){return s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bt=new fs("app","Firebase",ep);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=Jm;function lc(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Zr,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw bt.create("bad-app-name",{appName:String(i)});if(t||(t=ic()),!t)throw bt.create("no-options");const r=mi.get(i);if(r){if(fi(t,r.options)&&fi(n,r.config))return r;throw bt.create("duplicate-app",{appName:i})}const a=new am(i);for(const c of eo.values())a.addComponent(c);const l=new tp(t,n,a);return mi.set(i,l),l}function hc(s=Zr){const e=mi.get(s);if(!e&&s===Zr&&ic())return lc();if(!e)throw bt.create("no-app",{appName:s});return e}function Tt(s,e,t){var n;let i=(n=Xm[s])!==null&&n!==void 0?n:s;t&&(i+=`-${t}`);const r=i.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(l.join(" "));return}mn(new Wt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="firebase-heartbeat-database",sp=1,ss="firebase-heartbeat-store";let Cr=null;function cc(){return Cr||(Cr=vm(np,sp,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(ss)}catch(t){console.warn(t)}}}}).catch(s=>{throw bt.create("idb-open",{originalErrorMessage:s.message})})),Cr}async function ip(s){try{const t=(await cc()).transaction(ss),n=await t.objectStore(ss).get(uc(s));return await t.done,n}catch(e){if(e instanceof ct)ot.warn(e.message);else{const t=bt.create("idb-get",{originalErrorMessage:e?.message});ot.warn(t.message)}}}async function Dl(s,e){try{const n=(await cc()).transaction(ss,"readwrite");await n.objectStore(ss).put(e,uc(s)),await n.done}catch(t){if(t instanceof ct)ot.warn(t.message);else{const n=bt.create("idb-set",{originalErrorMessage:t?.message});ot.warn(n.message)}}}function uc(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=1024,op=30*24*60*60*1e3;class ap{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hp(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=op}),this._storage.overwrite(this._heartbeatsCache))}catch(n){ot.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Vl(),{heartbeatsToSend:n,unsentEntries:i}=lp(this._heartbeatsCache.heartbeats),r=di(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ot.warn(t),""}}}function Vl(){return new Date().toISOString().substring(0,10)}function lp(s,e=rp){const t=[];let n=s.slice();for(const i of s){const r=t.find(a=>a.agent===i.agent);if(r){if(r.dates.push(i.date),xl(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),xl(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class hp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qf()?Yf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ip(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xl(s){return di(JSON.stringify({version:2,heartbeats:s})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(s){mn(new Wt("platform-logger",e=>new Tm(e),"PRIVATE")),mn(new Wt("heartbeat",e=>new ap(e),"PRIVATE")),Tt(Xr,Cl,s),Tt(Xr,Cl,"esm2017"),Tt("fire-js","")}cp("");var Ol=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jt,dc;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,p){function y(){}y.prototype=p.prototype,v.D=p.prototype,v.prototype=new y,v.prototype.constructor=v,v.C=function(_,I,T){for(var g=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)g[Je-2]=arguments[Je];return p.prototype[I].apply(_,g)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,y){y||(y=0);var _=Array(16);if(typeof p=="string")for(var I=0;16>I;++I)_[I]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(I=0;16>I;++I)_[I]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=v.g[0],y=v.g[1],I=v.g[2];var T=v.g[3],g=p+(T^y&(I^T))+_[0]+3614090360&4294967295;p=y+(g<<7&4294967295|g>>>25),g=T+(I^p&(y^I))+_[1]+3905402710&4294967295,T=p+(g<<12&4294967295|g>>>20),g=I+(y^T&(p^y))+_[2]+606105819&4294967295,I=T+(g<<17&4294967295|g>>>15),g=y+(p^I&(T^p))+_[3]+3250441966&4294967295,y=I+(g<<22&4294967295|g>>>10),g=p+(T^y&(I^T))+_[4]+4118548399&4294967295,p=y+(g<<7&4294967295|g>>>25),g=T+(I^p&(y^I))+_[5]+1200080426&4294967295,T=p+(g<<12&4294967295|g>>>20),g=I+(y^T&(p^y))+_[6]+2821735955&4294967295,I=T+(g<<17&4294967295|g>>>15),g=y+(p^I&(T^p))+_[7]+4249261313&4294967295,y=I+(g<<22&4294967295|g>>>10),g=p+(T^y&(I^T))+_[8]+1770035416&4294967295,p=y+(g<<7&4294967295|g>>>25),g=T+(I^p&(y^I))+_[9]+2336552879&4294967295,T=p+(g<<12&4294967295|g>>>20),g=I+(y^T&(p^y))+_[10]+4294925233&4294967295,I=T+(g<<17&4294967295|g>>>15),g=y+(p^I&(T^p))+_[11]+2304563134&4294967295,y=I+(g<<22&4294967295|g>>>10),g=p+(T^y&(I^T))+_[12]+1804603682&4294967295,p=y+(g<<7&4294967295|g>>>25),g=T+(I^p&(y^I))+_[13]+4254626195&4294967295,T=p+(g<<12&4294967295|g>>>20),g=I+(y^T&(p^y))+_[14]+2792965006&4294967295,I=T+(g<<17&4294967295|g>>>15),g=y+(p^I&(T^p))+_[15]+1236535329&4294967295,y=I+(g<<22&4294967295|g>>>10),g=p+(I^T&(y^I))+_[1]+4129170786&4294967295,p=y+(g<<5&4294967295|g>>>27),g=T+(y^I&(p^y))+_[6]+3225465664&4294967295,T=p+(g<<9&4294967295|g>>>23),g=I+(p^y&(T^p))+_[11]+643717713&4294967295,I=T+(g<<14&4294967295|g>>>18),g=y+(T^p&(I^T))+_[0]+3921069994&4294967295,y=I+(g<<20&4294967295|g>>>12),g=p+(I^T&(y^I))+_[5]+3593408605&4294967295,p=y+(g<<5&4294967295|g>>>27),g=T+(y^I&(p^y))+_[10]+38016083&4294967295,T=p+(g<<9&4294967295|g>>>23),g=I+(p^y&(T^p))+_[15]+3634488961&4294967295,I=T+(g<<14&4294967295|g>>>18),g=y+(T^p&(I^T))+_[4]+3889429448&4294967295,y=I+(g<<20&4294967295|g>>>12),g=p+(I^T&(y^I))+_[9]+568446438&4294967295,p=y+(g<<5&4294967295|g>>>27),g=T+(y^I&(p^y))+_[14]+3275163606&4294967295,T=p+(g<<9&4294967295|g>>>23),g=I+(p^y&(T^p))+_[3]+4107603335&4294967295,I=T+(g<<14&4294967295|g>>>18),g=y+(T^p&(I^T))+_[8]+1163531501&4294967295,y=I+(g<<20&4294967295|g>>>12),g=p+(I^T&(y^I))+_[13]+2850285829&4294967295,p=y+(g<<5&4294967295|g>>>27),g=T+(y^I&(p^y))+_[2]+4243563512&4294967295,T=p+(g<<9&4294967295|g>>>23),g=I+(p^y&(T^p))+_[7]+1735328473&4294967295,I=T+(g<<14&4294967295|g>>>18),g=y+(T^p&(I^T))+_[12]+2368359562&4294967295,y=I+(g<<20&4294967295|g>>>12),g=p+(y^I^T)+_[5]+4294588738&4294967295,p=y+(g<<4&4294967295|g>>>28),g=T+(p^y^I)+_[8]+2272392833&4294967295,T=p+(g<<11&4294967295|g>>>21),g=I+(T^p^y)+_[11]+1839030562&4294967295,I=T+(g<<16&4294967295|g>>>16),g=y+(I^T^p)+_[14]+4259657740&4294967295,y=I+(g<<23&4294967295|g>>>9),g=p+(y^I^T)+_[1]+2763975236&4294967295,p=y+(g<<4&4294967295|g>>>28),g=T+(p^y^I)+_[4]+1272893353&4294967295,T=p+(g<<11&4294967295|g>>>21),g=I+(T^p^y)+_[7]+4139469664&4294967295,I=T+(g<<16&4294967295|g>>>16),g=y+(I^T^p)+_[10]+3200236656&4294967295,y=I+(g<<23&4294967295|g>>>9),g=p+(y^I^T)+_[13]+681279174&4294967295,p=y+(g<<4&4294967295|g>>>28),g=T+(p^y^I)+_[0]+3936430074&4294967295,T=p+(g<<11&4294967295|g>>>21),g=I+(T^p^y)+_[3]+3572445317&4294967295,I=T+(g<<16&4294967295|g>>>16),g=y+(I^T^p)+_[6]+76029189&4294967295,y=I+(g<<23&4294967295|g>>>9),g=p+(y^I^T)+_[9]+3654602809&4294967295,p=y+(g<<4&4294967295|g>>>28),g=T+(p^y^I)+_[12]+3873151461&4294967295,T=p+(g<<11&4294967295|g>>>21),g=I+(T^p^y)+_[15]+530742520&4294967295,I=T+(g<<16&4294967295|g>>>16),g=y+(I^T^p)+_[2]+3299628645&4294967295,y=I+(g<<23&4294967295|g>>>9),g=p+(I^(y|~T))+_[0]+4096336452&4294967295,p=y+(g<<6&4294967295|g>>>26),g=T+(y^(p|~I))+_[7]+1126891415&4294967295,T=p+(g<<10&4294967295|g>>>22),g=I+(p^(T|~y))+_[14]+2878612391&4294967295,I=T+(g<<15&4294967295|g>>>17),g=y+(T^(I|~p))+_[5]+4237533241&4294967295,y=I+(g<<21&4294967295|g>>>11),g=p+(I^(y|~T))+_[12]+1700485571&4294967295,p=y+(g<<6&4294967295|g>>>26),g=T+(y^(p|~I))+_[3]+2399980690&4294967295,T=p+(g<<10&4294967295|g>>>22),g=I+(p^(T|~y))+_[10]+4293915773&4294967295,I=T+(g<<15&4294967295|g>>>17),g=y+(T^(I|~p))+_[1]+2240044497&4294967295,y=I+(g<<21&4294967295|g>>>11),g=p+(I^(y|~T))+_[8]+1873313359&4294967295,p=y+(g<<6&4294967295|g>>>26),g=T+(y^(p|~I))+_[15]+4264355552&4294967295,T=p+(g<<10&4294967295|g>>>22),g=I+(p^(T|~y))+_[6]+2734768916&4294967295,I=T+(g<<15&4294967295|g>>>17),g=y+(T^(I|~p))+_[13]+1309151649&4294967295,y=I+(g<<21&4294967295|g>>>11),g=p+(I^(y|~T))+_[4]+4149444226&4294967295,p=y+(g<<6&4294967295|g>>>26),g=T+(y^(p|~I))+_[11]+3174756917&4294967295,T=p+(g<<10&4294967295|g>>>22),g=I+(p^(T|~y))+_[2]+718787259&4294967295,I=T+(g<<15&4294967295|g>>>17),g=y+(T^(I|~p))+_[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+T&4294967295}n.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var y=p-this.blockSize,_=this.B,I=this.h,T=0;T<p;){if(I==0)for(;T<=y;)i(this,v,T),T+=this.blockSize;if(typeof v=="string"){for(;T<p;)if(_[I++]=v.charCodeAt(T++),I==this.blockSize){i(this,_),I=0;break}}else for(;T<p;)if(_[I++]=v[T++],I==this.blockSize){i(this,_),I=0;break}}this.h=I,this.o+=p},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var y=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=y&255,y/=256;for(this.u(v),v=Array(16),p=y=0;4>p;++p)for(var _=0;32>_;_+=8)v[y++]=this.g[p]>>>_&255;return v};function r(v,p){var y=l;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=p(v)}function a(v,p){this.h=p;for(var y=[],_=!0,I=v.length-1;0<=I;I--){var T=v[I]|0;_&&T==p||(y[I]=T,_=!1)}this.g=y}var l={};function c(v){return-128<=v&&128>v?r(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return C(d(-v));for(var p=[],y=1,_=0;v>=y;_++)p[_]=v/y|0,y*=4294967296;return new a(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return C(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(p,8)),_=w,I=0;I<v.length;I+=8){var T=Math.min(8,v.length-I),g=parseInt(v.substring(I,I+T),p);8>T?(T=d(Math.pow(p,T)),_=_.j(T).add(d(g))):(_=_.j(y),_=_.add(d(g)))}return _}var w=c(0),E=c(1),S=c(16777216);s=a.prototype,s.m=function(){if(x(this))return-C(this).m();for(var v=0,p=1,y=0;y<this.g.length;y++){var _=this.i(y);v+=(0<=_?_:4294967296+_)*p,p*=4294967296}return v},s.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(x(this))return"-"+C(this).toString(v);for(var p=d(Math.pow(v,6)),y=this,_="";;){var I=q(y,p).g;y=z(y,I.j(p));var T=((0<y.g.length?y.g[0]:y.h)>>>0).toString(v);if(y=I,N(y))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},s.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function x(v){return v.h==-1}s.l=function(v){return v=z(this,v),x(v)?-1:N(v)?0:1};function C(v){for(var p=v.g.length,y=[],_=0;_<p;_++)y[_]=~v.g[_];return new a(y,~v.h).add(E)}s.abs=function(){return x(this)?C(this):this},s.add=function(v){for(var p=Math.max(this.g.length,v.g.length),y=[],_=0,I=0;I<=p;I++){var T=_+(this.i(I)&65535)+(v.i(I)&65535),g=(T>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);_=g>>>16,T&=65535,g&=65535,y[I]=g<<16|T}return new a(y,y[y.length-1]&-2147483648?-1:0)};function z(v,p){return v.add(C(p))}s.j=function(v){if(N(this)||N(v))return w;if(x(this))return x(v)?C(this).j(C(v)):C(C(this).j(v));if(x(v))return C(this.j(C(v)));if(0>this.l(S)&&0>v.l(S))return d(this.m()*v.m());for(var p=this.g.length+v.g.length,y=[],_=0;_<2*p;_++)y[_]=0;for(_=0;_<this.g.length;_++)for(var I=0;I<v.g.length;I++){var T=this.i(_)>>>16,g=this.i(_)&65535,Je=v.i(I)>>>16,Cn=v.i(I)&65535;y[2*_+2*I]+=g*Cn,G(y,2*_+2*I),y[2*_+2*I+1]+=T*Cn,G(y,2*_+2*I+1),y[2*_+2*I+1]+=g*Je,G(y,2*_+2*I+1),y[2*_+2*I+2]+=T*Je,G(y,2*_+2*I+2)}for(_=0;_<p;_++)y[_]=y[2*_+1]<<16|y[2*_];for(_=p;_<2*p;_++)y[_]=0;return new a(y,0)};function G(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function D(v,p){this.g=v,this.h=p}function q(v,p){if(N(p))throw Error("division by zero");if(N(v))return new D(w,w);if(x(v))return p=q(C(v),p),new D(C(p.g),C(p.h));if(x(p))return p=q(v,C(p)),new D(C(p.g),p.h);if(30<v.g.length){if(x(v)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var y=E,_=p;0>=_.l(v);)y=ge(y),_=ge(_);var I=ne(y,1),T=ne(_,1);for(_=ne(_,2),y=ne(y,2);!N(_);){var g=T.add(_);0>=g.l(v)&&(I=I.add(y),T=g),_=ne(_,1),y=ne(y,1)}return p=z(v,I.j(p)),new D(I,p)}for(I=w;0<=v.l(p);){for(y=Math.max(1,Math.floor(v.m()/p.m())),_=Math.ceil(Math.log(y)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=d(y),g=T.j(p);x(g)||0<g.l(v);)y-=_,T=d(y),g=T.j(p);N(T)&&(T=E),I=I.add(T),v=z(v,g)}return new D(I,v)}s.A=function(v){return q(this,v).h},s.and=function(v){for(var p=Math.max(this.g.length,v.g.length),y=[],_=0;_<p;_++)y[_]=this.i(_)&v.i(_);return new a(y,this.h&v.h)},s.or=function(v){for(var p=Math.max(this.g.length,v.g.length),y=[],_=0;_<p;_++)y[_]=this.i(_)|v.i(_);return new a(y,this.h|v.h)},s.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),y=[],_=0;_<p;_++)y[_]=this.i(_)^v.i(_);return new a(y,this.h^v.h)};function ge(v){for(var p=v.g.length+1,y=[],_=0;_<p;_++)y[_]=v.i(_)<<1|v.i(_-1)>>>31;return new a(y,v.h)}function ne(v,p){var y=p>>5;p%=32;for(var _=v.g.length-y,I=[],T=0;T<_;T++)I[T]=0<p?v.i(T+y)>>>p|v.i(T+y+1)<<32-p:v.i(T+y);return new a(I,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,dc=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,jt=a}).apply(typeof Ol<"u"?Ol:typeof self<"u"?self:typeof window<"u"?window:{});var $s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fc,Qn,mc,ti,to,pc,gc,yc;(function(){var s,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,u){return o==Array.prototype||o==Object.prototype||(o[h]=u.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $s=="object"&&$s];for(var h=0;h<o.length;++h){var u=o[h];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var n=t(this);function i(o,h){if(h)e:{var u=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var b=o[f];if(!(b in u))break e;u=u[b]}o=o[o.length-1],f=u[o],h=h(f),h!=f&&h!=null&&e(u,o,{configurable:!0,writable:!0,value:h})}}function r(o,h){o instanceof String&&(o+="");var u=0,f=!1,b={next:function(){if(!f&&u<o.length){var A=u++;return{value:h(A,o[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(o){return o||function(){return r(this,function(h,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function d(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function m(o,h,u){return o.call.apply(o.bind,arguments)}function w(o,h,u){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,f),o.apply(h,b)}}return function(){return o.apply(h,arguments)}}function E(o,h,u){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:w,E.apply(null,arguments)}function S(o,h){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function N(o,h){function u(){}u.prototype=h.prototype,o.aa=h.prototype,o.prototype=new u,o.prototype.constructor=o,o.Qb=function(f,b,A){for(var P=Array(arguments.length-2),J=2;J<arguments.length;J++)P[J-2]=arguments[J];return h.prototype[b].apply(f,P)}}function x(o){const h=o.length;if(0<h){const u=Array(h);for(let f=0;f<h;f++)u[f]=o[f];return u}return[]}function C(o,h){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(c(f)){const b=o.length||0,A=f.length||0;o.length=b+A;for(let P=0;P<A;P++)o[b+P]=f[P]}else o.push(f)}}class z{constructor(h,u){this.i=h,this.j=u,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function G(o){return/^[\s\xa0]*$/.test(o)}function D(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function q(o){return q[" "](o),o}q[" "]=function(){};var ge=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function ne(o,h,u){for(const f in o)h.call(u,o[f],f,o)}function v(o,h){for(const u in o)h.call(void 0,o[u],u,o)}function p(o){const h={};for(const u in o)h[u]=o[u];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(o,h){let u,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(u in f)o[u]=f[u];for(let A=0;A<y.length;A++)u=y[A],Object.prototype.hasOwnProperty.call(f,u)&&(o[u]=f[u])}}function I(o){var h=1;o=o.split(":");const u=[];for(;0<h&&o.length;)u.push(o.shift()),h--;return o.length&&u.push(o.join(":")),u}function T(o){l.setTimeout(()=>{throw o},0)}function g(){var o=tr;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class Je{constructor(){this.h=this.g=null}add(h,u){const f=Cn.get();f.set(h,u),this.h?this.h.next=f:this.g=f,this.h=f}}var Cn=new z(()=>new _d,o=>o.reset());class _d{constructor(){this.next=this.g=this.h=null}set(h,u){this.h=h,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Nn,Dn=!1,tr=new Je,_a=()=>{const o=l.Promise.resolve(void 0);Nn=()=>{o.then(vd)}};var vd=()=>{for(var o;o=g();){try{o.h.call(o.g)}catch(u){T(u)}var h=Cn;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}Dn=!1};function ut(){this.s=this.s,this.C=this.C}ut.prototype.s=!1,ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var Id=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const u=()=>{};l.addEventListener("test",u,h),l.removeEventListener("test",u,h)}catch{}return o}();function Vn(o,h){if(ye.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var u=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(ge){e:{try{q(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else u=="mouseover"?h=o.fromElement:u=="mouseout"&&(h=o.toElement);this.relatedTarget=h,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:bd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Vn.aa.h.call(this)}}N(Vn,ye);var bd={2:"touch",3:"pen",4:"mouse"};Vn.prototype.h=function(){Vn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Es="closure_listenable_"+(1e6*Math.random()|0),Td=0;function Ed(o,h,u,f,b){this.listener=o,this.proxy=null,this.src=h,this.type=u,this.capture=!!f,this.ha=b,this.key=++Td,this.da=this.fa=!1}function As(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ks(o){this.src=o,this.g={},this.h=0}ks.prototype.add=function(o,h,u,f,b){var A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);var P=sr(o,h,f,b);return-1<P?(h=o[P],u||(h.fa=!1)):(h=new Ed(h,this.src,A,!!f,b),h.fa=u,o.push(h)),h};function nr(o,h){var u=h.type;if(u in o.g){var f=o.g[u],b=Array.prototype.indexOf.call(f,h,void 0),A;(A=0<=b)&&Array.prototype.splice.call(f,b,1),A&&(As(h),o.g[u].length==0&&(delete o.g[u],o.h--))}}function sr(o,h,u,f){for(var b=0;b<o.length;++b){var A=o[b];if(!A.da&&A.listener==h&&A.capture==!!u&&A.ha==f)return b}return-1}var ir="closure_lm_"+(1e6*Math.random()|0),rr={};function va(o,h,u,f,b){if(Array.isArray(h)){for(var A=0;A<h.length;A++)va(o,h[A],u,f,b);return null}return u=Ta(u),o&&o[Es]?o.K(h,u,d(f)?!!f.capture:!1,b):Ad(o,h,u,!1,f,b)}function Ad(o,h,u,f,b,A){if(!h)throw Error("Invalid event type");var P=d(b)?!!b.capture:!!b,J=ar(o);if(J||(o[ir]=J=new ks(o)),u=J.add(h,u,f,P,A),u.proxy)return u;if(f=kd(),u.proxy=f,f.src=o,f.listener=u,o.addEventListener)Id||(b=P),b===void 0&&(b=!1),o.addEventListener(h.toString(),f,b);else if(o.attachEvent)o.attachEvent(ba(h.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function kd(){function o(u){return h.call(o.src,o.listener,u)}const h=Sd;return o}function Ia(o,h,u,f,b){if(Array.isArray(h))for(var A=0;A<h.length;A++)Ia(o,h[A],u,f,b);else f=d(f)?!!f.capture:!!f,u=Ta(u),o&&o[Es]?(o=o.i,h=String(h).toString(),h in o.g&&(A=o.g[h],u=sr(A,u,f,b),-1<u&&(As(A[u]),Array.prototype.splice.call(A,u,1),A.length==0&&(delete o.g[h],o.h--)))):o&&(o=ar(o))&&(h=o.g[h.toString()],o=-1,h&&(o=sr(h,u,f,b)),(u=-1<o?h[o]:null)&&or(u))}function or(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[Es])nr(h.i,o);else{var u=o.type,f=o.proxy;h.removeEventListener?h.removeEventListener(u,f,o.capture):h.detachEvent?h.detachEvent(ba(u),f):h.addListener&&h.removeListener&&h.removeListener(f),(u=ar(h))?(nr(u,o),u.h==0&&(u.src=null,h[ir]=null)):As(o)}}}function ba(o){return o in rr?rr[o]:rr[o]="on"+o}function Sd(o,h){if(o.da)o=!0;else{h=new Vn(h,this);var u=o.listener,f=o.ha||o.src;o.fa&&or(o),o=u.call(f,h)}return o}function ar(o){return o=o[ir],o instanceof ks?o:null}var lr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ta(o){return typeof o=="function"?o:(o[lr]||(o[lr]=function(h){return o.handleEvent(h)}),o[lr])}function we(){ut.call(this),this.i=new ks(this),this.M=this,this.F=null}N(we,ut),we.prototype[Es]=!0,we.prototype.removeEventListener=function(o,h,u,f){Ia(this,o,h,u,f)};function Ae(o,h){var u,f=o.F;if(f)for(u=[];f;f=f.F)u.push(f);if(o=o.M,f=h.type||h,typeof h=="string")h=new ye(h,o);else if(h instanceof ye)h.target=h.target||o;else{var b=h;h=new ye(f,o),_(h,b)}if(b=!0,u)for(var A=u.length-1;0<=A;A--){var P=h.g=u[A];b=Ss(P,f,!0,h)&&b}if(P=h.g=o,b=Ss(P,f,!0,h)&&b,b=Ss(P,f,!1,h)&&b,u)for(A=0;A<u.length;A++)P=h.g=u[A],b=Ss(P,f,!1,h)&&b}we.prototype.N=function(){if(we.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var u=o.g[h],f=0;f<u.length;f++)As(u[f]);delete o.g[h],o.h--}}this.F=null},we.prototype.K=function(o,h,u,f){return this.i.add(String(o),h,!1,u,f)},we.prototype.L=function(o,h,u,f){return this.i.add(String(o),h,!0,u,f)};function Ss(o,h,u,f){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,A=0;A<h.length;++A){var P=h[A];if(P&&!P.da&&P.capture==u){var J=P.listener,ue=P.ha||P.src;P.fa&&nr(o.i,P),b=J.call(ue,f)!==!1&&b}}return b&&!f.defaultPrevented}function Ea(o,h,u){if(typeof o=="function")u&&(o=E(o,u));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(o,h||0)}function Aa(o){o.g=Ea(()=>{o.g=null,o.i&&(o.i=!1,Aa(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class Rd extends ut{constructor(h,u){super(),this.m=h,this.l=u,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Aa(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xn(o){ut.call(this),this.h=o,this.g={}}N(xn,ut);var ka=[];function Sa(o){ne(o.g,function(h,u){this.g.hasOwnProperty(u)&&or(h)},o),o.g={}}xn.prototype.N=function(){xn.aa.N.call(this),Sa(this)},xn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hr=l.JSON.stringify,Pd=l.JSON.parse,Cd=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function cr(){}cr.prototype.h=null;function Ra(o){return o.h||(o.h=o.i())}function Pa(){}var On={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ur(){ye.call(this,"d")}N(ur,ye);function dr(){ye.call(this,"c")}N(dr,ye);var Ot={},Ca=null;function Rs(){return Ca=Ca||new we}Ot.La="serverreachability";function Na(o){ye.call(this,Ot.La,o)}N(Na,ye);function Mn(o){const h=Rs();Ae(h,new Na(h))}Ot.STAT_EVENT="statevent";function Da(o,h){ye.call(this,Ot.STAT_EVENT,o),this.stat=h}N(Da,ye);function ke(o){const h=Rs();Ae(h,new Da(h,o))}Ot.Ma="timingevent";function Va(o,h){ye.call(this,Ot.Ma,o),this.size=h}N(Va,ye);function Ln(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},h)}function Bn(){this.g=!0}Bn.prototype.xa=function(){this.g=!1};function Nd(o,h,u,f,b,A){o.info(function(){if(o.g)if(A)for(var P="",J=A.split("&"),ue=0;ue<J.length;ue++){var K=J[ue].split("=");if(1<K.length){var _e=K[0];K=K[1];var ve=_e.split("_");P=2<=ve.length&&ve[1]=="type"?P+(_e+"="+K+"&"):P+(_e+"=redacted&")}}else P=null;else P=A;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+h+`
`+u+`
`+P})}function Dd(o,h,u,f,b,A,P){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+h+`
`+u+`
`+A+" "+P})}function Yt(o,h,u,f){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+xd(o,u)+(f?" "+f:"")})}function Vd(o,h){o.info(function(){return"TIMEOUT: "+h})}Bn.prototype.info=function(){};function xd(o,h){if(!o.g)return h;if(!h)return null;try{var u=JSON.parse(h);if(u){for(o=0;o<u.length;o++)if(Array.isArray(u[o])){var f=u[o];if(!(2>f.length)){var b=f[1];if(Array.isArray(b)&&!(1>b.length)){var A=b[0];if(A!="noop"&&A!="stop"&&A!="close")for(var P=1;P<b.length;P++)b[P]=""}}}}return hr(u)}catch{return h}}var Ps={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fr;function Cs(){}N(Cs,cr),Cs.prototype.g=function(){return new XMLHttpRequest},Cs.prototype.i=function(){return{}},fr=new Cs;function dt(o,h,u,f){this.j=o,this.i=h,this.l=u,this.R=f||1,this.U=new xn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oa}function Oa(){this.i=null,this.g="",this.h=!1}var Ma={},mr={};function pr(o,h,u){o.L=1,o.v=xs(Xe(h)),o.m=u,o.P=!0,La(o,null)}function La(o,h){o.F=Date.now(),Ns(o),o.A=Xe(o.v);var u=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Ja(u.i,"t",f),o.C=0,u=o.j.J,o.h=new Oa,o.g=pl(o.j,u?h:null,!o.m),0<o.O&&(o.M=new Rd(E(o.Y,o,o.g),o.O)),h=o.U,u=o.g,f=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(ka[0]=b.toString()),b=ka);for(var A=0;A<b.length;A++){var P=va(u,b[A],f||h.handleEvent,!1,h.h||h);if(!P)break;h.g[P.key]=P}h=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),Mn(),Nd(o.i,o.u,o.A,o.l,o.R,o.m)}dt.prototype.ca=function(o){o=o.target;const h=this.M;h&&Ze(o)==3?h.j():this.Y(o)},dt.prototype.Y=function(o){try{if(o==this.g)e:{const ve=Ze(this.g);var h=this.g.Ba();const Zt=this.g.Z();if(!(3>ve)&&(ve!=3||this.g&&(this.h.h||this.g.oa()||il(this.g)))){this.J||ve!=4||h==7||(h==8||0>=Zt?Mn(3):Mn(2)),gr(this);var u=this.g.Z();this.X=u;t:if(Ba(this)){var f=il(this.g);o="";var b=f.length,A=Ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),Un(this);var P="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,o+=this.h.i.decode(f[h],{stream:!(A&&h==b-1)});f.length=0,this.h.g+=o,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=u==200,Dd(this.i,this.u,this.A,this.l,this.R,ve,u),this.o){if(this.T&&!this.K){t:{if(this.g){var J,ue=this.g;if((J=ue.g?ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(J)){var K=J;break t}}K=null}if(u=K)Yt(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yr(this,u);else{this.o=!1,this.s=3,ke(12),Mt(this),Un(this);break e}}if(this.P){u=!0;let Oe;for(;!this.J&&this.C<P.length;)if(Oe=Od(this,P),Oe==mr){ve==4&&(this.s=4,ke(14),u=!1),Yt(this.i,this.l,null,"[Incomplete Response]");break}else if(Oe==Ma){this.s=4,ke(15),Yt(this.i,this.l,P,"[Invalid Chunk]"),u=!1;break}else Yt(this.i,this.l,Oe,null),yr(this,Oe);if(Ba(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ve!=4||P.length!=0||this.h.h||(this.s=1,ke(16),u=!1),this.o=this.o&&u,!u)Yt(this.i,this.l,P,"[Invalid Chunked Response]"),Mt(this),Un(this);else if(0<P.length&&!this.W){this.W=!0;var _e=this.j;_e.g==this&&_e.ba&&!_e.M&&(_e.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),Tr(_e),_e.M=!0,ke(11))}}else Yt(this.i,this.l,P,null),yr(this,P);ve==4&&Mt(this),this.o&&!this.J&&(ve==4?ul(this.j,this):(this.o=!1,Ns(this)))}else Xd(this.g),u==400&&0<P.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Mt(this),Un(this)}}}catch{}finally{}};function Ba(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Od(o,h){var u=o.C,f=h.indexOf(`
`,u);return f==-1?mr:(u=Number(h.substring(u,f)),isNaN(u)?Ma:(f+=1,f+u>h.length?mr:(h=h.slice(f,f+u),o.C=f+u,h)))}dt.prototype.cancel=function(){this.J=!0,Mt(this)};function Ns(o){o.S=Date.now()+o.I,Ua(o,o.I)}function Ua(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ln(E(o.ba,o),h)}function gr(o){o.B&&(l.clearTimeout(o.B),o.B=null)}dt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Vd(this.i,this.A),this.L!=2&&(Mn(),ke(17)),Mt(this),this.s=2,Un(this)):Ua(this,this.S-o)};function Un(o){o.j.G==0||o.J||ul(o.j,o)}function Mt(o){gr(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,Sa(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function yr(o,h){try{var u=o.j;if(u.G!=0&&(u.g==o||wr(u.h,o))){if(!o.K&&wr(u.h,o)&&u.G==3){try{var f=u.Da.g.parse(h)}catch{f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<o.F)Fs(u),Bs(u);else break e;br(u),ke(18)}}else u.za=b[1],0<u.za-u.T&&37500>b[2]&&u.F&&u.v==0&&!u.C&&(u.C=Ln(E(u.Za,u),6e3));if(1>=ja(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Bt(u,11)}else if((o.K||u.g==o)&&Fs(u),!G(h))for(b=u.Da.g.parse(h),h=0;h<b.length;h++){let K=b[h];if(u.T=K[0],K=K[1],u.G==2)if(K[0]=="c"){u.K=K[1],u.ia=K[2];const _e=K[3];_e!=null&&(u.la=_e,u.j.info("VER="+u.la));const ve=K[4];ve!=null&&(u.Aa=ve,u.j.info("SVER="+u.Aa));const Zt=K[5];Zt!=null&&typeof Zt=="number"&&0<Zt&&(f=1.5*Zt,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Oe=o.g;if(Oe){const js=Oe.g?Oe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(js){var A=f.h;A.g||js.indexOf("spdy")==-1&&js.indexOf("quic")==-1&&js.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(_r(A,A.h),A.h=null))}if(f.D){const Er=Oe.g?Oe.g.getResponseHeader("X-HTTP-Session-Id"):null;Er&&(f.ya=Er,X(f.I,f.D,Er))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-o.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var P=o;if(f.qa=ml(f,f.J?f.ia:null,f.W),P.K){$a(f.h,P);var J=P,ue=f.L;ue&&(J.I=ue),J.B&&(gr(J),Ns(J)),f.g=P}else hl(f);0<u.i.length&&Us(u)}else K[0]!="stop"&&K[0]!="close"||Bt(u,7);else u.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?Bt(u,7):Ir(u):K[0]!="noop"&&u.l&&u.l.ta(K),u.v=0)}}Mn(4)}catch{}}var Md=class{constructor(o,h){this.g=o,this.map=h}};function Fa(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ja(o){return o.h?1:o.g?o.g.size:0}function wr(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function _r(o,h){o.g?o.g.add(h):o.h=h}function $a(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Fa.prototype.cancel=function(){if(this.i=Wa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Wa(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const u of o.g.values())h=h.concat(u.D);return h}return x(o.i)}function Ld(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var h=[],u=o.length,f=0;f<u;f++)h.push(o[f]);return h}h=[],u=0;for(f in o)h[u++]=o[f];return h}function Bd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var h=[];o=o.length;for(var u=0;u<o;u++)h.push(u);return h}h=[],u=0;for(const f in o)h[u++]=f;return h}}}function za(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var u=Bd(o),f=Ld(o),b=f.length,A=0;A<b;A++)h.call(void 0,f[A],u&&u[A],o)}var Ha=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ud(o,h){if(o){o=o.split("&");for(var u=0;u<o.length;u++){var f=o[u].indexOf("="),b=null;if(0<=f){var A=o[u].substring(0,f);b=o[u].substring(f+1)}else A=o[u];h(A,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Lt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Lt){this.h=o.h,Ds(this,o.j),this.o=o.o,this.g=o.g,Vs(this,o.s),this.l=o.l;var h=o.i,u=new jn;u.i=h.i,h.g&&(u.g=new Map(h.g),u.h=h.h),Ga(this,u),this.m=o.m}else o&&(h=String(o).match(Ha))?(this.h=!1,Ds(this,h[1]||"",!0),this.o=Fn(h[2]||""),this.g=Fn(h[3]||"",!0),Vs(this,h[4]),this.l=Fn(h[5]||"",!0),Ga(this,h[6]||"",!0),this.m=Fn(h[7]||"")):(this.h=!1,this.i=new jn(null,this.h))}Lt.prototype.toString=function(){var o=[],h=this.j;h&&o.push(qn(h,Ka,!0),":");var u=this.g;return(u||h=="file")&&(o.push("//"),(h=this.o)&&o.push(qn(h,Ka,!0),"@"),o.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&o.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&o.push("/"),o.push(qn(u,u.charAt(0)=="/"?jd:qd,!0))),(u=this.i.toString())&&o.push("?",u),(u=this.m)&&o.push("#",qn(u,Wd)),o.join("")};function Xe(o){return new Lt(o)}function Ds(o,h,u){o.j=u?Fn(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function Vs(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function Ga(o,h,u){h instanceof jn?(o.i=h,zd(o.i,o.h)):(u||(h=qn(h,$d)),o.i=new jn(h,o.h))}function X(o,h,u){o.i.set(h,u)}function xs(o){return X(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Fn(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function qn(o,h,u){return typeof o=="string"?(o=encodeURI(o).replace(h,Fd),u&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Fd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ka=/[#\/\?@]/g,qd=/[#\?:]/g,jd=/[#\?]/g,$d=/[#\?@]/g,Wd=/#/g;function jn(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function ft(o){o.g||(o.g=new Map,o.h=0,o.i&&Ud(o.i,function(h,u){o.add(decodeURIComponent(h.replace(/\+/g," ")),u)}))}s=jn.prototype,s.add=function(o,h){ft(this),this.i=null,o=Jt(this,o);var u=this.g.get(o);return u||this.g.set(o,u=[]),u.push(h),this.h+=1,this};function Qa(o,h){ft(o),h=Jt(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function Ya(o,h){return ft(o),h=Jt(o,h),o.g.has(h)}s.forEach=function(o,h){ft(this),this.g.forEach(function(u,f){u.forEach(function(b){o.call(h,b,f,this)},this)},this)},s.na=function(){ft(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),u=[];for(let f=0;f<h.length;f++){const b=o[f];for(let A=0;A<b.length;A++)u.push(h[f])}return u},s.V=function(o){ft(this);let h=[];if(typeof o=="string")Ya(this,o)&&(h=h.concat(this.g.get(Jt(this,o))));else{o=Array.from(this.g.values());for(let u=0;u<o.length;u++)h=h.concat(o[u])}return h},s.set=function(o,h){return ft(this),this.i=null,o=Jt(this,o),Ya(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},s.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function Ja(o,h,u){Qa(o,h),0<u.length&&(o.i=null,o.g.set(Jt(o,h),x(u)),o.h+=u.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var u=0;u<h.length;u++){var f=h[u];const A=encodeURIComponent(String(f)),P=this.V(f);for(f=0;f<P.length;f++){var b=A;P[f]!==""&&(b+="="+encodeURIComponent(String(P[f]))),o.push(b)}}return this.i=o.join("&")};function Jt(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function zd(o,h){h&&!o.j&&(ft(o),o.i=null,o.g.forEach(function(u,f){var b=f.toLowerCase();f!=b&&(Qa(this,f),Ja(this,b,u))},o)),o.j=h}function Hd(o,h){const u=new Bn;if(l.Image){const f=new Image;f.onload=S(mt,u,"TestLoadImage: loaded",!0,h,f),f.onerror=S(mt,u,"TestLoadImage: error",!1,h,f),f.onabort=S(mt,u,"TestLoadImage: abort",!1,h,f),f.ontimeout=S(mt,u,"TestLoadImage: timeout",!1,h,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else h(!1)}function Gd(o,h){const u=new Bn,f=new AbortController,b=setTimeout(()=>{f.abort(),mt(u,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:f.signal}).then(A=>{clearTimeout(b),A.ok?mt(u,"TestPingServer: ok",!0,h):mt(u,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),mt(u,"TestPingServer: error",!1,h)})}function mt(o,h,u,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(u)}catch{}}function Kd(){this.g=new Cd}function Qd(o,h,u){const f=u||"";try{za(o,function(b,A){let P=b;d(b)&&(P=hr(b)),h.push(f+A+"="+encodeURIComponent(P))})}catch(b){throw h.push(f+"type="+encodeURIComponent("_badmap")),b}}function Os(o){this.l=o.Ub||null,this.j=o.eb||!1}N(Os,cr),Os.prototype.g=function(){return new Ms(this.l,this.j)},Os.prototype.i=function(o){return function(){return o}}({});function Ms(o,h){we.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Ms,we),s=Ms.prototype,s.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,Wn(this)},s.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=0},s.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xa(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xa(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}s.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?$n(this):Wn(this),this.readyState==3&&Xa(this)}},s.Ra=function(o){this.g&&(this.response=this.responseText=o,$n(this))},s.Qa=function(o){this.g&&(this.response=o,$n(this))},s.ga=function(){this.g&&$n(this)};function $n(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Wn(o)}s.setRequestHeader=function(o,h){this.u.append(o,h)},s.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var u=h.next();!u.done;)u=u.value,o.push(u[0]+": "+u[1]),u=h.next();return o.join(`\r
`)};function Wn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ms.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Za(o){let h="";return ne(o,function(u,f){h+=f,h+=":",h+=u,h+=`\r
`}),h}function vr(o,h,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Za(u),typeof o=="string"?u!=null&&encodeURIComponent(String(u)):X(o,h,u))}function te(o){we.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(te,we);var Yd=/^https?$/i,Jd=["POST","PUT"];s=te.prototype,s.Ha=function(o){this.J=o},s.ea=function(o,h,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fr.g(),this.v=this.o?Ra(this.o):Ra(fr),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(A){el(this,A);return}if(o=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)u.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())u.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),b=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Jd,h,void 0))||f||b||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of u)this.g.setRequestHeader(A,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sl(this),this.u=!0,this.g.send(o),this.u=!1}catch(A){el(this,A)}};function el(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,tl(o),Ls(o)}function tl(o){o.A||(o.A=!0,Ae(o,"complete"),Ae(o,"error"))}s.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ae(this,"complete"),Ae(this,"abort"),Ls(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ls(this,!0)),te.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?nl(this):this.bb())},s.bb=function(){nl(this)};function nl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ze(o)!=4||o.Z()!=2)){if(o.u&&Ze(o)==4)Ea(o.Ea,0,o);else if(Ae(o,"readystatechange"),Ze(o)==4){o.h=!1;try{const P=o.Z();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var u;if(!(u=h)){var f;if(f=P===0){var b=String(o.D).match(Ha)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),f=!Yd.test(b?b.toLowerCase():"")}u=f}if(u)Ae(o,"complete"),Ae(o,"success");else{o.m=6;try{var A=2<Ze(o)?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.Z()+"]",tl(o)}}finally{Ls(o)}}}}function Ls(o,h){if(o.g){sl(o);const u=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||Ae(o,"ready");try{u.onreadystatechange=f}catch{}}}function sl(o){o.I&&(l.clearTimeout(o.I),o.I=null)}s.isActive=function(){return!!this.g};function Ze(o){return o.g?o.g.readyState:0}s.Z=function(){try{return 2<Ze(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),Pd(h)}};function il(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Xd(o){const h={};o=(o.g&&2<=Ze(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(G(o[f]))continue;var u=I(o[f]);const b=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=h[b]||[];h[b]=A,A.push(u)}v(h,function(f){return f.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(o,h,u){return u&&u.internalChannelParams&&u.internalChannelParams[o]||h}function rl(o){this.Aa=0,this.i=[],this.j=new Bn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zn("baseRetryDelayMs",5e3,o),this.cb=zn("retryDelaySeedMs",1e4,o),this.Wa=zn("forwardChannelMaxRetries",2,o),this.wa=zn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Fa(o&&o.concurrentRequestLimit),this.Da=new Kd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=rl.prototype,s.la=8,s.G=1,s.connect=function(o,h,u,f){ke(0),this.W=o,this.H=h||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=ml(this,null,this.W),Us(this)};function Ir(o){if(ol(o),o.G==3){var h=o.U++,u=Xe(o.I);if(X(u,"SID",o.K),X(u,"RID",h),X(u,"TYPE","terminate"),Hn(o,u),h=new dt(o,o.j,h),h.L=2,h.v=xs(Xe(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=h.v,u=!0),u||(h.g=pl(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ns(h)}fl(o)}function Bs(o){o.g&&(Tr(o),o.g.cancel(),o.g=null)}function ol(o){Bs(o),o.u&&(l.clearTimeout(o.u),o.u=null),Fs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Us(o){if(!qa(o.h)&&!o.s){o.s=!0;var h=o.Ga;Nn||_a(),Dn||(Nn(),Dn=!0),tr.add(h,o),o.B=0}}function Zd(o,h){return ja(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ln(E(o.Ga,o,h),dl(o,o.B)),o.B++,!0)}s.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new dt(this,this.j,o);let A=this.o;if(this.S&&(A?(A=p(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(b.H=A,A=null),this.P)e:{for(var h=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(h+=f,4096<h){h=u;break e}if(h===4096||u===this.i.length-1){h=u+1;break e}}h=1e3}else h=1e3;h=ll(this,b,h),u=Xe(this.I),X(u,"RID",o),X(u,"CVER",22),this.D&&X(u,"X-HTTP-Session-Id",this.D),Hn(this,u),A&&(this.O?h="headers="+encodeURIComponent(String(Za(A)))+"&"+h:this.m&&vr(u,this.m,A)),_r(this.h,b),this.Ua&&X(u,"TYPE","init"),this.P?(X(u,"$req",h),X(u,"SID","null"),b.T=!0,pr(b,u,null)):pr(b,u,h),this.G=2}}else this.G==3&&(o?al(this,o):this.i.length==0||qa(this.h)||al(this))};function al(o,h){var u;h?u=h.l:u=o.U++;const f=Xe(o.I);X(f,"SID",o.K),X(f,"RID",u),X(f,"AID",o.T),Hn(o,f),o.m&&o.o&&vr(f,o.m,o.o),u=new dt(o,o.j,u,o.B+1),o.m===null&&(u.H=o.o),h&&(o.i=h.D.concat(o.i)),h=ll(o,u,1e3),u.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),_r(o.h,u),pr(u,f,h)}function Hn(o,h){o.H&&ne(o.H,function(u,f){X(h,f,u)}),o.l&&za({},function(u,f){X(h,f,u)})}function ll(o,h,u){u=Math.min(o.i.length,u);var f=o.l?E(o.l.Na,o.l,o):null;e:{var b=o.i;let A=-1;for(;;){const P=["count="+u];A==-1?0<u?(A=b[0].g,P.push("ofs="+A)):A=0:P.push("ofs="+A);let J=!0;for(let ue=0;ue<u;ue++){let K=b[ue].g;const _e=b[ue].map;if(K-=A,0>K)A=Math.max(0,b[ue].g-100),J=!1;else try{Qd(_e,P,"req"+K+"_")}catch{f&&f(_e)}}if(J){f=P.join("&");break e}}}return o=o.i.splice(0,u),h.D=o,f}function hl(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;Nn||_a(),Dn||(Nn(),Dn=!0),tr.add(h,o),o.v=0}}function br(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ln(E(o.Fa,o),dl(o,o.v)),o.v++,!0)}s.Fa=function(){if(this.u=null,cl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ln(E(this.ab,this),o)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),Bs(this),cl(this))};function Tr(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function cl(o){o.g=new dt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=Xe(o.qa);X(h,"RID","rpc"),X(h,"SID",o.K),X(h,"AID",o.T),X(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&X(h,"TO",o.ja),X(h,"TYPE","xmlhttp"),Hn(o,h),o.m&&o.o&&vr(h,o.m,o.o),o.L&&(o.g.I=o.L);var u=o.g;o=o.ia,u.L=1,u.v=xs(Xe(h)),u.m=null,u.P=!0,La(u,o)}s.Za=function(){this.C!=null&&(this.C=null,Bs(this),br(this),ke(19))};function Fs(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function ul(o,h){var u=null;if(o.g==h){Fs(o),Tr(o),o.g=null;var f=2}else if(wr(o.h,h))u=h.D,$a(o.h,h),f=1;else return;if(o.G!=0){if(h.o)if(f==1){u=h.m?h.m.length:0,h=Date.now()-h.F;var b=o.B;f=Rs(),Ae(f,new Va(f,u)),Us(o)}else hl(o);else if(b=h.s,b==3||b==0&&0<h.X||!(f==1&&Zd(o,h)||f==2&&br(o)))switch(u&&0<u.length&&(h=o.h,h.i=h.i.concat(u)),b){case 1:Bt(o,5);break;case 4:Bt(o,10);break;case 3:Bt(o,6);break;default:Bt(o,2)}}}function dl(o,h){let u=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(u*=2),u*h}function Bt(o,h){if(o.j.info("Error code "+h),h==2){var u=E(o.fb,o),f=o.Xa;const b=!f;f=new Lt(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ds(f,"https"),xs(f),b?Hd(f.toString(),u):Gd(f.toString(),u)}else ke(2);o.G=0,o.l&&o.l.sa(h),fl(o),ol(o)}s.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function fl(o){if(o.G=0,o.ka=[],o.l){const h=Wa(o.h);(h.length!=0||o.i.length!=0)&&(C(o.ka,h),C(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function ml(o,h,u){var f=u instanceof Lt?Xe(u):new Lt(u);if(f.g!="")h&&(f.g=h+"."+f.g),Vs(f,f.s);else{var b=l.location;f=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var A=new Lt(null);f&&Ds(A,f),h&&(A.g=h),b&&Vs(A,b),u&&(A.l=u),f=A}return u=o.D,h=o.ya,u&&h&&X(f,u,h),X(f,"VER",o.la),Hn(o,f),f}function pl(o,h,u){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new te(new Os({eb:u})):new te(o.pa),h.Ha(o.J),h}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function gl(){}s=gl.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function qs(){}qs.prototype.g=function(o,h){return new Ne(o,h)};function Ne(o,h){we.call(this),this.g=new rl(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!G(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!G(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new Xt(this)}N(Ne,we),Ne.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ne.prototype.close=function(){Ir(this.g)},Ne.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var u={};u.__data__=o,o=u}else this.u&&(u={},u.__data__=hr(o),o=u);h.i.push(new Md(h.Ya++,o)),h.G==3&&Us(h)},Ne.prototype.N=function(){this.g.l=null,delete this.j,Ir(this.g),delete this.g,Ne.aa.N.call(this)};function yl(o){ur.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const u in h){o=u;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}N(yl,ur);function wl(){dr.call(this),this.status=1}N(wl,dr);function Xt(o){this.g=o}N(Xt,gl),Xt.prototype.ua=function(){Ae(this.g,"a")},Xt.prototype.ta=function(o){Ae(this.g,new yl(o))},Xt.prototype.sa=function(o){Ae(this.g,new wl)},Xt.prototype.ra=function(){Ae(this.g,"b")},qs.prototype.createWebChannel=qs.prototype.g,Ne.prototype.send=Ne.prototype.o,Ne.prototype.open=Ne.prototype.m,Ne.prototype.close=Ne.prototype.close,yc=function(){return new qs},gc=function(){return Rs()},pc=Ot,to={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ps.NO_ERROR=0,Ps.TIMEOUT=8,Ps.HTTP_ERROR=6,ti=Ps,xa.COMPLETE="complete",mc=xa,Pa.EventType=On,On.OPEN="a",On.CLOSE="b",On.ERROR="c",On.MESSAGE="d",we.prototype.listen=we.prototype.K,Qn=Pa,te.prototype.listenOnce=te.prototype.L,te.prototype.getLastError=te.prototype.Ka,te.prototype.getLastErrorCode=te.prototype.Ba,te.prototype.getStatus=te.prototype.Z,te.prototype.getResponseJson=te.prototype.Oa,te.prototype.getResponseText=te.prototype.oa,te.prototype.send=te.prototype.ea,te.prototype.setWithCredentials=te.prototype.Ha,fc=te}).apply(typeof $s<"u"?$s:typeof self<"u"?self:typeof window<"u"?window:{});const Ml="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Ao("@firebase/firestore");function nn(){return zt.logLevel}function V(s,...e){if(zt.logLevel<=j.DEBUG){const t=e.map(Ro);zt.debug(`Firestore (${Tn}): ${s}`,...t)}}function at(s,...e){if(zt.logLevel<=j.ERROR){const t=e.map(Ro);zt.error(`Firestore (${Tn}): ${s}`,...t)}}function pn(s,...e){if(zt.logLevel<=j.WARN){const t=e.map(Ro);zt.warn(`Firestore (${Tn}): ${s}`,...t)}}function Ro(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(s="Unexpected state"){const e=`FIRESTORE (${Tn}) INTERNAL ASSERTION FAILED: `+s;throw at(e),new Error(e)}function Q(s,e){s||L()}function F(s,e){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class up{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(be.UNAUTHENTICATED))}shutdown(){}}class dp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class fp{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let r=new Et;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Et,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Et)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Q(typeof n.accessToken=="string"),new wc(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new be(e)}}class mp{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=be.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class pp{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new mp(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yp{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Q(this.o===void 0);const n=r=>{r.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.R;return this.R=r.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>n(r))};const i=r=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string"),this.R=t.token,new gp(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=wp(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function W(s,e){return s<e?-1:s>e?1:0}function gn(s,e,t){return s.length===e.length&&s.every((n,i)=>t(n,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new le(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new le(0,0))}static max(){return new U(new le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t,n){t===void 0?t=0:t>e.length&&L(),n===void 0?n=e.length-t:n>e.length-t&&L(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return is.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof is?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const r=e.get(i),a=t.get(i);if(r<a)return-1;if(r>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Z extends is{construct(e,t,n){return new Z(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new O(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new Z(t)}static emptyPath(){return new Z([])}}const _p=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends is{construct(e,t,n){return new fe(e,t,n)}static isValidIdentifier(e){return _p.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new fe(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(n.length===0)throw new O(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new O(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new O(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(n+=l,i++):(r(),i++)}if(r(),a)throw new O(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(t)}static emptyPath(){return new fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(Z.fromString(e))}static fromName(e){return new M(Z.fromString(e).popFirst(5))}static empty(){return new M(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new Z(e.slice()))}}function vp(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,i=U.fromTimestamp(n===1e9?new le(t+1,0):new le(t,n));return new St(i,M.empty(),e)}function Ip(s){return new St(s.readTime,s.key,-1)}class St{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new St(U.min(),M.empty(),-1)}static max(){return new St(U.max(),M.empty(),-1)}}function bp(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(s.documentKey,e.documentKey),t!==0?t:W(s.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ep{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(s){if(s.code!==R.FAILED_PRECONDITION||s.message!==Tp)throw s;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((n,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(n,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,n)=>{t(e)})}static reject(e){return new k((t,n)=>{n(e)})}static waitFor(e){return new k((t,n)=>{let i=0,r=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++r,a&&r===i&&t()},c=>n(c))}),a=!0,r===i&&t()})}static or(e){let t=k.resolve(!1);for(const n of e)t=t.next(i=>i?k.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,r)=>{n.push(t.call(this,i,r))}),this.waitFor(n)}static mapArray(e,t){return new k((n,i)=>{const r=e.length,a=new Array(r);let l=0;for(let c=0;c<r;c++){const d=c;t(e[d]).next(m=>{a[d]=m,++l,l===r&&n(a)},m=>i(m))}})}static doWhile(e,t){return new k((n,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):n()};r()})}}function Ap(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function An(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vi.oe=-1;function xi(s){return s==null}function pi(s){return s===0&&1/s==-1/0}function kp(s){return typeof s=="number"&&Number.isInteger(s)&&!pi(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=Ll(e)),e=Rp(s.get(t),e);return Ll(e)}function Rp(s,e){let t=e;const n=s.length;for(let i=0;i<n;i++){const r=s.charAt(i);switch(r){case"\0":t+="";break;case"":t+="";break;default:t+=r}}return t}function Ll(s){return s+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function Vt(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function vc(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.comparator=e,this.root=t||de.EMPTY}insert(e,t){return new ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,de.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,de.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ws(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ws(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ws(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ws(this.root,e,this.comparator,!0)}}class Ws{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class de{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=n??de.RED,this.left=i??de.EMPTY,this.right=r??de.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new de(e??this.key,t??this.value,n??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return de.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1;de.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(e,t,n,i,r){return this}insert(e,t,n){return new de(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ul(this.data.getIterator())}getIteratorFrom(e){return new Ul(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=n.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class Ul{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.fields=e,e.sort(fe.comparator)}static empty(){return new De([])}unionWith(e){let t=new he(fe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new De(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return gn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Ic("Invalid base64 string: "+r):r}}(e);return new pe(t)}static fromUint8Array(e){const t=function(i){let r="";for(let a=0;a<i.length;++a)r+=String.fromCharCode(i[a]);return r}(e);return new pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pe.EMPTY_BYTE_STRING=new pe("");const Pp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rt(s){if(Q(!!s),typeof s=="string"){let e=0;const t=Pp.exec(s);if(Q(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:se(s.seconds),nanos:se(s.nanos)}}function se(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Pt(s){return typeof s=="string"?pe.fromBase64String(s):pe.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(s){var e,t;return((t=(((e=s?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Oi(s){const e=s.mapValue.fields.__previous_value__;return Po(e)?Oi(e):e}function rs(s){const e=Rt(s.mapValue.fields.__local_write_time__.timestampValue);return new le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t,n,i,r,a,l,c,d){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d}}class os{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new os("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof os&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs={mapValue:{}};function Ct(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Po(s)?4:Dp(s)?9007199254740991:Np(s)?10:11:L()}function Ke(s,e){if(s===e)return!0;const t=Ct(s);if(t!==Ct(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return rs(s).isEqual(rs(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const a=Rt(i.timestampValue),l=Rt(r.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(s,e);case 5:return s.stringValue===e.stringValue;case 6:return function(i,r){return Pt(i.bytesValue).isEqual(Pt(r.bytesValue))}(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return function(i,r){return se(i.geoPointValue.latitude)===se(r.geoPointValue.latitude)&&se(i.geoPointValue.longitude)===se(r.geoPointValue.longitude)}(s,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return se(i.integerValue)===se(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const a=se(i.doubleValue),l=se(r.doubleValue);return a===l?pi(a)===pi(l):isNaN(a)&&isNaN(l)}return!1}(s,e);case 9:return gn(s.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:case 11:return function(i,r){const a=i.mapValue.fields||{},l=r.mapValue.fields||{};if(Bl(a)!==Bl(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Ke(a[c],l[c])))return!1;return!0}(s,e);default:return L()}}function as(s,e){return(s.values||[]).find(t=>Ke(t,e))!==void 0}function yn(s,e){if(s===e)return 0;const t=Ct(s),n=Ct(e);if(t!==n)return W(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(s.booleanValue,e.booleanValue);case 2:return function(r,a){const l=se(r.integerValue||r.doubleValue),c=se(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(s,e);case 3:return Fl(s.timestampValue,e.timestampValue);case 4:return Fl(rs(s),rs(e));case 5:return W(s.stringValue,e.stringValue);case 6:return function(r,a){const l=Pt(r),c=Pt(a);return l.compareTo(c)}(s.bytesValue,e.bytesValue);case 7:return function(r,a){const l=r.split("/"),c=a.split("/");for(let d=0;d<l.length&&d<c.length;d++){const m=W(l[d],c[d]);if(m!==0)return m}return W(l.length,c.length)}(s.referenceValue,e.referenceValue);case 8:return function(r,a){const l=W(se(r.latitude),se(a.latitude));return l!==0?l:W(se(r.longitude),se(a.longitude))}(s.geoPointValue,e.geoPointValue);case 9:return ql(s.arrayValue,e.arrayValue);case 10:return function(r,a){var l,c,d,m;const w=r.fields||{},E=a.fields||{},S=(l=w.value)===null||l===void 0?void 0:l.arrayValue,N=(c=E.value)===null||c===void 0?void 0:c.arrayValue,x=W(((d=S?.values)===null||d===void 0?void 0:d.length)||0,((m=N?.values)===null||m===void 0?void 0:m.length)||0);return x!==0?x:ql(S,N)}(s.mapValue,e.mapValue);case 11:return function(r,a){if(r===zs.mapValue&&a===zs.mapValue)return 0;if(r===zs.mapValue)return 1;if(a===zs.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),d=a.fields||{},m=Object.keys(d);c.sort(),m.sort();for(let w=0;w<c.length&&w<m.length;++w){const E=W(c[w],m[w]);if(E!==0)return E;const S=yn(l[c[w]],d[m[w]]);if(S!==0)return S}return W(c.length,m.length)}(s.mapValue,e.mapValue);default:throw L()}}function Fl(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return W(s,e);const t=Rt(s),n=Rt(e),i=W(t.seconds,n.seconds);return i!==0?i:W(t.nanos,n.nanos)}function ql(s,e){const t=s.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const r=yn(t[i],n[i]);if(r)return r}return W(t.length,n.length)}function wn(s){return no(s)}function no(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?function(t){const n=Rt(t);return`time(${n.seconds},${n.nanos})`}(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?function(t){return Pt(t).toBase64()}(s.bytesValue):"referenceValue"in s?function(t){return M.fromName(t).toString()}(s.referenceValue):"geoPointValue"in s?function(t){return`geo(${t.latitude},${t.longitude})`}(s.geoPointValue):"arrayValue"in s?function(t){let n="[",i=!0;for(const r of t.values||[])i?i=!1:n+=",",n+=no(r);return n+"]"}(s.arrayValue):"mapValue"in s?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const a of n)r?r=!1:i+=",",i+=`${a}:${no(t.fields[a])}`;return i+"}"}(s.mapValue):L()}function ni(s){switch(Ct(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oi(s);return e?16+ni(e):16;case 5:return 2*s.stringValue.length;case 6:return Pt(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,r)=>i+ni(r),0)}(s.arrayValue);case 10:case 11:return function(n){let i=0;return Vt(n.fields,(r,a)=>{i+=r.length+ni(a)}),i}(s.mapValue);default:throw L()}}function so(s){return!!s&&"integerValue"in s}function Co(s){return!!s&&"arrayValue"in s}function jl(s){return!!s&&"nullValue"in s}function $l(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function si(s){return!!s&&"mapValue"in s}function Np(s){var e,t;return((t=(((e=s?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Xn(s){if(s.geoPointValue)return{geoPointValue:Object.assign({},s.geoPointValue)};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:Object.assign({},s.timestampValue)};if(s.mapValue){const e={mapValue:{fields:{}}};return Vt(s.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Xn(n)),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xn(s.arrayValue.values[t]);return e}return Object.assign({},s)}function Dp(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.value=e}static empty(){return new Ce({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!si(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xn(t)}setAll(e){let t=fe.emptyPath(),n={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,n,i),n={},i=[],t=l.popLast()}a?n[l.lastSegment()]=Xn(a):i.push(l.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());si(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];si(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Vt(t,(i,r)=>e[i]=r);for(const i of n)delete e[i]}clone(){return new Ce(Xn(this.value))}}function bc(s){const e=[];return Vt(s.fields,(t,n)=>{const i=new fe([t]);if(si(n)){const r=bc(n.mapValue).fields;if(r.length===0)e.push(i);else for(const a of r)e.push(i.child(a))}else e.push(i)}),new De(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,n,i,r,a,l){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Te(e,0,U.min(),U.min(),U.min(),Ce.empty(),0)}static newFoundDocument(e,t,n,i){return new Te(e,1,t,U.min(),n,i,0)}static newNoDocument(e,t){return new Te(e,2,t,U.min(),U.min(),Ce.empty(),0)}static newUnknownDocument(e,t){return new Te(e,3,t,U.min(),U.min(),Ce.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ce.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t){this.position=e,this.inclusive=t}}function Wl(s,e,t){let n=0;for(let i=0;i<s.position.length;i++){const r=e[i],a=s.position[i];if(r.field.isKeyField()?n=M.comparator(M.fromName(a.referenceValue),t.key):n=yn(a,t.data.field(r.field)),r.dir==="desc"&&(n*=-1),n!==0)break}return n}function zl(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!Ke(s.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Vp(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{}class re extends Tc{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Op(e,t,n):t==="array-contains"?new Bp(e,n):t==="in"?new Up(e,n):t==="not-in"?new Fp(e,n):t==="array-contains-any"?new qp(e,n):new re(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Mp(e,n):new Lp(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(yn(t,this.value)):t!==null&&Ct(this.value)===Ct(t)&&this.matchesComparison(yn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qe extends Tc{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Qe(e,t)}matches(e){return Ec(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ec(s){return s.op==="and"}function Ac(s){return xp(s)&&Ec(s)}function xp(s){for(const e of s.filters)if(e instanceof Qe)return!1;return!0}function io(s){if(s instanceof re)return s.field.canonicalString()+s.op.toString()+wn(s.value);if(Ac(s))return s.filters.map(e=>io(e)).join(",");{const e=s.filters.map(t=>io(t)).join(",");return`${s.op}(${e})`}}function kc(s,e){return s instanceof re?function(n,i){return i instanceof re&&n.op===i.op&&n.field.isEqual(i.field)&&Ke(n.value,i.value)}(s,e):s instanceof Qe?function(n,i){return i instanceof Qe&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((r,a,l)=>r&&kc(a,i.filters[l]),!0):!1}(s,e):void L()}function Sc(s){return s instanceof re?function(t){return`${t.field.canonicalString()} ${t.op} ${wn(t.value)}`}(s):s instanceof Qe?function(t){return t.op.toString()+" {"+t.getFilters().map(Sc).join(" ,")+"}"}(s):"Filter"}class Op extends re{constructor(e,t,n){super(e,t,n),this.key=M.fromName(n.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Mp extends re{constructor(e,t){super(e,"in",t),this.keys=Rc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Lp extends re{constructor(e,t){super(e,"not-in",t),this.keys=Rc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Rc(s,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>M.fromName(n.referenceValue))}class Bp extends re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Co(t)&&as(t.arrayValue,this.value)}}class Up extends re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&as(this.value.arrayValue,t)}}class Fp extends re{constructor(e,t){super(e,"not-in",t)}matches(e){if(as(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!as(this.value.arrayValue,t)}}class qp extends re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Co(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>as(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t=null,n=[],i=[],r=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=a,this.endAt=l,this.ue=null}}function Hl(s,e=null,t=[],n=[],i=null,r=null,a=null){return new jp(s,e,t,n,i,r,a)}function No(s){const e=F(s);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>io(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(r){return r.field.canonicalString()+r.dir}(n)).join(","),xi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>wn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>wn(n)).join(",")),e.ue=t}return e.ue}function Do(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!Vp(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!kc(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!zl(s.startAt,e.startAt)&&zl(s.endAt,e.endAt)}function ro(s){return M.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t=null,n=[],i=[],r=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function $p(s,e,t,n,i,r,a,l){return new Mi(s,e,t,n,i,r,a,l)}function Pc(s){return new Mi(s)}function Gl(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function Wp(s){return s.collectionGroup!==null}function Zn(s){const e=F(s);if(e.ce===null){e.ce=[];const t=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),t.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new he(fe.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new yi(r,n))}),t.has(fe.keyField().canonicalString())||e.ce.push(new yi(fe.keyField(),n))}return e.ce}function ze(s){const e=F(s);return e.le||(e.le=zp(e,Zn(s))),e.le}function zp(s,e){if(s.limitType==="F")return Hl(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new yi(i.field,r)});const t=s.endAt?new gi(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new gi(s.startAt.position,s.startAt.inclusive):null;return Hl(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function oo(s,e,t){return new Mi(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function Li(s,e){return Do(ze(s),ze(e))&&s.limitType===e.limitType}function Cc(s){return`${No(ze(s))}|lt:${s.limitType}`}function sn(s){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>Sc(i)).join(", ")}]`),xi(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>wn(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>wn(i)).join(",")),`Target(${n})`}(ze(s))}; limitType=${s.limitType})`}function Bi(s,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):M.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(s,e)&&function(n,i){for(const r of Zn(n))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(s,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(s,e)&&function(n,i){return!(n.startAt&&!function(a,l,c){const d=Wl(a,l,c);return a.inclusive?d<=0:d<0}(n.startAt,Zn(n),i)||n.endAt&&!function(a,l,c){const d=Wl(a,l,c);return a.inclusive?d>=0:d>0}(n.endAt,Zn(n),i))}(s,e)}function Hp(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function Nc(s){return(e,t)=>{let n=!1;for(const i of Zn(s)){const r=Gp(i,e,t);if(r!==0)return r;n=n||i.field.isKeyField()}return 0}}function Gp(s,e,t){const n=s.field.isKeyField()?M.comparator(e.key,t.key):function(r,a,l){const c=a.data.field(r),d=l.data.field(r);return c!==null&&d!==null?yn(c,d):L()}(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,r]of n)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Vt(this.inner,(t,n)=>{for(const[i,r]of n)e(i,r)})}isEmpty(){return vc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new ee(M.comparator);function lt(){return Kp}const Dc=new ee(M.comparator);function Yn(...s){let e=Dc;for(const t of s)e=e.insert(t.key,t);return e}function Vc(s){let e=Dc;return s.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Ft(){return es()}function xc(){return es()}function es(){return new Kt(s=>s.toString(),(s,e)=>s.isEqual(e))}const Qp=new ee(M.comparator),Yp=new he(M.comparator);function $(...s){let e=Yp;for(const t of s)e=e.add(t);return e}const Jp=new he(W);function Xp(){return Jp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pi(e)?"-0":e}}function Oc(s){return{integerValue:""+s}}function Zp(s,e){return kp(e)?Oc(e):Vo(s,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this._=void 0}}function eg(s,e,t){return s instanceof wi?function(i,r){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Po(r)&&(r=Oi(r)),r&&(a.fields.__previous_value__=r),{mapValue:a}}(t,e):s instanceof ls?Lc(s,e):s instanceof hs?Bc(s,e):function(i,r){const a=Mc(i,r),l=Kl(a)+Kl(i.Pe);return so(a)&&so(i.Pe)?Oc(l):Vo(i.serializer,l)}(s,e)}function tg(s,e,t){return s instanceof ls?Lc(s,e):s instanceof hs?Bc(s,e):t}function Mc(s,e){return s instanceof _i?function(n){return so(n)||function(r){return!!r&&"doubleValue"in r}(n)}(e)?e:{integerValue:0}:null}class wi extends Ui{}class ls extends Ui{constructor(e){super(),this.elements=e}}function Lc(s,e){const t=Uc(e);for(const n of s.elements)t.some(i=>Ke(i,n))||t.push(n);return{arrayValue:{values:t}}}class hs extends Ui{constructor(e){super(),this.elements=e}}function Bc(s,e){let t=Uc(e);for(const n of s.elements)t=t.filter(i=>!Ke(i,n));return{arrayValue:{values:t}}}class _i extends Ui{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Kl(s){return se(s.integerValue||s.doubleValue)}function Uc(s){return Co(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function ng(s,e){return s.field.isEqual(e.field)&&function(n,i){return n instanceof ls&&i instanceof ls||n instanceof hs&&i instanceof hs?gn(n.elements,i.elements,Ke):n instanceof _i&&i instanceof _i?Ke(n.Pe,i.Pe):n instanceof wi&&i instanceof wi}(s.transform,e.transform)}class sg{constructor(e,t){this.version=e,this.transformResults=t}}class Be{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Be}static exists(e){return new Be(void 0,e)}static updateTime(e){return new Be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ii(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class Fi{}function Fc(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new xo(s.key,Be.none()):new ps(s.key,s.data,Be.none());{const t=s.data,n=Ce.empty();let i=new he(fe.comparator);for(let r of e.fields)if(!i.has(r)){let a=t.field(r);a===null&&r.length>1&&(r=r.popLast(),a=t.field(r)),a===null?n.delete(r):n.set(r,a),i=i.add(r)}return new xt(s.key,n,new De(i.toArray()),Be.none())}}function ig(s,e,t){s instanceof ps?function(i,r,a){const l=i.value.clone(),c=Yl(i.fieldTransforms,r,a.transformResults);l.setAll(c),r.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(s,e,t):s instanceof xt?function(i,r,a){if(!ii(i.precondition,r))return void r.convertToUnknownDocument(a.version);const l=Yl(i.fieldTransforms,r,a.transformResults),c=r.data;c.setAll(qc(i)),c.setAll(l),r.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(s,e,t):function(i,r,a){r.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ts(s,e,t,n){return s instanceof ps?function(r,a,l,c){if(!ii(r.precondition,a))return l;const d=r.value.clone(),m=Jl(r.fieldTransforms,c,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(s,e,t,n):s instanceof xt?function(r,a,l,c){if(!ii(r.precondition,a))return l;const d=Jl(r.fieldTransforms,c,a),m=a.data;return m.setAll(qc(r)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(w=>w.field))}(s,e,t,n):function(r,a,l){return ii(r.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(s,e,t)}function rg(s,e){let t=null;for(const n of s.fieldTransforms){const i=e.data.field(n.field),r=Mc(n.transform,i||null);r!=null&&(t===null&&(t=Ce.empty()),t.set(n.field,r))}return t||null}function Ql(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&gn(n,i,(r,a)=>ng(r,a))}(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class ps extends Fi{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xt extends Fi{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function qc(s){const e=new Map;return s.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}}),e}function Yl(s,e,t){const n=new Map;Q(s.length===t.length);for(let i=0;i<t.length;i++){const r=s[i],a=r.transform,l=e.data.field(r.field);n.set(r.field,tg(a,l,t[i]))}return n}function Jl(s,e,t){const n=new Map;for(const i of s){const r=i.transform,a=t.data.field(i.field);n.set(i.field,eg(r,a,e))}return n}class xo extends Fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class og extends Fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&ig(r,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ts(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ts(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=xc();return this.mutations.forEach(i=>{const r=e.get(i.key),a=r.overlayedDocument;let l=this.applyToLocalView(a,r.mutatedFields);l=t.has(i.key)?null:l;const c=Fc(a,l);c!==null&&n.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),$())}isEqual(e){return this.batchId===e.batchId&&gn(this.mutations,e.mutations,(t,n)=>Ql(t,n))&&gn(this.baseMutations,e.baseMutations,(t,n)=>Ql(t,n))}}class Oo{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){Q(e.mutations.length===n.length);let i=function(){return Qp}();const r=e.mutations;for(let a=0;a<r.length;a++)i=i.insert(r[a].key,n[a].version);return new Oo(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie,H;function cg(s){switch(s){default:return L();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function jc(s){if(s===void 0)return at("GRPC error has no .code"),R.UNKNOWN;switch(s){case ie.OK:return R.OK;case ie.CANCELLED:return R.CANCELLED;case ie.UNKNOWN:return R.UNKNOWN;case ie.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ie.INTERNAL:return R.INTERNAL;case ie.UNAVAILABLE:return R.UNAVAILABLE;case ie.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ie.NOT_FOUND:return R.NOT_FOUND;case ie.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ie.ABORTED:return R.ABORTED;case ie.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ie.DATA_LOSS:return R.DATA_LOSS;default:return L()}}(H=ie||(ie={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=new jt([4294967295,4294967295],0);function Xl(s){const e=ug().encode(s),t=new dc;return t.update(e),new Uint8Array(t.digest())}function Zl(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new jt([t,n],0),new jt([i,r],0)]}class Mo{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Jn(`Invalid padding: ${t}`);if(n<0)throw new Jn(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Jn(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Jn(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=jt.fromNumber(this.Te)}Ee(e,t,n){let i=e.add(t.multiply(jt.fromNumber(n)));return i.compare(dg)===1&&(i=new jt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Xl(e),[n,i]=Zl(t);for(let r=0;r<this.hashCount;r++){const a=this.Ee(n,i,r);if(!this.de(a))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),a=new Mo(r,i,t);return n.forEach(l=>a.insert(l)),a}insert(e){if(this.Te===0)return;const t=Xl(e),[n,i]=Zl(t);for(let r=0;r<this.hashCount;r++){const a=this.Ee(n,i,r);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Jn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,gs.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new qi(U.min(),i,new ee(W),lt(),$())}}class gs{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new gs(n,t,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class $c{constructor(e,t){this.targetId=e,this.me=t}}class Wc{constructor(e,t,n=pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class eh{constructor(){this.fe=0,this.ge=th(),this.pe=pe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=$(),t=$(),n=$();return this.ge.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:L()}}),new gs(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=th()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class fg{constructor(e){this.Le=e,this.Be=new Map,this.ke=lt(),this.qe=Hs(),this.Qe=Hs(),this.Ke=new ee(W)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.je(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.De(e.resumeToken));break;default:L()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,n=e.me.count,i=this.Ye(t);if(i){const r=i.target;if(ro(r))if(n===0){const a=new M(r.path);this.We(t,a,Te.newNoDocument(a,U.min()))}else Q(n===1);else{const a=this.Ze(t);if(a!==n){const l=this.Xe(e),c=l?this.et(l,e,a):1;if(c!==0){this.He(t);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:r=0}=t;let a,l;try{a=Pt(n).toUint8Array()}catch(c){if(c instanceof Ic)return pn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Mo(a,i,r)}catch(c){return pn(c instanceof Jn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,t,n){return t.me.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(r=>{const a=this.Le.nt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.We(t,r,null),i++)}),i}it(e){const t=new Map;this.Be.forEach((r,a)=>{const l=this.Ye(a);if(l){if(r.current&&ro(l.target)){const c=new M(l.target.path);this.st(c).has(a)||this.ot(a,c)||this.We(a,c,Te.newNoDocument(c,e))}r.be&&(t.set(a,r.ve()),r.Ce())}});let n=$();this.Qe.forEach((r,a)=>{let l=!0;a.forEachWhile(c=>{const d=this.Ye(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(r))}),this.ke.forEach((r,a)=>a.setReadTime(e));const i=new qi(e,t,this.Ke,this.ke,n);return this.ke=lt(),this.qe=Hs(),this.Qe=Hs(),this.Ke=new ee(W),i}Ue(e,t){if(!this.je(e))return;const n=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new eh,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new he(W),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new he(W),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new eh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Hs(){return new ee(M.comparator)}function th(){return new ee(M.comparator)}const mg={asc:"ASCENDING",desc:"DESCENDING"},pg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gg={and:"AND",or:"OR"};class yg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ao(s,e){return s.useProto3Json||xi(e)?e:{value:e}}function vi(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zc(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function wg(s,e){return vi(s,e.toTimestamp())}function He(s){return Q(!!s),U.fromTimestamp(function(t){const n=Rt(t);return new le(n.seconds,n.nanos)}(s))}function Lo(s,e){return lo(s,e).canonicalString()}function lo(s,e){const t=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(s).child("documents");return e===void 0?t:t.child(e)}function Hc(s){const e=Z.fromString(s);return Q(Jc(e)),e}function ho(s,e){return Lo(s.databaseId,e.path)}function Nr(s,e){const t=Hc(e);if(t.get(1)!==s.databaseId.projectId)throw new O(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new O(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new M(Kc(t))}function Gc(s,e){return Lo(s.databaseId,e)}function _g(s){const e=Hc(s);return e.length===4?Z.emptyPath():Kc(e)}function co(s){return new Z(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function Kc(s){return Q(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}function nh(s,e,t){return{name:ho(s,e),fields:t.value.mapValue.fields}}function vg(s,e){let t;if("targetChange"in e){e.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(d,m){return d.useProto3Json?(Q(m===void 0||typeof m=="string"),pe.fromBase64String(m||"")):(Q(m===void 0||m instanceof Buffer||m instanceof Uint8Array),pe.fromUint8Array(m||new Uint8Array))}(s,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const m=d.code===void 0?R.UNKNOWN:jc(d.code);return new O(m,d.message||"")}(a);t=new Wc(n,i,r,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=Nr(s,n.document.name),r=He(n.document.updateTime),a=n.document.createTime?He(n.document.createTime):U.min(),l=new Ce({mapValue:{fields:n.document.fields}}),c=Te.newFoundDocument(i,r,a,l),d=n.targetIds||[],m=n.removedTargetIds||[];t=new ri(d,m,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=Nr(s,n.document),r=n.readTime?He(n.readTime):U.min(),a=Te.newNoDocument(i,r),l=n.removedTargetIds||[];t=new ri([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=Nr(s,n.document),r=n.removedTargetIds||[];t=new ri([],r,i,null)}else{if(!("filter"in e))return L();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:r}=n,a=new hg(i,r),l=n.targetId;t=new $c(l,a)}}return t}function Ig(s,e){let t;if(e instanceof ps)t={update:nh(s,e.key,e.value)};else if(e instanceof xo)t={delete:ho(s,e.key)};else if(e instanceof xt)t={update:nh(s,e.key,e.data),updateMask:Cg(e.fieldMask)};else{if(!(e instanceof og))return L();t={verify:ho(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(r,a){const l=a.transform;if(l instanceof wi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ls)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof hs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _i)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw L()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:wg(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:L()}(s,e.precondition)),t}function bg(s,e){return s&&s.length>0?(Q(e!==void 0),s.map(t=>function(i,r){let a=i.updateTime?He(i.updateTime):He(r);return a.isEqual(U.min())&&(a=He(r)),new sg(a,i.transformResults||[])}(t,e))):[]}function Tg(s,e){return{documents:[Gc(s,e.path)]}}function Eg(s,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Gc(s,i);const r=function(d){if(d.length!==0)return Yc(Qe.create(d,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const a=function(d){if(d.length!==0)return d.map(m=>function(E){return{field:rn(E.field),direction:Sg(E.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ao(s,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:i}}function Ag(s){let e=_g(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){Q(n===1);const m=t.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let r=[];t.where&&(r=function(w){const E=Qc(w);return E instanceof Qe&&Ac(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(w){return w.map(E=>function(N){return new yi(on(N.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(E))}(t.orderBy));let l=null;t.limit&&(l=function(w){let E;return E=typeof w=="object"?w.value:w,xi(E)?null:E}(t.limit));let c=null;t.startAt&&(c=function(w){const E=!!w.before,S=w.values||[];return new gi(S,E)}(t.startAt));let d=null;return t.endAt&&(d=function(w){const E=!w.before,S=w.values||[];return new gi(S,E)}(t.endAt)),$p(e,i,a,r,l,"F",c,d)}function kg(s,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Qc(s){return s.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=on(t.unaryFilter.field);return re.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=on(t.unaryFilter.field);return re.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=on(t.unaryFilter.field);return re.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=on(t.unaryFilter.field);return re.create(a,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(s):s.fieldFilter!==void 0?function(t){return re.create(on(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(t.fieldFilter.op),t.fieldFilter.value)}(s):s.compositeFilter!==void 0?function(t){return Qe.create(t.compositeFilter.filters.map(n=>Qc(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(t.compositeFilter.op))}(s):L()}function Sg(s){return mg[s]}function Rg(s){return pg[s]}function Pg(s){return gg[s]}function rn(s){return{fieldPath:s.canonicalString()}}function on(s){return fe.fromServerFormat(s.fieldPath)}function Yc(s){return s instanceof re?function(t){if(t.op==="=="){if($l(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NAN"}};if(jl(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if($l(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NOT_NAN"}};if(jl(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rn(t.field),op:Rg(t.op),value:t.value}}}(s):s instanceof Qe?function(t){const n=t.getFilters().map(i=>Yc(i));return n.length===1?n[0]:{compositeFilter:{op:Pg(t.op),filters:n}}}(s):L()}function Cg(s){const e=[];return s.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Jc(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t,n,i,r=U.min(),a=U.min(),l=pe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new vt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.ht=e}}function Dg(s){const e=Ag({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?oo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.ln=new xg}addToCollectionParentIndex(e,t){return this.ln.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(St.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(St.min())}updateCollectionGroup(e,t,n){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class xg{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new he(Z.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new he(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Pe{static withCacheSize(e){return new Pe(e,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe.DEFAULT_COLLECTION_PERCENTILE=10,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pe.DEFAULT=new Pe(41943040,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pe.DISABLED=new Pe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new _n(0)}static Qn(){return new _n(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih([s,e],[t,n]){const i=W(s,t);return i===0?W(e,n):i}class Og{constructor(e){this.Gn=e,this.buffer=new he(ih),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();ih(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Mg{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){V("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){An(t)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await En(t)}await this.Yn(3e5)})}}class Lg{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Vi.oe);const n=new Og(t);return this.Zn.forEachTarget(e,i=>n.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>n.Hn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Zn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(sh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sh):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let n,i,r,a,l,c,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,a=Date.now(),this.nthSequenceNumber(e,i))).next(w=>(n=w,l=Date.now(),this.removeTargets(e,n,t))).next(w=>(r=w,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(w=>(d=Date.now(),nn()<=j.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${r} targets in `+(c-l)+`ms
	Removed ${w} documents in `+(d-c)+`ms
Total Duration: ${d-m}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:w})))}}function Bg(s,e){return new Lg(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.changes=new Kt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?k.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&ts(n.mutation,i,De.empty(),le.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,$()).next(()=>n))}getLocalViewOfDocuments(e,t,n=$()){const i=Ft();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(r=>{let a=Yn();return r.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=Ft();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,$()))}populateOverlays(e,t,n){const i=[];return n.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,n,i){let r=lt();const a=es(),l=function(){return es()}();return t.forEach((c,d)=>{const m=n.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof xt)?r=r.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),ts(m.mutation,d,m.mutation.getFieldMask(),le.now())):a.set(d.key,De.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>{var w;return l.set(d,new Fg(m,(w=a.get(d))!==null&&w!==void 0?w:null))}),l))}recalculateAndSaveOverlays(e,t){const n=es();let i=new ee((a,l)=>a-l),r=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const d=t.get(c);if(d===null)return;let m=n.get(c)||De.empty();m=l.applyToLocalView(d,m),n.set(c,m);const w=(i.get(l.batchId)||$()).add(c);i=i.insert(l.batchId,w)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,m=c.value,w=xc();m.forEach(E=>{if(!r.has(E)){const S=Fc(t.get(E),n.get(E));S!==null&&w.set(E,S),r=r.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,w))}return k.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Wp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(r=>{const a=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):k.resolve(Ft());let l=-1,c=r;return a.next(d=>k.forEach(d,(m,w)=>(l<w.largestBatchId&&(l=w.largestBatchId),r.get(m)?k.resolve():this.remoteDocumentCache.getEntry(e,m).next(E=>{c=c.insert(m,E)}))).next(()=>this.populateOverlays(e,d,r)).next(()=>this.computeViews(e,c,d,$())).next(m=>({batchId:l,changes:Vc(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(n=>{let i=Yn();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const r=t.collectionGroup;let a=Yn();return this.indexManager.getCollectionParents(e,r).next(l=>k.forEach(l,c=>{const d=function(w,E){return new Mi(E,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(t,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,n,i).next(m=>{m.forEach((w,E)=>{a=a.insert(w,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(r=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r,i))).next(a=>{r.forEach((c,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Te.newInvalidDocument(m)))});let l=Yn();return a.forEach((c,d)=>{const m=r.get(c);m!==void 0&&ts(m.mutation,d,De.empty(),le.now()),Bi(t,d)&&(l=l.insert(c,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return k.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:He(i.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:Dg(i.bundledQuery),readTime:He(i.readTime)}}(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.overlays=new ee(M.comparator),this.Er=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ft();return k.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&n.set(i,r)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,r)=>{this.Tt(e,t,r)}),k.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Er.get(n);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Er.delete(n)),k.resolve()}getOverlaysForCollection(e,t,n){const i=Ft(),r=t.length+1,a=new M(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&c.largestBatchId>n&&i.set(c.getKey(),c)}return k.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new ee((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let m=r.get(d.largestBatchId);m===null&&(m=Ft(),r=r.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=Ft(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=i)););return k.resolve(l)}Tt(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Er.get(i.largestBatchId).delete(n.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new lg(t,n));let r=this.Er.get(t);r===void 0&&(r=$(),this.Er.set(t,r)),this.Er.set(t,r.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.sessionToken=pe.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.dr=new he(ce.Ar),this.Rr=new he(ce.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const n=new ce(e,t);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.gr(new ce(e,t))}pr(e,t){e.forEach(n=>this.removeReference(n,t))}yr(e){const t=new M(new Z([])),n=new ce(t,e),i=new ce(t,e+1),r=[];return this.Rr.forEachInRange([n,i],a=>{this.gr(a),r.push(a.key)}),r}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new M(new Z([])),n=new ce(t,e),i=new ce(t,e+1);let r=$();return this.Rr.forEachInRange([n,i],a=>{r=r.add(a.key)}),r}containsKey(e){const t=new ce(e,0),n=this.dr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ce{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return M.comparator(e.key,t.key)||W(e.br,t.br)}static Vr(e,t){return W(e.br,t.br)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new he(ce.Ar)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const r=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ag(r,t,n,i);this.mutationQueue.push(a);for(const l of i)this.vr=this.vr.add(new ce(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Fr(n),r=i<0?0:i;return k.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ce(t,0),i=new ce(t,Number.POSITIVE_INFINITY),r=[];return this.vr.forEachInRange([n,i],a=>{const l=this.Cr(a.br);r.push(l)}),k.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new he(W);return t.forEach(i=>{const r=new ce(i,0),a=new ce(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([r,a],l=>{n=n.add(l.br)})}),k.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;M.isDocumentKey(r)||(r=r.child(""));const a=new ce(new M(r),0);let l=new he(W);return this.vr.forEachWhile(c=>{const d=c.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(l=l.add(c.br)),!0)},a),k.resolve(this.Mr(l))}Mr(e){const t=[];return e.forEach(n=>{const i=this.Cr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Q(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.vr;return k.forEach(t.mutations,i=>{const r=new ce(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=n})}Ln(e){}containsKey(e,t){const n=new ce(t,0),i=this.vr.firstAfterOrEqual(n);return k.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.Nr=e,this.docs=function(){return new ee(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),r=i?i.size:0,a=this.Nr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return k.resolve(n?n.document.mutableCopy():Te.newInvalidDocument(t))}getEntries(e,t){let n=lt();return t.forEach(i=>{const r=this.docs.get(i);n=n.insert(i,r?r.document.mutableCopy():Te.newInvalidDocument(i))}),k.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=lt();const a=t.path,l=new M(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:m}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||bp(Ip(m),n)<=0||(i.has(m.key)||Bi(t,m))&&(r=r.insert(m.key,m.mutableCopy()))}return k.resolve(r)}getAllFromCollectionGroup(e,t,n,i){L()}Lr(e,t){return k.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new Gg(this)}getSize(e){return k.resolve(this.size)}}class Gg extends Ug{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(n)}),k.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.persistence=e,this.Br=new Kt(t=>No(t),Do),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.kr=0,this.qr=new Bo,this.targetCount=0,this.Qr=_n.qn()}forEachTarget(e,t){return this.Br.forEach((n,i)=>t(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.kr&&(this.kr=t),k.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new _n(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Un(t),k.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.Br.forEach((a,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.Br.delete(a),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),k.waitFor(r).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const n=this.Br.get(t)||null;return k.resolve(n)}addMatchingKeys(e,t,n){return this.qr.mr(t,n),k.resolve()}removeMatchingKeys(e,t,n){this.qr.pr(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(a=>{r.push(i.markPotentiallyOrphaned(e,a))}),k.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const n=this.qr.Sr(t);return k.resolve(n)}containsKey(e,t){return k.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Vi(0),this.Ur=!1,this.Ur=!0,this.Wr=new Wg,this.referenceDelegate=e(this),this.Gr=new Kg(this),this.indexManager=new Vg,this.remoteDocumentCache=function(i){return new Hg(i)}(n=>this.referenceDelegate.zr(n)),this.serializer=new Ng(t),this.jr=new jg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $g,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Kr[e.toKey()];return n||(n=new zg(t,this.referenceDelegate),this.Kr[e.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,n){V("MemoryPersistence","Starting transaction:",e);const i=new Qg(this.$r.next());return this.referenceDelegate.Hr(),n(i).next(r=>this.referenceDelegate.Jr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Yr(e,t){return k.or(Object.values(this.Kr).map(n=>()=>n.containsKey(e,t)))}}class Qg extends Ep{constructor(e){super(),this.currentSequenceNumber=e}}class Uo{constructor(e){this.persistence=e,this.Zr=new Bo,this.Xr=null}static ei(e){return new Uo(e)}get ti(){if(this.Xr)return this.Xr;throw L()}addReference(e,t,n){return this.Zr.addReference(n,t),this.ti.delete(n.toString()),k.resolve()}removeReference(e,t,n){return this.Zr.removeReference(n,t),this.ti.add(n.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),k.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.ti.add(r.toString()))}).next(()=>n.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.ti,n=>{const i=M.fromPath(n);return this.ni(e,i).next(r=>{r||t.removeEntry(i,U.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(n=>{n?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return k.or([()=>k.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Ii{constructor(e,t){this.persistence=e,this.ri=new Kt(n=>Sp(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Bg(this,t)}static ei(e,t){return new Ii(e,t)}Hr(){}Jr(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}nr(e){let t=0;return this.er(e,n=>{t++}).next(()=>t)}er(e,t){return k.forEach(this.ri,(n,i)=>this.ir(e,n,i).next(r=>r?k.resolve():t(i)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.Lr(e,a=>this.ir(e,a,t).next(l=>{l||(n++,r.removeEntry(a,U.min()))})).next(()=>r.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),k.resolve()}removeReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),k.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ni(e.data.value)),t}ir(e,t,n){return k.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ri.get(t);return k.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Wi=n,this.Gi=i}static zi(e,t){let n=$(),i=$();for(const r of t.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Fo(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Kf()?8:Ap(Ee())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,n,i){const r={result:null};return this.Xi(e,t).next(a=>{r.result=a}).next(()=>{if(!r.result)return this.es(e,t,i,n).next(a=>{r.result=a})}).next(()=>{if(r.result)return;const a=new Yg;return this.ts(e,t,a).next(l=>{if(r.result=l,this.Hi)return this.ns(e,t,a,l.size)})}).next(()=>r.result)}ns(e,t,n,i){return n.documentReadCount<this.Ji?(nn()<=j.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",sn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),k.resolve()):(nn()<=j.DEBUG&&V("QueryEngine","Query:",sn(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Yi*i?(nn()<=j.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",sn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ze(t))):k.resolve())}Xi(e,t){if(Gl(t))return k.resolve(null);let n=ze(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=oo(t,null,"F"),n=ze(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const a=$(...r);return this.Zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,n).next(c=>{const d=this.rs(t,l);return this.ss(t,d,a,c.readTime)?this.Xi(e,oo(t,null,"F")):this.os(e,d,t,c)}))})))}es(e,t,n,i){return Gl(t)||i.isEqual(U.min())?k.resolve(null):this.Zi.getDocuments(e,n).next(r=>{const a=this.rs(t,r);return this.ss(t,a,n,i)?k.resolve(null):(nn()<=j.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),sn(t)),this.os(e,a,t,vp(i,-1)).next(l=>l))})}rs(e,t){let n=new he(Nc(e));return t.forEach((i,r)=>{Bi(e,r)&&(n=n.add(r))}),n}ss(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ts(e,t,n){return nn()<=j.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",sn(t)),this.Zi.getDocumentsMatchingQuery(e,t,St.min(),n)}os(e,t,n,i){return this.Zi.getDocumentsMatchingQuery(e,n,i).next(r=>(t.forEach(a=>{r=r.insert(a.key,a)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,t,n,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new ee(W),this.cs=new Kt(r=>No(r),Do),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(n)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qg(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function Zg(s,e,t,n){return new Xg(s,e,t,n)}async function Zc(s,e){const t=F(s);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(r=>(i=r,t.Ps(e),t.mutationQueue.getAllMutationBatches(n))).next(r=>{const a=[],l=[];let c=$();for(const d of i){a.push(d.batchId);for(const m of d.mutations)c=c.add(m.key)}for(const d of r){l.push(d.batchId);for(const m of d.mutations)c=c.add(m.key)}return t.localDocuments.getDocuments(n,c).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:l}))})})}function ey(s,e){const t=F(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),r=t.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,d,m){const w=d.batch,E=w.keys();let S=k.resolve();return E.forEach(N=>{S=S.next(()=>m.getEntry(c,N)).next(x=>{const C=d.docVersions.get(N);Q(C!==null),x.version.compareTo(C)<0&&(w.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),m.addEntry(x)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(c,w))}(t,n,e,r).next(()=>r.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=$();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function eu(s){const e=F(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function ty(s,e){const t=F(s),n=e.snapshotVersion;let i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;const l=[];e.targetChanges.forEach((m,w)=>{const E=i.get(w);if(!E)return;l.push(t.Gr.removeMatchingKeys(r,m.removedDocuments,w).next(()=>t.Gr.addMatchingKeys(r,m.addedDocuments,w)));let S=E.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(w)!==null?S=S.withResumeToken(pe.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),i=i.insert(w,S),function(x,C,z){return x.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(E,S,m)&&l.push(t.Gr.updateTargetData(r,S))});let c=lt(),d=$();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,m))}),l.push(ny(r,a,e.documentUpdates).next(m=>{c=m.Is,d=m.Es})),!n.isEqual(U.min())){const m=t.Gr.getLastRemoteSnapshotVersion(r).next(w=>t.Gr.setTargetsMetadata(r,r.currentSequenceNumber,n));l.push(m)}return k.waitFor(l).next(()=>a.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,d)).next(()=>c)}).then(r=>(t.us=i,r))}function ny(s,e,t){let n=$(),i=$();return t.forEach(r=>n=n.add(r)),e.getEntries(s,n).next(r=>{let a=lt();return t.forEach((l,c)=>{const d=r.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(U.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):V("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)}),{Is:a,Es:i}})}function sy(s,e){const t=F(s);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function iy(s,e){const t=F(s);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Gr.getTargetData(n,e).next(r=>r?(i=r,k.resolve(i)):t.Gr.allocateTargetId(n).next(a=>(i=new vt(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Gr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.us.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(n.targetId,n),t.cs.set(e,n.targetId)),n})}async function uo(s,e,t){const n=F(s),i=n.us.get(e),r=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",r,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!An(a))throw a;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}n.us=n.us.remove(e),n.cs.delete(i.target)}function rh(s,e,t){const n=F(s);let i=U.min(),r=$();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,d,m){const w=F(c),E=w.cs.get(m);return E!==void 0?k.resolve(w.us.get(E)):w.Gr.getTargetData(d,m)}(n,a,ze(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.Gr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{r=c})}).next(()=>n._s.getDocumentsMatchingQuery(a,e,t?i:U.min(),t?r:$())).next(l=>(ry(n,Hp(e),l),{documents:l,ds:r})))}function ry(s,e,t){let n=s.ls.get(e)||U.min();t.forEach((i,r)=>{r.readTime.compareTo(n)>0&&(n=r.readTime)}),s.ls.set(e,n)}class oh{constructor(){this.activeTargetIds=Xp()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oy{constructor(){this._o=new oh,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,n){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new oh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs=null;function Dr(){return Gs===null?Gs=function(){return 268435456+Math.round(2147483648*Math.random())}():Gs++,"0x"+Gs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="WebChannelConnection";class cy extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=n+"://"+t.host,this.Mo=`projects/${i}/databases/${r}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}Oo(t,n,i,r,a){const l=Dr(),c=this.No(t,n.toUriEncodedString());V("RestConnection",`Sending RPC '${t}' ${l}:`,c,i);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(d,r,a),this.Bo(t,c,d,i).then(m=>(V("RestConnection",`Received RPC '${t}' ${l}: `,m),m),m=>{throw pn("RestConnection",`RPC '${t}' ${l} failed with error: `,m,"url: ",c,"request:",i),m})}ko(t,n,i,r,a,l){return this.Oo(t,n,i,r,a)}Lo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Tn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,a)=>t[a]=r),i&&i.headers.forEach((r,a)=>t[a]=r)}No(t,n){const i=ly[t];return`${this.Fo}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,n,i){const r=Dr();return new Promise((a,l)=>{const c=new fc;c.setWithCredentials(!0),c.listenOnce(mc.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ti.NO_ERROR:const m=c.getResponseJson();V(Ie,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(m)),a(m);break;case ti.TIMEOUT:V(Ie,`RPC '${e}' ${r} timed out`),l(new O(R.DEADLINE_EXCEEDED,"Request time out"));break;case ti.HTTP_ERROR:const w=c.getStatus();if(V(Ie,`RPC '${e}' ${r} failed with status:`,w,"response text:",c.getResponseText()),w>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const S=E?.error;if(S&&S.status&&S.message){const N=function(C){const z=C.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(z)>=0?z:R.UNKNOWN}(S.status);l(new O(N,S.message))}else l(new O(R.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new O(R.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{V(Ie,`RPC '${e}' ${r} completed.`)}});const d=JSON.stringify(i);V(Ie,`RPC '${e}' ${r} sending request:`,i),c.send(t,"POST",d,n,15)})}qo(e,t,n){const i=Dr(),r=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=yc(),l=gc(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const m=r.join("");V(Ie,`Creating RPC '${e}' stream ${i}: ${m}`,c);const w=a.createWebChannel(m,c);let E=!1,S=!1;const N=new hy({Eo:C=>{S?V(Ie,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(E||(V(Ie,`Opening RPC '${e}' stream ${i} transport.`),w.open(),E=!0),V(Ie,`RPC '${e}' stream ${i} sending:`,C),w.send(C))},Ao:()=>w.close()}),x=(C,z,G)=>{C.listen(z,D=>{try{G(D)}catch(q){setTimeout(()=>{throw q},0)}})};return x(w,Qn.EventType.OPEN,()=>{S||(V(Ie,`RPC '${e}' stream ${i} transport opened.`),N.So())}),x(w,Qn.EventType.CLOSE,()=>{S||(S=!0,V(Ie,`RPC '${e}' stream ${i} transport closed`),N.Do())}),x(w,Qn.EventType.ERROR,C=>{S||(S=!0,pn(Ie,`RPC '${e}' stream ${i} transport errored:`,C),N.Do(new O(R.UNAVAILABLE,"The operation could not be completed")))}),x(w,Qn.EventType.MESSAGE,C=>{var z;if(!S){const G=C.data[0];Q(!!G);const D=G,q=D?.error||((z=D[0])===null||z===void 0?void 0:z.error);if(q){V(Ie,`RPC '${e}' stream ${i} received error:`,q);const ge=q.status;let ne=function(y){const _=ie[y];if(_!==void 0)return jc(_)}(ge),v=q.message;ne===void 0&&(ne=R.INTERNAL,v="Unknown error status: "+ge+" with message "+q.message),S=!0,N.Do(new O(ne,v)),w.close()}else V(Ie,`RPC '${e}' stream ${i} received:`,G),N.vo(G)}}),x(l,pc.STAT_EVENT,C=>{C.stat===to.PROXY?V(Ie,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===to.NOPROXY&&V(Ie,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.bo()},0),N}}function Vr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(s){return new yg(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t,n=1e3,i=1.5,r=6e4){this.li=e,this.timerId=t,this.Qo=n,this.Ko=i,this.$o=r,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-n);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,t,n,i,r,a,l,c){this.li=e,this.Yo=n,this.Zo=i,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new tu(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(at(t.toString()),at("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Xo===t&&this.I_(n,i)},n=>{e(()=>{const i=new O(R.UNKNOWN,"Fetching auth token failed: "+n.message);return this.E_(i)})})}I_(e,t){const n=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{n(()=>this.E_(i))}),this.stream.onMessage(i=>{n(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uy extends nu{constructor(e,t,n,i,r,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,a),this.serializer=r}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=vg(this.serializer,e),n=function(r){if(!("targetChange"in r))return U.min();const a=r.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?He(a.readTime):U.min()}(e);return this.listener.R_(t,n)}V_(e){const t={};t.database=co(this.serializer),t.addTarget=function(r,a){let l;const c=a.target;if(l=ro(c)?{documents:Tg(r,c)}:{query:Eg(r,c).ct},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=zc(r,a.resumeToken);const d=ao(r,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=vi(r,a.snapshotVersion.toTimestamp());const d=ao(r,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const n=kg(this.serializer,e);n&&(t.labels=n),this.c_(t)}m_(e){const t={};t.database=co(this.serializer),t.removeTarget=e,this.c_(t)}}class dy extends nu{constructor(e,t,n,i,r,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,a),this.serializer=r}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Q(!!e.streamToken),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=bg(e.writeResults,e.commitTime),n=He(e.commitTime);return this.listener.y_(n,t)}w_(){const e={};e.database=co(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Ig(this.serializer,n))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new O(R.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,n,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,a])=>this.connection.Oo(e,lo(t,n),i,r,a)).catch(r=>{throw r.name==="FirebaseError"?(r.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new O(R.UNKNOWN,r.toString())})}ko(e,t,n,i,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.ko(e,lo(t,n),i,a,l,r)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(R.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class my{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(at(t),this.C_=!1):V("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=r,this.Q_.uo(a=>{n.enqueueAndForget(async()=>{Qt(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=F(c);d.k_.add(4),await ys(d),d.K_.set("Unknown"),d.k_.delete(4),await $i(d)}(this))})}),this.K_=new my(n,i)}}async function $i(s){if(Qt(s))for(const e of s.q_)await e(!0)}async function ys(s){for(const e of s.q_)await e(!1)}function su(s,e){const t=F(s);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Wo(t)?$o(t):kn(t).s_()&&jo(t,e))}function qo(s,e){const t=F(s),n=kn(t);t.B_.delete(e),n.s_()&&iu(t,e),t.B_.size===0&&(n.s_()?n.a_():Qt(t)&&t.K_.set("Unknown"))}function jo(s,e){if(s.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}kn(s).V_(e)}function iu(s,e){s.U_.xe(e),kn(s).m_(e)}function $o(s){s.U_=new fg({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>s.B_.get(e)||null,nt:()=>s.datastore.serializer.databaseId}),kn(s).start(),s.K_.F_()}function Wo(s){return Qt(s)&&!kn(s).i_()&&s.B_.size>0}function Qt(s){return F(s).k_.size===0}function ru(s){s.U_=void 0}async function gy(s){s.K_.set("Online")}async function yy(s){s.B_.forEach((e,t)=>{jo(s,e)})}async function wy(s,e){ru(s),Wo(s)?(s.K_.O_(e),$o(s)):s.K_.set("Unknown")}async function _y(s,e,t){if(s.K_.set("Online"),e instanceof Wc&&e.state===2&&e.cause)try{await async function(i,r){const a=r.cause;for(const l of r.targetIds)i.B_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.B_.delete(l),i.U_.removeTarget(l))}(s,e)}catch(n){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await bi(s,n)}else if(e instanceof ri?s.U_.$e(e):e instanceof $c?s.U_.Je(e):s.U_.Ge(e),!t.isEqual(U.min()))try{const n=await eu(s.localStore);t.compareTo(n)>=0&&await function(r,a){const l=r.U_.it(a);return l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const m=r.B_.get(d);m&&r.B_.set(d,m.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,d)=>{const m=r.B_.get(c);if(!m)return;r.B_.set(c,m.withResumeToken(pe.EMPTY_BYTE_STRING,m.snapshotVersion)),iu(r,c);const w=new vt(m.target,c,d,m.sequenceNumber);jo(r,w)}),r.remoteSyncer.applyRemoteEvent(l)}(s,t)}catch(n){V("RemoteStore","Failed to raise snapshot:",n),await bi(s,n)}}async function bi(s,e,t){if(!An(e))throw e;s.k_.add(1),await ys(s),s.K_.set("Offline"),t||(t=()=>eu(s.localStore)),s.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await t(),s.k_.delete(1),await $i(s)})}function ou(s,e){return e().catch(t=>bi(s,t,e))}async function Wi(s){const e=F(s),t=Nt(e);let n=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;vy(e);)try{const i=await sy(e.localStore,n);if(i===null){e.L_.length===0&&t.a_();break}n=i.batchId,Iy(e,i)}catch(i){await bi(e,i)}au(e)&&lu(e)}function vy(s){return Qt(s)&&s.L_.length<10}function Iy(s,e){s.L_.push(e);const t=Nt(s);t.s_()&&t.f_&&t.g_(e.mutations)}function au(s){return Qt(s)&&!Nt(s).i_()&&s.L_.length>0}function lu(s){Nt(s).start()}async function by(s){Nt(s).w_()}async function Ty(s){const e=Nt(s);for(const t of s.L_)e.g_(t.mutations)}async function Ey(s,e,t){const n=s.L_.shift(),i=Oo.from(n,e,t);await ou(s,()=>s.remoteSyncer.applySuccessfulWrite(i)),await Wi(s)}async function Ay(s,e){e&&Nt(s).f_&&await async function(n,i){if(function(a){return cg(a)&&a!==R.ABORTED}(i.code)){const r=n.L_.shift();Nt(n).__(),await ou(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Wi(n)}}(s,e),au(s)&&lu(s)}async function lh(s,e){const t=F(s);t.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const n=Qt(t);t.k_.add(3),await ys(t),n&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await $i(t)}async function ky(s,e){const t=F(s);e?(t.k_.delete(2),await $i(t)):e||(t.k_.add(2),await ys(t),t.K_.set("Unknown"))}function kn(s){return s.W_||(s.W_=function(t,n,i){const r=F(t);return r.b_(),new uy(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(s.datastore,s.asyncQueue,{Ro:gy.bind(null,s),mo:yy.bind(null,s),po:wy.bind(null,s),R_:_y.bind(null,s)}),s.q_.push(async e=>{e?(s.W_.__(),Wo(s)?$o(s):s.K_.set("Unknown")):(await s.W_.stop(),ru(s))})),s.W_}function Nt(s){return s.G_||(s.G_=function(t,n,i){const r=F(t);return r.b_(),new dy(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(s.datastore,s.asyncQueue,{Ro:()=>Promise.resolve(),mo:by.bind(null,s),po:Ay.bind(null,s),p_:Ty.bind(null,s),y_:Ey.bind(null,s)}),s.q_.push(async e=>{e?(s.G_.__(),await Wi(s)):(await s.G_.stop(),s.L_.length>0&&(V("RemoteStore",`Stopping write stream with ${s.L_.length} pending writes`),s.L_=[]))})),s.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,r){const a=Date.now()+n,l=new zo(e,t,a,i,r);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ho(s,e){if(at("AsyncQueue",`${e}: ${s}`),An(s))return new O(R.UNAVAILABLE,`${e}: ${s}`);throw s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{static emptySet(e){return new ln(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||M.comparator(t.key,n.key):(t,n)=>M.comparator(t.key,n.key),this.keyedMap=Yn(),this.sortedSet=new ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ln)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=n.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new ln;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this.z_=new ee(M.comparator)}track(e){const t=e.doc.key,n=this.z_.get(t);n?e.type!==0&&n.type===3?this.z_=this.z_.insert(t,e):e.type===3&&n.type!==1?this.z_=this.z_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.z_=this.z_.remove(t):e.type===1&&n.type===2?this.z_=this.z_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):L():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class vn{constructor(e,t,n,i,r,a,l,c,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,i,r){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new vn(e,t,ln.emptySet(t),a,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Li(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Ry{constructor(){this.queries=ch(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,n){const i=F(t),r=i.queries;i.queries=ch(),r.forEach((a,l)=>{for(const c of l.J_)c.onError(n)})})(this,new O(R.ABORTED,"Firestore shutting down"))}}function ch(){return new Kt(s=>Cc(s),Li)}async function Py(s,e){const t=F(s);let n=3;const i=e.query;let r=t.queries.get(i);r?!r.Y_()&&e.Z_()&&(n=2):(r=new Sy,n=e.Z_()?0:1);try{switch(n){case 0:r.H_=await t.onListen(i,!0);break;case 1:r.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=Ho(a,`Initialization of query '${sn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,r),r.J_.push(e),e.ea(t.onlineState),r.H_&&e.ta(r.H_)&&Go(t)}async function Cy(s,e){const t=F(s),n=e.query;let i=3;const r=t.queries.get(n);if(r){const a=r.J_.indexOf(e);a>=0&&(r.J_.splice(a,1),r.J_.length===0?i=e.Z_()?0:1:!r.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Ny(s,e){const t=F(s);let n=!1;for(const i of e){const r=i.query,a=t.queries.get(r);if(a){for(const l of a.J_)l.ta(i)&&(n=!0);a.H_=i}}n&&Go(t)}function Dy(s,e,t){const n=F(s),i=n.queries.get(e);if(i)for(const r of i.J_)r.onError(t);n.queries.delete(e)}function Go(s){s.X_.forEach(e=>{e.next()})}var fo,uh;(uh=fo||(fo={})).na="default",uh.Cache="cache";class Vy{constructor(e,t,n){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new vn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const n=t!=="Offline";return(!this.options.ua||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==fo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e){this.key=e}}class cu{constructor(e){this.key=e}}class xy{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=$(),this.mutatedKeys=$(),this.Va=Nc(e),this.ma=new ln(this.Va)}get fa(){return this.da}ga(e,t){const n=t?t.pa:new hh,i=t?t.ma:this.ma;let r=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((m,w)=>{const E=i.get(m),S=Bi(this.query,w)?w:null,N=!!E&&this.mutatedKeys.has(E.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let C=!1;E&&S?E.data.isEqual(S.data)?N!==x&&(n.track({type:3,doc:S}),C=!0):this.ya(E,S)||(n.track({type:2,doc:S}),C=!0,(c&&this.Va(S,c)>0||d&&this.Va(S,d)<0)&&(l=!0)):!E&&S?(n.track({type:0,doc:S}),C=!0):E&&!S&&(n.track({type:1,doc:E}),C=!0,(c||d)&&(l=!0)),C&&(S?(a=a.add(S),r=x?r.add(m):r.delete(m)):(a=a.delete(m),r=r.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),r=r.delete(m.key),n.track({type:1,doc:m})}return{ma:a,pa:n,ss:l,mutatedKeys:r}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const r=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((m,w)=>function(S,N){const x=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return x(S)-x(N)}(m.type,w.type)||this.Va(m.doc,w.doc)),this.wa(n),i=i!=null&&i;const l=t&&!i?this.Sa():[],c=this.Ra.size===0&&this.current&&!i?1:0,d=c!==this.Aa;return this.Aa=c,a.length!==0||d?{snapshot:new vn(this.query,e.ma,r,a,e.mutatedKeys,c===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new hh,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=$(),this.ma.forEach(n=>{this.Da(n.key)&&(this.Ra=this.Ra.add(n.key))});const t=[];return e.forEach(n=>{this.Ra.has(n)||t.push(new cu(n))}),this.Ra.forEach(n=>{e.has(n)||t.push(new hu(n))}),t}va(e){this.da=e.ds,this.Ra=$();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return vn.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Oy{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class My{constructor(e){this.key=e,this.Fa=!1}}class Ly{constructor(e,t,n,i,r,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new Kt(l=>Cc(l),Li),this.Oa=new Map,this.Na=new Set,this.La=new ee(M.comparator),this.Ba=new Map,this.ka=new Bo,this.qa={},this.Qa=new Map,this.Ka=_n.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function By(s,e,t=!0){const n=gu(s);let i;const r=n.xa.get(e);return r?(n.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Ca()):i=await uu(n,e,t,!0),i}async function Uy(s,e){const t=gu(s);await uu(t,e,!0,!1)}async function uu(s,e,t,n){const i=await iy(s.localStore,ze(e)),r=i.targetId,a=s.sharedClientState.addLocalQueryTarget(r,t);let l;return n&&(l=await Fy(s,e,r,a==="current",i.resumeToken)),s.isPrimaryClient&&t&&su(s.remoteStore,i),l}async function Fy(s,e,t,n,i){s.Ua=(w,E,S)=>async function(x,C,z,G){let D=C.view.ga(z);D.ss&&(D=await rh(x.localStore,C.query,!1).then(({documents:v})=>C.view.ga(v,D)));const q=G&&G.targetChanges.get(C.targetId),ge=G&&G.targetMismatches.get(C.targetId)!=null,ne=C.view.applyChanges(D,x.isPrimaryClient,q,ge);return fh(x,C.targetId,ne.ba),ne.snapshot}(s,w,E,S);const r=await rh(s.localStore,e,!0),a=new xy(e,r.ds),l=a.ga(r.documents),c=gs.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",i),d=a.applyChanges(l,s.isPrimaryClient,c);fh(s,t,d.ba);const m=new Oy(e,t,a);return s.xa.set(e,m),s.Oa.has(t)?s.Oa.get(t).push(e):s.Oa.set(t,[e]),d.snapshot}async function qy(s,e,t){const n=F(s),i=n.xa.get(e),r=n.Oa.get(i.targetId);if(r.length>1)return n.Oa.set(i.targetId,r.filter(a=>!Li(a,e))),void n.xa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await uo(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&qo(n.remoteStore,i.targetId),mo(n,i.targetId)}).catch(En)):(mo(n,i.targetId),await uo(n.localStore,i.targetId,!0))}async function jy(s,e){const t=F(s),n=t.xa.get(e),i=t.Oa.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),qo(t.remoteStore,n.targetId))}async function $y(s,e,t){const n=Yy(s);try{const i=await function(a,l){const c=F(a),d=le.now(),m=l.reduce((S,N)=>S.add(N.key),$());let w,E;return c.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=lt(),x=$();return c.hs.getEntries(S,m).next(C=>{N=C,N.forEach((z,G)=>{G.isValidDocument()||(x=x.add(z))})}).next(()=>c.localDocuments.getOverlayedDocuments(S,N)).next(C=>{w=C;const z=[];for(const G of l){const D=rg(G,w.get(G.key).overlayedDocument);D!=null&&z.push(new xt(G.key,D,bc(D.value.mapValue),Be.exists(!0)))}return c.mutationQueue.addMutationBatch(S,d,z,l)}).next(C=>{E=C;const z=C.applyToLocalDocumentSet(w,x);return c.documentOverlayCache.saveOverlays(S,C.batchId,z)})}).then(()=>({batchId:E.batchId,changes:Vc(w)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let d=a.qa[a.currentUser.toKey()];d||(d=new ee(W)),d=d.insert(l,c),a.qa[a.currentUser.toKey()]=d}(n,i.batchId,t),await ws(n,i.changes),await Wi(n.remoteStore)}catch(i){const r=Ho(i,"Failed to persist write");t.reject(r)}}async function du(s,e){const t=F(s);try{const n=await ty(t.localStore,e);e.targetChanges.forEach((i,r)=>{const a=t.Ba.get(r);a&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?Q(a.Fa):i.removedDocuments.size>0&&(Q(a.Fa),a.Fa=!1))}),await ws(t,n,e)}catch(n){await En(n)}}function dh(s,e,t){const n=F(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.xa.forEach((r,a)=>{const l=a.view.ea(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=F(a);c.onlineState=l;let d=!1;c.queries.forEach((m,w)=>{for(const E of w.J_)E.ea(l)&&(d=!0)}),d&&Go(c)}(n.eventManager,e),i.length&&n.Ma.R_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Wy(s,e,t){const n=F(s);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Ba.get(e),r=i&&i.key;if(r){let a=new ee(M.comparator);a=a.insert(r,Te.newNoDocument(r,U.min()));const l=$().add(r),c=new qi(U.min(),new Map,new ee(W),a,l);await du(n,c),n.La=n.La.remove(r),n.Ba.delete(e),Ko(n)}else await uo(n.localStore,e,!1).then(()=>mo(n,e,t)).catch(En)}async function zy(s,e){const t=F(s),n=e.batch.batchId;try{const i=await ey(t.localStore,e);mu(t,n,null),fu(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await ws(t,i)}catch(i){await En(i)}}async function Hy(s,e,t){const n=F(s);try{const i=await function(a,l){const c=F(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return c.mutationQueue.lookupMutationBatch(d,l).next(w=>(Q(w!==null),m=w.keys(),c.mutationQueue.removeMutationBatch(d,w))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>c.localDocuments.getDocuments(d,m))})}(n.localStore,e);mu(n,e,t),fu(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await ws(n,i)}catch(i){await En(i)}}function fu(s,e){(s.Qa.get(e)||[]).forEach(t=>{t.resolve()}),s.Qa.delete(e)}function mu(s,e,t){const n=F(s);let i=n.qa[n.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),n.qa[n.currentUser.toKey()]=i}}function mo(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Oa.get(e))s.xa.delete(n),t&&s.Ma.Wa(n,t);s.Oa.delete(e),s.isPrimaryClient&&s.ka.yr(e).forEach(n=>{s.ka.containsKey(n)||pu(s,n)})}function pu(s,e){s.Na.delete(e.path.canonicalString());const t=s.La.get(e);t!==null&&(qo(s.remoteStore,t),s.La=s.La.remove(e),s.Ba.delete(t),Ko(s))}function fh(s,e,t){for(const n of t)n instanceof hu?(s.ka.addReference(n.key,e),Gy(s,n)):n instanceof cu?(V("SyncEngine","Document no longer in limbo: "+n.key),s.ka.removeReference(n.key,e),s.ka.containsKey(n.key)||pu(s,n.key)):L()}function Gy(s,e){const t=e.key,n=t.path.canonicalString();s.La.get(t)||s.Na.has(n)||(V("SyncEngine","New document in limbo: "+t),s.Na.add(n),Ko(s))}function Ko(s){for(;s.Na.size>0&&s.La.size<s.maxConcurrentLimboResolutions;){const e=s.Na.values().next().value;s.Na.delete(e);const t=new M(Z.fromString(e)),n=s.Ka.next();s.Ba.set(n,new My(t)),s.La=s.La.insert(t,n),su(s.remoteStore,new vt(ze(Pc(t.path)),n,"TargetPurposeLimboResolution",Vi.oe))}}async function ws(s,e,t){const n=F(s),i=[],r=[],a=[];n.xa.isEmpty()||(n.xa.forEach((l,c)=>{a.push(n.Ua(c,e,t).then(d=>{var m;if((d||t)&&n.isPrimaryClient){const w=d?!d.fromCache:(m=t?.targetChanges.get(c.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(c.targetId,w?"current":"not-current")}if(d){i.push(d);const w=Fo.zi(c.targetId,d);r.push(w)}}))}),await Promise.all(a),n.Ma.R_(i),await async function(c,d){const m=F(c);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>k.forEach(d,E=>k.forEach(E.Wi,S=>m.persistence.referenceDelegate.addReference(w,E.targetId,S)).next(()=>k.forEach(E.Gi,S=>m.persistence.referenceDelegate.removeReference(w,E.targetId,S)))))}catch(w){if(!An(w))throw w;V("LocalStore","Failed to update sequence numbers: "+w)}for(const w of d){const E=w.targetId;if(!w.fromCache){const S=m.us.get(E),N=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(N);m.us=m.us.insert(E,x)}}}(n.localStore,r))}async function Ky(s,e){const t=F(s);if(!t.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const n=await Zc(t.localStore,e);t.currentUser=e,function(r,a){r.Qa.forEach(l=>{l.forEach(c=>{c.reject(new O(R.CANCELLED,a))})}),r.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ws(t,n.Ts)}}function Qy(s,e){const t=F(s),n=t.Ba.get(e);if(n&&n.Fa)return $().add(n.key);{let i=$();const r=t.Oa.get(e);if(!r)return i;for(const a of r){const l=t.xa.get(a);i=i.unionWith(l.view.fa)}return i}}function gu(s){const e=F(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=du.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wy.bind(null,e),e.Ma.R_=Ny.bind(null,e.eventManager),e.Ma.Wa=Dy.bind(null,e.eventManager),e}function Yy(s){const e=F(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Hy.bind(null,e),e}class Ti{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ji(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return Zg(this.persistence,new Jg,e.initialUser,this.serializer)}ja(e){return new Xc(Uo.ei,this.serializer)}za(e){return new oy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ti.provider={build:()=>new Ti};class Jy extends Ti{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Q(this.persistence.referenceDelegate instanceof Ii);const n=this.persistence.referenceDelegate.garbageCollector;return new Mg(n,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Pe.withCacheSize(this.cacheSizeBytes):Pe.DEFAULT;return new Xc(n=>Ii.ei(n,t),this.serializer)}}class po{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>dh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ky.bind(null,this.syncEngine),await ky(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ry}()}createDatastore(e){const t=ji(e.databaseInfo.databaseId),n=function(r){return new cy(r)}(e.databaseInfo);return function(r,a,l,c){return new fy(r,a,l,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,r,a,l){return new py(n,i,r,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>dh(this.syncEngine,t,0),function(){return ah.p()?new ah:new ay}())}createSyncEngine(e,t){return function(i,r,a,l,c,d,m){const w=new Ly(i,r,a,l,c,d);return m&&(w.$a=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const r=F(i);V("RemoteStore","RemoteStore shutting down."),r.k_.add(5),await ys(r),r.Q_.shutdown(),r.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}po.provider={build:()=>new po};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):at("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t,n,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=be.UNAUTHENTICATED,this.clientId=_c.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(n,async a=>{V("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(V("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ho(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function xr(s,e){s.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Zc(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>s.terminate()),s._offlineComponents=e}async function mh(s,e){s.asyncQueue.verifyOperationInProgress();const t=await ew(s);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener(n=>lh(e.remoteStore,n)),s.setAppCheckTokenChangeListener((n,i)=>lh(e.remoteStore,i)),s._onlineComponents=e}async function ew(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await xr(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;pn("Error using user provided cache. Falling back to memory cache: "+t),await xr(s,new Ti)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await xr(s,new Jy(void 0));return s._offlineComponents}async function yu(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await mh(s,s._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await mh(s,new po))),s._onlineComponents}function tw(s){return yu(s).then(e=>e.syncEngine)}async function nw(s){const e=await yu(s),t=e.eventManager;return t.onListen=By.bind(null,e.syncEngine),t.onUnlisten=qy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Uy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=jy.bind(null,e.syncEngine),t}function sw(s,e,t={}){const n=new Et;return s.asyncQueue.enqueueAndForget(async()=>function(r,a,l,c,d){const m=new Xy({next:E=>{m.eu(),a.enqueueAndForget(()=>Cy(r,w)),E.fromCache&&c.source==="server"?d.reject(new O(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),w=new Vy(l,m,{includeMetadataChanges:!0,ua:!0});return Py(r,w)}(await nw(s),s.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(s,e,t){if(!t)throw new O(R.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function iw(s,e,t,n){if(e===!0&&n===!0)throw new O(R.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function gh(s){if(!M.isDocumentKey(s))throw new O(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function yh(s){if(M.isDocumentKey(s))throw new O(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function Qo(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":L()}function Ei(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new O(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qo(s);throw new O(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wu((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zi{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new up;switch(n.type){case"firstParty":return new pp(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ph.get(t);n&&(V("ComponentProvider","Removing Datastore"),ph.delete(t),n.terminate())}(this),Promise.resolve()}}function rw(s,e,t,n={}){var i;const r=(s=Ei(s,zi))._getSettings(),a=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==a&&pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),s._setSettings(Object.assign(Object.assign({},r),{host:a,ssl:!1})),n.mockUserToken){let l,c;if(typeof n.mockUserToken=="string")l=n.mockUserToken,c=be.MOCK_USER;else{l=qf(n.mockUserToken,(i=s._app)===null||i===void 0?void 0:i.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new O(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new be(d)}s._authCredentials=new dp(new wc(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Hi(this.firestore,e,this._query)}}class Ue{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new At(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}}class At extends Hi{constructor(e,t,n){super(e,t,Pc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new M(e))}withConverter(e){return new At(this.firestore,e,this._path)}}function en(s,e,...t){if(s=me(s),_u("collection","path",e),s instanceof zi){const n=Z.fromString(e,...t);return yh(n),new At(s,null,n)}{if(!(s instanceof Ue||s instanceof At))throw new O(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Z.fromString(e,...t));return yh(n),new At(s.firestore,null,n)}}function pt(s,e,...t){if(s=me(s),arguments.length===1&&(e=_c.newId()),_u("doc","path",e),s instanceof zi){const n=Z.fromString(e,...t);return gh(n),new Ue(s,null,new M(n))}{if(!(s instanceof Ue||s instanceof At))throw new O(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Z.fromString(e,...t));return gh(n),new Ue(s.firestore,s instanceof At?s.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new tu(this,"async_queue_retry"),this.fu=()=>{const n=Vr();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.r_.Jo()},this.gu=e;const t=Vr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Vr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Et;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!An(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(n=>{this.Au=n,this.Ru=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(n);throw at("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.Ru=!1,n))));return this.gu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const i=zo.createAndSchedule(this,e,t,n,r=>this.Su(r));return this.du.push(i),i}pu(){this.Au&&L()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class Yo extends zi{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new _h,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _h(e),this._firestoreClient=void 0,await e}}}function ow(s,e){const t=typeof s=="object"?s:hc(),n=typeof s=="string"?s:"(default)",i=So(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const r=Uf("firestore");r&&rw(i,...r)}return i}function Jo(s){if(s._terminated)throw new O(R.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||aw(s),s._firestoreClient}function aw(s){var e,t,n;const i=s._freezeSettings(),r=function(l,c,d,m){return new Cp(l,c,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,wu(m.experimentalLongPollingOptions),m.useFetchStreams)}(s._databaseId,((e=s._app)===null||e===void 0?void 0:e.options.appId)||"",s._persistenceKey,i);s._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(s._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),s._firestoreClient=new Zy(s._authCredentials,s._appCheckCredentials,s._queue,r,s._componentsProvider&&function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}}(s._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dt(pe.fromBase64String(e))}catch(t){throw new O(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Dt(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let r=0;r<n.length;++r)if(n[r]!==i[r])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=/^__.*__$/;class hw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new xt(e,this.data,this.fieldMask,t,this.fieldTransforms):new ps(e,this.data,t,this.fieldTransforms)}}class vu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new xt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Iu(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class ta{constructor(e,t,n,i,r,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,r===void 0&&this.Fu(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new ta(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:n,Nu:!1});return i.Lu(e),i}Bu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:n,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ai(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Iu(this.Mu)&&lw.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class cw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ji(e)}$u(e,t,n,i=!1){return new ta({Mu:e,methodName:t,Ku:n,path:fe.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uw(s){const e=s._freezeSettings(),t=ji(s._databaseId);return new cw(s._databaseId,!!e.ignoreUndefinedProperties,t)}function dw(s,e,t,n,i,r={}){const a=s.$u(r.merge||r.mergeFields?2:0,e,t,i);na("Data must be an object, but it was:",a,n);const l=bu(n,a);let c,d;if(r.merge)c=new De(a.fieldMask),d=a.fieldTransforms;else if(r.mergeFields){const m=[];for(const w of r.mergeFields){const E=go(e,w,t);if(!a.contains(E))throw new O(R.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Eu(m,E)||m.push(E)}c=new De(m),d=a.fieldTransforms.filter(w=>c.covers(w.field))}else c=null,d=a.fieldTransforms;return new hw(new Ce(l),c,d)}class Ki extends Xo{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ki}}function fw(s,e,t,n){const i=s.$u(1,e,t);na("Data must be an object, but it was:",i,n);const r=[],a=Ce.empty();Vt(n,(c,d)=>{const m=sa(e,c,t);d=me(d);const w=i.Bu(m);if(d instanceof Ki)r.push(m);else{const E=Qi(d,w);E!=null&&(r.push(m),a.set(m,E))}});const l=new De(r);return new vu(a,l,i.fieldTransforms)}function mw(s,e,t,n,i,r){const a=s.$u(1,e,t),l=[go(e,n,t)],c=[i];if(r.length%2!=0)throw new O(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<r.length;E+=2)l.push(go(e,r[E])),c.push(r[E+1]);const d=[],m=Ce.empty();for(let E=l.length-1;E>=0;--E)if(!Eu(d,l[E])){const S=l[E];let N=c[E];N=me(N);const x=a.Bu(S);if(N instanceof Ki)d.push(S);else{const C=Qi(N,x);C!=null&&(d.push(S),m.set(S,C))}}const w=new De(d);return new vu(m,w,a.fieldTransforms)}function Qi(s,e){if(Tu(s=me(s)))return na("Unsupported field value:",e,s),bu(s,e);if(s instanceof Xo)return function(n,i){if(!Iu(i.Mu))throw i.qu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(n,i){const r=[];let a=0;for(const l of n){let c=Qi(l,i.ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),a++}return{arrayValue:{values:r}}}(s,e)}return function(n,i){if((n=me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Zp(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=le.fromDate(n);return{timestampValue:vi(i.serializer,r)}}if(n instanceof le){const r=new le(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:vi(i.serializer,r)}}if(n instanceof Zo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Dt)return{bytesValue:zc(i.serializer,n._byteString)};if(n instanceof Ue){const r=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(r))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Lo(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof ea)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return Vo(l.serializer,c)})}}}}}}(n,i);throw i.qu(`Unsupported field value: ${Qo(n)}`)}(s,e)}function bu(s,e){const t={};return vc(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vt(s,(n,i)=>{const r=Qi(i,e.Ou(n));r!=null&&(t[n]=r)}),{mapValue:{fields:t}}}function Tu(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof le||s instanceof Zo||s instanceof Dt||s instanceof Ue||s instanceof Xo||s instanceof ea)}function na(s,e,t){if(!Tu(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=Qo(t);throw n==="an object"?e.qu(s+" a custom object"):e.qu(s+" "+n)}}function go(s,e,t){if((e=me(e))instanceof Gi)return e._internalPath;if(typeof e=="string")return sa(s,e);throw Ai("Field path arguments must be of type string or ",s,!1,void 0,t)}const pw=new RegExp("[~\\*/\\[\\]]");function sa(s,e,t){if(e.search(pw)>=0)throw Ai(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new Gi(...e.split("."))._internalPath}catch{throw Ai(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function Ai(s,e,t,n,i){const r=n&&!n.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||a)&&(c+=" (found",r&&(c+=` in field ${n}`),a&&(c+=` in document ${i}`),c+=")"),new O(R.INVALID_ARGUMENT,l+s+c)}function Eu(s,e){return s.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ku("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gw extends Au{data(){return super.data()}}function ku(s,e){return typeof e=="string"?sa(s,e):e instanceof Gi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new O(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ww{convertValue(e,t="none"){switch(Ct(e)){case 0:return null;case 1:return e.booleanValue;case 2:return se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw L()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Vt(e,(i,r)=>{n[i]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,i;const r=(i=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>se(a.doubleValue));return new ea(r)}convertGeoPoint(e){return new Zo(se(e.latitude),se(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Oi(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(rs(e));default:return null}}convertTimestamp(e){const t=Rt(e);return new le(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Z.fromString(e);Q(Jc(n));const i=new os(n.get(1),n.get(3)),r=new M(n.popFirst(5));return i.isEqual(t)||at(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(s,e,t){let n;return n=s?t&&(t.merge||t.mergeFields)?s.toFirestore(e,t):s.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vw extends Au{constructor(e,t,n,i,r,a){super(e,t,n,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new oi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ku("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class oi extends vw{data(e={}){return super.data(e)}}class Iw{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ks(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new oi(this._firestore,this._userDataWriter,n.key,n,new Ks(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const c=new oi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ks(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const c=new oi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ks(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:bw(l.type),doc:c,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function bw(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class Tw extends ww{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,t)}}function tn(s){s=Ei(s,Hi);const e=Ei(s.firestore,Yo),t=Jo(e),n=new Tw(e);return yw(s._query),sw(t,s._query).then(i=>new Iw(e,n,s,i))}function Ew(s,e){return function(n,i){const r=new Et;return n.asyncQueue.enqueueAndForget(async()=>$y(await tw(n),i,r)),r.promise}(Jo(s),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=uw(e)}set(e,t,n){this._verifyNotCommitted();const i=Or(e,this._firestore),r=_w(i.converter,t,n),a=dw(this._dataReader,"WriteBatch.set",i._key,r,i.converter!==null,n);return this._mutations.push(a.toMutation(i._key,Be.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const r=Or(e,this._firestore);let a;return a=typeof(t=me(t))=="string"||t instanceof Gi?mw(this._dataReader,"WriteBatch.update",r._key,t,n,i):fw(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(a.toMutation(r._key,Be.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Or(e,this._firestore);return this._mutations=this._mutations.concat(new xo(t._key,Be.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Or(s,e){if((s=me(s)).firestore!==e)throw new O(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(s){return Jo(s=Ei(s,Yo)),new Aw(s,e=>Ew(s,e))}(function(e,t=!0){(function(i){Tn=i})(bn),mn(new Wt("firestore",(n,{instanceIdentifier:i,options:r})=>{const a=n.getProvider("app").getImmediate(),l=new Yo(new fp(n.getProvider("auth-internal")),new yp(n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new os(d.options.projectId,m)}(a,i),a);return r=Object.assign({useFetchStreams:t},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),Tt(Ml,"4.7.5",e),Tt(Ml,"4.7.5","esm2017")})();const Su=2e3,Yi=["chars","confusions","bigrams","words","buckets","intervals","flow"];async function Ru(s,e){const t=e.writable.getWriter();return t.write(s),t.close(),new Uint8Array(await new Response(e.readable).arrayBuffer())}async function Pu(s){return Ru(new TextEncoder().encode(JSON.stringify(s)),new CompressionStream("deflate"))}async function kw(s){return JSON.parse(new TextDecoder().decode(await Ru(s,new DecompressionStream("deflate"))))}async function Sw(s,e=Su){const t=[];for(let n=0;n<s.length;n+=e){const i=s.slice(n,n+e);t.push({from:n,count:i.length,data:await Pu(i)})}return t}const Mr=s=>[...s].sort((e,t)=>Gr(e[0],t[0]));function Cu(s){return{chars:Mr(s.chars).map(([e,t])=>[e,...t]),confusions:[...s.confusions.keys()].map(e=>JSON.parse(e)).sort((e,t)=>Gr(e[0],t[0])||Gr(e[1]??"",t[1]??"")).map(([e,t])=>[e,t,s.confusions.get(JSON.stringify([e,t]))]),bigrams:Mr(s.bigrams).map(([e,t])=>[e,...t]),words:Mr(s.words).map(([e,t])=>[e,...t]),buckets:[...s.buckets].map(([e,t])=>[...e.split(",").map(Number),t[0],t[1],tt(t[2])]).sort((e,t)=>e[0]-t[0]||e[1]-t[1]),intervals:[...s.intervals].sort((e,t)=>e[0]-t[0]).map(([e,t])=>[e,t]),flow:s.flow}}async function Rw(s){const e={};for(const t of Yi)e[t]=await kw(s[t]);return e}const Pw={apiKey:"AIzaSyAWeHbqIY-bD4TInKs2wPoVY0qmkT0rPLU",authDomain:"tuitype.firebaseapp.com",projectId:"tuitype",appId:"1:770423004269:web:0dace99a3b567cde2b7364",messagingSenderId:"770423004269"};var Cw="firebase",Nw="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt(Cw,Nw,"app");function ia(s,e){var t={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(s);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(s,n[i])&&(t[n[i]]=s[n[i]]);return t}function Nu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dw=Nu,Du=new fs("auth","Firebase",Nu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new Ao("@firebase/auth");function Vw(s,...e){ki.logLevel<=j.WARN&&ki.warn(`Auth (${bn}): ${s}`,...e)}function ai(s,...e){ki.logLevel<=j.ERROR&&ki.error(`Auth (${bn}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(s,...e){throw oa(s,...e)}function Fe(s,...e){return oa(s,...e)}function ra(s,e,t){const n=Object.assign(Object.assign({},Dw()),{[e]:t});return new fs("auth","Firebase",n).create(e,{appName:s.name})}function kt(s){return ra(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vu(s,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&Ye(s,"argument-error"),ra(s,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function oa(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return Du.create(s,...e)}function B(s,e,...t){if(!s)throw oa(e,...t)}function st(s){const e="INTERNAL ASSERTION FAILED: "+s;throw ai(e),new Error(e)}function ht(s,e){s||st(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function xw(){return vh()==="http:"||vh()==="https:"}function vh(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xw()||zf()||"connection"in navigator)?navigator.onLine:!0}function Mw(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t){this.shortDelay=e,this.longDelay=t,ht(t>e,"Short delay should be less than long delay!"),this.isMobile=jf()||Hf()}get(){return Ow()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(s,e){ht(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=new _s(3e4,6e4);function la(s,e){return s.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:s.tenantId}):e}async function Sn(s,e,t,n,i={}){return Ou(s,i,async()=>{let r={},a={};n&&(e==="GET"?a=n:r={body:JSON.stringify(n)});const l=ms(Object.assign({key:s.config.apiKey},a)).slice(1),c=await s._getAdditionalHeaders();c["Content-Type"]="application/json",s.languageCode&&(c["X-Firebase-Locale"]=s.languageCode);const d=Object.assign({method:e,headers:c},r);return Wf()||(d.referrerPolicy="no-referrer"),xu.fetch()(Mu(s,s.config.apiHost,t,l),d)})}async function Ou(s,e,t){s._canInitEmulator=!1;const n=Object.assign(Object.assign({},Lw),e);try{const i=new Fw(s),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw Qs(s,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const l=r.ok?a.errorMessage:a.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qs(s,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Qs(s,"email-already-in-use",a);if(c==="USER_DISABLED")throw Qs(s,"user-disabled",a);const m=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ra(s,m,d);Ye(s,m)}}catch(i){if(i instanceof ct)throw i;Ye(s,"network-request-failed",{message:String(i)})}}async function Uw(s,e,t,n,i={}){const r=await Sn(s,e,t,n,i);return"mfaPendingCredential"in r&&Ye(s,"multi-factor-auth-required",{_serverResponse:r}),r}function Mu(s,e,t,n){const i=`${e}${t}?${n}`;return s.config.emulator?aa(s.config,i):`${s.config.apiScheme}://${i}`}class Fw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Fe(this.auth,"network-request-failed")),Bw.get())})}}function Qs(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Fe(s,e,n);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(s,e){return Sn(s,"POST","/v1/accounts:delete",e)}async function Lu(s,e){return Sn(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jw(s,e=!1){const t=me(s),n=await t.getIdToken(e),i=ha(n);B(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,a=r?.sign_in_provider;return{claims:i,token:n,authTime:ns(Lr(i.auth_time)),issuedAtTime:ns(Lr(i.iat)),expirationTime:ns(Lr(i.exp)),signInProvider:a||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Lr(s){return Number(s)*1e3}function ha(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return ai("JWT malformed, contained fewer than 3 sections"),null;try{const i=nc(t);return i?JSON.parse(i):(ai("Failed to decode base64 JWT payload"),null)}catch(i){return ai("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Ih(s){const e=ha(s);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof ct&&$w(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function $w({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ns(this.lastLoginAt),this.creationTime=ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(s){var e;const t=s.auth,n=await s.getIdToken(),i=await cs(s,Lu(t,{idToken:n}));B(i?.users.length,t,"internal-error");const r=i.users[0];s._notifyReloadListener(r);const a=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Bu(r.providerUserInfo):[],l=Hw(s.providerData,a),c=s.isAnonymous,d=!(s.email&&r.passwordHash)&&!l?.length,m=c?d:!1,w={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new wo(r.createdAt,r.lastLoginAt),isAnonymous:m};Object.assign(s,w)}async function zw(s){const e=me(s);await Si(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hw(s,e){return[...s.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Bu(s){return s.map(e=>{var{providerId:t}=e,n=ia(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(s,e){const t=await Ou(s,{},async()=>{const n=ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=s.config,a=Mu(s,i,"/v1/token",`key=${r}`),l=await s._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",xu.fetch()(a,{method:"POST",headers:l,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Kw(s,e){return Sn(s,"POST","/v2/accounts:revokeToken",la(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ih(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=Ih(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await Gw(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,a=new hn;return n&&(B(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(B(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),r&&(B(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hn,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(s,e){B(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class it{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=ia(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ww(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new wo(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await cs(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jw(this,e)}reload(){return zw(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new it(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Si(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(kt(this.auth));const e=await this.getIdToken();return await cs(this,qw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,a,l,c,d,m;const w=(n=t.displayName)!==null&&n!==void 0?n:void 0,E=(i=t.email)!==null&&i!==void 0?i:void 0,S=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,N=(a=t.photoURL)!==null&&a!==void 0?a:void 0,x=(l=t.tenantId)!==null&&l!==void 0?l:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,z=(d=t.createdAt)!==null&&d!==void 0?d:void 0,G=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:D,emailVerified:q,isAnonymous:ge,providerData:ne,stsTokenManager:v}=t;B(D&&v,e,"internal-error");const p=hn.fromJSON(this.name,v);B(typeof D=="string",e,"internal-error"),gt(w,e.name),gt(E,e.name),B(typeof q=="boolean",e,"internal-error"),B(typeof ge=="boolean",e,"internal-error"),gt(S,e.name),gt(N,e.name),gt(x,e.name),gt(C,e.name),gt(z,e.name),gt(G,e.name);const y=new it({uid:D,auth:e,email:E,emailVerified:q,displayName:w,isAnonymous:ge,photoURL:N,phoneNumber:S,tenantId:x,stsTokenManager:p,createdAt:z,lastLoginAt:G});return ne&&Array.isArray(ne)&&(y.providerData=ne.map(_=>Object.assign({},_))),C&&(y._redirectEventId=C),y}static async _fromIdTokenResponse(e,t,n=!1){const i=new hn;i.updateFromServerResponse(t);const r=new it({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Si(r),r}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];B(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Bu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!r?.length,l=new hn;l.updateFromIdToken(n);const c=new it({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new wo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!r?.length};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=new Map;function rt(s){ht(s instanceof Function,"Expected a class definition");let e=bh.get(s);return e?(ht(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,bh.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Uu.type="NONE";const Th=Uu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(s,e,t){return`firebase:${s}:${e}:${t}`}class cn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=li(this.userKey,i.apiKey,r),this.fullPersistenceKey=li("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?it._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new cn(rt(Th),e,n);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=i[0]||rt(Th);const a=li(n,e.config.apiKey,e.name);let l=null;for(const d of t)try{const m=await d._get(a);if(m){const w=it._fromJSON(e,m);d!==r&&(l=w),r=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new cn(r,e,n):(r=c[0],l&&await r._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(a)}catch{}})),new cn(r,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($u(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zu(e))return"Blackberry";if(Hu(e))return"Webos";if(qu(e))return"Safari";if((e.includes("chrome/")||ju(e))&&!e.includes("edge/"))return"Chrome";if(Wu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if(n?.length===2)return n[1]}return"Other"}function Fu(s=Ee()){return/firefox\//i.test(s)}function qu(s=Ee()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ju(s=Ee()){return/crios\//i.test(s)}function $u(s=Ee()){return/iemobile/i.test(s)}function Wu(s=Ee()){return/android/i.test(s)}function zu(s=Ee()){return/blackberry/i.test(s)}function Hu(s=Ee()){return/webos/i.test(s)}function ca(s=Ee()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Qw(s=Ee()){var e;return ca(s)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yw(){return Gf()&&document.documentMode===10}function Gu(s=Ee()){return ca(s)||Wu(s)||Hu(s)||zu(s)||/windows phone/i.test(s)||$u(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(s,e=[]){let t;switch(s){case"Browser":t=Eh(Ee());break;case"Worker":t=`${Eh(Ee())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${bn}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=r=>new Promise((a,l)=>{try{const c=e(r);a(c)}catch(c){l(c)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(s,e={}){return Sn(s,"GET","/v2/passwordPolicy",la(s,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=6;class e_{constructor(e){var t,n,i,r;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Zw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,r,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ah(this),this.idTokenSubscription=new Ah(this),this.beforeStateQueue=new Jw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Du,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rt(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await cn.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lu(this,{idToken:e}),n=await it._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(We(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i?._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&c?.user&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Si(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(kt(this));const t=e?me(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xw(this),t=new e_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fs("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Kw(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rt(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await cn.create(this,[rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(l,this,"internal-error"),l.then(()=>{a||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ku(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Vw(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Rn(s){return me(s)}class Ah{constructor(e){this.auth=e,this.observer=null,this.addObserver=tm(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function n_(s){ua=s}function s_(s){return ua.loadJS(s)}function i_(){return ua.gapiScript}function r_(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(s,e){const t=So(s,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(fi(r,e??{}))return i;Ye(i,"already-initialized")}return t.initialize({options:e})}function a_(s,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(rt);e?.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e?.popupRedirectResolver)}function l_(s,e,t){const n=Rn(s);B(n._canInitEmulator,n,"emulator-config-failed"),B(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,r=Qu(e),{host:a,port:l}=h_(e),c=l===null?"":`:${l}`;n.config.emulator={url:`${r}//${a}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),c_()}function Qu(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function h_(s){const e=Qu(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const r=i[1];return{host:r,port:kh(n.substr(r.length+1))}}else{const[r,a]=n.split(":");return{host:r,port:kh(a)}}}function kh(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function c_(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,t){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(s,e){return Uw(s,"POST","/v1/accounts:signInWithIdp",la(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="http://localhost";class Ht extends Yu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=ia(t,["providerId","signInMethod"]);if(!n||!i)return null;const a=new Ht(n,i);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return un(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,un(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,un(e,t)}buildRequest(){const e={requestUri:u_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ms(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends Ji{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends vs{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends vs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ht._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return nt.credential(t,n)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends vs{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.GITHUB_SIGN_IN_METHOD="github.com";wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends vs{constructor(){super("twitter.com")}static credential(e,t){return Ht._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _t.credential(t,n)}catch{return null}}}_t.TWITTER_SIGN_IN_METHOD="twitter.com";_t.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await it._fromIdTokenResponse(e,n,i),a=Sh(n);return new In({user:r,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Sh(n);return new In({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Sh(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends ct{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ri.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Ri(e,t,n,i)}}function Ju(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ri._fromErrorAndOperation(s,r,e,n):r})}async function d_(s,e,t=!1){const n=await cs(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return In._forOperation(s,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(s,e,t=!1){const{auth:n}=s;if(We(n.app))return Promise.reject(kt(n));const i="reauthenticate";try{const r=await cs(s,Ju(n,i,e,s),t);B(r.idToken,n,"internal-error");const a=ha(r.idToken);B(a,n,"internal-error");const{sub:l}=a;return B(s.uid===l,n,"user-mismatch"),In._forOperation(s,i,r)}catch(r){throw r?.code==="auth/user-not-found"&&Ye(n,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(s,e,t=!1){if(We(s.app))return Promise.reject(kt(s));const n="signIn",i=await Ju(s,n,e),r=await In._fromIdTokenResponse(s,n,i);return t||await s._updateCurrentUser(r.user),r}function p_(s,e,t,n){return me(s).onIdTokenChanged(e,t,n)}function g_(s,e,t){return me(s).beforeAuthStateChanged(e,t)}function y_(s,e,t,n){return me(s).onAuthStateChanged(e,t,n)}function w_(s){return me(s).signOut()}const Pi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pi,"1"),this.storage.removeItem(Pi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=1e3,v_=10;class Zu extends Xu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},r=this.storage.getItem(n);Yw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,v_):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},__)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zu.type="LOCAL";const I_=Zu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends Xu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ed.type="SESSION";const td=ed;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new Xi(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const l=Array.from(a).map(async d=>d(t.origin,r)),c=await b_(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,a;return new Promise((l,c)=>{const d=da("",20);i.port1.start();const m=setTimeout(()=>{c(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(w){const E=w;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(m),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(E.data.response);break;default:clearTimeout(m),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return window}function E_(s){Ge().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function A_(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function k_(){var s;return((s=navigator?.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function S_(){return nd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="firebaseLocalStorageDb",R_=1,Ci="firebaseLocalStorage",id="fbase_key";class Is{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zi(s,e){return s.transaction([Ci],e?"readwrite":"readonly").objectStore(Ci)}function P_(){const s=indexedDB.deleteDatabase(sd);return new Is(s).toPromise()}function _o(){const s=indexedDB.open(sd,R_);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(Ci,{keyPath:id})}catch(i){t(i)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(Ci)?e(n):(n.close(),await P_(),e(await _o()))})})}async function Rh(s,e,t){const n=Zi(s,!0).put({[id]:e,value:t});return new Is(n).toPromise()}async function C_(s,e){const t=Zi(s,!1).get(e),n=await new Is(t).toPromise();return n===void 0?null:n.value}function Ph(s,e){const t=Zi(s,!0).delete(e);return new Is(t).toPromise()}const N_=800,D_=3;class rd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _o(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>D_)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xi._getInstance(S_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await A_(),!this.activeServiceWorker)return;this.sender=new T_(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||k_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _o();return await Rh(e,Pi,"1"),await Ph(e,Pi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>C_(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ph(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Zi(i,!1).getAll();return new Is(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),N_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rd.type="LOCAL";const V_=rd;new _s(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(s,e){return e?rt(e):(B(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends Yu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return un(e,this._buildIdpRequest())}_linkToIdToken(e,t){return un(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return un(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function x_(s){return m_(s.auth,new ma(s),s.bypassAuthState)}function O_(s){const{auth:e,user:t}=s;return B(t,e,"internal-error"),f_(t,new ma(s),s.bypassAuthState)}async function M_(s){const{auth:e,user:t}=s;return B(t,e,"internal-error"),d_(t,new ma(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return x_;case"linkViaPopup":case"linkViaRedirect":return M_;case"reauthViaPopup":case"reauthViaRedirect":return O_;default:Ye(this.auth,"internal-error")}}resolve(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=new _s(2e3,1e4);async function B_(s,e,t){if(We(s.app))return Promise.reject(Fe(s,"operation-not-supported-in-this-environment"));const n=Rn(s);Vu(s,e,Ji);const i=fa(n,t);return new qt(n,"signInViaPopup",e,i).executeNotNull()}class qt extends od{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,qt.currentPopupAction&&qt.currentPopupAction.cancel(),qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const e=da();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,L_.get())};e()}}qt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="pendingRedirect",hi=new Map;class F_ extends od{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=hi.get(this.auth._key());if(!e){try{const n=await q_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}hi.set(this.auth._key(),e)}return this.bypassAuthState||hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function q_(s,e){const t=ld(e),n=ad(s);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}async function j_(s,e){return ad(s)._set(ld(e),"true")}function $_(s,e){hi.set(s._key(),e)}function ad(s){return rt(s._redirectPersistence)}function ld(s){return li(U_,s.config.apiKey,s.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(s,e,t){return z_(s,e,t)}async function z_(s,e,t){if(We(s.app))return Promise.reject(kt(s));const n=Rn(s);Vu(s,e,Ji),await n._initializationPromise;const i=fa(n,t);return await j_(i,n),i._openRedirect(n,e,"signInViaRedirect")}async function H_(s,e){return await Rn(s)._initializationPromise,hd(s,e,!1)}async function hd(s,e,t=!1){if(We(s.app))return Promise.reject(kt(s));const n=Rn(s),i=fa(n,e),a=await new F_(n,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=10*60*1e3;class K_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Q_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!cd(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Fe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=G_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ch(e))}saveEventToCache(e){this.cachedEventUids.add(Ch(e)),this.lastProcessedEventTime=Date.now()}}function Ch(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function cd({type:s,error:e}){return s==="unknown"&&e?.code==="auth/no-auth-event"}function Q_(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cd(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(s,e={}){return Sn(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,X_=/^https?/;async function Z_(s){if(s.config.emulator)return;const{authorizedDomains:e}=await Y_(s);for(const t of e)try{if(ev(t))return}catch{}Ye(s,"unauthorized-domain")}function ev(s){const e=yo(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const a=new URL(s);return a.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!X_.test(t))return!1;if(J_.test(s))return n===s;const i=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=new _s(3e4,6e4);function Nh(){const s=Ge().___jsl;if(s?.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function nv(s){return new Promise((e,t)=>{var n,i,r;function a(){Nh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nh(),t(Fe(s,"network-request-failed"))},timeout:tv.get()})}if(!((i=(n=Ge().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ge().gapi)===null||r===void 0)&&r.load)a();else{const l=r_("iframefcb");return Ge()[l]=()=>{gapi.load?a():t(Fe(s,"network-request-failed"))},s_(`${i_()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw ci=null,e})}let ci=null;function sv(s){return ci=ci||nv(s),ci}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=new _s(5e3,15e3),rv="__/auth/iframe",ov="emulator/auth/iframe",av={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hv(s){const e=s.config;B(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?aa(e,ov):`https://${s.config.authDomain}/${rv}`,n={apiKey:e.apiKey,appName:s.name,v:bn},i=lv.get(s.config.apiHost);i&&(n.eid=i);const r=s._getFrameworks();return r.length&&(n.fw=r.join(",")),`${t}?${ms(n).slice(1)}`}async function cv(s){const e=await sv(s),t=Ge().gapi;return B(t,s,"internal-error"),e.open({where:document.body,url:hv(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:av,dontclear:!0},n=>new Promise(async(i,r)=>{await n.restyle({setHideOnLeave:!1});const a=Fe(s,"network-request-failed"),l=Ge().setTimeout(()=>{r(a)},iv.get());function c(){Ge().clearTimeout(l),i(n)}n.ping(c).then(c,()=>{r(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dv=500,fv=600,mv="_blank",pv="http://localhost";class Dh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gv(s,e,t,n=dv,i=fv){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c=Object.assign(Object.assign({},uv),{width:n.toString(),height:i.toString(),top:r,left:a}),d=Ee().toLowerCase();t&&(l=ju(d)?mv:t),Fu(d)&&(e=e||pv,c.scrollbars="yes");const m=Object.entries(c).reduce((E,[S,N])=>`${E}${S}=${N},`,"");if(Qw(d)&&l!=="_self")return yv(e||"",l),new Dh(null);const w=window.open(e||"",l,m);B(w,s,"popup-blocked");try{w.focus()}catch{}return new Dh(w)}function yv(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="__/auth/handler",_v="emulator/auth/handler",vv=encodeURIComponent("fac");async function Vh(s,e,t,n,i,r){B(s.config.authDomain,s,"auth-domain-config-required"),B(s.config.apiKey,s,"invalid-api-key");const a={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:bn,eventId:i};if(e instanceof Ji){e.setDefaultLanguage(s.languageCode),a.providerId=e.providerId||"",em(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,w]of Object.entries({}))a[m]=w}if(e instanceof vs){const m=e.getScopes().filter(w=>w!=="");m.length>0&&(a.scopes=m.join(","))}s.tenantId&&(a.tid=s.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const c=await s._getAppCheckToken(),d=c?`#${vv}=${encodeURIComponent(c)}`:"";return`${Iv(s)}?${ms(l).slice(1)}${d}`}function Iv({config:s}){return s.emulator?aa(s,_v):`https://${s.authDomain}/${wv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="webStorageSupport";class bv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=td,this._completeRedirectFn=hd,this._overrideRedirectResult=$_}async _openPopup(e,t,n,i){var r;ht((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=await Vh(e,t,n,yo(),i);return gv(e,a,da())}async _openRedirect(e,t,n,i){await this._originValidation(e);const r=await Vh(e,t,n,yo(),i);return E_(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(ht(r,"If manager is not set, promise should be"),r)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await cv(e),n=new K_(e);return t.register("authEvent",i=>(B(i?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Br,{type:Br},i=>{var r;const a=(r=i?.[0])===null||r===void 0?void 0:r[Br];a!==void 0&&t(!!a),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Z_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gu()||qu()||ca()}}const Tv=bv;var xh="@firebase/auth",Oh="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kv(s){mn(new Wt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=n.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:a,authDomain:l,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ku(s)},d=new t_(n,i,r,c);return a_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),mn(new Wt("auth-internal",e=>{const t=Rn(e.getProvider("auth").getImmediate());return(n=>new Ev(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(xh,Oh,Av(s)),Tt(xh,Oh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=5*60,Rv=rc("authIdTokenMaxAge")||Sv;let Mh=null;const Pv=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Rv)return;const i=t?.token;Mh!==i&&(Mh=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Cv(s=hc()){const e=So(s,"auth");if(e.isInitialized())return e.getImmediate();const t=o_(s,{popupRedirectResolver:Tv,persistence:[V_,I_,td]}),n=rc("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(n,location.origin);if(location.origin===r.origin){const a=Pv(r.toString());g_(t,a,()=>a(t.currentUser)),p_(t,l=>a(l))}}const i=sc("auth");return i&&l_(t,`http://${i}`),t}function Nv(){var s,e;return(e=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&e!==void 0?e:document}n_({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=i=>{const r=Fe("internal-error");r.customData=i,t(r)},n.type="text/javascript",n.charset="UTF-8",Nv().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kv("Browser");let Dv,Ur;function ud(){return Dv??=lc(Pw)}function pa(){return Ur||(Ur=Cv(ud())),Ur}let Fr;function Re(){return Fr||(Fr=ow(ud())),Fr}const qr=s=>Object.fromEntries(Object.entries(s).filter(([,e])=>e!==void 0));class ga{uid;constructor(e){this.uid=e}path(...e){return["users",this.uid,...e].join("/")}async listBooks(){return(await tn(en(Re(),this.path("books")))).docs.map(t=>{const n=t.data();return[t.id,{title:n.title,author:n.author??null,pages:n.pages??null,textSha1:n.textSha1??null,updatedAt:n.updatedAt}]})}async putBook(e,t){const n=Gn(Re());n.set(pt(Re(),this.path("books",e)),qr(t)),await n.commit()}async listPositions(){return(await tn(en(Re(),this.path("positions")))).docs.map(t=>{const n=t.data();return[t.id,{pos:n.pos,textSha1:n.textSha1,before:n.before,updatedAt:n.updatedAt,deviceId:n.deviceId}]})}async putPosition(e,t){const n=Gn(Re());n.set(pt(Re(),this.path("positions",e)),qr(t)),await n.commit()}async listSessions(){return(await tn(en(Re(),this.path("sessions")))).docs.map(t=>[t.id,t.data()])}async getAggregates(e){const t=await tn(en(Re(),this.path("sessions",e,"aggregates")));return t.empty?null:Object.fromEntries(t.docs.map(n=>[n.id,n.data().data.toUint8Array()]))}async deleteAll(){const e=Re(),t=[],n=async(...i)=>(await tn(en(e,this.path(...i)))).docs.map(r=>r.ref);t.push(...await n("books"),...await n("positions"));for(const i of await n("texts"))t.push(...await n("texts",i.id,"chunks"),i);for(const i of await n("sessions"))t.push(...await n("sessions",i.id,"keys"),...await n("sessions",i.id,"aggregates"),i);for(let i=0;i<t.length;i+=400){const r=Gn(e);for(const a of t.slice(i,i+400))r.delete(a);await r.commit()}return t.length}async deleteBook(e,t){const n=Re(),i=[];for(const r of t){for(const a of["keys","aggregates"])i.push(...(await tn(en(n,this.path("sessions",r,a)))).docs.map(l=>l.ref));i.push(pt(n,this.path("sessions",r)))}i.push(pt(n,this.path("positions",e)),pt(n,this.path("books",e)));for(let r=0;r<i.length;r+=400){const a=Gn(n);for(const l of i.slice(r,r+400))a.delete(l);await a.commit()}}async putSession(e,t,n,i){const r=Gn(Re());r.set(pt(Re(),this.path("sessions",e)),qr(t));for(const a of Yi)r.set(pt(Re(),this.path("sessions",e,"aggregates",a)),{data:Dt.fromUint8Array(n[a])});for(const a of i)r.set(pt(Re(),this.path("sessions",e,"keys",String(Math.floor(a.from/Su)).padStart(6,"0"))),{from:a.from,count:a.count,data:Dt.fromUint8Array(a.data)});await r.commit()}}const Lh="0.1.0";class Vv{uid=null;error=null;sent=0;tzOffset=0;queue=Promise.resolve();store;session;meta;constructor(e,t,n){this.store=e,this.session=t,this.meta=n}flush(e=!1){return this.queue=this.queue.then(()=>this.run(e)).catch(t=>{this.error=String(t)}),this.queue}async run(e){const t=this.session;if(!t.events.length||t.firstWall===null)return;const n=await this.store.deviceId();this.uid===null&&(this.uid=Xh(t.firstWall),this.tzOffset=-new Date(t.firstWall*1e3).getTimezoneOffset()*60);const i=t.events.slice(this.sent);i.length&&await this.store.appendEvents(this.uid,this.sent,i),this.sent+=i.length;const r={uid:this.uid,startedAt:t.firstWall,endedAt:Date.now()/1e3,tzOffset:this.tzOffset,startPos:t.startPos,endPos:t.pos,activeSeconds:t.active,keystrokes:t.keystrokes,correct:t.correct,errors:t.errors,backspaces:t.backspaces,uncorrected:t.uncorrected,finished:t.done,bookId:this.meta.bookId,textSha1:this.meta.textSha1,textLength:this.meta.textLength,deviceId:n,version:Lh,termCols:this.meta.termCols,termRows:this.meta.termRows,client:`tuitype-web ${Lh}`,aggregates:e?Cu(Jh(t.events,t.firstWall,this.tzOffset)):null,synced:!1,remote:!1};await this.store.putSession(r)}close(){return this.flush(!0)}}async function xv(s){let e=0;for(const t of await s.sessions()){if(t.remote||t.aggregates)continue;const n=await s.events(t.uid);n.length&&(await s.putSession({...t,aggregates:Cu(Jh(n,t.startedAt,t.tzOffset))}),e+=1)}return e}function qe(s){return new Promise((e,t)=>{s.onsuccess=()=>e(s.result),s.onerror=()=>t(s.error)})}class ya{db;constructor(e){this.db=e}static open(e="tuitype",t=indexedDB){return new Promise((n,i)=>{const r=t.open(e,1);r.onupgradeneeded=()=>{const a=r.result;a.createObjectStore("meta"),a.createObjectStore("books",{keyPath:"id"}),a.createObjectStore("positions",{keyPath:"bookId"}),a.createObjectStore("texts",{keyPath:"sha1"}),a.createObjectStore("sessions",{keyPath:"uid"}),a.createObjectStore("events",{keyPath:["uid","from"]})},r.onsuccess=()=>n(new ya(r.result)),r.onerror=()=>i(r.error)})}close(){this.db.close()}store(e,t="readonly"){return this.db.transaction(e,t).objectStore(e)}get(e,t){return qe(this.store(e).get(t))}all(e){return qe(this.store(e).getAll())}put(e,t,n){return qe(this.store(e,"readwrite").put(t,n))}async deviceId(){const e=await this.get("meta","deviceId");if(e)return e;const t=crypto.randomUUID();return await this.put("meta",t,"deviceId"),t}getMeta(e){return this.get("meta",e)}setMeta(e,t){return this.put("meta",t,e)}getBook(e){return this.get("books",e)}books(){return this.all("books")}putBook(e){return this.put("books",e)}async deleteBook(e){await qe(this.store("books","readwrite").delete(e))}async bookForText(e,t){const n=(await this.books()).filter(r=>r.textSha1===e).sort((r,a)=>a.updatedAt-r.updatedAt)[0];if(n)return n;const i={id:Xh(),title:t,author:null,pages:null,textSha1:e,updatedAt:Date.now()/1e3};return await this.putBook(i),i}getPosition(e){return this.get("positions",e)}positions(){return this.all("positions")}putPosition(e){return this.put("positions",e)}getText(e){return this.get("texts",e)}texts(){return this.all("texts")}putText(e){return this.put("texts",e)}getSession(e){return this.get("sessions",e)}sessions(){return this.all("sessions")}putSession(e){return this.put("sessions",e)}appendEvents(e,t,n){return this.put("events",{uid:e,from:t,events:n})}async events(e){const t=IDBKeyRange.bound([e,0],[e,Number.MAX_SAFE_INTEGER]);return(await qe(this.store("events").getAll(t))).sort((i,r)=>i.from-r.from).flatMap(i=>i.events)}async removeBook(e){const t=await this.getBook(e);for(const i of await this.sessions())i.bookId===e&&(await qe(this.store("events","readwrite").delete(IDBKeyRange.bound([i.uid,0],[i.uid,Number.MAX_SAFE_INTEGER]))),await qe(this.store("sessions","readwrite").delete(i.uid)));await qe(this.store("positions","readwrite").delete(e)),await this.deleteBook(e);const n=t?.textSha1;n&&!(await this.books()).some(i=>i.textSha1===n)&&await qe(this.store("texts","readwrite").delete(n))}async resetSyncState(){for(const e of await this.books())await this.putBook({...e,syncedVersion:void 0});for(const e of await this.positions())await this.putPosition({...e,syncedVersion:void 0});for(const e of await this.sessions())e.remote||await this.putSession({...e,synced:!1})}async renameBook(e,t){const n=await this.getBook(e);if(!n)return;await this.putBook({...n,id:t}),await this.deleteBook(e);const i=await this.getPosition(e);i&&(await qe(this.store("positions","readwrite").delete(e)),await this.putPosition({...i,bookId:t}));for(const r of await this.sessions())r.bookId===e&&await this.putSession({...r,bookId:t})}}async function Ov(s,e){const t={books:0,positions:0,sessions:0};for(const[i,r]of await e.listBooks()){let a=await s.getBook(i);if(!a&&r.textSha1){const l=(await s.books()).find(c=>c.textSha1===r.textSha1&&c.syncedVersion===void 0&&c.id!==i);l&&(await s.renameBook(l.id,i),a=await s.getBook(i))}a?r.updatedAt>a.updatedAt?(await s.putBook({...a,...r,id:i,textSha1:r.textSha1??a.textSha1,syncedVersion:r.updatedAt}),t.books+=1):await s.putBook({...a,syncedVersion:r.updatedAt}):(await s.putBook({id:i,...r,syncedVersion:r.updatedAt}),t.books+=1)}for(const[i,r]of await e.listPositions()){if(!await s.getBook(i))continue;const a=await s.getPosition(i);!a||r.updatedAt>a.updatedAt?(await s.putPosition({bookId:i,...r,syncedVersion:r.updatedAt}),t.positions+=1):await s.putPosition({...a,syncedVersion:r.updatedAt})}const n=new Set((await s.sessions()).map(i=>i.uid));for(const[i,r]of await e.listSessions()){if(n.has(i))continue;const a=await e.getAggregates(i);!a||!Yi.every(l=>l in a)||(await s.getBook(r.bookId)||await s.putBook({id:r.bookId,title:"(unknown book)",author:null,pages:null,textSha1:r.textSha1,updatedAt:0,syncedVersion:0}),await s.putSession({...r,uid:i,aggregates:await Rw(a),synced:!0,remote:!0}),t.sessions+=1)}return t}async function Mv(s,e){const t={books:0,positions:0,sessions:0};for(const n of await s.books()){if(n.syncedVersion!==void 0&&n.syncedVersion>=n.updatedAt)continue;const{id:i,syncedVersion:r,...a}=n;await e.putBook(i,a),await s.putBook({...n,syncedVersion:n.updatedAt}),t.books+=1}for(const n of await s.positions()){if(n.syncedVersion!==void 0&&n.syncedVersion>=n.updatedAt)continue;const{bookId:i,syncedVersion:r,...a}=n;await e.putPosition(i,a),await s.putPosition({...n,syncedVersion:n.updatedAt}),t.positions+=1}for(const n of(await s.sessions()).sort((i,r)=>i.startedAt-r.startedAt)){if(n.synced||n.remote||!n.aggregates)continue;const{uid:i,aggregates:r,synced:a,remote:l,...c}=n,d={};for(const m of Yi)d[m]=await Pu(r[m]);await e.putSession(i,c,d,await Sw(await s.events(i))),await s.putSession({...n,synced:!0}),t.sessions+=1}return t}async function Lv(s,e){return{pulled:await Ov(s,e),pushed:await Mv(s,e)}}const Bv=s=>s?{uid:s.uid,email:s.email,name:s.displayName}:null;function Uv(s){const e=pa();return H_(e).catch(()=>{}),y_(e,t=>s(Bv(t)))}async function Fv(){const s=pa(),e=new nt;e.setCustomParameters({prompt:"select_account"});try{return await B_(s,e),null}catch(t){const n=t.code??"";return n==="auth/popup-blocked"||n==="auth/operation-not-supported-in-this-environment"?(await W_(s,e),null):n==="auth/popup-closed-by-user"||n==="auth/cancelled-popup-request"?null:n||"sign-in failed"}}async function qv(){await w_(pa())}function jv(s,e,t=()=>{}){const n=document.createElement("div");n.className="account";const i=document.createElement("span");i.id="sync-status";let r=null;s.append(n);const a=(l,c)=>{n.replaceChildren();const d=document.createElement("button");if(d.type="button",l){const m=document.createElement("span");m.id="account-name",m.textContent=l.email??l.name??l.uid,d.id="sign-out",d.textContent="sign out",d.onclick=()=>void qv();const w=document.createElement("button");w.type="button",w.id="delete-cloud",w.textContent="delete cloud data",w.onclick=()=>{confirm(`Delete everything you have in the cloud (books, positions, sessions, key presses)?
Data on this device stays.`)&&t()},n.append(i," · ",m," · ",w," · ",d)}else d.id="sign-in",d.textContent="sign in with Google",d.onclick=async()=>{const m=await Fv();m&&a(null,m)},n.append(d),c&&n.append(` (${c})`)};return a(null),Uv(l=>{r=l,a(l),e(l)}),{setStatus:l=>{i.textContent=r?l:""}}}const jr=(s,e,t="",n="text")=>`<label>${s} <input id="${e}" type="${n}" value="${t.replace(/"/g,"&quot;")}" ${n==="number"?'min="1"':""}></label>`;class $v{el=document.createElement("div");store;hooks;constructor(e,t,n){this.store=t,this.hooks=n,this.el.className="library hidden",this.el.setAttribute("role","dialog"),e.append(this.el)}get visible(){return!this.el.classList.contains("hidden")}hide(){this.el.classList.add("hidden"),this.hooks.close()}async show(){this.el.classList.remove("hidden");const e=(await this.store.books()).sort((l,c)=>l.title.localeCompare(c.title)),t=new Map((await this.store.texts()).map(l=>[l.sha1,Array.from(l.text).length])),n=new Map((await this.store.positions()).map(l=>[l.bookId,l.pos])),i=e.map(l=>{const c=l.textSha1?t.get(l.textSha1):void 0,d=c?`${Math.floor(100*(n.get(l.id)??0)/c)}%`:"no text here",m=l.id===this.hooks.currentBookId()?"▸ ":"  ";return`<div class="book" data-id="${l.id}">${m}<button class="open" ${c?"":"disabled"}>${Ys(l.title)}</button> <span class="dim">${Ys(l.author??"")}${l.pages?` · ${l.pages} pages`:""} · ${d}</span> <button class="edit">details</button></div>`}).join(""),r=new Set(e.map(l=>l.title)),a=El.map((l,c)=>r.has(l.title)?"":`<button class="example" data-i="${c}">${Ys(l.title)} (${Ys(l.author)})</button> `).join("");this.el.innerHTML=`<div class="box"><h2>Books</h2>${i||"<p>No books yet.</p>"}
      ${a?`<p class="dim">Add an example text, public domain: ${a}</p>`:""}
      <p><label>Add a text file (.txt) <input id="file" type="file" accept=".txt,text/plain"></label></p>
      <div id="form"></div><p><button id="close">close</button></p></div>`,this.el.querySelector("#close").addEventListener("click",()=>this.hide()),this.el.querySelector("#file").addEventListener("change",l=>void this.chosen(l));for(const l of this.el.querySelectorAll(".example"))l.addEventListener("click",async()=>{l.disabled=!0;try{await Pf(this.store,El[Number(l.dataset.i)])}catch(c){this.el.querySelector("#form").textContent=String(c);return}await this.show()});for(const l of this.el.querySelectorAll(".book")){const c=e.find(d=>d.id===l.dataset.id);l.querySelector(".open").addEventListener("click",()=>{this.el.classList.add("hidden"),this.hooks.open(c)}),l.querySelector(".edit").addEventListener("click",()=>this.form(c,null))}}async chosen(e){const t=e.target.files?.[0];t&&this.form(null,{name:t.name.replace(/\.[^.]*$/,""),raw:await t.text()})}form(e,t){const n=this.el.querySelector("#form");n.innerHTML=`<h3>${t?"New text":"Details"}</h3>${jr("Title","f-title",e?.title??t?.name??"")}
      ${jr("Author","f-author",e?.author??"")} ${jr("Pages","f-pages",e?.pages?String(e.pages):"","number")}
      <button id="f-save">save</button> ${e?'<button id="f-delete">delete book</button>':""} <span id="f-error"></span>`,n.querySelector("#f-delete")?.addEventListener("click",async()=>{if(!(!e||!confirm(`Delete "${e.title}" with its position and statistics? This cannot be undone.`)))try{await this.hooks.remove(e),await this.show()}catch(i){n.querySelector("#f-error").textContent=String(i instanceof Error?i.message:i)}}),n.querySelector("#f-save").addEventListener("click",async()=>{const i=l=>n.querySelector(l).value.trim(),r=Number(i("#f-pages")),a={title:i("#f-title")||e?.title||t?.name||"Untitled",author:i("#f-author")||null,pages:Number.isInteger(r)&&r>0?r:null};try{t?await Eo(this.store,t.raw,a.title,a.author,a.pages):await Nf(this.store,e.id,a),await this.show()}catch(l){n.querySelector("#f-error").textContent=String(l instanceof Error?l.message:l)}})}}function Ys(s){return s.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}const Bh=80,Wv=14,zv=25,Hv="↵";class Gv{text;session;live;layout;top=0;width=Bh;height=1;panel=!1;grid;sinceSave=0;constructor(e,t,n){this.text=e,this.session=new Il(e,t),this.live=new bl(this.session),this.grid=n,this.resize(n)}newSession(e=this.session.pos){this.session=new Il(this.text,e),this.live=new bl(this.session),this.sinceSave=0,this.top=this.layout.initialTop(e,this.height)}resize(e){this.grid=e,this.panel=e.rows>=Wv,this.height=Math.max(e.rows-(this.panel?4:3),1),this.width=Math.max(Math.min(e.cols-4,Bh),1),this.layout=new cf(this.text,this.width),this.top=this.layout.initialTop(this.session.pos,this.height)}visible(){return this.layout.lines.slice(this.top,this.top+this.height)}press(e,t){const n=this.session;let i;if(e==="Escape")return{action:"quit",scrolled:!1};if(e==="Backspace")n.backspace(t),i="backspace";else{if(n.done)return{action:"ignored",scrolled:!1};if(e==="Enter")n.type(`
`,t),i="type";else if(Array.from(e).length===1&&e>=" "&&!(e>=""&&e<=""))n.type(e,t),i="type";else return{action:"ignored",scrolled:!1}}this.sinceSave+=1;const r=this.top;return this.top=this.layout.scroll(this.top,n.pos,this.height),{action:i,scrolled:this.top!==r}}shouldSave(){return this.sinceSave<zv?!1:(this.sinceSave=0,!0)}statusText(e){const t=this.session,n=Math.floor(100*t.pos/Math.max(t.text.length,1));return t.done?"Finished! Esc to stop, Backspace to go back":`${e}  ${n}%  Esc to stop`}panelLines(){const e=this.live.view,t=Math.floor(e.active/60),n=Math.floor(e.active%60),i=`${e.paused?"paused":`${Math.round(e.wpm).toString().padStart(4)} wpm`}   avg ${Math.round(e.avg)}   best ${Math.round(this.live.best)}   ${Math.round(e.accuracy)}% accurate`,r=`streak ${e.streak}   errors ${e.errors}   backspaces ${e.backspaces}   typing ${t}:${String(n).padStart(2,"0")}`;return[i,r]}}const $r="▁▂▃▄▅▆▇█";function dd(s,e){if(!s.length)return"";const t=e??(Math.max(...s)||1);return s.map(n=>$r[Math.min(Math.floor(n/t*($r.length-1)+.5),$r.length-1)]).join("")}const Wr=30,Uh=15,Fh=3,qh=10,Kv=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Kn=s=>s.aggregates;function Le(s,e=0){if(!Number.isFinite(s))return s;const t=10**e,n=s*t,a=(s.toFixed(Math.min(e+40,100)).split(".")[1]??"").slice(e);if(/^50*$/.test(a)){const c=Math.floor(n);return(c%2===0?c:c+1)/t}return Number(s.toFixed(e))}const Me=(s,e)=>e?Le(100*s/e,1):null,je=(s,e)=>e&&e>=1?Le(s/5/(e/60),1):null,Js=s=>{const e=Math.trunc(s||0);return`${Math.floor(e/3600)}:${String(Math.floor(e%3600/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`},Xs=s=>s===" "?"space":s===`
`?"enter":s===null?"-":s,zr=(s,e)=>Math.floor((s+e)/86400),jh=s=>new Date(s*864e5).toISOString().slice(0,10),Qv=s=>((s+3)%7+7)%7,Zs=(s,e,t=!1)=>new Date(Math.floor(s+e)*1e3).toISOString().slice(0,t?10:16).replace("T"," ");function Yv(s,e){const t=[...new Set(s)].sort((a,l)=>a-l);let n=0,i=0,r=null;for(const a of t)i=r!==null&&a-r===1?i+1:1,n=Math.max(n,i),r=a;return[r!==null&&e-r<=1?i:0,n]}const Ve=s=>s.reduce((e,t)=>e+t,0),et=(s,e)=>s<e?-1:s>e?1:0;class Jv{sessions;books;today;constructor(e,t,n){this.books=t,this.today=n.today,this.sessions=e.filter(i=>(n.since===void 0||i.startedAt>=n.since)&&(n.bookId===void 0||i.bookId===n.bookId))}totals(e){const t=new Map;for(const n of this.sessions)for(const i of Kn(n)?.[e]??[]){const r=t.get(i[0])??[0,0,0,0];r[0]+=i[1],r[1]+=i[2],r[2]+=i[3],r[3]+=i[4],t.set(i[0],r)}return t}flow(){const e=Object.fromEntries(Qr.map(t=>[t,0]));for(const t of this.sessions){const n=Kn(t)?.flow;if(n)for(const i of Qr)e[i]=i==="longest_clean_run"||i==="peak_burst_wpm"?Math.max(e[i],n[i]):e[i]+n[i]}return e}percentile(e){const t=new Map;for(const l of this.sessions)for(const[c,d]of Kn(l)?.intervals??[])t.set(c,(t.get(c)??0)+d);const n=[...t].sort((l,c)=>l[0]-c[0]),i=Ve(n.map(l=>l[1]));if(!i)return null;const r=Math.trunc((i-1)*e);let a=0;for(const[l,c]of n)if(a+=c,a>r)return l*Yh;return null}overview(){const e=this.sessions,t=e.length,n=Ve(e.map(D=>D.keystrokes)),i=Ve(e.map(D=>D.correct)),r=Ve(e.map(D=>D.activeSeconds)),a=Ve(e.map(D=>D.uncorrected)),l=Ve(e.map(D=>D.backspaces)),c=t?[...e].sort((D,q)=>D.startedAt-q.startedAt||et(D.uid,q.uid))[0]:null,d=t?[...e].sort((D,q)=>q.endedAt-D.endedAt||et(D.uid,q.uid))[0]:null,m=e.map(D=>zr(D.startedAt,D.tzOffset)),[w,E]=Yv(m,this.today);let S=null;for(const D of e)if(D.activeSeconds>=30&&D.keystrokes>=50){const q=D.keystrokes/5/(D.activeSeconds/60);(S===null||q>S)&&(S=q)}const N=new Map;e.forEach((D,q)=>{const ge=N.get(m[q])??[0,0];ge[0]+=D.keystrokes,ge[1]+=D.activeSeconds,N.set(m[q],ge)});const x=[...N].sort((D,q)=>D[0]-q[0]).slice(-30).map(([,[D,q]])=>je(D,q)||0),C=this.flow(),z=C.peak_burst_wpm,G=[["sessions",t],["completed texts",e.filter(D=>D.finished).length],["first session",c?Zs(c.startedAt,c.tzOffset):null],["last session",d?Zs(d.endedAt,d.tzOffset):null],["days practiced",new Set(m).size],["current streak (days)",w],["longest streak (days)",E],["time in app",Js(Ve(e.map(D=>D.endedAt-D.startedAt)))],["typing time",Js(r)],["keystrokes",n],["words typed (keys/5)",tt(n/5)],["accuracy %",Me(i,n)],["mistakes",Ve(e.map(D=>D.errors))],["left uncorrected",a],["backspaces",l],["backspaces per 100 keys",n?Le(100*l/n,1):null],["gross wpm",je(n,r)],["net wpm",je(Math.max(n-a,0),r)],["best session wpm",S?Le(S,1):null],[`peak ${ei}-key burst wpm`,z?Le(z,1):null],["daily wpm trend (last 30 days)",dd(x)],["median key interval ms",this.percentile(.5)],["90th percentile interval ms",this.percentile(.9)],["hesitations (1-5 s gaps)",C.hesitations],["pauses (over 5 s)",C.breaks],["longest error-free run (keys)",C.longest_clean_run]];return{name:"overview",title:"Overview",columns:["metric","value"],rows:G}}mistakes(){const e=this.flow(),t=e.backspace_runs,n=[["mistakes",Ve(this.sessions.map(i=>i.errors))],["mistakes later corrected (retypes)",e.fixed],["backspace runs",t],["runs that fixed a mistake",e.runs_fixing_error],["runs that erased only correct text",e.needless_runs],["average backspace run (chars)",t?Le(e.run_chars/t,1):null],["chars typed after a mistake before noticing",e.overshoot_n?Le(e.overshoot_sum/e.overshoot_n,1):null],["mean time to notice a mistake (s)",e.notice_n?Le(e.notice_ms_sum/e.notice_n/1e3,2):null]];return{name:"mistakes",title:"How mistakes are handled",columns:["metric","value"],rows:n}}days(){const e=new Map;for(const n of this.sessions){const i=zr(n.startedAt,n.tzOffset),r=e.get(i)??[0,0,0,0,0];r[0]+=1,r[1]+=n.activeSeconds,r[2]+=n.keystrokes,r[3]+=n.correct,r[4]+=n.uncorrected,e.set(i,r)}const t=[...e].sort((n,i)=>n[0]-i[0]).slice(-14).map(([n,[i,r,a,l,c]])=>[jh(n),i,Le(r/60,1),a,je(a,r),je(Math.max(a-c,0),r),Me(l,a)]);return{name:"days",title:"Last 14 days",columns:["date","sessions","typing min","keys","gross wpm","net wpm","accuracy %"],rows:t}}weeks(){const e=new Map;for(const n of this.sessions){const i=zr(n.startedAt,n.tzOffset),r=i-Qv(i),a=e.get(r)??[0,0,0,0];a[0]+=1,a[1]+=n.activeSeconds,a[2]+=n.keystrokes,a[3]+=n.correct,e.set(r,a)}const t=[...e].sort((n,i)=>n[0]-i[0]).slice(-12).map(([n,[i,r,a,l]])=>[`week of ${jh(n)}`,i,Le(r/60,1),a,je(a,r),Me(l,a)]);return{name:"weeks",title:"Last 12 weeks",columns:["week","sessions","typing min","keys","gross wpm","accuracy %"],rows:t}}byTime(e,t,n,i,r){const a=new Map;for(const c of this.sessions)for(const d of Kn(c)?.buckets??[]){const m=a.get(d[i])??[0,0,0];m[0]+=d[2],m[1]+=d[3],m[2]+=d[4],a.set(d[i],m)}const l=[...a].sort((c,d)=>c[0]-d[0]).map(([c,[d,m,w]])=>[r(c),d,je(d,w/1e3),Me(d-m,d)]);return{name:e,title:t,columns:[n,"keys","gross wpm","accuracy %"],rows:l}}hours(){return this.byTime("hours","By hour of day (local time)","hour",1,e=>`${String(e).padStart(2,"0")}:00`)}weekdays(){return this.byTime("weekdays","By weekday","weekday",0,e=>`${e+1} ${Kv[e]}`)}ranked(e,t,n,i=r=>!0){return[...e].filter(([,r])=>r[0]>=t&&i(r)).sort((r,a)=>{const l=n(r[1]),c=n(a[1]);for(let d=0;d<l.length;d++)if(l[d]!==c[d])return c[d]-l[d];return et(r[0],a[0])}).slice(0,qh)}keysTable(e,t,n){const i=this.ranked(this.totals("chars"),Wr,n).map(([r,[a,l,c,d]])=>[Xs(r),a,l,Me(l,a),c?tt(d/c):null]);return{name:e,title:t,columns:["key","times","mistakes","mistake %","mean ms"],rows:i}}slow_keys(){return this.keysTable("slow_keys",`Slowest keys (at least ${Wr} presses)`,e=>[e[2]?e[3]/e[2]:-1/0])}error_keys(){return this.keysTable("error_keys",`Most mistyped keys (at least ${Wr} presses)`,e=>[e[1]/e[0]])}char_accuracy(){const e=[...this.totals("chars")].sort((t,n)=>n[1][0]-t[1][0]||et(t[0],n[0])).map(([t,[n,i,r,a]])=>[Xs(t),n,i,Me(n-i,n),r?tt(a/r):null]);return{name:"char_accuracy",title:"Accuracy per character",columns:["key","times","mistakes","accuracy %","mean ms"],rows:e}}confusions(){const e=new Map;for(const n of this.sessions)for(const[i,r,a]of Kn(n)?.confusions??[]){const l=JSON.stringify([i,r]);e.set(l,(e.get(l)??0)+a)}const t=[...e].map(([n,i])=>({k:JSON.parse(n),n:i})).sort((n,i)=>i.n-n.n||et(n.k[0],i.k[0])||et(n.k[1],i.k[1])).slice(0,qh*2).map(({k:n,n:i})=>[Xs(n[0]),Xs(n[1]),i]);return{name:"confusions",title:"Most common mix-ups",columns:["wanted","typed","times"],rows:t}}bigramTable(e,t,n){const i=this.ranked(this.totals("bigrams"),Uh,n).map(([r,[a,l,c,d]])=>[r.replaceAll(" ","␣").replaceAll(`
`,"↵"),a,l,Me(l,a),c?tt(d/c):null]);return{name:e,title:t,columns:["pair","times","mistakes","mistake %","mean ms"],rows:i}}slow_bigrams(){return this.bigramTable("slow_bigrams",`Slowest letter pairs (at least ${Uh} times)`,e=>[e[2]?e[3]/e[2]:-1/0])}error_bigrams(){return this.bigramTable("error_bigrams","Most mistyped letter pairs",e=>[e[1]/e[0],e[0]])}wordTable(e,t,n){const i=this.ranked(this.totals("words"),Fh,n,r=>r[2]>0).map(([r,[a,l,c,d]])=>[r,a,l,Me(l,a),tt(d/c)]);return{name:e,title:t,columns:["word","times","with mistake","mistake %","ms per letter"],rows:i}}slow_words(){return this.wordTable("slow_words",`Slowest words (at least ${Fh} times)`,e=>[e[3]/e[2]])}missed_words(){return this.wordTable("missed_words","Most mistyped words",e=>[e[1]/e[0],e[0]])}booksTable(){const e=this.books.map(t=>{const n=this.sessions.filter(w=>w.bookId===t.id),i=n.length?Math.max(...n.map(w=>w.textLength)):null,r=n.length?Math.max(...n.map(w=>w.endPos)):null,a=n.length?Ve(n.map(w=>w.activeSeconds)):null,l=n.length?Ve(n.map(w=>w.keystrokes)):null,c=n.length?Ve(n.map(w=>w.correct)):null,d=n.length?Math.max(...n.map(w=>w.startedAt+w.tzOffset)):null,m=i?Me(r||0,i):null;return{sort:d,title:t.title,id:t.id,row:[t.title,t.author,t.pages,m,t.pages&&i?Le(t.pages*(r||0)/i,1):null,n.length,Js(a),je(l||0,a),Me(c||0,l),n.filter(w=>w.finished).length,d?Zs(d,0,!0):null]}}).sort((t,n)=>(n.sort??-1/0)-(t.sort??-1/0)||et(t.title,n.title)||et(t.id,n.id)).map(t=>t.row);return{name:"books",title:"Books",columns:["title","author","pages","progress %","pages typed","sessions","typing","gross wpm","accuracy %","completed","last"],rows:e}}sessionsTable(){const e=n=>this.books.find(i=>i.id===n.bookId)?.title??n.textSha1.slice(0,8),t=[...this.sessions].sort((n,i)=>i.startedAt-n.startedAt||et(i.uid,n.uid)).slice(0,15).map(n=>[Zs(n.startedAt,n.tzOffset),e(n),Js(n.activeSeconds),n.keystrokes,je(n.keystrokes,n.activeSeconds),je(Math.max(n.keystrokes-n.uncorrected,0),n.activeSeconds),Me(n.correct,n.keystrokes),n.errors,n.backspaces]);return{name:"sessions",title:"Latest sessions",columns:["started","text","typing","keys","gross wpm","net wpm","accuracy %","mistakes","backspaces"],rows:t}}all(){return[this.overview(),this.mistakes(),this.days(),this.weeks(),this.hours(),this.weekdays(),this.slow_keys(),this.error_keys(),this.char_accuracy(),this.confusions(),this.slow_bigrams(),this.error_bigrams(),this.slow_words(),this.missed_words(),this.booksTable(),this.sessionsTable()]}}const $h=[["all time",void 0],["last 30 days",30],["last 7 days",7]],Xv=s=>s===null?"-":typeof s=="number"&&!Number.isInteger(s)?s.toFixed(1):String(s),an=s=>s.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Zv(s){if(!s.rows.length)return`<h3>${an(s.title)}</h3><p class="dim">(no data yet)</p>`;const e=s.columns.map((i,r)=>s.rows.every(a=>typeof a[r]=="number"||a[r]===null)),t=s.columns.map((i,r)=>`<th class="${e[r]?"num":""}">${an(i)}</th>`).join(""),n=s.rows.map(i=>`<tr>${i.map((r,a)=>`<td class="${e[a]?"num":""}">${an(Xv(r))}</td>`).join("")}</tr>`).join("");return`<h3>${an(s.title)}</h3><table data-name="${s.name}"><thead><tr>${t}</tr></thead><tbody>${n}</tbody></table>`}class eI{el=document.createElement("div");store;hooks;bookId="";range=0;constructor(e,t,n){this.store=t,this.hooks=n,this.el.className="library stats hidden",this.el.setAttribute("role","dialog"),e.append(this.el)}get visible(){return!this.el.classList.contains("hidden")}hide(){this.el.classList.add("hidden"),this.hooks.close()}async show(){this.el.classList.remove("hidden");const e=(await this.store.books()).sort((c,d)=>c.title.localeCompare(d.title)),t=(await this.store.sessions()).filter(c=>c.aggregates),n=$h[this.range][1],i=Date.now()/1e3,r=Math.floor((i-new Date().getTimezoneOffset()*60)/86400),a=new Jv(t,e,{today:r,since:n?i-n*86400:void 0,bookId:this.bookId||void 0}),l=(c,d)=>c.map(([m,w])=>`<option value="${an(m)}" ${m===d?"selected":""}>${an(w)}</option>`).join("");this.el.innerHTML=`<div class="box wide"><h2>Statistics</h2>
      <p><label>Book <select id="s-book">${l([["","all books"],...e.map(c=>[c.id,c.title])],this.bookId)}</select></label>
      <label>Period <select id="s-range">${l($h.map(([c],d)=>[String(d),c]),String(this.range))}</select></label>
      <button id="s-close">close</button></p>
      ${a.sessions.length?a.all().map(Zv).join(""):"<p>No sessions yet: type something first.</p>"}</div>`,this.el.querySelector("#s-close").addEventListener("click",()=>this.hide()),this.el.querySelector("#s-book").addEventListener("change",c=>{this.bookId=c.target.value,this.show()}),this.el.querySelector("#s-range").addEventListener("change",c=>{this.range=Number(c.target.value),this.show()})}}const Wh={[Gh]:"ok",[fn]:"bad",[Kh]:"fixed",[Qh]:"old"};class tI{root;text=document.createElement("div");panel=document.createElement("div");status=document.createElement("div");overlay=document.createElement("div");probe=document.createElement("span");cells=new Map;charW=10;lineH=24;left=0;title;constructor(e,t){this.root=e,this.title=t,this.probe.id="probe",this.probe.textContent="M".repeat(100),this.text.className="text",this.panel.className="panel",this.status.className="status",this.overlay.className="overlay hidden",e.append(this.probe,this.text,this.panel,this.status,this.overlay)}setTitle(e){this.title=e}measure(){const e=this.probe.getBoundingClientRect();return this.charW=e.width/100||10,this.lineH=e.height||24,{cols:Math.max(Math.floor(this.root.clientWidth/this.charW),1),rows:Math.max(Math.floor(this.root.clientHeight/this.lineH),1)}}draw(e){const{cols:t,rows:n}=e.grid;this.left=Math.max(Math.floor((t-e.width)/2),0)*this.charW,this.text.style.left=`${this.left}px`,this.text.replaceChildren(),this.cells.clear();for(const i of e.visible()){const r=document.createElement("div");r.className="line";for(let a=i.start;a<i.end;a++){const l=document.createElement("span");this.cells.set(a,l),this.paint(e,a),r.append(l)}this.text.append(r)}this.panel.style.left=`${this.left}px`,this.panel.style.top=`${(n-3)*this.lineH}px`,this.panel.classList.toggle("hidden",!e.panel),this.status.style.top=`${(n-1)*this.lineH}px`,this.drawPanel(e),this.status.textContent=e.statusText(this.title)}touch(e,...t){for(const n of t)this.cells.has(n)&&this.paint(e,n);this.status.textContent=e.statusText(this.title)}paint(e,t){const n=this.cells.get(t);if(!n)return;const i=e.session.marks[t],r=e.session.text[t],a=["c"];Wh[i]&&a.push(Wh[i]),i===fn&&r===" "&&a.push("space"),t===e.session.pos&&a.push("cursor"),n.className=a.join(" ");const l=r===`
`?Hv:r;n.textContent!==l&&(n.textContent=l)}drawPanel(e){const[t,n]=e.panelLines(),i=dd(e.live.history,Math.max(e.live.best,1,...e.live.history)),r=e.width-t.length-3;this.panel.replaceChildren();const a=document.createElement("div");if(a.textContent=t,r>0&&i){const c=document.createElement("span");c.className="dim",c.textContent="   "+i.slice(-r),a.append(c)}const l=document.createElement("div");l.className="dim",l.textContent=n,this.panel.append(a,l)}showOverlay(e){this.overlay.textContent=e??"",this.overlay.classList.toggle("hidden",e===null)}}const vo=()=>performance.now()/1e3,Pn=document.getElementById("app"),oe=await ya.open();await xv(oe);let Gt,us="",Y,bs,ae="typing",$t=null,Hr=!1;const Se=new tI(Pn,"tuitype");function wa(){bs=new Vv(oe,Y.session,{bookId:Gt.id,textSha1:us,textLength:Y.session.text.length,termCols:Y.grid.cols,termRows:Y.grid.rows})}async function er(){const s=Y.session.pos;await oe.putPosition({bookId:Gt.id,pos:s,textSha1:us,before:tf(Y.text,s),updatedAt:Date.now()/1e3,deviceId:await oe.deviceId()}),await oe.setMeta("lastBookId",Gt.id)}async function Io(s){const e=s.textSha1?await oe.getText(s.textSha1):void 0;if(!e)throw new Error(`no text for ${s.title} on this device`);Gt=s,us=e.sha1;const t=zh(e.text,await oe.getPosition(s.id),us);Y=new Gv(e.text,t,Se.measure()),Se.setTitle(s.title),Se.draw(Y),wa(),await oe.setMeta("lastBookId",s.id)}async function fd(){const s=await oe.getMeta("lastBookId"),e=s?await oe.getBook(s):void 0;return e?.textSha1&&await oe.getText(e.textSha1)?e:Cf(oe)}await Io(await fd());const md=new $v(Pn,oe,{open:async s=>{await gd(),await Io(s),ae="typing"},close:()=>{ae==="library"&&(ae="stopped")},currentBookId:()=>Gt.id,remove:async s=>{if($t){const e=(await oe.sessions()).filter(t=>t.bookId===s.id).map(t=>t.uid);await new ga($t).deleteBook(s.id,e)}await oe.removeBook(s.id),s.id===Gt.id&&await Io(await fd())}}),pd=new eI(Pn,oe,{close:()=>{ae==="stats"&&(ae="stopped")}}),Ts=document.createElement("div");Ts.className="books-link";Ts.innerHTML='<button id="books" type="button">books</button> · <button id="stats" type="button">stats</button>';Pn.append(Ts);Ts.querySelector("#books").addEventListener("click",async()=>{await Ni(),ae="library",Se.showOverlay(null),await md.show()});Ts.querySelector("#stats").addEventListener("click",async()=>{await Ni(),ae="stats",Se.showOverlay(null),await pd.show()});async function gd(){await bs.close(),await er()}async function Ni(){ae!=="stopped"&&(ae="stopped",await gd(),Se.showOverlay(`Stopped. Your place is saved.

Press Enter or click to continue.`),wd())}function yd(){ae="typing",Se.showOverlay(null),Y.newSession(),Se.draw(Y),wa()}const dn=jv(Pn,s=>{$t=s?.uid??null,dn.setStatus(s?"signed in":""),s&&wd()},async()=>{if($t)try{const s=await new ga($t).deleteAll();await oe.resetSyncState(),dn.setStatus(`deleted ${s} documents from the cloud`)}catch(s){dn.setStatus(`not deleted (${s instanceof Error?s.message:s})`)}});async function wd(){if(!(!$t||Hr)){Hr=!0,dn.setStatus("syncing…");try{const s=await Lv(oe,new ga($t)),e=s.pulled.sessions+s.pushed.sessions;if(dn.setStatus(`synced ${new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}${e?` (${e} sessions)`:""}`),Y.session.keystrokes===0&&ae==="typing"){const t=zh(Y.text,await oe.getPosition(Gt.id),us);t!==Y.session.pos&&(Y.newSession(t),Se.draw(Y),wa())}}catch(s){dn.setStatus(`not synced (${s instanceof Error?s.message:s})`)}finally{Hr=!1}}}document.addEventListener("keydown",s=>{if(s.isComposing||s.key==="Dead"||s.key==="Process")return;if(ae==="library"||ae==="stats"){s.key==="Escape"&&(ae==="library"?md:pd).hide();return}if(ae==="stopped"){s.key==="Enter"&&yd(),s.preventDefault();return}if((s.ctrlKey||s.metaKey)&&!s.getModifierState("AltGraph"))return;const e=Y.session.pos,{action:t,scrolled:n}=Y.press(s.key,vo());if(t!=="ignored"){if(s.preventDefault(),t==="quit"){Ni();return}Y.live.update(vo()),n?Se.draw(Y):(Se.touch(Y,e,Y.session.pos),Y.panel&&Se.drawPanel(Y)),Y.shouldSave()&&(er(),bs.flush()),t==="type"&&Y.session.done&&Ni()}});setInterval(()=>{ae==="typing"&&Y.live.update(vo())&&Se.drawPanel(Y)},1e3);window.addEventListener("resize",()=>{Y.resize(Se.measure()),Se.draw(Y)});document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ae==="typing"&&(er(),bs.flush())});window.addEventListener("pagehide",()=>{ae==="typing"&&(er(),bs.flush())});Pn.addEventListener("click",s=>{ae==="stopped"&&!s.target.closest(".account, .books-link")&&yd()});
