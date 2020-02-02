INSERT INTO blogful_articles
    (title, date_published, content)
VALUES
    ('How to write a great commit message',             now() - '1 days'::INTERVAL,     'Use a text editor. First line is message. then a blank line. then additional details'),
    ('Why learn to code',                               now() - '30 days'::INTERVAL,    'It is the future and everything uses it.'),
    ('Great looking code with Prettier',                now() - '25 days'::INTERVAL,    'Set up Husky and Prettier with hooks to enforce certain standards when you commit'),
    ('Practicing coding challenges',                    now() - '20 days'::INTERVAL,    'Read "Cracking the Coding Interview" and jump on LeetCode'),
    ('My bootcamp experience',                          now() - '15 days'::INTERVAL,    'Multi-part series (because I am not done with the bootcamp)'),
    ('Valley vs Mountain Fruit in the Napa Valley',     now() - '10 days'::INTERVAL,    'While the valley can create great quality and quantity because of alluvial fans, poor soils and better climate lead to higher quality in the mountains'),
    ('How wine is made',                                now() - '5 days'::INTERVAL,     'Crush a grape. The natural yeast on the outside will convert the sugars in the grape into alcohol and heat'),
    ('The modern board game revolution',                now() - '4 days'::INTERVAL,     'Holy crap board games have changed so much and they are amazing now. Stop reading this and pick up a board game right now!'),
    ('How to start learning about wine',                now() - '24 days'::INTERVAL,    'Read The Wine Bible 2nd Edition'),
    ('The art of the French Drop',                      now() - '2 days'::INTERVAL,     'Use a mirror and a video camera so you can know what others see to fix your work'),
    ('Why I love Italy',                                now() - '3 days'::INTERVAL,     'I still feel some kind of attchment from being born there. Also, my honeymoon there was pretty amazing'),
    ('How to come up with ideas for blog articles',     now() - '4 days'::INTERVAL,     'Less of a tutorial and more of a question'),
    ('Foods that end in amburger',                      now() - '6 days'::INTERVAL,     'SNL is friggin amazing'),
    ('My favorite books on physics',                    now() - '7 days'::INTERVAL,     'The Elegant Universe and others.'),
    ('This was supposed to be quick',                   now() - '8 days'::INTERVAL,     'Holy crap I have spend far too long on this one activity'),
    ('Proposing at Quintessa for DUMMIES',              now() - '9 days'::INTERVAL,     'I may have written a book without an audiance'),
    ('12 energy drinks in one day',                     now() - '11 days'::INTERVAL,    'Halp me. I think I am having a heart attack!'),
    ('The best dessert to impress your guests',         now() - '12 days'::INTERVAL,    'Vanilla ice cream with Cabernet reduction and fresh raspberries'),
    ('The Monty Hall Problem',                          now() - '13 days'::INTERVAL,    'Yet another retread on The Monty Hall Problem'),
    ('My final article!',                               now() - '14 days'::INTERVAL,    'The last one!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!! !!!!!!!!!!')
;
