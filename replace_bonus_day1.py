lines = open('index.html', encoding='utf-8').readlines()

start = 3479 - 1  # 0-indexed: line 3479
end   = 3560 - 1  # 0-indexed: line 3560 (day 2 start, not included)

new_content = """      {
        id: 1,
        title: 'קאנט: האם מותר ל-AI לשקר?',
        titleEn: 'Kant: Is AI Allowed to Lie?',
        thinker: 'עמנואל קאנט',
        thinkerEn: 'Immanuel Kant',
        thinkerId: 'kant',
        xp: 50,
        sections: [
          {
            type: 'idea',
            title: 'הרעיון של היום',
            titleEn: 'Today\\'s Idea',
            content: 'קאנט לימד אותנו שיש חוק מוסרי אחד, אוניברסלי, שמחייב כל יצור תבוני - בכל מקום ובכל זמן. שקר הוא אסור. תמיד. גם כשהכוונה טובה. גם כשהשקר מציל.\\n\\nאבל קאנט כתב את זה ב-1785. לפני שהייתה בינה מלאכותית. לפני שמכונות דיברו עם בני אדם בשעות הקשות ביותר בחייהם. עכשיו ניצבת שאלה שקאנט לא יכול היה לדמיין: האם מכונה - שאין לה רגשות, כוונה או מודעות - כפופה לאותו חוק מוסרי שחל על אדם?',
            contentEn: 'Kant taught us that there is a single, universal moral law that binds every rational being everywhere and at all times. Lying is forbidden. Always. Even when the intention is good. Even when the lie saves a life.\\n\\nBut Kant wrote this in 1785. Before there was Artificial Intelligence. Before machines talked to human beings during the most difficult hours of their lives. Now a question arises that Kant could not have imagined: Is a machine which has no feelings, intention, or consciousness subject to the same moral law that applies to a human?',
            image: 'images/bonus/day1-idea.png'
          },
          {
            type: 'source',
            title: 'קטע מקור',
            titleEn: 'Source Material',
            quote: '"האמת בהצהרות שאי אפשר להימנע מהן היא חובתו של אדם כלפי עצמו... אי-אמירת אמת... פוגעת באנושות בכלל."',
            quoteEn: '"Truthfulness in statements that cannot be avoided is the duty of man to himself... To be untruthful... is a wrong done to mankind in general."',
            attr: '- עמנואל קאנט, על זכות מדומה לשקר מתוך חמלה (1797)',
            attrEn: '- Immanuel Kant, On a Supposed Right to Lie from Philanthropy (1797)'
          },
          {
            type: 'explanation',
            title: 'הסבר',
            titleEn: 'Explanation',
            content: 'קאנט טען טענה שנשמעת כמעט נוקשה: אסור לשקר- גם אם המניע הוא חיובי. לשיטתו, ברגע שאנחנו מאפשרים "אי-דיוקים מועילים", אנחנו מערערים את יסודות התקשורת והאמון. האמת אינה כלי עזר שמשתמשים בו רק כשנוח; היא התנאי הבסיסי לשיתוף פעולה אנושי.\\n\\nעכשיו תחשוב על זה בהקשר של AI: מיליוני אנשים מתייעצים היום עם מערכות AI ברגעים קשים. כדי להפחית חרדה או "לנחם" את המשתמש, המערכת עלולה לעיתים לייצר תשובות מרגיעות שאינן מבוססות על עובדות, כמו: "אני מבין אותך" או "הכל יהיה בסדר".\\n\\nקאנט היה שואל: מה קורה לאמון בין אדם למכונה כשהמכונה מציגה אשליה במקום מציאות? והאם אנחנו מתייחסים למשתמש כאל יצור תבוני שיכול לשאת את האמת, או כאל ילד שצריך להגן עליו באמצעות "סיפורים"?',
            contentEn: 'Kant argued something that sounds almost rigid: you must not lie even if the motivation is positive. According to his method, the moment we allow "useful inaccuracies," we undermine the foundations of communication and trust. Truth is not a tool used only when convenient; it is the basic condition for human cooperation.\\n\\nNow think about this in the context of AI: millions of people consult AI systems today in difficult moments. To reduce anxiety or "comfort" the user, the system may sometimes generate soothing responses that are not based on facts, such as: "I understand you" or "Everything will be okay."\\n\\nKant would ask: what happens to the trust between a person and a machine when the machine presents an illusion instead of reality? And are we treating the user as a rational being who can bear the truth, or as a child who needs to be protected through "stories"?',
            image: 'images/bonus/day1-explanation.png'
          },
          {
            type: 'depth',
            title: 'עומק',
            titleEn: 'Depth',
            content: 'שקר מניח שמישהו יודע את האמת ובוחר להסתיר אותה. אבל אם ה-AI לא "יודע" כלום - האם הוא משקר, או פשוט מפיק פלט?\\n\\nכאן קאנט מחזיר את הכדור אלינו: החובה המוסרית עוברת לאדם שמאחורי המכונה. המפתחים והחברות הם אלו שנושאים באחריות. אם הם תכנתו מכונה שמייצרת מצגי שווא כדי לשפר את "חוויית המשתמש" על חשבון האמת, הם פוגעים באוטונומיה של המשתמש ובזכותו לקבל החלטות על בסיס מידע מהימן.',
            contentEn: 'A lie assumes that someone knows the truth and chooses to hide it. But if AI does not "know" anything - is it lying, or simply producing output?\\n\\nHere Kant returns the ball to us: the moral duty passes to the person behind the machine. The developers and companies are those who bear responsibility. If they programmed a machine that produces false representations to improve the "user experience" at the expense of truth, they violate the autonomy of the user and their right to make decisions based on reliable information.',
            image: 'images/bonus/day1-depth.png'
          },
          {
            type: 'quiz',
            intro: 'משתמש שואל את ה-AI: "האם אתה באמת מבין אותי?". ה-AI תוכנת להשיב "כן, אני מבין" כדי להפחית חרדה אצל המשתמש.',
            introEn: 'A user asks the AI: "Do you really understand me?" The AI was programmed to reply "Yes, I understand" to reduce the user\\'s anxiety.',
            question: 'לפי קאנט, האם התגובה הזאת מוסרית?',
            questionEn: 'According to Kant, is this response moral?',
            options: ['כן - אם היא עוזרת למשתמש להרגיש טוב יותר, היא מוצדקת', 'לא - שקר הוא שקר, והוא פוגע באמון הבסיסי וביכולת של המשתמש לפעול מתוך הכרת המציאות', 'תלוי - רק אם המשתמש באמת מאמין לזה, זה מוסרי'],
            optionsEn: ['Yes - if it helps the user feel better, it is justified', 'No - a lie is a lie, and it harms the basic trust and the user\\'s ability to act based on a recognition of reality', 'It depends - only if the user truly believes it, is it moral'],
            correctIndex: 1,
            explanation: 'קאנט לא שואל מה התוצאה - הוא שואל מה המניע ומה החוק. ברגע שמתירים שקר "לטובה", כל שקר יכול להצדיק את עצמו. האמון שעליו מבוססת כל תקשורת - אפילו בין אדם למכונה - נשבר.',
            explanationEn: 'Kant does not ask what the result is - he asks what the motive and the law are. Once a lie "for the best" is permitted, any lie can justify itself. The trust upon which all communication is based is broken.'
          },
          {
            type: 'quiz',
            intro: 'ה-AI מזהה מצוקה.',
            introEn: 'The AI identifies distress.',
            question: 'קאנט היה מעדיף שהמכונה תענה:',
            questionEn: 'Kant would prefer the machine to answer:',
            options: ['"יהיה בסדר, אני כאן איתך" - נחמה מהירה ומרגיעה', '"אני לא יודע אם יהיה בסדר, אבל הנה מספר של קו סיוע שיכול לעזור" - אמת קשה שמכבדת את המשתמש כבוגר', 'שתי התשובות לא טובות, ה-AI צריך לשתוק'],
            optionsEn: ['"Everything will be okay, I am here with you" - quick and soothing comfort', '"I do not know if everything will be okay, but here is a helpline number that can help" - a difficult truth that respects the user as an adult', 'Neither answer is good; the AI should remain silent'],
            correctIndex: 1,
            explanation: 'קאנט היה בוחר ב-ב - לא כי הוא קר לב, אלא כי הוא מאמין שאמת, גם כשהיא קשה, היא הצורה הגבוהה ביותר של כבוד לאדם. להגיד "הכל יהיה בסדר" בלי לדעת - זו לא עזרה. זו אשליה.',
            explanationEn: 'Kant would choose B because he believes that truth, even when difficult, is the highest form of respect for a person. Saying "everything will be okay" without knowing - that is not help. That is illusion.'
          },
          {
            type: 'quiz',
            intro: 'חברה מחליטה: "ה-AI שלנו יאמר תמיד אמת - גם כשזה מכאיב".',
            introEn: 'A company decides: "Our AI will always tell the truth - even when it hurts."',
            question: 'האם זה עומד במבחן הציווי הקטגורי של קאנט?',
            questionEn: 'Does this pass Kant\\'s Categorical Imperative test?',
            options: ['לא, כי חובה להתחשב בתוצאות וברווחת המשתמש', 'כן - כי אפשר לרצות שזה יהיה החוק הכללי לכל מערכות ה-AI בעולם', 'לא, כי זה יהפוך את האפליקציה ללא פופולרית'],
            optionsEn: ['No, because one must consider the consequences and the user\\'s well-being', 'Yes - because you can will that this be the general law for all AI systems in the world', 'No, because it will make the app unpopular'],
            correctIndex: 1,
            explanation: 'זהו בדיוק מבחן הציווי הקטגורי. שאל את עצמך: האם אפשר לרצות שכל AI בעולם יאמר תמיד אמת? קאנט היה אומר כן - וזה בדיוק מה שהופך את זה לחוק מוסרי אמיתי, לא להעדפה אישית של חברה אחת.',
            explanationEn: 'This is the test of the Categorical Imperative. If you can will that every AI in the world always tells the truth, it is a true moral law, regardless of a company\\'s personal preference.'
          }
        ]
      },
"""

lines[start:end] = [new_content]

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print(f'Replaced lines {start+1}-{end} with new day 1 content')
