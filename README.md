# General

* Since Smartcat uses a web-interface, you may automate some frequent PEMT tasks via quite simple bookmarklets.
* Below you may find several snippets I use when editing MT output for my projects with English as a target language.
* To use these bookmarklets, create a new bookmark on the bookmarks bar, right-click Edit, assign any name you want (for example, those given as titles)
  and copy-paste the respective code to the URL field. 
* Pretty-print of snippets can be viewed at https://github.com/algeoba/SmartcatBookmarklets_1/blob/master/SmartcatBookmarklets.js

# Security issues

The first time you try using a bookmarklet in the Smarcat interface you need to grant permission for the same after the browser pops a relevant prompt. Then, within the current session, you may use bookmarklets without any restrictions. 

# Saving data
* Please keep in mind that altering a text with a bookmarklet won’t affect the data stored in the Smartcat system for your document unless you do some extra editing of every particular segment. 
* If (after modification with a bookmarklet is applied), no more editing is required, I simply type the EQUAL sign within the segment and immediately delete the sign with the BACKSPACE key. 
* If you don’t edit your segment after using a bookmarklet the changes won’t be stored in the system, even when you mark the segment as translated.

# Capitalization (Chicago)

Sometimes, MT engines do not recognize titles that require capitalization of content words (most projects I run imply Chicago style of capitalization). Selective using SHIFT+F3 may be tedious, especially if titles are long or they are in abundance. To avoid this, select the title to be capitalized and click the bookmarklet on the bookmarks bar.

javascript: (function () { let currentSegment = document.activeElement; let selectionString = window.getSelection().toString(); let selectionArray = selectionString.split(' '); let noCapitalization = ['a', 'about', 'above', 'across', 'after', 'against', 'along', 'among', 'and', 'around', 'as', 'at', 'before', 'beside', 'besides', 'between', 'beyond', 'but', 'by', 'despite', 'down', 'during', 'except', 'excepting', 'excluding', 'for', 'from', 'in', 'including', 'inside', 'into', 'like', 'near', 'nearer', 'nearest', 'of', 'off', 'on', 'or', 'onto', 'out', 'outside', 'over', 'per', 'regarding', 'respecting', 'short', 'since', 'than', 'the', 'through', 'throughout', 'till', 'to', 'toward', 'towards', 'under', 'underneath', 'unlike', 'until', 'unto', 'up', 'upon', 'v.', 'versus', 'via', 'vs.', 'with', 'within', 'without']; let selectionRemade = selectionArray.map(item => (noCapitalization.includes(item) == true) ? item = item : item = item[0].toUpperCase() + item.slice(1)).join(' '); let output = currentSegment.innerText.replace(selectionString, selectionRemade); currentSegment.innerText = output; })()


# Move Adverbial Forward
There are cases when I need to place a final-position adverbial phrase (conditional, temporal etc.) in the beginning of a sentence, for better text cohesion.
For example, I want the sentence 
* You may save your time with this bookmarklet.

to read as
* With this bookmarklet, you may save your time.

If I edit it manually, I need to (1) move the adverbial, (2) capitalize the first letter of it, (3) add a comma, (4) bring the first letter of the originally initial word to lowercase, and (5) delete a space left before trailing punctuation.

Or, I just highlight the adverbial and click this bookmarklet.


# Paste Multiple Segments

If you need to paste multiple paragraphs or table cells from a reference material or user interface of another MT engine, into a series of segments of your Smartcat document, just copy those paragraphs or cells to clipboard, place the cursor to the segment you want to start pasting from, and click this bookmarklet.

If you apply filtering to your Smartcat document, the data will be pasted into the filtered segments.

# 12 345,67 to 12,345.67

Combination of MT pre-translation and MT engines can lead to erroneous number formats (or erroneous numbers in fuzzy matches), so, you need to copy source to target and then modify the numbers in line with standard format. If so, highlight the number of 12 345,67 format and click this bookmarklet to bring the number to 12,345.67 format.
# 01.01.2001 to 1 January 2001

and 

# 01.01.2001 to January 1, 2001

Sometimes, MT does not pick up dates and I use these bookmarklets to convert the dates from 01.01.2001 format to 1 January 2001 or January 1, 2001 format (select the date and then click the appropriate bookmarklet).



