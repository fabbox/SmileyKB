Smiley Keyboard for FirefoxOS
=============================

Description
-----------
Keyboard to quickly punctuate your messages with ASCII smiley.

**WARNING: you need to run FirefoxOS version 2.0 miminum (B2G 2.0).**

It seems that a change happened between v2.0 et v2.2 concerning the
"MozActivity" name of the ffos setting panel (from "configure" to
"moz_configure_window"). This application uses the lastest version which can
lead to non-functionning "back" button in the setting panel of this keyboard.
To circumvent this issue, I add a "close" button to the setting panel of this
keyboard (but you can't use the back button).
If your device run on firefox OS < 2.2, you may want to change the code in
"www/js/settings.js". Comment the line beginning by "name:" and uncommented the
line below.

Source code
-----------
Sources are available on [github/fabbox](https://github.com/fabbox/SmileyKB) under GNU GPL3.

Contact
--------
Please report bugs and requests on
[github/fabbox](https://github.com/fabbox/SmileyKB) or to
<fbox.dev@gmail.com>.

Permissions
-----------

* input: Send key events and characters to user focused input fields.

Privacy Policy
--------------

This application doesn't collect, use, store, and share or disclose any
information about the user or any other person.

Licenses
--------

### Smiley Keyboard

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see [http://www.gnu.org/licenses/](http://www.gnu.org/licenses/).

### Icons
Icons are based on [gaia-icons](https://github.com/gaia-components/gaia-icons) (which is probably
under Apache2 ?).
