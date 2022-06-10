Since Smartcat uses a web-interface, you may automate some frequent PEMT tasks via quite simple bookmarklets.

Below you may find several snippets I use when editing MT output for my projects with English as a target language.

# Capitalization (Chicago)

Sometimes, MT engines do not recognize titles that require capitalization of content words (most projects I run imply Chicago style of capitalization). Selective using SHIFT+F3 may be tedious, especially if titles are long or they are in abundance. To avoid this, select the title to be capitalized and click the bookmarklet on the bookmarks bar.

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

# Security issues

The first time you try using a bookmarklet in the Smarcat interface you need to grant permission for the same after the browser pops a relevant prompt. Then, within the current session, you may use bookmarklets without any restrictions. 

# Saving data
* Please keep in mind that altering a text with a bookmarklet won’t affect the data stored in the Smartcat system for your document unless you do some extra editing of every particular segment. 
* If (after modification with a bookmarklet is applied), no more editing is required, I simply type the EQUAL sign within the segment and immediately delete the sign with the BACKSPACE key. 
* If you don’t edit your segment after using a bookmarklet the changes won’t be stored in the system, even when you mark the segment as translated.

