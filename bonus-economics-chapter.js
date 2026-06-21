// Economics bonus chapter object for corpusData (economics weeks container)
// id: bonusEcon1 | 6 days (0=intro, 1-5=dialogues) | HE + EN | images: images/bonus/economics/
const bonusEcon1 = {
  "id": "bonusEcon1",
  "title": "אנטומיה של משבר",
  "titleEn": "Anatomy of a Crisis",
  "subtitle": "מה זינוק מחיר הנפט ב-2026 מלמד על כל הכלכלה",
  "subtitleEn": "What the 2026 oil price spike teaches about all of economics",
  "isBonus": true,
  "subject": "economics",
  "xp": 100,
  "days": [
    {
      "id": 0,
      "title": "מבוא: אנטומיה של משבר",
      "titleEn": "Intro: Anatomy of a Crisis",
      "thinker": "",
      "thinkerEn": "",
      "thinkerId": null,
      "xp": 0,
      "sections": [
        {
          "type": "idea",
          "title": "מאחורי הכותרת",
          "titleEn": "Behind the headline",
          "content": "בסוף פברואר 2026 פרצה מלחמת ארה\"ב-ישראל מול איראן, ותוך ימים מחיר הנפט בעולם זינק בכמעט 50 אחוז, מכ-72 דולר לחבית אל מעל 100, מחשש שמיצרי הורמוז, שדרכם עובר כחמישית מהנפט העולמי, ייחסמו. כעבור שבועות המחיר ירד בחזרה. אבל מתחת לכותרת הזו מסתתר כמעט כל מה שיש בכלכלה: למה מחירים קופצים, מי מרוויח, מי משלם, ומה בכלל הופך מחיר ל\"צודק\". בפרק הזה ניקח אירוע אמיתי אחד ונפרק אותו דרך עיניהם של חמישה כלכלנים, כל אחד ושאלה אחרת על אותו מחיר. הכלכלה היא העדשה, לא הפוליטיקה.",
          "contentEn": "In late February 2026, the US-Israel war against Iran broke out, and within days the price of oil worldwide jumped by nearly 50 percent, from around 72 dollars a barrel to over 100, on fears that the Strait of Hormuz, through which about a fifth of the world's oil passes, would be blocked. Weeks later, the price came back down. But beneath that headline lies almost everything there is in economics: why prices jump, who profits, who pays, and what even makes a price \"just.\" In this chapter we take one real event and break it down through the eyes of five economists, each with a different question about the same price. Economics is the lens here, not politics."
        },
        {
          "type": "idea",
          "title": "מה נחקור בפרק?",
          "titleEn": "What will we explore in this chapter?",
          "content": "<strong>דיאלוג 1 | סמית והפחד:</strong> למה מחיר הנפט זינק בכמעט 50 אחוז, עוד לפני שטיפת נפט אחת הפסיקה לזרום? נראה איך השוק מתמחר פחד וציפיות.\n\n<strong>דיאלוג 2 | ג'בונס והשוליים:</strong> רק חמישית מהנפט הייתה בסיכון, אז למה כל הנפט בעולם התייקר? נגלה למה הערך נקבע בשוליים.\n\n<strong>דיאלוג 3 | אקווינס והצדק:</strong> כשמחיר הדלק מזנק במלחמה, זה מחיר צודק או ניצול של מצוקה? נבחן אם בכלל קיים \"מחיר צודק\".\n\n<strong>דיאלוג 4 | ריקרדו והרֵנטה:</strong> כל הכסף הנוסף הלך לאנשהו. מי התעשר מהמשבר בלי להרים אצבע?\n\n<strong>דיאלוג 5 | סן והיכולות:</strong> הנפט אף פעם לא נעלם, אז מי באמת שילם את המחיר? נסיים בשאלה האנושית מכולן.",
          "contentEn": "<strong>Dialogue 1 | Smith and fear:</strong> Why did the price of oil jump by nearly 50 percent, before a single drop of oil had even stopped flowing? We will see how the market prices in fear and expectations.\n\n<strong>Dialogue 2 | Jevons and the margin:</strong> Only a fifth of the oil was at risk, so why did all the world's oil grow more expensive? We will discover why value is set at the margin.\n\n<strong>Dialogue 3 | Aquinas and justice:</strong> When fuel prices spike in war, is it a just price or exploitation of distress? We will examine whether a \"just price\" exists at all.\n\n<strong>Dialogue 4 | Ricardo and rent:</strong> All the extra money went somewhere. Who got rich from the crisis without lifting a finger?\n\n<strong>Dialogue 5 | Sen and capabilities:</strong> The oil never actually vanished, so who really paid the price? We close with the most human question of all."
        }
      ]
    },
    {
      "id": 1,
      "title": "סמית: למה הדלק התייקר עוד לפני שנגמר?",
      "titleEn": "Smith: Why did fuel get more expensive before it ran out?",
      "thinker": "אדם סמית",
      "thinkerEn": "Adam Smith",
      "thinkerId": "smith",
      "xp": 50,
      "sections": [
        {
          "type": "idea",
          "title": "הרעיון של היום",
          "titleEn": "Today's idea",
          "content": "בסוף פברואר 2026 פרצה מלחמת ארה\"ב-ישראל מול איראן. תוך ימים ספורים מחיר חבית נפט (ברנט) זינק מכ-72 דולר אל מעל 100 דולר, עלייה של כ-49 אחוז, ובשיא טיפס לכיוון 120 דולר.\n\nאבל שים לב לפרט אחד: באותם ימים, אף בור נפט לא נסגר. אף מיכלית לא טבעה. כמות הנפט שזרמה בעולם בפועל כמעט לא השתנתה. אז למה המחיר קפץ כל כך מהר?\n\nהתשובה נמצאת אצל אדם סמית, שב-1776 ניסח את הרעיון המפורסם של <strong>\"</strong><strong>היד הנעלמה</strong><strong>\"</strong>: שוק שבו כל אדם פועל מתוך האינטרס שלו, ובכל זאת התוצאה הכוללת מתאמת היצע וביקוש מעצמה, בלי שאף אחד מכוון אותה.\n\nסמית הבחין בין שני מחירים. יש <strong>\"</strong><strong>מחיר טבעי</strong><strong>\"</strong>, המחיר שמכסה את עלות הייצור האמיתית. ויש <strong>\"</strong><strong>מחיר שוק</strong><strong>\"</strong>, המחיר בפועל היום. וכשהקונים חוששים שלא יהיה מספיק מהמצרך, מחיר השוק יכול לטפס הרבה מעל המחיר הטבעי, גם לפני שנוצר מחסור אמיתי. <strong>המחיר לא משקר. הוא פשוט מתמחר את החשש</strong><strong>.</strong>",
          "contentEn": "In late February 2026, the US-Israel war against Iran broke out. Within a few days, the price of a barrel of oil (Brent) jumped from around 72 dollars to over 100 dollars, a rise of about 49 percent, and at its peak it climbed toward 120 dollars.\n\nBut notice one detail: during those days, not a single oil well shut down. No tanker sank. The amount of oil actually flowing through the world barely changed. So why did the price jump so fast?\n\nThe answer lies with Adam Smith, who in 1776 formulated the famous idea of the <strong>\"invisible hand\"</strong>: a market in which every person acts out of their own self-interest, and yet the collective outcome coordinates supply and demand on its own, without anyone steering it.\n\nSmith distinguished between two prices. There is a <strong>\"natural price,\"</strong> the price that covers the true cost of production. And there is a <strong>\"market price,\"</strong> the actual price today. When buyers worry that there will not be enough of a good, the market price can climb far above the natural price, even before a real shortage exists. <strong>The price is not lying. It is simply pricing in the concern.</strong>",
          "image": "images/bonus/economics/dialog1-idea.png"
        },
        {
          "type": "source",
          "title": "קטע מקור",
          "titleEn": "Source text",
          "quote": "\"כאשר הכמות של מצרך כלשהו המובא לשוק נופלת מן הביקוש האפקטיבי, חלק מן הקונים, ובלבד שלא יישארו בלעדיו, יהיו מוכנים לשלם יותר. תחרות תתחיל מיד ביניהם, ומחיר השוק יעלה מעל המחיר הטבעי, בהתאם לגודל המחסור או לעוצמת הלהיטות של המתחרים.\"",
          "quoteEn": "\"When the quantity of any commodity which is brought to market falls short of the effectual demand... a competition will immediately begin among them, and the market price will rise more or less above the natural price, according as either the greatness of the deficiency, or the wealth and wanton luxury of the competitors, happen to animate more or less the eagerness of the competition.\"",
          "attr": "- אדם סמית, \"עושר העמים\", ספר ראשון, פרק 7 (על המחיר הטבעי ומחיר השוק), 1776",
          "attrEn": "- Adam Smith, \"The Wealth of Nations,\" Book I, Chapter 7 (Of the Natural and Market Price of Commodities), 1776"
        },
        {
          "type": "explanation",
          "title": "הסבר",
          "titleEn": "Explanation",
          "content": "סמית כתב על מחסור אמיתי: כשמגיע לשוק פחות ממה שאנשים רוצים, הקונים מתחרים זה בזה ומציעים יותר, והמחיר עולה. ככל שהמצרך חיוני יותר, כך הלהיטות גדולה יותר, וכך המחיר מזנק חזק יותר.\n\n<strong>דוגמה מהחיים</strong><strong>:</strong> חשוב על תחילת מגפת הקורונה ב-2020. ברגע שעלה חשש ממחסור עתידי, אנשים מיהרו לאגור מסכות, ג'ל אלכוהול ונייר טואלט, והמדפים התרוקנו. אף אחד לא ידע בוודאות מה יקרה, אבל כל אחד מתוך הדאגה שלו רצה להבטיח לעצמו מלאי עכשיו. במוצרים שלא היו מפוקחים, כמו מסכות וג'ל, המחיר זינק. <strong>לא בגלל שכבר היה מחסור, אלא בגלל שכולם חששו שיהיה</strong><strong>.</strong>\n\nזה בדיוק מה שקרה לנפט. כ-20 אחוז מהנפט בעולם עובר דרך מיצרי הורמוז, מעבר ימי צר ליד איראן. ברגע שעלה חשש שהמיצרים ייחסמו, סוחרים, חברות תעופה ומדינות מיהרו להבטיח לעצמם דלק עכשיו, מחשש שמחר יהיה יקר יותר או לא יהיה בכלל. כל אחד פעל מתוך האינטרס שלו, והיד הנעלמה תרגמה את מיליוני הפעולות האלה למחיר אחד שקפץ מעלה. המחיר הגבוה לא שיקף נפט שנעלם. הוא שיקף נפט שאנשים חששו שייעלם.\n\nההפרש הזה, בין המחיר הטבעי למחיר שמשקף סיכון עתידי, נקרא בכלכלה המודרנית <strong>פרמיית סיכון</strong>. זו התוספת שאנשים מוכנים לשלם כדי לא להיתקע בלי המצרך אם התרחיש הגרוע יקרה.",
          "contentEn": "Smith wrote about real scarcity: when less reaches the market than people want, buyers compete with one another and offer more, and the price rises. The more essential the good, the greater the eagerness, and the harder the price jumps.\n\n<strong>A real-life example:</strong> Think about the start of the COVID pandemic in 2020. The moment a fear of future shortage appeared, people rushed to stock up on masks, hand sanitizer and toilet paper, and the shelves emptied. No one knew for certain what would happen, but each person, out of their own worry, wanted to secure a supply now. For goods that were not price-regulated, like masks and sanitizer, the price soared. <strong>Not because there was already a shortage, but because everyone was worried there would be.</strong>\n\nThis is exactly what happened with oil. About 20 percent of the world's oil passes through the Strait of Hormuz, a narrow sea passage next to Iran. The moment a concern arose that the strait might be blocked, traders, airlines and governments rushed to secure fuel for themselves now, worried that tomorrow it would be more expensive or unavailable altogether. Each one acted out of self-interest, and the invisible hand translated those millions of actions into a single price that jumped upward. The high price did not reflect oil that had vanished. It reflected oil that people were worried would vanish.\n\nThis gap, between the natural price and a price that reflects future risk, is called in modern economics a <strong>risk premium</strong>. It is the extra amount people are willing to pay so as not to be left without the good if the worst-case scenario occurs.",
          "image": "images/bonus/economics/dialog1-explanation.png"
        },
        {
          "type": "depth",
          "title": "העומק שמאחורי הרעיון",
          "titleEn": "The depth behind the idea",
          "content": "כאן מתחבא הרעיון העמוק באמת. אם בסוף הורמוז לא נחסם, והנפט המשיך לזרום, האם המחיר הגבוה היה \"טעות\"?\n\nלפי סמית, לא. המחיר עשה בדיוק את העבודה שלו. מחיר גבוה הוא אות. הוא אומר לצרכנים לחסוך בדלק, ואומר ליצרנים בעולם לשאוב יותר. ואכן, מדינות אופ\"ק הגדילו תפוקה בתגובה. המחיר תיאם את התנהגות כל השחקנים בלי שאף ועדה מרכזית ציוותה עליהם דבר. הוא היה ההערכה הטובה ביותר של השוק בהינתן המידע שהיה קיים באותו רגע, גם אם בדיעבד התרחיש הגרוע לא התממש.\n\nזה הקו שמחבר את סמית להייק. הייק יוסיף מאוחר יותר טענה חדה: <strong>המחיר הוא לא רק תוצאה של היצע וביקוש, אלא מנגנון להעברת מידע</strong><strong>.</strong> אף אדם בודד לא יודע הכל על מצב הנפט בעולם. אבל כשכל אחד פועל לפי הידיעה הקטנה שלו, המחיר אוסף את כל פיסות המידע והציפיות הפזורות, ומגלם אותן במספר אחד שכולם יכולים לקרוא. בזמן משבר, זו אחת הסיבות שמחירים זזים כל כך מהר: הם לא מחכים שהאירוע יקרה, הם מתמחרים את ההסתברות שהוא יקרה.",
          "contentEn": "Here is where the truly deep idea hides. If in the end Hormuz was not blocked, and the oil kept flowing, was the high price a \"mistake\"?\n\nAccording to Smith, no. The price did exactly its job. A high price is a signal. It tells consumers to conserve fuel, and tells producers around the world to pump more. And indeed, OPEC countries increased output in response. The price coordinated the behavior of all the players without any central committee ordering them to do anything. It was the market's best estimate given the information that existed at that moment, even if in hindsight the worst-case scenario never materialized.\n\nThis is the line that connects Smith to Hayek. Hayek would later add a sharp claim: <strong>the price is not only a result of supply and demand, but a mechanism for transmitting information.</strong> No single person knows everything about the state of oil in the world. But when each person acts on their own small piece of knowledge, the price gathers all the scattered fragments of information and expectations, and embeds them into a single number that everyone can read. In times of crisis, this is one of the reasons prices move so fast: they do not wait for the event to happen, they price the probability that it will.",
          "image": "images/bonus/economics/dialog1-depth.png"
        },
        {
          "type": "quiz",
          "intro": "",
          "introEn": "",
          "question": "בשבוע הראשון של המלחמה מחיר הנפט זינק בעשרות אחוזים, למרות שכמות הנפט שזרמה בפועל כמעט לא השתנתה. כיצד אדם סמית היה מסביר את הקפיצה?",
          "questionEn": "In the first week of the war, the price of oil jumped by tens of percent, even though the amount of oil actually flowing barely changed. How would Adam Smith explain the jump?",
          "options": [
            "השוק טעה, ומכיוון שלא היה מחסור אמיתי, המחיר היה מנותק מהמציאות",
            "הקונים חששו ממחסור עתידי והתחרו זה בזה על הדלק, וכך מחיר השוק טיפס מעל המחיר הטבעי עוד לפני מחסור בפועל",
            "רק התערבות ממשלתית יכלה להעלות את המחיר כל כך מהר"
          ],
          "optionsEn": [
            "The market was wrong, and since there was no real shortage, the price was disconnected from reality",
            "Buyers worried about a future shortage and competed with one another over the fuel, so the market price climbed above the natural price even before an actual shortage",
            "Only government intervention could have raised the price so fast"
          ],
          "correctIndex": 1,
          "explanation": "זה לב הרעיון של סמית. מחיר השוק לא נקבע רק לפי הכמות הקיימת היום, אלא לפי הלהיטות של הקונים. כשמצרך חיוני כמו נפט נמצא בסיכון, החשש מהמחסור מספיק כדי להצית תחרות בין קונים ולהקפיץ את המחיר. המחיר גילם את הציפייה, לא את המחסור עצמו.",
          "explanationEn": "This is the heart of Smith's idea. The market price is set not only by the quantity available today, but by the eagerness of the buyers. When an essential good like oil is at risk, the concern about a shortage is enough to ignite competition among buyers and send the price up. The price embodied the expectation, not the shortage itself."
        },
        {
          "type": "quiz",
          "intro": "",
          "introEn": "",
          "question": "חבר טוען: \"אם בסוף מיצרי הורמוז לא נחסמו, אז כל ההתייקרות הייתה בלון מנופח, פאניקה מיותרת שלא שיקפה כלום.\" כיצד תגיב לו לפי הגישה של סמית?",
          "questionEn": "A friend argues: \"If in the end the Strait of Hormuz was not blocked, then the whole price increase was an inflated bubble, pointless panic that reflected nothing.\" How would you respond, based on Smith's approach?",
          "options": [
            "הוא צודק, מחיר שעולה בלי מחסור אמיתי הוא תמיד עיוות שיש לתקן",
            "הוא טועה, המחיר היה ההערכה הטובה ביותר של השוק בהינתן המידע באותו רגע, והוא מילא תפקיד אמיתי: לעודד חיסכון ולתמרץ יצרנים לשאוב יותר",
            "הוא צודק, כי רק אירוע שקרה בפועל יכול להצדיק שינוי מחיר"
          ],
          "optionsEn": [
            "He is right, a price that rises without a real shortage is always a distortion that should be corrected",
            "He is wrong, the price was the market's best estimate given the information at that moment, and it played a real role: encouraging conservation and incentivizing producers to pump more",
            "He is right, because only an event that actually happened can justify a change in price"
          ],
          "correctIndex": 1,
          "explanation": "מחיר אינו נבואה, הוא הערכת הסתברות. גם אם התרחיש הגרוע לא התממש, המחיר הגבוה עשה עבודה ממשית בזמן אמת: הוא תיאם את התנהגות הצרכנים והיצרנים מול סיכון אמיתי. לשפוט אותו בדיעבד, אחרי שכבר ידוע שהכל הסתדר, זו הטיה. ברגע ההחלטה, המידע היה חלקי, והפרמיה על הסיכון הייתה רציונלית.",
          "explanationEn": "A price is not a prophecy, it is a probability estimate. Even if the worst-case scenario did not materialize, the high price did real work in real time: it coordinated the behavior of consumers and producers against a genuine risk. To judge it in hindsight, after it is already known that everything worked out, is a bias. At the moment of decision, the information was partial, and the premium on the risk was rational."
        },
        {
          "type": "quiz",
          "intro": "",
          "introEn": "",
          "question": "מהי הדרך המדויקת ביותר לתאר מה \"עושה\" מחיר הנפט בזמן משבר, לפי הקו שמחבר את סמית להייק?",
          "questionEn": "What is the most precise way to describe what the price of oil \"does\" during a crisis, according to the line that connects Smith to Hayek?",
          "options": [
            "המחיר הוא פקודה שקובע מנהל השוק כדי לשמור על יציבות",
            "המחיר הוא מספר אקראי שמשתנה לפי מצב הרוח של הסוחרים",
            "המחיר הוא מנגנון שאוסף פיסות מידע וציפיות הפזורות בין מיליוני אנשים, ומגלם אותן במספר אחד שמתאם את כולם"
          ],
          "optionsEn": [
            "The price is a command set by a market manager in order to maintain stability",
            "The price is a random number that changes according to the mood of the traders",
            "The price is a mechanism that gathers fragments of information and expectations scattered among millions of people, and embeds them into a single number that coordinates everyone"
          ],
          "correctIndex": 2,
          "explanation": "זו התרומה שמחברת את שני ההוגים. סמית הראה שהמחיר נע לפי להיטות הקונים. הייק הוסיף שהמחיר הוא בעצם אמצעי תקשורת: אף אחד לא מחזיק בתמונה המלאה, אבל המחיר מסכם את כל הידע המבוזר ומשדר אותו לכולם. לכן בזמן משבר מחירים זזים כל כך מהר, הם מתמחרים מידע וציפיות, לא רק את ההווה.",
          "explanationEn": "This is the contribution that connects the two thinkers. Smith showed that the price moves according to the eagerness of buyers. Hayek added that the price is essentially a means of communication: no one holds the full picture, but the price sums up all the distributed knowledge and broadcasts it to everyone. That is why prices move so fast during a crisis, they price in information and expectations, not just the present."
        },
        {
          "type": "quiz_summary"
        }
      ]
    },
    {
      "id": 2,
      "title": "ג'בונס: למה כל הנפט בעולם התייקר, כשרק חלק ממנו אוים?",
      "titleEn": "Jevons: Why did all the world's oil get more expensive when only part of it was threatened?",
      "thinker": "ויליאם סטנלי ג'בונס",
      "thinkerEn": "William Stanley Jevons",
      "thinkerId": "jevons",
      "xp": 50,
      "sections": [
        {
          "type": "idea",
          "title": "הרעיון של היום",
          "titleEn": "Today's idea",
          "content": "בדיאלוג הקודם סמית הסביר שמחיר הנפט קפץ כי השוק מתמחר פחד וציפיות. אבל יש מספר אחד שראוי לעצור עליו: רק כ-20 אחוז מהנפט בעולם עובר דרך הורמוז, כלומר רק חמישית הייתה בכלל בסיכון. אז למה מחיר כל הנפט בעולם זינק בכמעט 50 אחוז? איך איום על חמישית מקפיץ את המחיר של השלם?\n\nאת התשובה נתן ויליאם סטנלי ג'בונס, שב-1871, יחד עם עוד שני כלכלנים בלי שתיאמו ביניהם, חולל את מה שנקרא המהפכה השולית. הרעיון: הערך של דבר אינו תכונה שלו עצמו, הוא סובייקטיבי. הוא שווה לכמה ששווה היחידה הבאה, וזה תלוי בכמה כבר יש.\n\nג'בונס פתר בזה חידה עתיקה, פרדוקס המים והיהלום: מים חיוניים לחיים אבל זולים, יהלומים חסרי תועלת אבל יקרים. למה? כי מים יש בשפע, אז הכוס הבאה כמעט לא שווה. יהלומים יש מעט, אז היהלום הבא שווה הון. את הערך של היחידה הבאה הוא כינה תועלת שולית. והנקודה החשובה: התועלת השולית רגישה מאוד לנדירות.",
          "contentEn": "In the previous dialogue, Smith explained that the oil price jumped because the market prices in fear and expectations. But there is one number worth pausing on: only about 20 percent of the world's oil passes through Hormuz, meaning only a fifth was ever at risk. So why did the price of all the world's oil jump by nearly 50 percent? How does a threat to a fifth send the price of the whole soaring?\n\nThe answer came from William Stanley Jevons, who in 1871, together with two other economists who never coordinated with one another, launched what became known as the marginal revolution. The idea: the value of a thing is not a property of the thing itself, it is subjective. It is worth whatever the <strong>next unit</strong> is worth, and that depends on how much you already have.\n\nWith this, Jevons solved an ancient puzzle, the water-diamond paradox: water is essential to life yet cheap, diamonds are useless yet expensive. Why? Because water is abundant, so the next glass is worth almost nothing. Diamonds are scarce, so the next one is worth a fortune. The value of that next unit he called <strong>marginal utility</strong>. <strong>And here is the key point: marginal utility is extremely sensitive to scarcity.</strong>",
          "image": "images/bonus/economics/dialog2-idea.png"
        },
        {
          "type": "source",
          "title": "קטע מקור",
          "titleEn": "Source text",
          "quote": "\"ערך הוא יחס סובייקטיבי שאדם מקנה לדבר. הוא אינו תכונה של הדבר עצמו, הוא תוצאה של החשיבות שיש לדבר עבור הסיפוק של אדם מסוים.\"",
          "quoteEn": "\"Value is a subjective relation that a person assigns to a thing. It is not a property of the thing itself, it is the result of the importance the thing has for the satisfaction of a particular person.\"",
          "attr": "- ויליאם סטנלי ג'בונס, \"תיאוריה של הכלכלה הפוליטית\", 1871",
          "attrEn": "- William Stanley Jevons, \"The Theory of Political Economy,\" 1871"
        },
        {
          "type": "explanation",
          "title": "הסבר",
          "titleEn": "Explanation",
          "content": "כשיש שפע ממשהו, היחידה הבאה זולה. כשהוא הולך ואוזל, אותה יחידה בדיוק הופכת יקרה. הדבר לא השתנה, מצב הנדירות השתנה.\n\nדוגמה מהחיים: חשוב על סוללת הטלפון. כשהיא ב-100 אחוז, אין שום מחשבה לפני שמשתמשים בה, האחוז הבא לא שווה כלום. אבל כשהיא ב-8 אחוז ואין מטען באופק, אותו אחוז בדיוק נעשה יקר מפז: מעמעמים מסך, סוגרים אפליקציות, שומרים על כל טיפה. ה\"ערך לאחוז\" לא השתנה פיזית, רק הנדירות. זו תועלת שולית בפעולה.\n\nעכשיו החל את זה על הנפט. בדרך כלל לעולם יש כרית נוחה של נפט, אז החבית הבאה זולה יחסית, אנחנו בחלק ה\"שפע\" של העקומה. אבל ברגע שהורמוז, הברז שמספק חמישית מהנפט, אוים בסגירה, הכרית פתאום נראתה דקה. אף חבית לא אבדה בפועל, אבל העולם זז מ\"שפע\" לכיוון \"נדירות\". וקרוב לנדירות, הערך של כל חבית שנשארה, החבית השולית, מזנק. איום על חמישית לא הוריד את הערך בחמישית, הוא דחף את הנפט במעלה מצוק התועלת השולית.\n\nולמה זה מייקר את כל הנפט ולא רק את החלק שבסיכון? כי כל הנפט הוא תחליף זה לזה, והמחיר בשוק נקבע לפי החבית השולית. כשהחבית השולית מתייקרת, כל החביות מתייקרות איתה.",
          "contentEn": "When there is plenty of something, the next unit is cheap. When it starts running low, that very same unit becomes expensive. The thing did not change, the state of scarcity changed.\n\n<strong>A real-life example:</strong> Think about a phone battery. At 100 percent, there is no second thought before using it, the next percent is worth nothing. But at 8 percent with no charger in sight, that same percent becomes precious: you dim the screen, close apps, guard every drop. The \"value per percent\" did not change physically, only the scarcity did. That is marginal utility in action.\n\nNow apply this to oil. Normally the world has a comfortable cushion of oil, so the next barrel is relatively cheap, we are on the \"abundant\" part of the curve. But the moment Hormuz, the tap supplying a fifth of the oil, was threatened with closure, the cushion suddenly looked thin. Not a single barrel was actually lost, but the world moved from \"abundance\" toward \"scarcity.\" And near scarcity, the value of every remaining barrel, the marginal barrel, soars. <strong>A threat to a fifth did not lower the value by a fifth, it pushed oil up the cliff of marginal utility.</strong>\n\nAnd why does this raise the price of all the oil, not only the part at risk? Because all oil is a substitute for the rest, and the market price is set by the marginal barrel. When the marginal barrel gets more expensive, every barrel gets more expensive with it.",
          "image": "images/bonus/economics/dialog2-explanation.png"
        },
        {
          "type": "depth",
          "title": "העומק שמאחורי הרעיון",
          "titleEn": "The depth behind the idea",
          "content": "כאן מסתתר ההסבר העמוק לאלימות של מחירי סחורות. הביקוש לנפט קשיח, אי אפשר פשוט להפסיק לנסוע לעבודה או לחמם את הבית. אז כשההיצע מתהדק ולו במעט סביב השוליים, המחיר חייב לזוז הרבה כדי לאזן את השוק. איום קטן בכמות, תזוזה ענקית במחיר. זו לא הגזמה של השוק, זו המתמטיקה של השוליים.\n\nוזה משלים את סמית מדיאלוג 1. סמית הסביר שהמחיר גילם את הפחד. ג'בונס מסביר למה הפחד תורגם למספר כל כך גדול: כי קרוב לנדירות, התועלת השולית יושבת על צוק. הפחד דחף את הנפט אל שפת הצוק, והשוליות עשתה את השאר.\n\nויש כאן זרע לשאלה הבאה. אם הערך הוא סובייקטיבי, רק מה שמישהו מוכן לשלם, האם בכלל קיים מחיר \"יקר מדי\" או \"לא הוגן\"? ג'בונס היה אומר לא, אין מחיר אובייקטיבי, יש רק מה שמשלמים. אקווינס, בדיאלוג הבא, יחלוק על כך נחרצות.",
          "contentEn": "Here lies the deep explanation for the violence of commodity prices. Demand for oil is rigid, you cannot simply stop driving to work or heating your home. So when supply tightens even slightly around the margin, the price has to move a great deal to balance the market. A small threat to quantity, a huge move in price. <strong>This is not the market overreacting, it is the mathematics of the margin.</strong>\n\nAnd this completes Smith from Dialogue 1. Smith explained that the price embodied the fear. Jevons explains why the fear translated into such a large number: because near scarcity, marginal utility sits on a cliff. The fear pushed oil to the edge of the cliff, and marginality did the rest.\n\nAnd here is a seed for the next question. If value is subjective, only what someone is willing to pay, is there even such a thing as a price that is \"too high\" or \"unfair\"? Jevons would say no, there is no objective price, there is only what people pay. Aquinas, in the next dialogue, will firmly disagree.",
          "image": "images/bonus/economics/dialog2-depth.png"
        },
        {
          "type": "quiz",
          "intro": "",
          "introEn": "",
          "question": "שני חברים מתווכחים. האחד אומר: \"הגיוני שמחיר הנפט יעלה בערך בחמישית, כי חמישית ממנו אוימה.\" לפי ג'בונס, היכן הוא טועה?",
          "questionEn": "Two friends are arguing. One says: \"It makes sense that the oil price would rise by about a fifth, since a fifth of it was threatened.\" According to Jevons, where is he wrong?",
          "options": [
            "הוא צודק לגמרי, איום על חמישית מהנפט מעלה את המחיר בדיוק בחמישית",
            "הערך נקבע בשוליים, ולכן איום קטן מקפיץ את המחיר הרבה מעבר לחלקו",
            "הוא טועה, כי בפועל אבדה הרבה יותר מחמישית מהנפט במשבר"
          ],
          "optionsEn": [
            "He is entirely right, a threat to a fifth of the oil raises the price by exactly a fifth",
            "Value is set at the margin, so a small threat sends the price far beyond its share",
            "He is wrong, because in practice far more than a fifth of the oil was lost in the crisis"
          ],
          "correctIndex": 1,
          "explanation": "האינטואיציה הליניארית (חמישית סיכון, חמישית עלייה) מפספסת את כל הרעיון. הערך נקבע אצל היחידה השולית, ושם הוא רגיש לנדירות. איום קטן דוחף את הנפט במעלה המצוק, והמחיר זז הרבה מעבר לגודל האיום.",
          "explanationEn": "The linear intuition (a fifth at risk, a fifth rise) misses the whole idea. Value is set at the marginal unit, and there it is sensitive to scarcity. A small threat pushes oil up the cliff, and the price moves far beyond the size of the threat."
        },
        {
          "type": "quiz",
          "intro": "",
          "introEn": "",
          "question": "אדם נתקע במדבר עם עשר כוסות מים. את הראשונה ישתה מיד, ובעשירית כנראה ירחץ פנים. אם תיוותר לו רק כוס אחת, מה יקרה לערך שהוא מייחס לה?",
          "questionEn": "A person is stranded in the desert with ten cups of water. The first they drink at once, and with the tenth they would probably wash their face. If only one cup remained, what would happen to the value they place on it?",
          "options": [
            "הוא יישאר זהה, כי מים הם מים בכל כמות שנותרה",
            "הוא יירד, כי נשאר לו פחות מים ליהנות מהם",
            "הוא יזנק, כי היחידה האחרונה היקרה ביותר בשיא הנדירות"
          ],
          "optionsEn": [
            "It would stay the same, since water is water in any remaining amount",
            "It would drop, since there is less water left for them to enjoy",
            "It would soar, as the last unit is the most precious at peak scarcity"
          ],
          "correctIndex": 2,
          "explanation": "זה בדיוק העיקרון. ערך אינו תכונה קבועה של המים, אלא יחס שתלוי בכמה נשאר. ככל שמתקרבים לאפס, היחידה הבאה נעשית יקרה יותר. אותו היגיון בדיוק הניע את מחיר הנפט.",
          "explanationEn": "This is exactly the principle. Value is not a fixed property of the water, but a relation that depends on how much is left. The closer to zero, the more precious the next unit becomes. That very logic drove the price of oil."
        },
        {
          "type": "quiz",
          "intro": "",
          "introEn": "",
          "question": "חברה מתמחרת תיק יד זהה בדיוק לזה של מתחרתה פי עשרה, רק בזכות שם המותג, ואנשים קונים. כיצד היה ג'בונס מסביר זאת?",
          "questionEn": "A company prices a handbag identical to its competitor's at ten times the price, purely on the strength of the brand name, and people buy it. How would Jevons explain this?",
          "options": [
            "המחיר שגוי ומנופח, שהרי הערך האמיתי הוא עלות הייצור",
            "הערך הוא יחס בין הקונה לחפץ, וזה מה שמוכנים לשלם עכשיו",
            "רק פיקוח ממשלתי יכול לקבוע את הערך הנכון של התיק"
          ],
          "optionsEn": [
            "The price is wrong and inflated, since the true value is the cost of production",
            "Value is a relation between buyer and thing, and this is what they will pay now",
            "Only government oversight can set the correct value of the bag"
          ],
          "correctIndex": 1,
          "explanation": "אין \"ערך אמיתי\" נסתר בתוך החפץ. הערך הוא מה שמישהו מקנה לו. אם הקונה מוכן לשלם פי עשרה בזכות המותג, זה הערך עבורו עכשיו. בדיוק התובנה שאקווינס יתנגד לה בדיאלוג הבא.",
          "explanationEn": "There is no hidden \"true value\" inside the object. Value is what someone assigns to it. If the buyer is willing to pay ten times more for the brand, that is its value to them now. Exactly the insight Aquinas will resist in the next dialogue."
        },
        {
          "type": "quiz_summary"
        }
      ]
    },
    {
      "id": 3,
      "title": "אקווינס: כשמחיר הדלק מזנק במלחמה, זה הוגן או ניצול?",
      "titleEn": "Aquinas: When fuel prices spike in war, is it just or exploitation?",
      "thinker": "תומאס אקווינס",
      "thinkerEn": "Thomas Aquinas",
      "thinkerId": "aquinas",
      "xp": 50,
      "sections": [
        {
          "type": "idea",
          "title": "הרעיון של היום",
          "titleEn": "Today's idea",
          "content": "בדיאלוגים הקודמים ראינו מה השפיע על מחיר הנפט. סמית הסביר למה הוא קפץ, וג'בונס למה כל הנפט התייקר כשרק חלק ממנו אוים. בשני המקרים המחיר יצא רציונלי ויעיל, עשה בדיוק את עבודתו. אבל יש מילה אחת שאיש מהם לא נגע בה: צדק.\n\nבמרץ 2026, נהג שעמד בתחנת דלק שילם הרבה יותר על אותו ליטר בנזין. הדלק לא השתנה. רק המלחמה השתנתה. האם זה מחיר הוגן, או ניצול של מצוקה?\n\n700  שנה לפני שבכלל היה שוק נפט, תומאס אקווינס שאל בדיוק את השאלה הזאת. אקווינס היה נזיר דומיניקני איטלקי במאה ה-13, פילוסוף ותאולוג. הוא לא היה כלכלן, כי הכלכלה כתחום עוד לא נולדה. אבל הוא הניח על השולחן את אחת מהשאלות החדות בכל הכלכלה: האם קיים <strong>\"</strong><strong>מחיר צודק</strong><strong>\"</strong>?\n\nהרעיון שלו: לכל מצרך יש <strong>מחיר טבעי</strong>, מחיר שמשקף את העלות האמיתית של הייצור פלוס רווח סביר. מחיר שמזנק הרבה מעבר לזה רק מפני שלקונה אין ברירה הוא, לדעת אקווינס, חטא. <strong>לא כל מה שחוקי בשוק הוא צודק</strong><strong>.</strong>",
          "contentEn": "In the previous dialogues we saw what shaped the price of oil. Smith explained why it jumped, and Jevons explained why all the oil grew more expensive when only part of it was threatened. Both described a rational price doing its job, and Jevons even declared that there is no such thing as a \"just price,\" only what people are willing to pay. But there is one word they both left out: justice.\n\nIn March 2026, a driver standing at a gas station paid far more for the same liter of fuel. The fuel did not change. Only the war changed. Is that a just price, or exploitation of distress?\n\n700 years before there was even an oil market, Thomas Aquinas asked exactly this question. Aquinas was an Italian Dominican friar in the 13th century, a philosopher and theologian. He was not an economist, because economics as a field had not yet been born. But he put on the table one of the sharpest questions in all of economics: is there such a thing as a <strong>\"just price\"</strong>?\n\nHis idea: every good has a <strong>natural price</strong>, a price that reflects the true cost of production plus a reasonable profit. A price that jumps far beyond that only because the buyer has no choice is, in Aquinas's view, a sin. <strong>Not everything that is legal in the market is just.</strong>",
          "image": "images/bonus/economics/dialog3-idea.png"
        },
        {
          "type": "source",
          "title": "קטע מקור",
          "titleEn": "Source text",
          "quote": "\"למכור דבר ביותר מערכו, או לקנותו בפחות מערכו, הוא כשלעצמו עוול ובלתי מוסרי.\"",
          "quoteEn": "\"To sell a thing for more than its worth, or to buy it for less than its worth, is in itself unjust and unlawful.\"",
          "attr": "- תומאס אקווינס, \"סומה תאולוגיקה\", חלק שני, שאלה 77, המאה ה-13",
          "attrEn": "- Thomas Aquinas, \"Summa Theologica,\" Second Part of the Second Part, Question 77, 13th century"
        },
        {
          "type": "explanation",
          "title": "הסבר",
          "titleEn": "Explanation",
          "content": "אקווינס לא חשב שמחיר הוא רק עניין של היצע וביקוש. הוא חשב שיש למחיר גם ממד מוסרי. והוא הבחין בין שני מצבים שחשוב לא לבלבל ביניהם.\n\nמצב ראשון, <strong>גלגול עלות לגיטימי</strong><strong>:</strong> אם תחנת הדלק עצמה משלמת יותר לספק, כי מחיר הנפט הסיטונאי עלה, אז המחיר הטבעי באמת עלה. להעביר את העלייה הזו ללקוח זה הוגן. הסוחר לא מרוויח יותר, הוא רק מכסה עלות אמיתית שגדלה.\n\nמצב שני, <strong>ניצול מצוקה</strong><strong>:</strong> אם הסוחר מוסיף עוד ועוד למחיר, לא כי העלות שלו עלתה, אלא כי הוא יודע שבמלחמה אנשים ישלמו כל מחיר על דלק, זה כבר משהו אחר. כאן הוא לא מכסה עלות, הוא גובה פרמיה על הייאוש של הקונה.\n\n<strong>דוגמה מהחיים</strong><strong>:</strong> בזמן חירום, כשהחשמל נופל, מוכר מציע פתאום גנרטור בפי שלושה מהמחיר הרגיל. לא מפני שהגנרטור התייקר אצלו, אלא מפני שהוא יודע שאנשים מבוהלים ישלמו. בארה\"ב יש חוקים נגד \"הפקעת מחירים\" (price gouging) בדיוק בשביל המצב הזה. <strong>אקווינס היה קורא לזה בשמו: חטא</strong><strong>.</strong>\n\nוכאן אקווינס מציב אתגר ישיר לסמית ולג'בונס. הם תיארו מחיר שמתאם היצע וביקוש, וקבעו שאין \"מחיר צודק\", יש רק מה שמשלמים. אקווינס שואל: יפה, אבל כשמשפחה משלמת על דלק כדי להגיע לעבודה ולבית חולים סכום שכמעט אינה יכולה לעמוד בו, האם זה \"תיאום\", או שמישהו פשוט מתעשר על חשבון מצוקה?",
          "contentEn": "Aquinas did not think a price was only a matter of supply and demand. He thought a price also has a moral dimension. And he distinguished between two situations that are important not to confuse.\n\nThe first, <strong>legitimate cost pass-through:</strong> if the gas station itself pays more to its supplier, because the wholesale price of oil rose, then the natural price really did rise. Passing that increase on to the customer is just. The seller does not earn more, he only covers a real cost that grew.\n\nThe second, <strong>exploitation of distress:</strong> if the seller keeps adding more and more to the price, not because his cost rose, but because he knows that in wartime people will pay any price for fuel, that is something else. Here he is not covering a cost, he is charging a premium on the buyer's desperation.\n\n<strong>A real-life example:</strong> during an emergency, when the power goes out, a seller suddenly offers a generator at three times the usual price. Not because the generator got more expensive for him, but because he knows frightened people will pay. In the US there are laws against \"price gouging\" for exactly this situation. <strong>Aquinas would call it by its name: a sin.</strong>\n\nAnd here Aquinas poses a direct challenge to Smith and Jevons. They described a price that coordinates supply and demand, and declared there is no \"just price,\" only what people pay. Aquinas asks: fine, but when a family pays a sum they can barely afford for fuel just to get to work and to the hospital, is that \"coordination,\" or is someone simply growing rich off distress?",
          "image": "images/bonus/economics/dialog3-explanation.png"
        },
        {
          "type": "depth",
          "title": "העומק שמאחורי הרעיון",
          "titleEn": "The depth behind the idea",
          "content": "כאן מתחבא הוויכוח הגדול. מי שממשיך את הקו של סמית וג'בונס יגן דווקא על המחיר הגבוה. הטענה: מחיר גבוה הוא שמרסן את הצריכה, מפנה את הדלק המועט למי שהכי זקוק לו, ומתמרץ ספקים להזרים עוד. כלומר המחיר הגבוה לא רק \"יקר\", הוא מחלק משאב נדיר בצורה יעילה.\n\nאקווינס היה מקשיב, ועונה במשפט אחד: יעילות אינה צדק. נכון שהמחיר הגבוה יעיל ומסדר את השוק. אבל יעיל וצודק הם לא אותו דבר. אדם שמשלם הון על דלק כי אחרת לא יגיע לעבודה לא באמת \"מסכים\" מרצון חופשי. הסכמה מתוך מצוקה אינה הסכמה אמיתית.\n\nזו בדיוק נקודת המחלוקת שתלווה את שאר הפרק. סמית וג'בונס מסתכלים על המחיר ושואלים \"האם הוא יעיל, נכון לשוק?\". אקווינס מסתכל על אותו מחיר בדיוק ושואל \"האם הוא צודק?\" שתי השאלות לגיטימיות, והן לא תמיד נותנות את אותה תשובה.",
          "contentEn": "Here lies the great debate. Whoever follows the line of Smith and Jevons would actually defend the high price. The claim: a high price restrains consumption, channels the scarce fuel to those who need it most, and incentivizes suppliers to bring more. In other words, the high price is not merely \"expensive,\" it distributes a scarce resource efficiently.\n\nAquinas would listen, and answer in a single sentence: <strong>efficiency is not justice.</strong> True, the high price is efficient and orders the market. But efficient and just are not the same thing. A person who pays a fortune for fuel because otherwise he cannot get to work does not truly \"agree\" out of free will. Agreement out of distress is not real agreement.\n\nThis is exactly the point of contention that will accompany the rest of the chapter. Smith and Jevons look at the price and ask \"is it efficient, is it right for the market?\". Aquinas looks at the very same price and asks \"is it just?\". Both questions are legitimate, and they do not always give the same answer.",
          "image": "images/bonus/economics/dialog3-depth.png"
        },
        {
          "type": "quiz",
          "intro": "",
          "introEn": "",
          "question": "בזמן המלחמה, שתי תחנות דלק העלו מחירים. תחנה א' העלתה בדיוק בגובה העלייה במחיר הסיטונאי ששילמה לספק. תחנה ב' העלתה הרבה מעבר לכך, כי ידעה שנהגים נואשים ישלמו. כיצד אקווינס היה מבחין בין השתיים?",
          "questionEn": "During the war, two gas stations raised prices. Station A raised it exactly by the increase in the wholesale price it paid its supplier. Station B raised it far beyond that, because it knew desperate drivers would pay. How would Aquinas distinguish between the two?",
          "options": [
            "שתיהן חטאו, כי כל העלאת מחיר בעת מצוקה היא ניצול אסור",
            "תחנה א' רק גלגלה עלות אמיתית שגדלה, ותחנה ב' גבתה פרמיה על הייאוש",
            "שתיהן הוגנות, כי בשוק חופשי כל מחיר מוסכם הוא צודק"
          ],
          "optionsEn": [
            "Both sinned, since any price increase in a time of distress is forbidden exploitation",
            "Station A only passed on a real cost that grew, while Station B charged a premium on desperation",
            "Both are just, since in a free market any agreed price is just"
          ],
          "correctIndex": 1,
          "explanation": "אקווינס לא נגד כל עליית מחיר. גלגול עלות אמיתית הוגן, ניצול הייאוש של הקונה הוא החטא. זה הגבול.",
          "explanationEn": "Aquinas is not against every price increase. Passing on a real cost is just, exploiting the buyer's desperation is the sin. That is the line."
        },
        {
          "type": "quiz",
          "intro": "",
          "introEn": "",
          "question": "חבר אומר: \"אם המחיר הגבוה גרם לאנשים לחסוך בדלק והביא ספקים להזרים עוד, סימן שהוא צודק.\" כיצד אקווינס היה עונה?",
          "questionEn": "A friend says: \"If the high price made people conserve fuel and brought suppliers to deliver more, that is a sign it is just.\" How would Aquinas respond?",
          "options": [
            "נכון, מחיר שמסדר את השוק ביעילות הוא בהגדרה גם צודק",
            "נכון, אבל רק אם הממשלה אישרה את גובה המחיר מראש",
            "מחיר יכול להיות יעיל ועדיין לא צודק, כי יעילות לא שואלת מי משלם ובאיזה כאב"
          ],
          "optionsEn": [
            "Correct, a price that organizes the market efficiently is by definition also just",
            "Correct, but only if the government approved the price level in advance",
            "A price can be efficient and still not be just, because efficiency does not ask who pays and at what pain"
          ],
          "correctIndex": 2,
          "explanation": "סמית מודד יעילות, אקווינס מודד צדק. מחיר יכול לתאם שוק בצורה מושלמת ובו זמנית למוטט את מי שהכי זקוק לו. אלה שתי שאלות שונות.",
          "explanationEn": "Smith measures efficiency, Aquinas measures justice. A price can coordinate a market perfectly and at the same time crush the one who needs it most. These are two different questions."
        },
        {
          "type": "quiz",
          "intro": "",
          "introEn": "",
          "question": "חבר טוען: \"אם נהג הסכים מרצונו לשלם את המחיר הגבוה על הדלק, אז המחיר צודק, נקודה.\" מה היה אקווינס עונה?",
          "questionEn": "A friend argues: \"If a driver agreed of his own free will to pay the high price for fuel, then the price is just, period.\" What would Aquinas answer?",
          "options": [
            "נכון, עצם ההסכמה מרצון פותרת את שאלת הצדק",
            "הסכמה מתוך מצוקה אינה בחירה חופשית, אלא כניעה למצב",
            "צדק נקבע רק לפי החוק, לא לפי הסכמת הצדדים"
          ],
          "optionsEn": [
            "Correct, the act of agreeing freely settles the question of justice",
            "Agreement out of distress is not a free choice, but submission to circumstance",
            "Justice is determined only by law, not by the agreement of the parties"
          ],
          "correctIndex": 1,
          "explanation": "אדם שחייב דלק כדי להגיע לבית חולים לא באמת מתמקח. הסכמה תחת לחץ קיומי אינה הסכמה אמיתית, ולכן התשלום עצמו לא הופך את המחיר להוגן.",
          "explanationEn": "A person who needs fuel to get to a hospital is not really bargaining. Agreement under existential pressure is not real agreement, so the payment itself does not make the price just."
        },
        {
          "type": "quiz_summary"
        }
      ]
    },
    {
      "id": 4,
      "title": "ריקרדו: מי התעשר מהמשבר בלי להרים אצבע?",
      "titleEn": "Ricardo: Who got rich from the crisis without lifting a finger?",
      "thinker": "דייוויד ריקרדו",
      "thinkerEn": "David Ricardo",
      "thinkerId": "ricardo",
      "xp": 50,
      "sections": [
        {
          "type": "idea",
          "title": "הרעיון של היום",
          "titleEn": "Today's idea",
          "content": "סמית הסביר למה המחיר קפץ. אקווינס שאל אם הוא צודק. עכשיו דייוויד ריקרדו שואל שאלה אחרת לגמרי: כשמחיר הנפט זינק בעשרות אחוזים, כל הכסף הנוסף הזה הלך לאנשהו. מישהו קיבל אותו. מי?\n\nריקרדו, כלכלן בריטי מתחילת המאה ה-19, לימד שכל כלכלה מחלקת את העוגה שלה בין שלושה: מי שבבעלותו קרקע ומשאבים, מי שבבעלותו הון, ומי שעובד. והתובנה החדה ביותר שלו: בעל משאב נדיר יכול להתעשר בלי להרים אצבע, רק מעצם זה שהוא הבעלים ברגע שהמשאב מתייקר. את הרווח הזה הוא כינה רֵנטה.\n\nקרקע הייתה המשאב הנדיר של ימי ריקרדו. הנפט הוא הקרקע של זמננו. כשהמלחמה דחפה את מחיר החבית מכ-72 דולר אל מעל 100, כל מי שכבר היו בבעלותו בארות נפט פעילות הרוויח הון, לא כי שאב יותר או עבד קשה יותר, אלא פשוט כי המחיר עלה. זו רֵנטה ריקרדיאנית טהורה: רווח שנוצר מבעלות, לא ממאמץ.",
          "contentEn": "Smith explained why the price jumped. Aquinas asked whether it was just. Now David Ricardo asks an entirely different question: when the price of oil soared by tens of percent, all that extra money went somewhere. Someone received it. Who?\n\nRicardo, a British economist of the early 19th century, taught that every economy divides its pie among three groups: those who own land and resources, those who own capital, and those who work. And his sharpest insight: the owner of a scarce resource can grow rich <strong>without lifting a finger</strong>, simply by being the owner the moment the resource becomes more valuable. This gain he called <strong>rent</strong>.\n\nLand was the scarce resource of Ricardo's day. Oil is the land of our era. When the war pushed the price of a barrel from around 72 dollars to over 100, anyone who already owned producing oil wells made a fortune, not because they pumped more or worked harder, but simply because the price rose. <strong>This is pure Ricardian rent: profit created by ownership, not by effort.</strong>",
          "image": "images/bonus/economics/dialog4-idea.png"
        },
        {
          "type": "source",
          "title": "קטע מקור",
          "titleEn": "Source text",
          "quote": "\"תוצרת האדמה, כל מה שנוצר על ידי שילוב של עבודה, מכונות והון, מתחלקת בין שלוש מעמדות בחברה: בעלי האדמה, בעלי ההון, והעובדים. לקבוע את החוקים השולטים בחלוקה הזו היא המשימה העיקרית של הכלכלה הפוליטית.\"",
          "quoteEn": "\"The produce of the earth, all that is derived from its surface by the united application of labour, machinery, and capital, is divided among three classes of the community: the proprietors of land, the owners of capital, and the labourers. To determine the laws which regulate this distribution is the principal problem in Political Economy.\"",
          "attr": "- דייוויד ריקרדו, \"עקרונות הכלכלה הפוליטית והמיסוי\", 1817",
          "attrEn": "- David Ricardo, \"On the Principles of Political Economy and Taxation,\" 1817"
        },
        {
          "type": "explanation",
          "title": "הסבר",
          "titleEn": "Explanation",
          "content": "ריקרדו שם לב לדבר מטריד: בעל הקרקע מתעשר בלי לתרום דבר. ככל שהביקוש למשאב נדיר עולה, מחירו עולה, והבעלים גורף את ההפרש, בלי להוסיף עבודה, סיכון או תוצרת.\n\nדוגמה מהחיים: קח שדה נפט שעולה לו כ-30 דולר להפיק חבית. לפני המלחמה הוא מכר אותה ב-72, רווח של 42 דולר לחבית. בזמן המלחמה אותה חבית בדיוק נמכרה ב-110, רווח של 80 דולר. הבעלים לא עשה שום דבר אחרת: אותן בארות, אותם עובדים, אותו נפט. אבל המלחמה כמעט הכפילה את הרווח שלו על כל חבית. אותם 38 דולר נוספים לא נוצרו ממאמץ, הם נוצרו מהפחד בשוק, ונפלו בחיקו של מי שבמקרה החזיק בנפט באותו רגע.\n\nוזה מחדד את מה שאקווינס הרגיש בדיאלוג 3. המחיר הגבוה לא תגמל עבודה קשה יותר או סיכון גדול יותר, הוא תגמל בעלות בתזמון הנכון. לכן \"רווח בלתי צפוי\" מרגיש שונה מרווח רגיל: הוא לא הורווח, הוא נחת.",
          "contentEn": "Ricardo noticed something troubling: the landowner grows rich without contributing a thing. As demand for a scarce resource rises, its price rises, and the owner pockets the difference, without adding any labor, risk, or output.\n\n<strong>A real-life example:</strong> Take an oil field that costs about 30 dollars to produce a barrel. Before the war it sold that barrel for 72, a profit of 42 dollars per barrel. During the war the very same barrel sold for 110, a profit of 80 dollars. The owner did nothing different: the same wells, the same workers, the same oil. But the war nearly doubled the profit on every barrel. Those extra 38 dollars were not created by effort, they were created by the fear in the market, and they fell to whoever happened to be holding oil at that moment.\n\nAnd this sharpens what Aquinas sensed in Dialogue 3. The high price did not reward harder work or greater risk, it rewarded ownership at the right moment. <strong>That is why a \"windfall\" feels different from ordinary profit: it was not earned through work, it fell into the owner's lap at the right moment.</strong>",
          "image": "images/bonus/economics/dialog4-explanation.png"
        },
        {
          "type": "depth",
          "title": "העומק שמאחורי הרעיון",
          "titleEn": "The depth behind the idea",
          "content": "כאן התובנה המבנית של ריקרדו. ברגע נתון העוגה קבועה. אז כשבעלי המשאב גורפים פרוסה גדולה יותר (רֵנטה), נשאר פחות לכל השאר. משבר נפט הוא בעצם העברה: הכסף עובר מהצרכנים, ששילמו יותר, אל בעלי הנפט, שגרפו את הרֵנטה. לא נוצר ערך חדש בעולם, הוא רק זז ממקום למקום.\n\nונקודה אחרונה חשובה. הרֵנטה הזו הייתה זמנית, כי הנדירות עצמה הייתה מבוססת פחד, בדיוק כפי שראינו בדיאלוג 1. ברגע שהחשש מהורמוז דעך והמחיר ירד, הרֵנטה התאדתה. כלומר הזינוק יצר גל עתק של עושר לא מורווח, שהופיע ונעלם יחד עם הפאניקה.\n\nריקרדו ענה על חצי מהשאלה: מי הרוויח. החצי השני, מי שילם על הרווח הזה, מחכה לנו בדיאלוג של סן.",
          "contentEn": "Here is Ricardo's structural insight. At any given moment the pie is fixed. So when the resource owners take a larger slice (rent), less remains for everyone else. An oil crisis is essentially a <strong>transfer</strong>: the money moves from consumers, who paid more, to the oil owners, who reaped the rent. No new value was created in the world, it merely moved from one place to another.\n\nAnd one last important point. This rent was temporary, because the scarcity itself was based on fear, exactly as we saw in Dialogue 1. The moment the worry over Hormuz faded and the price fell, the rent evaporated. In other words, the spike created an enormous wave of unearned wealth that appeared and vanished together with the panic.\n\nRicardo answered half the question: who profited. The other half, who paid for that profit, awaits us in the dialogue on Sen.",
          "image": "images/bonus/economics/dialog4-depth.png"
        },
        {
          "type": "quiz",
          "intro": "",
          "introEn": "",
          "question": "חבר אומר: \"יצרני הנפט הרוויחו הון במשבר, סימן שהם עבדו קשה והשקיעו יותר מכולם.\" לפי ריקרדו, היכן הוא טועה?",
          "questionEn": "A friend says: \"The oil producers made a fortune in the crisis, that is a sign they worked hard and invested more than anyone.\" According to Ricardo, where is he wrong?",
          "options": [
            "הוא צודק, רווחי השיא הם פרי המאמץ וההשקעה שלהם",
            "הרווח בא מעצם הבעלות על משאב שהתייקר, לא ממאמץ או השקעה",
            "הוא טועה, כי בפועל הם דווקא ייצרו פחות נפט מהרגיל"
          ],
          "optionsEn": [
            "He is right, the record profits are the fruit of their effort and investment",
            "The profit came from owning a resource that grew dearer, not from effort or investment",
            "He is wrong, because in practice they actually produced less oil than usual"
          ],
          "correctIndex": 1,
          "explanation": "זו הרֵנטה. אותן בארות, אותו נפט, רק מחיר גבוה יותר. הרווח לא בא מעבודה או מסיכון, אלא מעצם ההחזקה במשאב כשהוא התייקר.",
          "explanationEn": "This is rent. The same wells, the same oil, only a higher price. The profit came not from labor or risk, but from merely holding the resource as it grew more expensive."
        },
        {
          "type": "quiz",
          "intro": "",
          "introEn": "",
          "question": "בעל מאפייה מעלה מחיר כי הקמח והחשמל התייקרו לו. בעל באר נפט מרוויח יותר כי מחיר הנפט קפץ. במה שונה הרווח של השני מהראשון?",
          "questionEn": "A bakery owner raises prices because his flour and electricity got more expensive. An oil-well owner earns more because the price of oil jumped. How is the second one's profit different from the first?",
          "options": [
            "אין הבדל, שניהם פשוט הגיבו לעליית מחירים בשוק",
            "המאפייה כיסתה עלות שגדלה, ובעל הבאר גרף הפרש בלי שעלותו השתנתה",
            "דווקא הרווח של המאפייה הוא הבעייתי, לא של בעל הבאר"
          ],
          "optionsEn": [
            "There is no difference, both simply responded to rising market prices",
            "The bakery covered a cost that grew, while the well owner reaped a margin without any change in his costs",
            "It is actually the bakery's profit that is the problem, not the well owner's"
          ],
          "correctIndex": 1,
          "explanation": "ההבדל הוא בין כיסוי עלות לבין רֵנטה. אצל המאפייה העלות באמת גדלה. אצל בעל הבאר העלות לא זזה, רק המחיר, וכל ההפרש נפל בחיקו בלי מאמץ.",
          "explanationEn": "The difference is between covering a cost and rent. For the bakery, the cost truly rose. For the well owner, the cost did not move, only the price, so the entire difference fell into his lap without effort."
        },
        {
          "type": "quiz",
          "intro": "",
          "introEn": "",
          "question": "שנה אחרי המשבר, מחיר הנפט חזר לרמתו, ורווחי העתק של היצרנים נעלמו. מה זה מלמד על הרֵנטה שגרפו?",
          "questionEn": "A year after the crisis, the price of oil returned to its old level, and the producers' record profits vanished. What does this teach about the rent they reaped?",
          "options": [
            "שהיא הייתה קבועה ובטוחה, כי רֵנטה תמיד נשארת",
            "שהיא נבעה מהפחד הזמני, ולכן דעכה יחד איתו",
            "שהיא עברה אל העובדים בשדות במקום אל הבעלים"
          ],
          "optionsEn": [
            "That it was stable and secure, since rent always remains",
            "That it stemmed from the temporary fear, and so faded along with it",
            "That it passed to the field workers instead of the owners"
          ],
          "correctIndex": 1,
          "explanation": "הרֵנטה כאן נשענה כולה על החשש מהורמוז, לא על מחסור אמיתי. ברגע שהפחד דעך, ההפרש שגרפו הבעלים נעלם איתו. עושר שהופיע ונמוג עם הפאניקה.",
          "explanationEn": "This rent rested entirely on the worry over Hormuz, not on a real shortage. The moment the fear faded, the margin the owners reaped vanished with it. Wealth that appeared and dissolved with the panic."
        },
        {
          "type": "quiz_summary"
        }
      ]
    },
    {
      "id": 5,
      "title": "סן: מי באמת שילם את מחיר המשבר?",
      "titleEn": "Sen: Who really paid the price of the crisis?",
      "thinker": "אמרטיה סן",
      "thinkerEn": "Amartya Sen",
      "thinkerId": "sen",
      "xp": 50,
      "sections": [
        {
          "type": "idea",
          "title": "הרעיון של היום",
          "titleEn": "Today's idea",
          "content": "ראינו למה המחיר עלה (סמית), למה כל הנפט התייקר (ג'בונס), אם זה צודק (אקווינס), ומי התעשר (ריקרדו). נשארה שאלה אחת, והיא האנושית מכולן: מי באמת שילם?\n\nבנגל, הודו, 1943. ילד בן תשע בשם אמרטיה סן רואה משהו שלא יעזוב אותו לעולם, הרעב הגדול. בין שניים לשלושה מיליון בני אדם מתים מרעב. אבל ההלם של הילד הוא לא רק מהמוות, אלא ממשהו אחר: לא היה מחסור באוכל. הייצור החקלאי באותה שנה היה תקין. היה אוכל, אבל לאנשים לא היה כסף לקנותו. המחירים זינקו, ומיליונים מתו ליד אוכל שעמד באסם.\n\nהילד גדל והפך לכלכלן, וניסח תובנה ששינתה את הכלכלה: רעב אינו תוצאה של חוסר באוכל, אלא של חוסר ביכולת לרכוש אותו.\n\nעכשיו חזור לדיאלוג 1. הנפט מעולם לא נעלם, אף באר לא נסגרה. בדיוק כמו האוכל בבנגל. משבר הנפט של 2026 לא היה מחסור בנפט, הוא היה קריסה ביכולת של חלק מהאנשים להרשות אותו לעצמם. אותו היגיון אכזרי בדיוק.",
          "contentEn": "We saw why the price rose (Smith), why all the oil grew more expensive (Jevons), whether it was just (Aquinas), and who got rich (Ricardo). One question remains, and it is the most human of all: who actually paid?\n\nBengal, India, 1943. A nine-year-old boy named Amartya Sen sees something that will never leave him, the Great Famine. Between two and three million people die of hunger. But the boy's shock is not only from the death, it is from something else: <strong>there was no food shortage.</strong> Agricultural output that year was normal. There was food, but people had no money to buy it. Prices soared, and millions died beside food that sat in storehouses.\n\nThe boy grew up to become an economist, and formulated an insight that changed economics: famine is not the result of a lack of food, but of a lack of the ability to acquire it.\n\nNow go back to Dialogue 1. The oil never vanished, not a single well shut down. Exactly like the food in Bengal. The 2026 oil crisis was not a shortage of oil, <strong>it was a collapse in some people's ability to afford it.</strong> The very same brutal logic.",
          "image": "images/bonus/economics/dialog5-idea.png"
        },
        {
          "type": "source",
          "title": "קטע מקור",
          "titleEn": "Source text",
          "quote": "\"הפיתוח יכול להיראות כתהליך של הרחבת היכולות של אנשים לחיות חיים שיש להם סיבה לרצות בהם.\"",
          "quoteEn": "\"Development can be seen as a process of expanding the capabilities of people to live lives they have reason to want.\"",
          "attr": "- אמרטיה סן, Development as Freedom, 1999",
          "attrEn": "- Amartya Sen, Development as Freedom, 1999"
        },
        {
          "type": "explanation",
          "title": "הסבר",
          "titleEn": "Explanation",
          "content": "הרעיון המרכזי של סן הוא גישת היכולות: למדוד הצלחה כלכלית לא לפי מה שיש לאדם, אלא לפי מה שהוא יכול לעשות בפועל. הכותרת \"הנפט התייקר ב-49 אחוז\" היא מספר ממוצע אחד, אבל אותה התייקרות עצמה משפיעה אחרת לגמרי על אנשים שונים, והממוצע מסתיר את ההבדל.\n\nדוגמה מהחיים: שתי משפחות משלמות בדיוק את אותו מחיר חדש על דלק. הראשונה, בעלת הכנסה נוחה, סופגת את העלייה, אולי מוותרת על טיול אחד. השנייה, משפחה שחיה ממילא על הקצה, ותלויה ברכב כדי להגיע לעבודה ולמרפאה. אותה התייקרות בדיוק היא \"מטרד קטן\" עבור האחת, ו\"לא מצליחה לסגור את החודש, לא מגיעה לעבודה, מוותרת על התור לרופא\" עבור השנייה. המחיר זהה לשתיהן, אבל הפגיעה ביכולת לחיות שונה לחלוטין.\n\nזה מה שהמספר הכותרתי מחביא. ולכן סן אומר: אל תמדוד את המשבר לפי המחיר הממוצע או לפי ה-GDP. מדוד אותו לפי מה שקרה ליכולת הממשית של אנשים לחיות: להגיע לעבודה, לחמם את הבית, להגיע לטיפול.",
          "contentEn": "Sen's central idea is the <strong>capabilities approach</strong>: to measure economic success not by what a person has, but by what they can actually do. The headline \"oil rose 49 percent\" is a single average number, but that very same increase affects different people completely differently, and the average hides the difference.\n\n<strong>A real-life example:</strong> Two families pay exactly the same new price for fuel. The first, with a comfortable income, absorbs the rise, perhaps gives up one trip. The second, a family already living on the edge, depends on its car to get to work and to the clinic. The same increase is a \"minor annoyance\" for one, and \"can't make the month, can't get to work, gives up the doctor's appointment\" for the other. The price is identical for both, but the harm to their ability to live is completely different.\n\nThis is what the headline number hides. And so Sen says: do not measure the crisis by the average price or by GDP. <strong>Measure it by what happened to people's real ability to live:</strong> to get to work, to heat the home, to reach care.",
          "image": "images/bonus/economics/dialog5-explanation.png"
        },
        {
          "type": "depth",
          "title": "העומק שמאחורי הרעיון",
          "titleEn": "The depth behind the idea",
          "content": "כאן סן סוגר את כל הפרק. כל ההוגים לפניו הסתכלו על המחיר: סמית למה זז, ג'בונס למה כל כך הרבה, אקווינס אם הוא צודק, ריקרדו מי הרוויח ממנו. סן מסיט את המבט לגמרי: הפסיקו לבהות במחיר, הביטו באנשים. המדד האמיתי של משבר אינו המספר על המסך, אלא האם אנשים עדיין יכולים לחיות חיים שיש להם סיבה לרצות בהם.\n\nויש כאן גם תקווה. סן בדק את מקרי הרעב ההמוני במאה ה-20, וגילה שאף אחד מהם לא קרה במדינה דמוקרטית מתפקדת. במקום שבו אנשים יכולים להשמיע קול ולדרוש מענה, החברה רואה את הנפגעים ופועלת לפני האסון. ההגנה העמוקה ביותר על החלש בזמן משבר אינה מנגנון המחיר, אלא חברה שמסתכלת עליו.\n\nהנפט חזר, המחיר ירד, הרֵנטה התאדתה. אבל עבור המשפחה שבקושי עברה את אותם חודשים, המשבר מעולם לא היה על חבית נפט. הוא היה על השאלה אם היא יכולה להמשיך לחיות את חייה. וזה, אומר סן, המספר היחיד שאי פעם באמת נספר.",
          "contentEn": "Here Sen closes the entire chapter. Every thinker before him looked at the price: Smith at why it moved, Jevons at why so much, Aquinas at whether it was just, Ricardo at who profited from it. Sen shifts the gaze entirely: stop staring at the price, look at the people. <strong>The true measure of a crisis is not the number on the screen, but whether people can still live lives they have reason to want.</strong>\n\nAnd there is hope here too. Sen examined the cases of mass famine in the 20th century, and found that none of them happened in a functioning democracy. Where people can raise their voice and demand a response, society sees those who are harmed and acts before catastrophe. The deepest protection for the vulnerable in a crisis is not the price mechanism, but a society that looks at them.\n\nThe oil returned, the price fell, the rent evaporated. But for the family that barely made it through those months, the crisis was never about a barrel of oil. It was about whether it could go on living its life. And that, Sen says, is the only number that ever truly counted.",
          "image": "images/bonus/economics/dialog5-depth.png"
        },
        {
          "type": "quiz",
          "intro": "",
          "introEn": "",
          "question": "חבר אומר: \"בעצם לא היה משבר נפט אמיתי, כי הנפט המשיך לזרום ואף באר לא נסגרה.\" כיצד היה סן מגיב, על סמך מה שראה בבנגל?",
          "questionEn": "A friend says: \"There was no real oil crisis, because the oil kept flowing and not a single well shut down.\" How would Sen respond, based on what he saw in Bengal?",
          "options": [
            "הוא צודק, אם הנפט לא נעלם אז לא היה משבר אמיתי",
            "משבר אינו רק היעדר המשאב, אלא קריסה ביכולת של אנשים להרשות אותו",
            "הוא צודק, כי משבר נמדד רק לפי כמות המשאב שאבדה"
          ],
          "optionsEn": [
            "He is right, if the oil did not vanish then there was no real crisis",
            "A crisis is not only the absence of the resource, but a collapse in people's ability to afford it",
            "He is right, because a crisis is measured only by how much of the resource was lost"
          ],
          "correctIndex": 1,
          "explanation": "זו תובנת בנגל. שם היה אוכל, ובכל זאת מיליונים מתו כי לא יכלו לקנותו. הנפט ב-2026 לא נעלם, אבל היכולת של חלק מהאנשים להרשות אותו כן קרסה. זה המשבר.",
          "explanationEn": "This is the Bengal insight. There, food existed, yet millions died because they could not buy it. The oil in 2026 did not vanish, but some people's ability to afford it did collapse. That is the crisis."
        },
        {
          "type": "quiz",
          "intro": "",
          "introEn": "",
          "question": "שתי משפחות ספגו בדיוק את אותה התייקרות בדלק. אחת בקושי הרגישה, השנייה לא הצליחה לסגור את החודש. מה, לפי סן, צריך למדוד כדי להבין את המשבר?",
          "questionEn": "Two families absorbed exactly the same rise in fuel prices. One barely felt it, the other could not make the month. What, according to Sen, should be measured to understand the crisis?",
          "options": [
            "את המחיר הממוצע, שהיה זהה לשתיהן",
            "את ה-GDP, שמסכם את כל הכלכלה במספר אחד",
            "את היכולת הממשית של כל משפחה לחיות, שנפגעה בצורה שונה"
          ],
          "optionsEn": [
            "The average price, which was identical for both",
            "The GDP, which sums up the whole economy in a single number",
            "Each family's real ability to live, which was harmed differently"
          ],
          "correctIndex": 2,
          "explanation": "זו גישת היכולות. אותו מחיר עצמו משפיע אחרת על אנשים שונים. המספר הממוצע מחביא את הפער, ורק מבט על מה שאנשים יכולים לעשות בפועל חושף מי באמת נפגע.",
          "explanationEn": "This is the capabilities approach. The same price itself affects different people differently. The average number hides the gap, and only looking at what people can actually do reveals who was truly harmed."
        },
        {
          "type": "quiz",
          "intro": "",
          "introEn": "",
          "question": "חבר אומר: \"המחיר ירד בחזרה, אז המשבר נגמר וזהו.\" כיצד היה סן מערער על כך?",
          "questionEn": "A friend says: \"The price came back down, so the crisis is over, end of story.\" How would Sen challenge this?",
          "options": [
            "הוא צודק, ברגע שהמחיר חוזר לקדמותו המשבר נגמר לגמרי",
            "מי שנדחף לחוב או ויתר על צרכים בזמן המשבר נשא נזק שלא נמחק כשהמחיר ירד",
            "הוא צודק, כי כלכלה נמדדת רק לפי מחירים בשוק"
          ],
          "optionsEn": [
            "He is right, the moment the price returns to normal the crisis is completely over",
            "Whoever was pushed into debt or gave up necessities during the crisis bore a harm that was not erased when the price fell",
            "He is right, because an economy is measured only by market prices"
          ],
          "correctIndex": 1,
          "explanation": "בשביל סן המחיר אינו התכלית. משפחה שנכנסה לחוב או ויתרה על טיפול כדי לעבור את החודשים האלה ספגה פגיעה ביכולת לחיות, ופגיעה כזו אינה מתאדה ברגע שהמחיר יורד. המדד האמיתי הוא האנשים, לא המספר.",
          "explanationEn": "For Sen, the price is not the goal. A family that went into debt or gave up care to get through those months suffered harm to its ability to live, and such harm does not evaporate the moment the price drops. The real measure is the people, not the number."
        },
        {
          "type": "quiz_summary"
        }
      ]
    }
  ]
};
