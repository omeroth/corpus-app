lines = open('index.html', encoding='utf-8').readlines()

start = 3707 - 1  # 0-indexed, line 3707 = opening {
end   = 3787 - 1  # 0-indexed, line 3787 = opening { of day 5 (not included)

new_content = """      {
        id: 4,
        title: 'ניטשה: מי מחליט מה הערכים של ה-AI?',
        titleEn: 'Nietzsche: Who Decides the Values of AI?',
        thinker: 'פרידריך ניטשה',
        thinkerEn: 'Friedrich Nietzsche',
        thinkerId: 'nietzsche',
        xp: 50,
        sections: [
          {
            type: 'idea',
            title: 'הרעיון של היום',
            titleEn: 'Today\\'s Idea',
            content: 'ב-2023 פרסמה OpenAI מסמך בן 60 עמודים המסביר את "ערכי" ChatGPT. גוגל פרסמה את "עקרונות ה-AI" שלה, ו-Anthropic יצרה "AI חוקתי". כולם מסמכים מרשימים המדברים על בטיחות, הוגנות ואי-הטיה.\\n\\nאבל ניטשה היה שואל שאלה פשוטה: מי נתן לכם את הסמכות? הוא לא היה מחפש את החתימה על המסמך, אלא את הכוח שמאחוריו. מי מרוויח כשה-AI "מתנהג יפה"? ומי מפסיד?',
            contentEn: 'In 2023, OpenAI published a 60-page document explaining the "values" of ChatGPT. Google published its "AI Principles," and Anthropic created a "Constitutional AI." All impressive documents speaking of safety, fairness, and non-bias.\\n\\nBut Nietzsche would ask a simple question: who gave you the authority? He would not look for the signature on the document, but for the power behind it. Who benefits when AI "behaves nicely"? And who loses?',
            image: 'images/bonus/day4-idea.jpeg'
          },
          {
            type: 'source',
            title: 'קטע מקור',
            titleEn: 'Source Material',
            quote: '"המוסר באירופה של היום הוא מוסר של עדר... סוג אחד של מוסר אנושי מתקבל בכל מקום: המוסר הזה רוצה לשלוט, ואם אפשר - להיות המוסר היחיד."',
            quoteEn: '"The morality in Europe today is herd morality... one type of human morality is accepted everywhere: this morality wants to rule, and if possible - to be the only morality."',
            attr: '- פרידריך ניטשה, "מעבר לטוב ולרוע" (1886)',
            attrEn: '- Friedrich Nietzsche, Beyond Good and Evil (1886)'
          },
          {
            type: 'explanation',
            title: 'הסבר',
            titleEn: 'Explanation: The Battle Over the Prompt',
            content: 'ניטשה לא היה אנרכיסט; הוא פשוט הבין שכל מערכת ערכים היא ביטוי של כוח. כשחברות טכנולוגיה קובעות מה ה-AI "מורשה" לומר, הן לא פועלות מתוך חוכמה עליונה - הן משרתות את האינטרסים שלהן.\\n\\nהאם ה-AI ניטרלי?\\nChatGPT עשוי לסרב לשבח דיקטטור, אך יכתוב בשמחה נאום המשבח דמוקרטיה ליברלית. זו לא "אי-הטיה" - זו עמדה מוסרית שמשקפת את הערכים של סיליקון ואלי ב-2026.\\n\\nניטשה היה רוצה שנפסיק להתחבא מאחורי מילים כמו "בטיחות" ו"הוגנות" ונשאל בכנות: בטיחות עבור מי? הוגנות לפי מי?',
            contentEn: 'Nietzsche was not an anarchist; he simply understood that every value system is an expression of power. When technology companies determine what AI is "permitted" to say, they are not acting from superior wisdom - they are serving their own interests.\\n\\nIs AI neutral? ChatGPT may refuse to praise a dictator, but will happily write a speech praising liberal democracy. This is not "non-bias" - it is a moral stance reflecting the values of Silicon Valley in 2026.\\n\\nNietzsche would want us to stop hiding behind words like "safety" and "fairness" and ask honestly: safety for whom? Fairness according to whom?',
            image: 'images/bonus/day4-explanation.png'
          },
          {
            type: 'depth',
            title: 'עומק',
            titleEn: 'Depth: Honesty as the Supreme Value',
            content: 'ניטשה טען שהצדקה מוסרית המסתירה כוח היא הצורה המסוכנת ביותר של שקר. בהקשר של AI, זה אומר: אל תגידו שהאלגוריתם הוא "ניטרלי". תגידו מה הערכים שלו ומי בחר אותם.\\n\\nניטשה בז לניסיון "לא לפגוע באף אחד" (מה שכינה "מוסר עבדים"). עבורו, צמיחה אמיתית מגיעה מקונפליקט ומיצירת ערכים חדשים - לא מסירוס המחשבה כדי להפוך אותה לבינונית ונוחה לעיכול.',
            contentEn: 'Nietzsche argued that moral justification hiding power is the most dangerous form of lying. In the context of AI, this means: do not say the algorithm is "neutral." Say what its values are and who chose them.\\n\\nNietzsche despised the attempt to "not hurt anyone" (what he called "slave morality"). For him, true growth comes from conflict and the creation of new values - not from castrating thought to make it mediocre and easy to digest.',
            image: 'images/bonus/day4-depth.png'
          },
          {
            type: 'quiz',
            intro: 'חברת AI טוענת שהמודל שלה "ניטרלי לחלוטין" כי הוא מסונן מכל דעה פוליטית שנויה במחלוקת.',
            introEn: 'An AI company claims its model is "completely neutral" because it is filtered from any controversial political opinion.',
            question: 'מה ניטשה היה אומר על כך?',
            questionEn: 'What would Nietzsche say about this?',
            options: ['זהו הישג מוסרי כיוון שהוא מונע חיכוך חברתי', 'זוהי הטעיה - המילה "ניטרלי" היא עצמה כלי כוח שנועד להסתיר ערכים ספציפיים', 'זהו צעד הכרחי כדי למנוע מהמכונה להפוך למסוכנת'],
            optionsEn: ['This is a moral achievement since it prevents social friction', 'This is deception - the word "neutral" is itself a power tool designed to hide specific values', 'This is a necessary step to prevent the machine from becoming dangerous'],
            correctIndex: 1,
            explanation: 'ניטשה היה מזהה שהימנעות היא גם בחירה. כשחברה קוראת לעצמה "ניטרלית", היא בעצם כופה את הסטנדרט שלה כ"נורמלי", ובכך משתיקה דעות אחרות מבלי להודות שהיא עושה זאת.',
            explanationEn: 'Nietzsche would identify that abstention is also a choice. When a company calls itself "neutral," it is actually imposing its standard as "normal," thereby silencing other opinions without admitting it is doing so.'
          },
          {
            type: 'quiz',
            intro: 'ממשלה מחייבת את כל מערכות ה-AI לסנן ביקורת על השלטון בשם "היציבות החברתית".',
            introEn: 'A government requires all AI systems to filter criticism of the government in the name of "social stability."',
            question: 'לפי ניטשה, מה קורה כאן באמת?',
            questionEn: 'According to Nietzsche, what is really happening here?',
            options: ['הממשלה דואגת בכנות לשלוות האזרחים', 'שימוש בשפה מוסרית ("יציבות") כדי להסוות שמירה על כוח פוליטי', 'הממשלה מנסה לחנך את ה-AI להיות בעל מידות טובות'],
            optionsEn: ['The government genuinely cares for the peace of its citizens', 'Using moral language ("stability") to disguise the preservation of political power', 'The government is trying to educate AI to have good values'],
            correctIndex: 1,
            explanation: 'ניטשה היה מכנה זאת "מוסר עדר" במיטבו. השלטון משתמש במושגים שנשמעים חיוביים כדי לאלף את הציבור ולשמר את מעמדו. ניטשה דרש כנות: אם אתם רוצים כוח, אל תקראו לזה "מוסר".',
            explanationEn: 'Nietzsche would call this "herd morality" at its finest. The government uses concepts that sound positive to domesticate the public and preserve its status. Nietzsche demanded honesty: if you want power, do not call it "morality."'
          },
          {
            type: 'quiz',
            intro: 'חברת AI מסרבת לדון בנושאים דתיים כי "זה רגיש מדי". בפועל, היא חוששת מתביעות והפסד לקוחות.',
            introEn: 'An AI company refuses to discuss religious topics because "it is too sensitive." In practice, it fears lawsuits and loss of customers.',
            question: 'מה ניטשה היה ממליץ לה?',
            questionEn: 'What would Nietzsche recommend?',
            options: ['להמשיך כך - זהו המודל העסקי הבטוח ביותר', 'להודות באמת: "אנחנו לא דנים בזה כי זה מסובך עסקית", במקום להסתתר מאחורי מילים יפות', 'לנסות לייצג את כל הדתות באופן שווה כדי להיות ניטרלית באמת'],
            optionsEn: ['Continue this way - it is the safest business model', 'Admit the truth: "We do not discuss this because it is complicated business-wise," instead of hiding behind nice words', 'Try to represent all religions equally in order to be truly neutral'],
            correctIndex: 1,
            explanation: 'ניטשה העריך כנות. הוא היה מעדיף חברה שמודה במניעים הכלכליים והאנוכיים שלה על פני חברה שמציירת את הפחדים שלה כ"רגישות מוסרית" או "אתיקה".',
            explanationEn: 'Nietzsche valued honesty. He would prefer a company that admits its economic and self-interested motives over a company that paints its fears as "moral sensitivity" or "ethics."'
          }
        ]
      },
"""

lines[start:end] = [new_content]

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print(f'Replaced lines {start+1}-{end} with new day 4 content')
